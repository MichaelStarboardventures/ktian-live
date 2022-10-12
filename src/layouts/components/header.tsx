import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  Box,
  MenuItem,
  TextField,
} from '@mui/material';
import { useModel, history } from '@umijs/max';
import { Modal, ModalProps } from '@/components';
// import db from '@/utils/db';

type PublishModalProps = {
  setEventName: React.Dispatch<React.SetStateAction<'edit' | 'share' | 'save'>>;
} & ModalProps;

const PublishModal: React.FC<PublishModalProps> = ({
  title,
  trigger,
  setEventName,
}) => {
  // const { app, setCurrentApp } = useModel('app');
  // const { setShareApps, setShareName } = useModel('share');
  const [value, setValue] = useState('');

  return (
    <Modal
      title={title}
      trigger={trigger}
      onOk={async () => {
        setEventName('share');
        console.log(value);

        // setShareApps(() => newApps);
        // setCurrentApp(newApps[0].path);
        // setShareName(value);

        // await db.insert({ id: new Date().getTime().toString(), app });

        // history.push(newApps[0].path);
      }}
    >
      <TextField
        fullWidth
        label={'Name'}
        onChange={(event) => setValue(event.target.value)}
      />
    </Modal>
  );
};

const UserProfile: React.FC = () => {
  const { setEventName, eventName } = useModel('event');
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  // const { app, setCurrentApp } = useModel('app');

  return (
    <>
      <IconButton
        onClick={(event) => setAnchorEl(event.target as HTMLDivElement)}
      >
        <Avatar />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          value={'edit'}
          onClick={() => {
            setEventName('edit');
            setAnchorEl(null);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem value={'share'}>
          <PublishModal
            title={'share'}
            setEventName={setEventName}
            trigger={<span>Share</span>}
          />
        </MenuItem>
        <MenuItem
          value={'setting'}
          onClick={() => {
            setEventName('save');
            setAnchorEl(null);
            history.push('/setting');
          }}
        >
          Setting
        </MenuItem>
        {eventName === 'edit' && (
          <MenuItem
            value={'save'}
            onClick={async () => {
              setEventName('save');
              setAnchorEl(null);
            }}
          >
            Save
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export const Header = () => {
  return (
    <AppBar position={'static'}>
      <Toolbar>
        <div onClick={() => history.push('/')}>logo</div>
        <Box flexGrow={1}></Box>
        <UserProfile />
      </Toolbar>
    </AppBar>
  );
};
