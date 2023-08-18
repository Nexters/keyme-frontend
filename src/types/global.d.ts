export {};

declare global {
  interface Window {
    webkit?: {
      messageHandlers: {
        appInterface?: {
          postMessage: (parameter?: unknown) => void;
        };
      };
    };
    keymeAndroid?: {
      onTestSolved: (parms?: unknown) => void;
      onCloseClick: (params?: unknown) => void;
    };
  }
}
