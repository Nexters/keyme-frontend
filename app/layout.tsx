import '@/styles/globalStyles.css';
import '@/styles/theme.css';

import classNames from 'classnames';
import type { Metadata } from 'next';

import { Providers } from '@/contexts';
import { container } from '@/styles/layout.css';

import { pretendard } from './font';

export const metadata: Metadata = {
  title: 'KEYME',
  description: 'T나 F보다 중요한 건 U',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <body className={classNames(pretendard.className)}>
        <Providers>
          <main className={classNames(container)}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
