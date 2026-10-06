'use client';

import React, { Suspense } from 'react';

const StaticGradientFallback: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 animate-gradient" />
  );
};

const ShaderGradientBackground = React.lazy(() => import('./ShaderGradientBackground'));

const BackgroundWrapper: React.FC = () => {
  return (
    <Suspense fallback={<StaticGradientFallback />}>
      <ShaderGradientBackground />
    </Suspense>
  );
};

export default BackgroundWrapper;
