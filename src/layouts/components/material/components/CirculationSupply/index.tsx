import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useNode } from '@craftjs/core';
import { Paper, Box, TextField, Typography } from '@mui/material';
import { request } from '@umijs/max';
import { UserComponent } from '@craftjs/core';
import { ECharts } from 'echarts';

type CirculationSupplyData = {
  stat_date: string;
  circulating_fil: string;
  mined_fil: string;
  vested_fil: string;
  reserve_disbursed_fil: string;
  locked_fil: string;
  burnt_fil: string;
};

type CirculationSupplyProps = {
  title?: string;
};

const chartsOptions = async (title?: CirculationSupplyProps['title']) => {
  const { data } = await request<{ data: CirculationSupplyData[] }>(
    '/circulating_supply/circulating_supply',
    {
      method: 'get',
    },
  );

  const option = {
    title: {
      text: title,
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

export const CirculationSupply: UserComponent<CirculationSupplyProps> = ({
  title,
}) => {
  const {
    connectors: { drag, connect },
  } = useNode();
  const ref = useRef<HTMLDivElement>(null);
  let charts: ECharts;

  useEffect(() => {
    charts = echarts.init(ref.current as HTMLDivElement);
    const option = chartsOptions(title);

    option.then((data) => {
      charts.setOption(data);
    });
  }, []);

  return (
    <Paper ref={(dom) => connect(drag(dom as HTMLDivElement))} sx={{ mb: 3 }}>
      <Typography variant={'h4'} p={2}>
        {title}
      </Typography>
      <Box ref={ref} sx={{ width: '100%', minHeight: '350px', p: 2 }} />
    </Paper>
  );
};

const Settings = () => {
  const {
    props,
    actions: { setProp },
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Box p={2}>
      <TextField
        fullWidth
        value={props.title}
        label={'title'}
        onChange={(event) => {
          setProp(
            (props: CirculationSupplyProps) =>
              (props.title = event.target.value),
          );
        }}
      />
    </Box>
  );
};

CirculationSupply.craft = {
  related: {
    settings: Settings,
  },
};

CirculationSupply.displayName = 'CirculationSupply';
CirculationSupply.defaultProps = {
  title: 'FIL Protocol Circulation Supply',
};
