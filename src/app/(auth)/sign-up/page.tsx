'use client';

import dynamic from 'next/dynamic';

// Dynamically import the SignInPage component with SSR disabled
const SignUpPage = dynamic(() => import('@/components/main/SignUp'), {
  ssr: false, // Disable SSR for this component
});

export default SignUpPage;
