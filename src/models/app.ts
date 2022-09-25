import { useState } from 'react';

export type AppProps = {
  key?: string;
  path: string;
  name: string;
  data: string;
};

const useApp = () => {
  const [app, setApp] = useState<AppProps[]>([]);
  const [currentApp, setCurrentApp] = useState<string>('');

  return {
    app,
    setApp,
    currentApp,
    setCurrentApp,
  };
};

export default useApp;
