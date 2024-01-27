import type { Metadata } from 'next';
import { fontClasses } from './_fonts';
import 'normalize.css/normalize.css';
import './index.scss';
import { App } from './App';

export const metadata: Metadata = {
  title: 'Test Meaningful Product',
  description: 'implemented by Oleksandr Krysenko',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={fontClasses}
    >
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
