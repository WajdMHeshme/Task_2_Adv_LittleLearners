import React from 'react';
import { RingLoader  } from 'react-spinners';

function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <RingLoader  color="#FFAE80" size={130} />
    </div>
  );
}

export default Loading;