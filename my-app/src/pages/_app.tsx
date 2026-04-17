import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import Navbar from "@/components/layouts/navbar";
import Appshell from '@/components/layouts/Appshell';
import { SessionProvider } from "next-auth/react";

import dynamic from "next/dynamic";

const Analytics = dynamic(() => import('@/components/analytics/analytics'), { ssr: false });

export default function App({ Component, pageProps:{ session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Appshell>
        <Component {...pageProps} />
      </Appshell>
    </SessionProvider>
  );
}
