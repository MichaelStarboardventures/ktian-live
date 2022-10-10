import { TempleBuddhistOutlined } from '@mui/icons-material';
import { Box, Paper, Popper, Stack, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { AppProps } from '@/models/app';
import { useModel, history } from '@umijs/max';

const LayoutsComponent = () => {
  const { setApp } = useModel('app');

  const templatesConfig: Record<string, AppProps[]> = {
    template1: [
      {
        key: 'dashboard',
        path: '/main/dashboard',
        name: 'Dashboard',
        data: '{"ROOT":{"type":"div","isCanvas":true,"props":{"id":"stagger","style":{"height":"100%"}},"displayName":"div","custom":{},"hidden":false,"nodes":["AyR6xuS6ut","xVTssxUXvk"],"linkedNodes":{}},"AyR6xuS6ut":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"children":"text"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"xVTssxUXvk":{"type":{"resolvedName":"CirculationSupply"},"isCanvas":false,"props":{"title":"FIL Protocol Circulation Supply"},"displayName":"CirculationSupply","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}',
      },
      {
        key: '1665366967223',
        name: 'page73',
        path: '/main/page73',
        data: '{"ROOT":{"type":"div","isCanvas":true,"props":{"id":"stagger","style":{"height":"100%"}},"displayName":"div","custom":{},"hidden":false,"nodes":["QVOmzCoQgE","zsib35ZHZy"],"linkedNodes":{}},"QVOmzCoQgE":{"type":{"resolvedName":"FilBreakdown"},"isCanvas":false,"props":{"title":"Dally Locked FIL Breakdown"},"displayName":"FilBreakdown","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"zsib35ZHZy":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"children":"text"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}',
      },
      {
        key: '1665367105312',
        name: 'page93',
        path: '/main/page93',
        data: '{"ROOT":{"type":"div","isCanvas":true,"props":{"id":"stagger","style":{"height":"100%"}},"displayName":"div","custom":{},"hidden":false,"nodes":["pQIQOkaqCV"],"linkedNodes":{}},"pQIQOkaqCV":{"type":{"resolvedName":"FilBreakdown"},"isCanvas":false,"props":{"title":"Dally Locked FIL Breakdown"},"displayName":"FilBreakdown","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}',
      },
      {
        key: '1665367106321',
        name: 'page94',
        path: '/main/page94',
        data: '{"ROOT":{"type":"div","isCanvas":true,"props":{"id":"stagger","style":{"height":"100%"}},"displayName":"div","custom":{},"hidden":false,"nodes":["vr9E5FknME"],"linkedNodes":{}},"vr9E5FknME":{"type":{"resolvedName":"CirculationSupply"},"isCanvas":false,"props":{"title":"FIL Protocol Circulation Supply"},"displayName":"CirculationSupply","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}',
      },
      {
        key: '1665367107246',
        name: 'page95',
        path: '/main/page95',
        data: '{"ROOT":{"type":"div","isCanvas":true,"props":{"id":"stagger","style":{"height":"100%"}},"displayName":"div","custom":{},"hidden":false,"nodes":["sA2nhXGA4Q","Qy-3ln3wUW","xLVKjOKtTj","825irZdf5_"],"linkedNodes":{}},"sA2nhXGA4Q":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"children":"text"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"Qy-3ln3wUW":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"children":"text"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"825irZdf5_":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"children":"text"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"xLVKjOKtTj":{"type":{"resolvedName":"FilBreakdown"},"isCanvas":false,"props":{"title":"Dally Locked FIL Breakdown"},"displayName":"FilBreakdown","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}',
      },
    ],
    template2: [
      {
        key: 'dashboard',
        path: '/main/dashboard',
        name: 'Dashboard',
        data: '{"ROOT":{"type":"div","isCanvas":true,"props":{"id":"stagger","style":{"height":"100%"}},"displayName":"div","custom":{},"hidden":false,"nodes":["AyR6xuS6ut","xVTssxUXvk"],"linkedNodes":{}},"AyR6xuS6ut":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"children":"text"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"xVTssxUXvk":{"type":{"resolvedName":"CirculationSupply"},"isCanvas":false,"props":{"title":"FIL Protocol Circulation Supply"},"displayName":"CirculationSupply","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}',
      },
      {
        key: '1665366967223',
        name: 'Tm1',
        path: '/main/tm1',
        data: '{"ROOT":{"type":"div","isCanvas":true,"props":{"id":"stagger","style":{"height":"100%"}},"displayName":"div","custom":{},"hidden":false,"nodes":["QVOmzCoQgE","zsib35ZHZy"],"linkedNodes":{}},"QVOmzCoQgE":{"type":{"resolvedName":"FilBreakdown"},"isCanvas":false,"props":{"title":"Dally Locked FIL Breakdown"},"displayName":"FilBreakdown","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"zsib35ZHZy":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"children":"text"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}',
      },
      {
        key: '1665367105312',
        name: 'Tm2',
        path: '/main/tm2',
        data: '{"ROOT":{"type":"div","isCanvas":true,"props":{"id":"stagger","style":{"height":"100%"}},"displayName":"div","custom":{},"hidden":false,"nodes":["pQIQOkaqCV"],"linkedNodes":{}},"pQIQOkaqCV":{"type":{"resolvedName":"FilBreakdown"},"isCanvas":false,"props":{"title":"Dally Locked FIL Breakdown"},"displayName":"FilBreakdown","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}',
      },
      {
        key: '1665367106321',
        name: 'Tm3',
        path: '/main/tm3',
        data: '{"ROOT":{"type":"div","isCanvas":true,"props":{"id":"stagger","style":{"height":"100%"}},"displayName":"div","custom":{},"hidden":false,"nodes":["vr9E5FknME"],"linkedNodes":{}},"vr9E5FknME":{"type":{"resolvedName":"CirculationSupply"},"isCanvas":false,"props":{"title":"FIL Protocol Circulation Supply"},"displayName":"CirculationSupply","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}',
      },
      {
        key: '1665367107246',
        name: 'Tm4',
        path: '/main/tm4',
        data: '{"ROOT":{"type":"div","isCanvas":true,"props":{"id":"stagger","style":{"height":"100%"}},"displayName":"div","custom":{},"hidden":false,"nodes":["sA2nhXGA4Q","Qy-3ln3wUW","xLVKjOKtTj","825irZdf5_"],"linkedNodes":{}},"sA2nhXGA4Q":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"children":"text"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"Qy-3ln3wUW":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"children":"text"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"825irZdf5_":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"children":"text"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"xLVKjOKtTj":{"type":{"resolvedName":"FilBreakdown"},"isCanvas":false,"props":{"title":"Dally Locked FIL Breakdown"},"displayName":"FilBreakdown","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}',
      },
    ],
  };

  return (
    <Paper sx={{ minHeight: '300px' }}>
      <Typography variant={'h6'} px={2} pt={2} color={'primary'}>
        Click to select a template
      </Typography>
      <Stack width={'400px'} p={2} direction={'row'} spacing={2}>
        <Button
          variant={'outlined'}
          fullWidth
          onClick={() => {
            const apps = templatesConfig['template1'];
            setApp(templatesConfig['template1']);

            history.push(apps[0].path);
          }}
        >
          Template1
        </Button>
        <Button
          variant={'outlined'}
          fullWidth
          onClick={() => {
            const apps = templatesConfig['template2'];
            setApp(templatesConfig['template2']);

            history.push(apps[0].path);
          }}
        >
          Template2
        </Button>
      </Stack>
    </Paper>
  );
};

export const Templates = () => {
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
        <TempleBuddhistOutlined />
        <div>Templates</div>
      </Box>
      <Popper open={Boolean(anchorEl)} placement={'bottom'} anchorEl={anchorEl}>
        <LayoutsComponent />
      </Popper>
    </>
  );
};
