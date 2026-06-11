import Theme from '../styles/theme';
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
      <Analytics />
    </>
  );
}
 