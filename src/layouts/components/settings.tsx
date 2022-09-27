import React, { ReactNode, useState } from 'react';
import { Grid, Paper, Tabs, Tab, Box } from '@mui/material';
import { useModel } from '@@/exports';
import { useEditor } from '@craftjs/core';

export const Settings = () => {
  const { eventName } = useModel('event');
  const enabled = eventName === 'edit';
  const [currentTab, setCurrentTab] = useState(0);
  const {
    selected,
    query: { node },
  } = useEditor((state) => ({
    selected: state.events.selected,
  }));

  const selectNode = selected.size
    ? node(Array.from(selected.values())[0])
    : null;

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
        {selectNode ? (
          <Box>
            {(selectNode?.get()?.related?.settings as () => ReactNode)()}
          </Box>
        ) : (
          <div>Not Selected</div>
        )}
      </Paper>
    </Grid>
  );
};
