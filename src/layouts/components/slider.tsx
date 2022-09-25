import React, { useState } from 'react';
import { List, ListItemButton, Paper } from '@mui/material';
import { useModel, history } from '@umijs/max';
import { TextField, Button } from '@mui/material';
import { INIT_DATA } from '@/constants';

export const Slider = () => {
  const [currentField, setCurrentField] = useState('');
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
            <TextField
              aria-readonly={!editable}
              value={ret.name}
              margin={'dense'}
              size={'small'}
              autoFocus={ret.name === currentField}
              InputProps={{
                readOnly: true,
              }}
              onChange={() => {
                setCurrentField(ret.name);

                // const newApps = app?.map((app) => {
                //   if (app.key === ret.key) {
                //     app.name = value;
                //     app.path = '/' + app.name;
                //   }
                //
                //   return app;
                // });
                //
                // setApp(newApps.map((ret) => ret));
                setApp([
                  {
                    path: new Date().getMilliseconds().toString(),
                    name: '/' + new Date().getMilliseconds().toString(),
                    data: INIT_DATA,
                    key: new Date().getTime().toString(),
                  },
                ]);
              }}
            />
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
                  path: '/page' + current,
                  data: '',
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
