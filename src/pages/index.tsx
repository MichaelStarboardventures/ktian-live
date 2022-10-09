import React, { useEffect } from 'react';
import { history } from '@umijs/max';

const Index = () => {
  useEffect(() => {
    history.push('/main/dashboard');
  }, []);

  return <div>index page</div>;
};

export default Index;
