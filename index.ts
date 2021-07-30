/*! next.js MIT https://raw.githubusercontent.com/vercel/next.js/dd7a54c5099c781273b01f97788e980fd203e188/license.md */

// ref: https://github.com/vercel/next.js/blob/dd7a54c5099c781273b01f97788e980fd203e188/packages/next/client/request-idle-callback.ts
type RequestIdleCallbackHandle = any;
type RequestIdleCallbackOptions = {
  timeout: number;
};
type RequestIdleCallbackDeadline = {
  readonly didTimeout: boolean;
  timeRemaining: () => number;
};

declare global {
  interface Window {
    requestIdleCallback: (
      callback: (deadline: RequestIdleCallbackDeadline) => void,
      opts?: RequestIdleCallbackOptions
    ) => RequestIdleCallbackHandle;
    cancelIdleCallback: (id: RequestIdleCallbackHandle) => void;
  }
}

export const requestIdleCallback =
  (typeof self !== 'undefined' &&
    self.requestIdleCallback &&
    self.requestIdleCallback.bind(window)) ||
  function (
    cb: (deadline: RequestIdleCallbackDeadline) => void
  ): NodeJS.Timeout {
    const start = Date.now();
    return setTimeout(() => {
      cb({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - start));
        },
      });
    }, 1);
  };

export const cancelIdleCallback =
  (typeof self !== 'undefined' &&
    self.cancelIdleCallback &&
    self.cancelIdleCallback.bind(window)) ||
  function (id: RequestIdleCallbackHandle): void {
    return clearTimeout(id);
  };
