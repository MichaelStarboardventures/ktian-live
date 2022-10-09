import React, { useState } from 'react';
import { Grid, Paper, Tabs, Tab, Box } from '@mui/material';
import { useModel } from '@@/exports';

export const Settings = () => {
  const { eventName } = useModel('event');
  const enabled = eventName === 'edit';
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Grid
      item
      flexBasis={enabled ? '300px' : 0}
      width={enabled ? '300px' : 0}
      sx={(theme) => ({
        transition: theme.transitions.create(['flexBasis', 'width'], {
          duration: theme.transitions.duration.standard,
        }),
      })}
    >
      <Paper sx={{ height: '100vh' }}>
        <Tabs
          value={currentTab}
          onChange={(event, value) => setCurrentTab(value)}
        >
          <Tab label={'properties'} />
          <Tab label={'advance'} />
        </Tabs>
        <Box>{'settings'}</Box>
      </Paper>
    </Grid>
  );
};
