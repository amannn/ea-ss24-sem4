import db from '@/db';
import {Id, Me, User} from '@/types';
import omit from 'lodash/omit';

export default class UserRepository {
  public static getMe(): Me {
    return UserRepository.getDbUser(db.me.id) as Me;
  }

  public static getUser(id: Id): User | undefined {
    const user = UserRepository.getDbUser(id);
    return omit(user, 'starredRooms');
  }

  private static getDbUser(id: Id): User | undefined {
    return db.users.find((cur) => cur.id === id);
  }
}
