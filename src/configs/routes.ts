class Paths {
  readonly INDEX_PATH: string = '/';

  readonly OTHER_PATH: string = '*';

  readonly NOT_FOUND: string = '/404';

  readonly LOGIN: string = '/login';

  readonly REGISTER: string = '/register'

  readonly ABOUT: string = '/about'

  readonly CONTACT: string = '/contact'
}

const paths = new Paths();

export const noRefreshTokenPaths = ['/auth/refresh', '/auth/logout'];

export const applyServiceSettingPaths = [paths.INDEX_PATH];

export default paths;
