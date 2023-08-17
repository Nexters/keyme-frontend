function isBrowser() {
  return typeof window !== 'undefined';
}

function isIos() {
  return isBrowser() && !!window.webkit?.messageHandlers;
}

function isAos() {
  return isBrowser() && !!window.android;
}

export function sendTestResult(result: string) {
  if (isIos()) {
    return;
  }

  if (isAos()) {
    window.android?.onTestSolved?.(result);
    return;
  }
}
