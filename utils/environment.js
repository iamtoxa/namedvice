export const isClient = typeof window === 'object';

export const isServer = typeof window === 'undefined';

export const isIE = isClient && /MSIE|Trident/.test(window.navigator.userAgent);
