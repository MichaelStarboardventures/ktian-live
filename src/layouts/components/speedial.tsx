import {
  SpeedDial as MuiSpeedDial,
  SpeedDialAction as MuiSpeedDialAction,
} from '@mui/material';
import {
  SettingOutlined,
  EditOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { ReactNode } from 'react';
import { useModel } from '@umijs/max';
import { EventProps } from '@/models/event';

type SpeedDialActionProps = {
  icon: ReactNode;
  title: EventProps['eventName'];
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
          icon={action.icon}
          onClick={() => setEventName(action.title)}
        />
      ))}
    </MuiSpeedDial>
  );
};
