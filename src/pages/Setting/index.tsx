import { List, Typography } from '@mui/material';
// import db from '@/utils/db';
import { useState, useEffect } from 'react';
import { AppProps } from '@/models/app';

type AppResultProps = {
  id: string;
  app: AppProps[];
};

const Setting = () => {
  const [apps] = useState<AppResultProps[]>([]);

  const fetchData = async () => {
    // const result = await db.find<AppResultProps[]>({});
    //
    // setApps(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(apps, 'xxffdfd');

  return (
    <>
      <Typography variant={'h3'}>Settings</Typography>

      <List>
        {/*{apps?.map((app: AppProps) => (*/}
        {/*  <ListItemButton key={app.id} onClick={() => history.push(app.path)}>*/}
        {/*    <ListItemText primary={app.name} />*/}
        {/*  </ListItemButton>*/}
        {/*))}*/}
      </List>
    </>
  );
};

export default Setting;
