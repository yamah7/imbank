# imbank-react

React + TypeScript + Vite로 만든 컴포넌트/패턴 플레이그라운드입니다. CSS Modules 기반 디자인 시스템, 재사용 가능한 폼/UI 컴포넌트, Embla Carousel 예제 모음을 담고 있습니다.

**Live:** https://yamah7.github.io/imbank/

## 기술 스택

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [React Router](https://reactrouter.com/) — 클라이언트 라우팅
- [Zustand](https://zustand.docs.pmnd.rs/) — 상태 관리
- [Embla Carousel](https://www.embla-carousel.com/) — 캐러셀 (공식 플러그인 다수 포함)
- CSS Modules — 별도 UI 프레임워크 없이 컴포넌트 단위 스타일링

## 페이지 구성

| 경로 | 설명 |
| --- | --- |
| `/` | 기본 Vite 템플릿 + zustand 카운터 + Embla 캐러셀 데모 |
| `/about` | 라우팅 동작 확인용 페이지 |
| `/carousel-examples` | [Embla 공식 문서](https://www.embla-carousel.com/docs/examples/predefined/)의 Basic / Plugin / Tween / Miscellaneous 카테고리를 그대로 재현한 25개 예제 |
| `/form-elements` | Input, Textarea, Select, Checkbox, RadioGroup, Switch, Button 등 폼 컴포넌트 데모 |
| `/ui-components` | Heading, Badge, List, Table, Card, Dropdown, Tooltip, Modal, Toast, 대출 계좌 카드 등 UI 컴포넌트 데모 |

## 시작하기

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build     # dist/ 에 프로덕션 빌드 생성
npm run preview   # 빌드 결과물 로컬에서 확인
npm run lint
```

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드해서 GitHub Pages에 배포합니다. 저장소 설정에서 **Settings → Pages → Source: GitHub Actions** 로 지정되어 있어야 합니다.

프로덕션 빌드는 `/imbank/` 서브 경로를 base로 사용하며(`vite.config.ts`, `src/router/index.tsx`), 클라이언트 사이드 라우팅이 GitHub Pages에서도 동작하도록 빌드 시 `dist/index.html`을 `dist/404.html`로 복사합니다.

## 프로젝트 구조

```
src/
  components/
    banking/            대출/계좌 정보 카드 등 도메인 컴포넌트
    carousel-examples/   /carousel-examples 페이지용 개별 예제 컴포넌트
    form/                Input, Select, Button 등 폼 컴포넌트
    ui/                  Heading, Card, Modal, Toast 등 범용 UI 컴포넌트
  data/                  캐러셀 슬라이드 등 공유 데이터
  pages/                 라우트별 페이지
  router/                React Router 설정
  store/                 Zustand 스토어
```
