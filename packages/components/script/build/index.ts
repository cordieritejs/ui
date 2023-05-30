import delPath from '../utils/delpath';
import { dest, parallel, series, src } from 'gulp';
import { componentPath, pkgPath } from '../utils/paths';
import autoPrefixer from 'gulp-autoprefixer';
import run from '../utils/run';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sass = require('gulp-sass')(require('sass'));

export const removeDist = () => {
  return delPath(`${pkgPath}/ui`);
};

export const buildStyle = () => {
  // @ts-ignore
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(dest(`${pkgPath}/ui/lib/src`))
    .pipe(dest(`${pkgPath}/ui/es/src`));
};

export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
