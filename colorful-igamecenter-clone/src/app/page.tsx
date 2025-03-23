'use client';

import dynamic from 'next/dynamic';
import Loading from './loading';

// Dynamically import the main content to avoid hydration issues
const DynamicHome = dynamic(() => import('./Home'), {
  loading: () => <Loading />,
  ssr: false, // Disable SSR for this component
});

export default function Page() {
  return <DynamicHome />;
}
