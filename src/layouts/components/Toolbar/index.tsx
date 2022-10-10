import { Grid, Stack } from '@mui/material';
import { useModel } from '@umijs/max';
import { Layouts } from '@/layouts/components/Toolbar/layouts';
import { Charts } from '@/layouts/components/Toolbar/charts';
import { Templates } from '@/layouts/components/Toolbar/templates';

export const Toolbar = () => {
  const { eventName } = useModel('event');
  const enabled = eventName === 'edit';

  return (
    <Grid
      item
      bgcolor={'#ba68c8'}
      color={'#fff'}
      sx={(theme) => ({
        flexBasis: enabled ? '60px' : 0,
        height: enabled ? '60px' : 0,
        transition: theme.transitions.create(['flexBasis', 'height'], {
          duration: theme.transitions.duration.standard,
        }),
      })}
    >
      <Stack
        direction={'row'}
        maxWidth={'300px'}
        height={'100%'}
        margin={'0 auto'}
        spacing={3}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Layouts />
        <Charts />
        <Templates />
      </Stack>
    </Grid>
  );
};
