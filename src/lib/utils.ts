import type { AccentColorKey, ProjectTypeKey } from '@/content/config';

// Hardcoded classes so Tailwind doesn't purge them at build time
export const accentBg: Record<AccentColorKey, string> = {
  cobalt:    'bg-[#1B4FE8]',
  vermilion: 'bg-[#E8361B]',
  lime:      'bg-[#5EC41A]',
  mustard:   'bg-[#D9980D]',
  lavender:  'bg-[#7C3AED]',
};

// Whether the accent color needs dark text (light bg) or white text (dark bg)
export const accentFg: Record<AccentColorKey, string> = {
  cobalt:    'text-white',
  vermilion: 'text-white',
  lime:      'text-[#111]',
  mustard:   'text-[#111]',
  lavender:  'text-white',
};

export const accentBorder: Record<AccentColorKey, string> = {
  cobalt:    'border-[#1B4FE8]',
  vermilion: 'border-[#E8361B]',
  lime:      'border-[#5EC41A]',
  mustard:   'border-[#D9980D]',
  lavender:  'border-[#7C3AED]',
};

// 표시 라벨은 Fallman (2008)의 원어를 따른다.
// 스키마 키(design-research)는 그대로 두고 라벨만 "Studies"로 표시.
export const typeLabel: Record<ProjectTypeKey, string> = {
  'design-practice':    'Design Practice',
  'design-research':    'Design Studies',
  'design-exploration': 'Design Exploration',
};

const ORDER: AccentColorKey[] = ['cobalt', 'vermilion', 'lime', 'mustard', 'lavender'];

/** slug를 시드로 결정적 색상 선택 — 매 빌드마다 동일 */
export function accentFromSlug(slug: string): AccentColorKey {
  const hash = [...slug].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return ORDER[hash % ORDER.length];
}
