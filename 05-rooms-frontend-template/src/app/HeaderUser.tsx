import UserPortrait from '@/components/UserPortrait';
import Text from '@/components/Text';
import {User} from '@/types';

type Props = {
  user: User;
};

export default function HeaderUser({user}: Props) {
  return (
    <div className="flex items-center gap-3">
      <UserPortrait user={user} />
      <div className="w-40">
        <Text variant="h4">
          {user.firstName} {user.lastName}
        </Text>
      </div>
    </div>
  );
}
