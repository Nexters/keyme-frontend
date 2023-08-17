type CloseWebview = { command: 'CLOSE_WEBVIEW' };
type SendTestResult = { command: 'SEND_TEST_RESULT'; data: string };
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

export function sendTestResult(data: string) {
  if (isIos()) {
    return sendCommand({ command: 'SEND_TEST_RESULT', data });
  }

  if (isAos()) {
    return window.keymeAndroid?.onTestSolved(data);
  }
}

export function closeWebView() {
  if (isIos()) {
    return sendCommand({ command: 'CLOSE_WEBVIEW' });
  }

  if (isAos()) {
    return window.keymeAndroid?.closeWebView();
  }
}
