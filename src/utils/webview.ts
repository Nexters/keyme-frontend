import { TestResult } from '@/apis/types';

type CloseWebview = { command: 'CLOSE_WEBVIEW'; data: string };
type SendTestResult = { command: 'SEND_TEST_RESULT'; data: TestResult };
type WebViewCommand = CloseWebview | SendTestResult;

export function sendCommand(webViewCommand: WebViewCommand) {
  return window?.webkit?.messageHandlers?.appInterface?.postMessage(
    webViewCommand,
  );
}

function isBrowser() {
  return typeof window !== 'undefined';
}

function isIos() {
  return isBrowser() && !!window.webkit?.messageHandlers;
}

function isAos() {
  return isBrowser() && !!window.keymeAndroid;
}

export function sendTestResult(data: TestResult) {
  if (isAos()) {
    return window.keymeAndroid?.onTestSolved(JSON.stringify(data));
  }

  if (isIos()) {
    return sendCommand({ command: 'SEND_TEST_RESULT', data });
  }
}

export function closeWebView() {
  if (isAos()) {
    return window.keymeAndroid?.onCloseClick();
  }

  if (isIos()) {
    return sendCommand({ command: 'CLOSE_WEBVIEW', data: 'done' });
  }
}

export function isWebView() {
  return (
    isBrowser() && window.navigator.userAgent.toLowerCase().includes('keyme')
  );
}
