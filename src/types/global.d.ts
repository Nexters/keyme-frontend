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
      onTestSolved: (parameter?: string) => void;
      onCloseClick: (parameter?: string) => void;
    };
  }
}
