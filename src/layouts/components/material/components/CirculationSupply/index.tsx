import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useNode } from '@craftjs/core';
import { Paper, Box } from '@mui/material';
import { request } from '@umijs/max';

type CirculationSupplyData = {
  stat_date: string;
  circulating_fil: string;
  mined_fil: string;
  vested_fil: string;
  reserve_disbursed_fil: string;
  locked_fil: string;
  burnt_fil: string;
};

const chartsOptions = async () => {
  const { data } = await request<{ data: CirculationSupplyData[] }>(
    '/circulating_supply/circulating_supply',
    {
      method: 'get',
    },
  );

  const option = {
    title: {
      text: 'FIL Protocol Circulation Supply',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: [
        'Protocol Circulation Supply',
        'Total FIL Mined',
        'Total FIL Vested',
        'FIL Reserve Disbursed',
        'Total FIL Burned',
        'Total FIL Locked',
      ],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: data
          .sort((a, b) => {
            return (
              Number(a['stat_date'].split('-')[0]) -
              Number(b['stat_date'].split('-')[0])
            );
          })
          .map((ret) => ret['stat_date']),
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Protocol Circulation Supply',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: data.map((ret) => (+ret['circulating_fil'] / 1000).toFixed(0)),
      },
      {
        name: 'Total FIL Mined',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: data.map((ret) => (+ret['mined_fil'] / 1000).toFixed(0)),
      },
      {
        name: 'Total FIL Vested',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: data.map((ret) => (+ret['vested_fil'] / 1000).toFixed(0)),
      },
      {
        name: 'FIL Reserve Disbursed',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: data.map((ret) =>
          (+ret['reserve_disbursed_fil'] / 1000).toFixed(0),
        ),
      },
      {
        name: 'Total FIL Burned',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top',
        },
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: data.map((ret) => (+ret['burnt_fil'] / 1000).toFixed(0)),
      },
      {
        name: 'Total FIL Locked',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top',
        },
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: data.map((ret) => (+ret['locked_fil'] / 1000).toFixed(0)),
      },
    ],
  };

  return option;
};

export const CirculationSupply: React.FC = () => {
  const {
    connectors: { drag, connect },
  } = useNode();
  const ref = useRef<HTMLDivElement>(null);
  const option = chartsOptions();

  useEffect(() => {
    const charts = echarts.init(ref.current as HTMLDivElement);

    option.then((data) => {
      charts.setOption(data);
    });
  }, []);

  return (
    <Paper ref={(dom) => connect(drag(dom as HTMLDivElement))} sx={{ mb: 3 }}>
      <Box ref={ref} sx={{ width: '100%', minHeight: '350px', p: 2 }} />
    </Paper>
  );
};

CirculationSupply.displayName = 'CirculationSupply';
