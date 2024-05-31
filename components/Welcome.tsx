import React from 'react';

const WelcomeImage: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <img src="/42lp.png" alt="Welcome" className="max-w-full max-h-full" />
    </div>
  );
};

export default WelcomeImage;
