import { Gimme } from './gimme.js';

/* Just a scribe */
export class Otis {
  static log(content, source = "") {
    const src = source == "" ? "" : ` [${source}]`;
    console.log(`${Gimme.currentTime}${src}: ${content}`);
  }
  static error(content, source = "") {
    const src = source == "" ? "" : ` [${source}]`;
    console.error(`${Gimme.currentTime}${src}: ${content}`);
  }
}

export default Otis;
