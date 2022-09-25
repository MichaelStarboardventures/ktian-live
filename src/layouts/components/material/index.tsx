import React from 'react';
import { Grid, Stack, Button } from '@mui/material';
import { useModel } from '@umijs/max';
import { useEditor } from '@craftjs/core';
import { Text } from '@/layouts/components/material/components';

export const Material = () => {
  const {
    connectors: { create },
  } = useEditor();
  const { eventName } = useModel('event');
  const enabled = eventName === 'edit';

  return (
    <Grid
      item
      flexBasis={enabled ? '200px' : 0}
      width={enabled ? '200px' : 0}
      sx={(theme) => ({
        transition: theme.transitions.create(['flexBasis', 'width'], {
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
            create(ref as unknown as HTMLDivElement, <Text>Table</Text>)
          }
        >
          Table
        </Button>
        <Button
          variant={'outlined'}
          fullWidth
          ref={(ref) =>
            create(ref as unknown as HTMLDivElement, <Text>Line</Text>)
          }
        >
          Line
        </Button>
      </Stack>
    </Grid>
  );
};
