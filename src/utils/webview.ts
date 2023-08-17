type CloseWebview = { command: 'CLOSE_WEBVIEW'; data: string };
type SendTestResult = { command: 'SEND_TEST_RESULT'; data: number };
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

export function sendTestResult(data: number) {
  if (isAos()) {
    return window.keymeAndroid?.onTestSolved(data);
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
