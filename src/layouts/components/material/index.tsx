import React from 'react';
import { Grid, Stack, Button } from '@mui/material';
import { useModel } from '@umijs/max';
import { useEditor } from '@craftjs/core';
import {
  CirculationSupply,
  FilBreakdown,
} from '@/layouts/components/material/components';

export const Material = () => {
  const {
    connectors: { create },
  } = useEditor();
  const { eventName } = useModel('event');
  const enabled = eventName === 'edit';

  return (
    <Grid
      item
      flexBasis={enabled ? '60px' : 0}
      height={enabled ? '60px' : 0}
      sx={(theme) => ({
        transition: theme.transitions.create(['flexBasis', 'height'], {
          duration: theme.transitions.duration.standard,
        }),
      })}
    >
      <Stack
        spacing={2}
        p={2}
        direction={'row'}
        justifyContent={'space-around'}
      >
        <Button
          variant={'outlined'}
          fullWidth
          ref={(ref) =>
            create(ref as unknown as HTMLDivElement, <CirculationSupply />)
          }
        >
          Supply
        </Button>
        <Button
          variant={'outlined'}
          fullWidth
          ref={(ref) =>
            create(ref as unknown as HTMLDivElement, <FilBreakdown />)
          }
        >
          Fil
        </Button>
      </Stack>
    </Grid>
  );
};
