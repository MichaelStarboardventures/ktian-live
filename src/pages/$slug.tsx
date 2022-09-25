import React, { useEffect } from 'react';
import { Frame, useEditor } from '@craftjs/core';
import { Stagger } from '@/layouts/components/material/components';
import { INIT_DATA } from '@/constants';
import { useModel } from '@umijs/max';

const Index = () => {
  const {
    actions: { deserialize },
  } = useEditor();
  const { currentApp, app } = useModel('app');

  useEffect(() => {
    const data = app?.find((ret) => ret.path === currentApp)?.data;
    deserialize(data || INIT_DATA);
  }, [currentApp]);

  return (
    <Frame>
      <Stagger />
    </Frame>
  );
};

export default Index;
