import React from 'react';
import {
  SpeedDial as MuiSpeedDial,
  SpeedDialAction as MuiSpeedDialAction,
  TextField,
} from '@mui/material';
import {
  SettingOutlined,
  EditOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { ReactNode } from 'react';
import { useModel } from '@umijs/max';
import { EventProps } from '@/models/event';
import { Modal, ModalProps } from '@/components';

type PublishModalProps = {
  setEventName: React.Dispatch<
    React.SetStateAction<'edit' | 'publish' | 'save'>
  >;
} & ModalProps;

type SpeedDialActionProps = {
  icon: ReactNode;
  title: EventProps['eventName'];
};

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

const speedDialActions: SpeedDialActionProps[] = [
  {
    icon: <EditOutlined />,
    title: 'edit',
  },
  {
    icon: <ShareAltOutlined />,
    title: 'publish',
  },
];

export const SpeedDial = () => {
  const { setEventName } = useModel('event');

  return (
    <MuiSpeedDial
      ariaLabel={'SpeedDial actions'}
      icon={<SettingOutlined />}
      sx={{ position: 'fixed', right: '30px', bottom: '30px' }}
    >
      {speedDialActions.map((action) => (
        <MuiSpeedDialAction
          key={action.title}
          title={action.title}
          icon={
            action.title === 'publish' ? (
              <PublishModal
                title={action.title}
                setEventName={setEventName}
                trigger={action.icon as JSX.Element}
              />
            ) : (
              React.cloneElement(action.icon as JSX.Element, {
                onClick: () => setEventName(action.title),
              })
            )
          }
        />
      ))}
    </MuiSpeedDial>
  );
};
