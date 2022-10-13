import { DbProps } from '@/utils/services/db.props';
import db from '@/utils/services/init';

class Apps implements DbProps {
  name: string = 'apps';

  insert = <T>(data: T) => {
    const { name } = this;
    const id = new Date().getTime().toString();

    return new Promise<T>((resolve, reject) => {
      db.insert(
        { data: { ...data }, name, id },
        (err: any, result: T | PromiseLike<T>) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });
  };

  find = <T>(query: Record<string, any>): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      db.find(query, (err: any, result: T) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  removeAll = <T>() => {
    return new Promise<T>((resolve, reject) => {
      db.remove({}, (err: any, result: T) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

export const apps = Apps;
