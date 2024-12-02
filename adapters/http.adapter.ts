import humps, { Camelized } from 'humps';

export function httpReponseAdapter<T>(data: T): Camelized<T> {
  return humps.camelizeKeys<T>(data);
}
