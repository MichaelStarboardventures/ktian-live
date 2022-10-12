export interface DbProps {
  insert: <T>(data: T) => Promise<T>;
  find: <T>(query: Record<string, any>) => Promise<T>;
  removeAll: <T>() => Promise<T>;
}

export type Service = 'apps';
