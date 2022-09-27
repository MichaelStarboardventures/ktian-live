import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useNode } from '@craftjs/core';
import { Box, Paper, TextField, Typography } from '@mui/material';
import { request } from '@umijs/max';
import { UserComponent } from '@craftjs/core';

type CirculationSupplyData = {
  stat_date: string;
  total_initial_pledge: string;
  total_locked_funds: string;
  new_initial_pledge: string;
  new_reward_locked: string;
  new_reward_released: string;
};

type FilBreakdownProps = {
  title?: string;
};

const chartsOptions = async (title?: FilBreakdownProps['title']) => {
  const { data } = await request<{ data: CirculationSupplyData[] }>(
    '/circulating_supply/network_locked_fil_breakdown',
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
        'New Released Rewards',
        'New Initial Pledge',
        'New Locked Rewards',
        'Change in FIL Locked',
      ],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
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
        name: 'New Released Rewards',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: data.map((ret) =>
          (+ret['new_reward_released'] / 1000).toFixed(0),
        ),
      },
      {
        name: 'New Initial Pledge',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: data.map((ret) => (+ret['new_initial_pledge'] / 1000).toFixed(0)),
      },
      {
        name: 'New Locked Rewards',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: data.map((ret) => (+ret['new_reward_locked'] / 1000).toFixed(0)),
      },
      {
        name: 'Change in FIL Locked',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: data.map((ret) => (+ret['total_locked_funds'] / 1000).toFixed(0)),
      },
    ],
  };

  return option;
};

export const FilBreakdown: UserComponent<FilBreakdownProps> = ({ title }) => {
  const {
    connectors: { drag, connect },
  } = useNode();
  const ref = useRef<HTMLDivElement>(null);
  const option = chartsOptions(title);

  useEffect(() => {
    const charts = echarts.init(ref.current as HTMLDivElement);

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
            (props: FilBreakdownProps) => (props.title = event.target.value),
          );
        }}
      />
    </Box>
  );
};

FilBreakdown.craft = {
  related: {
    settings: Settings,
  },
};

FilBreakdown.displayName = 'FilBreakdown';
FilBreakdown.defaultProps = {
  title: 'Dally Locked FIL Breakdown',
};
