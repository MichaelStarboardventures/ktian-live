import React from 'react';
import { Grid, Paper, Tabs, Tab } from '@mui/material';
import { useModel } from '@@/exports';

export const Settings = () => {
  const { eventName } = useModel('event');
  const enabled = eventName === 'edit';

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
        <Tabs value={0}>
          <Tab label={'properties'} />
          <Tab label={'advance'} />
        </Tabs>
      </Paper>
    </Grid>
  );
};
