# 재활의정석 전문운동센터 공식 웹사이트

Next.js 14 App Router, TypeScript, Tailwind CSS 기반의 공식 웹사이트 프로젝트입니다.

## 실행 방법

```bash
npm install
npm run dev
```

로컬 개발 서버 기본 주소:

```txt
http://localhost:3000
```

## 빌드

```bash
npm run build
```

## 현재 단계

- 1단계: 프로젝트 구조 + 라우팅 스캐폴딩 생성 완료
- 2단계: 디자인 토큰 + 공용 컴포넌트 생성 완료
- 3단계 예정: 메인 랜딩 섹션을 순서대로 구현

## 브랜드 컬러 규칙

- `brand.DEFAULT` `#1C9A99`는 로고, 1차 CTA, 인라인 링크, STEP 넘버, 영문 킥커, 핵심 자격 카드 하이라이트에만 사용합니다.
- `brand.DEFAULT`를 섹션 전체 배경으로 깔지 않습니다.
- `brand.light` `#E8F4F4`는 인용구, 통계 카드, hover 배경에만 제한적으로 사용합니다.
- 포인트 컬러 사용 비율은 전체 화면의 5% 미만을 목표로 합니다.

## 폰트 규칙

- 기본 본문/UI/버튼/폼: Pretendard `font-sans`
- 헤드라인/강조/철학 문장: Noto Serif KR `font-serif`
- 영문 킥커/넘버링: Inter `font-en`
- `font-serif`로 한글 본문 장문을 조판하지 않습니다.

## TODO

- `public/images/brand/` 새 고화질 로고 시스템 적용
  - Header: `logo-symbol-header.png` + HTML 텍스트
  - Footer: `logo-horizontal-dark-card.png`
  - Favicon: `favicon.ico`, `icon.png`, `apple-icon.png`
  - OG: `logo-vertical-dark-card.png`
- 프로덕션 전 `PretendardVariable.woff2`를 `public/fonts/`에 배치하고, `@fontsource/pretendard` 대신 `next/font/local`로 전환
- Vercel 배포 도메인 확정 후 `https://TODO-domain.com` 교체
- 센터 정확한 주소 확정 후 `content/site.ts`의 `address.text` 교체
- 네이버 웹마스터도구 / 구글 서치콘솔 인증 메타값 입력
- 개인정보처리방침 / 이용약관 페이지 생성 후 Footer 링크 교체
- OG 이미지는 새 브랜드 로고 카드를 포함해 자동 생성

## 사진/GIF 업로드 가이드

현재 사이트는 사진과 GIF가 들어갈 자리를 플레이스홀더로 먼저 선언해 두었습니다.
플레이스홀더 안의 `FUTURE:` 경로를 기준으로 파일을 준비하고, 이후 해당 위치를 실제
`<Image />` 또는 GIF 렌더링으로 교체하면 됩니다.

### 메인 랜딩

- `public/images/center/main-space-1.png`
  - 메인 HomeHero에서 사용 중입니다.
- `public/images/director/portrait-primary.jpg`
  - `/about` Hero와 대표 프로필 영역에서 사용 중입니다.

### About 페이지

- `public/images/director/assessing.png`
- `public/images/director/correcting.png`
- `public/images/director/exercise-leading.png`
- `public/images/director/consulting.png`
- Case Story는 현재 이미지 없이 텍스트 섹션으로 운영합니다.

### 각 프로그램 상세 페이지

- `public/images/programs/{slug}/assessment.png`
- `public/images/programs/{slug}/exercise-01.png`

`assessment.png`는 프로그램 상세 Hero와 첫 평가 섹션에서 함께 사용합니다.

`slug` 값:

- `lower-back`
- `neck-shoulder`
- `knee`
- `post-surgery`
- `parkinsons`
- `athlete`

### 파일 규격 권장

- 히어로 이미지: `1200×900`, JPEG, `200–400KB`
- 섹션 내부 사진: `800×600`, JPEG, `100–250KB`
- 프로그램 사진: PNG 또는 JPEG, 모바일 로딩을 위해 가능하면 2MB 이하

### 적용 순서

1. 해당 경로에 원본 사진 또는 GIF 준비
2. 플레이스홀더에 표시된 `FUTURE:` 경로와 파일명 확인
3. 해당 위치를 실제 `<Image />` 또는 GIF 마크업으로 교체
4. `git add` → `git commit` → `git push`
5. Vercel 자동 배포 확인

### 주의

- 세로 이미지(portrait)를 가로 섹션에 그대로 쓰면 레이아웃이 무너질 수 있습니다.
- GIF가 2MB를 넘기면 모바일 로딩이 크게 느려집니다.
- 파일명 규칙은 반드시 유지합니다.

## 주요 경로

```txt
/                                    메인 랜딩
/about                               대표 프로필 상세
/approach                            3단계 관리 모델 상세
/programs/chronic-pain               만성통증 허브
/programs/chronic-pain/lower-back    허리 전용 랜딩
/programs/chronic-pain/shoulder      어깨 전용 랜딩
/programs/chronic-pain/elbow         팔꿈치 전용 랜딩
/programs/chronic-pain/ankle         발목 전용 랜딩
/programs/neuro                      뇌질환 재활 허브
/programs/neuro/parkinson            파킨슨 전용 랜딩
/programs/neuro/stroke               뇌졸중 후 재활
/contact                             상담·예약 안내
```
