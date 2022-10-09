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

const Main = () => {
  return (
    <Container>
      <FrameContainer />
    </Container>
  );
};

export default Main;
