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
    android?: {
      onTestSolved: (result: string) => unknown;
      closeWebView: VoidFunction;
    };
  }
}
