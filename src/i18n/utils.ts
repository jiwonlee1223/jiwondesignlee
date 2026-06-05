import { ui, type UIKey } from './translations';

/** UI 문자열 lookup — 누락 시 키 자체를 반환해 빠진 번역을 식별 */
export function t(key: UIKey): string {
  return ui[key] ?? key;
}
