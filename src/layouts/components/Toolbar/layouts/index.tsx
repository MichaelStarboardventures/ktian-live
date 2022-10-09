import { CalendarViewMonthOutlined } from '@mui/icons-material';
import { Box, Paper, Popper, Stack, Button } from '@mui/material';
import { useState } from 'react';
import { Text } from '@/layouts/components/material/components';
import { useEditor } from '@craftjs/core';

const LayoutsComponent = () => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <Paper sx={{ minHeight: '300px' }}>
      <Stack width={'400px'} p={2} direction={'row'} spacing={2}>
        <Button
          variant={'outlined'}
          fullWidth
          ref={(dom) =>
            create(dom as unknown as HTMLDivElement, <Text>text</Text>)
          }
        >
          Text
        </Button>
      </Stack>
    </Paper>
  );
};

export const Layouts = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  return (
    <>
      <Box
        display={'flex'}
        textAlign={'center'}
        flexDirection={'column'}
        alignItems={'center'}
        onClick={(event) => setAnchorEl(anchorEl ? null : event.currentTarget)}
      >
        <CalendarViewMonthOutlined />
        <div>Layouts</div>
      </Box>
      <Popper open={Boolean(anchorEl)} placement={'bottom'} anchorEl={anchorEl}>
        <LayoutsComponent />
      </Popper>
    </>
  );
};
