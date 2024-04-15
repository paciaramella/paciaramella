/*
* https://github.com/bchiang7/v4/blob/main/src/utils/sr.js
*/

import ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined';
const sr = isSSR ? null : ScrollReveal();

export default sr;