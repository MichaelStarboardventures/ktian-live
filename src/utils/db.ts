// @ts-ignore
import { Service } from '@/utils/services/db.props';
import * as services from '@/utils/services';

export interface NedbCollectProps {
  insert: <T>(name: Service, data: T) => Promise<T>;
  find: <T>(name: Service, query: Record<string, any>) => Promise<T>;
  removeAll: <T>(name: Service) => Promise<T>;
}

class NedbCollect implements NedbCollectProps {
  insert: NedbCollectProps['insert'] = (name, data) => {
    const collect = new services[name]();

    return collect.insert(data);
  };

  find: NedbCollectProps['find'] = (name, data) => {
    const collect = new services[name]();

    return collect.find(data);
  };

  removeAll: NedbCollectProps['removeAll'] = (name) => {
    const collect = new services[name]();

    return collect.removeAll();
  };
}

export default new NedbCollect();
