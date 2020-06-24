import { CONFIG_DEV } from './config.dev';
import { CONFIG_PROD } from './config.prod';

export const configFactory = {
  provide: 'CONFIG',
  useFactory: () => {
    return process.env.NODE_ENV === 'dev' ? CONFIG_DEV : CONFIG_PROD;
  },
};
