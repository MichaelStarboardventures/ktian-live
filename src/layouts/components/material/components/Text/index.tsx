import { useNode } from '@craftjs/core';
import React, { ReactNode } from 'react';

export const Text: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref as unknown as HTMLDivElement))}>
      {children}
    </div>
  );
};
