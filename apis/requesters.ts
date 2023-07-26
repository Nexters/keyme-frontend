import { request, resultify } from './axios';
import { URLS } from './urls';

export function getHello() {
  return resultify(request.get(URLS.HELLO));
}
