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

- `public/images/brand/`에 로고 파일 배치
  - `logo-horizontal-light.png`
  - `logo-vertical-light.png`
  - `logo-horizontal-dark.png`
  - `logo-vertical-dark.png`
  - `source-logo.ai`
- `public/images/brand/`의 로고 PNG 파일들을 투명 배경 버전으로 교체 필요. 현재 흰색 배경 때문에 ivory 배경 위에서 플레이트가 드러남. 원본 AI 파일에서 투명 배경으로 재내보내기.
- 프로덕션 전 `PretendardVariable.woff2`를 `public/fonts/`에 배치하고, `@fontsource/pretendard` 대신 `next/font/local`로 전환
- Vercel 배포 도메인 확정 후 `https://TODO-domain.com` 교체
- 센터 정확한 주소 확정 후 `content/site.ts`의 `address.text` 교체
- 네이버 웹마스터도구 / 구글 서치콘솔 인증 메타값 입력
- 개인정보처리방침 / 이용약관 페이지 생성 후 Footer 링크 교체
- OG 이미지 생성: `logo-vertical-dark.png` 기반 1200x630

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
