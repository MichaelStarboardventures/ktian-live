import React, { useState, ReactNode, useEffect } from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
} from '@mui/material';
import { useModel, history } from '@umijs/max';
import { TextField, Button } from '@mui/material';
import { Modal } from '@/components';
import { AppProps } from '@/models/app';
import { EditOutlined } from '@mui/icons-material';
import { INIT_DATA } from '@/constants';

type PageFieldModalProps = {
  name: ReactNode;
  app: AppProps;
};

const PageFieldModal: React.FC<PageFieldModalProps> = ({ name, app }) => {
  const [currentApp, setCurrentApp] = useState<AppProps>(app);
  const { setApp } = useModel('app');

  useEffect(() => {
    setCurrentApp(app);
  }, [app]);

  return (
    <Modal
      trigger={
        <Button variant={'text'} fullWidth>
          {name}
        </Button>
      }
      onOk={() => {
        setApp((apps) => {
          const result = apps?.map((app) => {
            if (app.key === currentApp.key) {
              app.path = `${currentApp.path}`;
              app.name = currentApp.name;
            }

            return app;
          });

          return result;
        });
      }}
    >
      <Stack direction={'column'} spacing={2}>
        <TextField
          fullWidth
          value={currentApp.name}
          label={'Name'}
          onChange={(event) => {
            const {
              target: { value },
            } = event;

            setCurrentApp((data) => ({
              ...data,
              name: value,
            }));
          }}
        />
        <TextField
          fullWidth
          value={currentApp.path}
          label={'Path'}
          onChange={(event) => {
            const {
              target: { value },
            } = event;

            setCurrentApp((data) => {
              const path = `${value}`;

              return {
                ...data,
                path,
              };
            });
          }}
        />
      </Stack>
    </Modal>
  );
};

export const Slider = () => {
  const { app, setApp, setCurrentApp } = useModel('app');
  const { eventName } = useModel('event');

  const editable = eventName === 'edit';

  return (
    <Paper sx={{ height: '100%', p: 2 }}>
      <List>
        {app?.map((ret) => (
          <ListItemButton
            key={ret.key}
            selected={history.location.pathname === ret.path}
            onClick={() => {
              setCurrentApp(ret.path);
              history.push({
                pathname: ret.path,
              });
            }}
          >
            <ListItemText primary={ret.name} />
            {editable && (
              <ListItemIcon>
                <PageFieldModal name={<EditOutlined />} app={ret} />
              </ListItemIcon>
            )}
          </ListItemButton>
        ))}
        {eventName === 'edit' ? (
          <Button
            variant={'outlined'}
            color={'primary'}
            fullWidth
            sx={{ textTransform: 'none', mt: 2 }}
            onClick={() => {
              const current =
                new Date().getDate() +
                new Date().getMinutes() +
                new Date().getSeconds();

              setApp((apps) => [
                ...apps,
                {
                  key: new Date().getTime().toString(),
                  name: 'page' + current,
                  path: '/main/page' + current,
                  data: INIT_DATA,
                },
              ]);
            }}
          >
            Add page
          </Button>
        ) : null}
      </List>
    </Paper>
  );
};
