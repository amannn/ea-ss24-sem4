import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {ReactNode} from 'react';
import Header from '@/app/Header';
import HeaderUser from '@/app/HeaderUser';
import Wrapper from '@/components/Wrapper';
import {User} from '@/types';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: {
    template: '%s | Arrrrbnb',
    default: 'Arrrrbnb'
  },
  description: 'Arrr ye interested in a place to stay?'
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({children}: Props) {
  // TODO: Fetch current user from backend
  const me: User | undefined = undefined;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header user={me && <HeaderUser user={me} />} />
        <Wrapper>
          <main className="py-20">{children}</main>
        </Wrapper>
      </body>
    </html>
  );
}
