export {};

declare global {
  interface Window {
    webkit?: {
      messageHandlers: {
        appInterface?: {
          postMessage: (command: Record<string, unknown>) => unknown;
        };
      };
    };
    keymeAndroid?: {
      onTestSolved: (result: number) => unknown;
      onCloseClick: VoidFunction;
    };
  }
}
