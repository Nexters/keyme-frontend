export {};

declare global {
  interface Window {
    webkit?: {
      messageHandlers: any;
    };
    android?: {
      onTestSolved?: (result: string) => void;
    };
  }
}
