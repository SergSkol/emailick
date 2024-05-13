import React, { useEffect } from 'react';
import { mountVercelToolbar } from '@vercel/toolbar';
import { FlagValues } from '@vercel/flags/react';

const VercelToolbar = () => {
  useEffect(() => {
    mountVercelToolbar();
  });

  return (
    <div className="container">
      <span className="messageTitle">
        Powered by
        {' '}
        <a href="http://vercel.com">Vercel</a>
      </span>
      <FlagValues values={{ exampleFlag: true }} />
    </div>
  );
};

export default VercelToolbar;
