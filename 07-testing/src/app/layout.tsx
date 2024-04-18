import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {ReactNode} from 'react';
import Header from '@/app/Header';
import HeaderUser from '@/app/HeaderUser';
import UserService from '@/services/UserService';
import Wrapper from '@/components/Wrapper';
import NotificationProvider from '@/components/NotificationProvider';
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
  const response = await UserService.getCurrentUser();
  if (!response.data) throw new Error(response.statusText);
  const me = response.data;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header user={me && <HeaderUser user={me} />} />
        <Wrapper>
          <NotificationProvider>
            <main className="py-20">{children}</main>
          </NotificationProvider>
        </Wrapper>
      </body>
    </html>
  );
}
