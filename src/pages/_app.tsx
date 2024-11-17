// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import { EventProvider } from './EventContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <EventProvider>
      <Component {...pageProps} />
    </EventProvider>
  );
};

export default MyApp;
