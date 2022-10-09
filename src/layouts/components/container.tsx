import { Editor } from '@craftjs/core';
import React, { ReactNode } from 'react';
import { Stack, Box, Grid } from '@mui/material';
import { Slider } from '@/layouts/components/slider';
import { Header } from '@/layouts/components/header';
import { Toolbar } from '@/layouts/components/Toolbar';
import * as resolves from '@/layouts/components/material/components';
import { useModel, history } from '@umijs/max';

type ContainerProps = {
  children?: ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const { setApp } = useModel('app');

  return (
    <Editor
      resolver={{ ...resolves }}
      onNodesChange={(query) => {
        const {
          location: { pathname },
        } = history;
        const data = query.serialize();

        setApp((apps) => {
          return apps?.map((app) => {
            if (app.path === pathname) {
              app.data = data;
            }

            return app;
          });
        });
      }}
    >
      <Grid container direction={'row'} overflow={'hidden'}>
        <Grid item flexGrow={10}>
          <Stack direction={'column'} sx={{ height: '100%' }}>
            <Toolbar />
            <Box flexBasis={'64px'}>
              <Header />
            </Box>
            <Stack direction={'row'} sx={{ flexGrow: 10 }}>
              <Box sx={{ flexBasis: '200px' }}>
                <Slider />
              </Box>
              <Box
                p={3}
                sx={{
                  flexGrow: 9,
                }}
              >
                {children}
              </Box>
            </Stack>
          </Stack>
        </Grid>
        {/*<Settings />*/}
      </Grid>
    </Editor>
  );
};
