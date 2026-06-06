import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// ─── 공통 타입 ────────────────────────────────────────────────────────────────

const AccentColor = z.enum(['cobalt', 'vermilion', 'lime', 'mustard', 'lavender']);
const ProjectType = z.enum(['design-practice', 'design-research', 'design-exploration']);

// ─── projects ────────────────────────────────────────────────────────────────
// 모든 프로젝트는 단일 파일 src/content/projects.yaml 에서 관리한다.
// (각 항목의 `id` 가 슬러그가 된다. 분류 변경은 그 파일의 `type:` 만 고치면 됨.)
// 프로젝트 상세 페이지는 이미지 위주 — cover + gallery로 표현하고 본문은 없다.
// 논문이 있는 프로젝트는 `abstract` 필드만 텍스트로 노출한다.

const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: ({ image }) =>
    z.object({
      title:    z.string(),
      year:     z.number().int().min(2000).max(2100),
      type:     ProjectType,
      tags:     z.array(z.string()),
      cover:    image().optional(),           // 히어로용 메인 이미지
      accent:   AccentColor,                  // 카드 배경 컬러 키
      summary:  z.string().max(200),          // 카드/상세 페이지 메타용 한 줄 설명

      // ── 상세 페이지 콘텐츠 ──
      abstract: z.string().optional(),        // 논문 abstract (없으면 미노출)
      gallery: z
        .array(
          z.object({
            src:     image(),
            alt:     z.string(),
            caption: z.string().optional(),
            width:   z.enum(['full', 'half']).default('full'),
          }),
        )
        .optional(),

      // ── 메타 사이드바 ──
      role:          z.string().optional(),
      collaborators: z.string().optional(),   // 쉼표 구분 문자열
      venue:         z.string().optional(),   // 발표 학회 (연구 프로젝트용)
      award:         z.string().optional(),   // 수상 내역 (예: "James Dyson Award 2024 · Korea Winner")
      links: z
        .object({
          paper:  z.string().url().optional(),
          github: z.string().url().optional(),
          demo:   z.string().url().optional(),
        })
        .optional(),
    }),
});

// 발표 정보는 각 프로젝트의 `venue` 필드로 노출하므로 별도 publications
// 컬렉션은 두지 않는다. 필요해지면 다시 추가.

// ─── export ───────────────────────────────────────────────────────────────────

export const collections = { projects };

// ─── 타입 export (페이지/컴포넌트에서 import해서 씀) ──────────────────────────

export type AccentColorKey = z.infer<typeof AccentColor>;
export type ProjectTypeKey = z.infer<typeof ProjectType>;
