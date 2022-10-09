import { List, ListItemText, ListItemButton, Typography } from '@mui/material';
import { useModel, history } from '@umijs/max';

const Setting = () => {
  const { shareApps, shareName } = useModel('share');

  return (
    <>
      <Typography variant={'h3'}>Settings</Typography>
      <List>
        <ListItemButton onClick={() => history.push(shareApps[0].path)}>
          <ListItemText primary={shareName} />
        </ListItemButton>
      </List>
    </>
  );
};

export default Setting;
