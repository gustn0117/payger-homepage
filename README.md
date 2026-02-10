# 페이져 (Payger) 홈페이지

유통·물류 전문 결제 솔루션 페이져의 공식 홈페이지입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **Language**: JavaScript (React)

## 시작하기

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버 실행 후 [http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## 프로젝트 구조

```
payger-homepage/
├── app/
│   ├── globals.css      # 전역 스타일 (Tailwind + 커스텀)
│   ├── layout.js        # 루트 레이아웃 (메타데이터, 폰트)
│   └── page.js          # 메인 페이지
├── components/
│   ├── hooks.js         # 커스텀 훅 (스크롤, InView)
│   ├── Navbar.js        # 네비게이션 바
│   ├── Hero.js          # 히어로 섹션
│   ├── Services.js      # 핵심 서비스
│   ├── Clients.js       # 주요 고객사
│   ├── Advantages.js    # 경쟁 우위
│   ├── Platform.js      # 서비스 플랫폼
│   ├── BusinessModel.js # 비즈니스 모델
│   ├── Roadmap.js       # 성장 로드맵
│   ├── Contact.js       # CTA / 문의
│   └── Footer.js        # 푸터
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── jsconfig.json
```

## 페이지 섹션

| 섹션 | 설명 |
|------|------|
| Hero | 메인 비주얼, 핵심 수치 (안정성, 결제속도, 기술지원) |
| 핵심 서비스 | 모바일 결제, 통합 카드 결제, AI 스마트 솔루션 |
| 주요 고객사 | 농수산물 도소매, 배달용품 쇼핑몰, 유통·물류업 |
| 경쟁 우위 | 업계 특화, 보안성, 편의성, 확장성 |
| 서비스 플랫폼 | 소비자/가맹점/관리자/API 4가지 축 |
| 비즈니스 모델 | 결제 수수료 + 부가 서비스 |
| 성장 로드맵 | 4단계 인터랙티브 타임라인 |
| CTA + Footer | 상담 신청, 소개서 다운로드 |
