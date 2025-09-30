'use client';

import dynamic from 'next/dynamic';

// Dynamically import the SignInPage component with SSR disabled
const SignInPage = dynamic(() => import('@/components/main/SignInPage'), {
  ssr: false, // Disable SSR for this component
});

export default SignInPage;
