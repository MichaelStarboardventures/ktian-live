import { useState } from 'react';
import { INIT_DATA } from '@/constants';

export type AppProps = {
  id?: string;
  key?: string;
  path: string;
  name: string;
  data: string;
};

const useApp = () => {
  const [app, setApp] = useState<AppProps[]>([
    {
      key: 'dashboard',
      path: '/main/dashboard',
      name: 'Dashboard',
      data: INIT_DATA,
    },
  ]);
  const [currentApp, setCurrentApp] = useState<string>('');

  return {
    app,
    setApp,
    currentApp,
    setCurrentApp,
  };
};

export default useApp;
