import React, { useEffect } from 'react';
import { Frame, useEditor } from '@craftjs/core';
import { Stagger } from '@/layouts/components/material/components';
import { INIT_DATA } from '@/constants';
import { useModel } from '@umijs/max';
import { Container } from '@/layouts/components/container';

const FrameContainer = () => {
  const {
    actions: { deserialize },
  } = useEditor();
  const { currentApp } = useModel('app');
  const { shareApps } = useModel('share');

  useEffect(() => {
    const data = shareApps?.find((ret) => ret.path === currentApp)?.data;
    deserialize(data || INIT_DATA);
  }, [currentApp]);

  return (
    <Frame>
      <Stagger />
    </Frame>
  );
};

const Custom = () => {
  return (
    <Container>
      <FrameContainer />
    </Container>
  );
};

export default Custom;
