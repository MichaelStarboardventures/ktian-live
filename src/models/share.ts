import { useState } from 'react';
import { AppProps } from '@/models/app';

export default () => {
  const [shareApps, setShareApps] = useState<AppProps[]>([]);
  const [shareName, setShareName] = useState('');

  return {
    shareApps,
    shareName,
    setShareApps,
    setShareName,
  };
};
