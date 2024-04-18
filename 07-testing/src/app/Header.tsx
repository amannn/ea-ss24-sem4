import Link from 'next/link';
import {ReactNode} from 'react';
import Text from '@/components/Text';
import Wrapper from '@/components/Wrapper';

type Props = {
  user?: ReactNode;
};

export default function Header({user}: Props) {
  return (
    <div className="border-b bg-slate-100 py-4">
      <Wrapper className="flex items-center justify-between">
        <Link href="/">
          <Text as="h1" variant="h2">
            Arrrbnb
          </Text>
        </Link>
        <div /* Navigation will come here later */ />
        {user}
      </Wrapper>
    </div>
  );
}
