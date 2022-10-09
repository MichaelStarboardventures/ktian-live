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
import { useModel } from '@umijs/max';
import { Modal, ModalProps } from '@/components';

type PublishModalProps = {
  setEventName: React.Dispatch<
    React.SetStateAction<'edit' | 'publish' | 'save'>
  >;
} & ModalProps;

const PublishModal: React.FC<PublishModalProps> = ({
  title,
  trigger,
  setEventName,
}) => {
  return (
    <Modal
      title={title}
      trigger={trigger}
      onOk={() => {
        setEventName('publish');
      }}
    >
      <TextField fullWidth label={'Name'} />
    </Modal>
  );
};

const UserProfile: React.FC = () => {
  const { setEventName } = useModel('event');
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

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
          edit
        </MenuItem>
        <MenuItem value={'share'}>
          <PublishModal
            title={'share'}
            setEventName={setEventName}
            trigger={<span>share</span>}
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export const Header = () => {
  return (
    <AppBar position={'static'}>
      <Toolbar>
        <div>logo</div>
        <Box flexGrow={1}></Box>
        <UserProfile />
      </Toolbar>
    </AppBar>
  );
};
