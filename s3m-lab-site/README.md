# S³M Lab 웹사이트 (Stigma Science & Social Medicine Lab)

Astro로 만든 정적 사이트입니다. 가입이 필요한 서비스는 없고, GitHub Pages에 무료로 올릴 수 있어요.

> 이 프로젝트는 빌드와 미리보기를 거치지 않은 첫 초안입니다. 처음 실행할 때 오류가 나면 그 메시지를 그대로 알려주세요.

## 1. 내 컴퓨터에서 실행하기

Node.js(LTS 버전)가 설치되어 있어야 합니다. 이 폴더에서 터미널을 열고:

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:4321 을 열면 사이트가 보입니다. 파일을 저장하면 화면이 자동으로 바뀝니다.

## 2. 내용 바꾸기 (코딩 없이 이 파일들만 수정)

| 바꿀 내용 | 파일 |
|---|---|
| 이메일, 구글 스칼라 링크, 랩 이름·한 줄 소개 | `src/data/site.ts` |
| 세 가지 질문, 네 층위, 연구 주제, 방법론 | `src/data/research.ts` |
| 소속 연구자(본인), 학생, 협력자 | `src/data/people.ts` |
| 논문 목록 | `src/data/publications.ts` |
| 뉴스 | `src/data/news.ts` |
| 페이지 본문 문구 | `src/pages/*.astro` |
| 색상, 글자 크기 | `src/styles/global.css` (맨 위 `:root`) |

**반드시 바꿔야 할 곳 (TODO)**
- `src/data/site.ts`의 `email`
- `astro.config.mjs`의 `site` 주소 (GitHub 조직 이름을 정한 뒤)

## 3. GitHub Pages에 올리기

1. GitHub에서 Organization을 만듭니다(랩 이름 기반, 예: `s3m-lab`).
2. 그 조직 아래에 `조직이름.github.io` 이름으로 **public** 저장소를 만듭니다.
3. `astro.config.mjs`의 `site`를 `https://조직이름.github.io`로 고칩니다.
4. 이 폴더를 그 저장소의 `main` 브랜치에 올립니다.
5. 저장소 Settings → Pages → Source를 **GitHub Actions**로 선택합니다.
6. 올리면 `.github/workflows/deploy.yml`이 자동으로 빌드하고 배포합니다(Actions 탭에서 진행 상황 확인).

커스텀 도메인을 쓰려면 Settings → Pages에서 도메인을 입력하고, `astro.config.mjs`의 `site`를 그 도메인으로 바꾸세요.

배포 설정 파일이 오류를 내면 Astro 공식 안내(docs.astro.build/en/guides/deploy/github/)의 최신 `deploy.yml`과 비교해 보세요.

## 4. 12월 1일 런칭 전 체크리스트

- [ ] 이메일과 `site` 주소 입력
- [ ] 랩 이름 중복 확인(구글, GitHub 조직명, 도메인)
- [ ] 학교 웹/브랜드 규정 확인 (대학 이름·로고 사용 범위)
- [ ] 본인 소개, 사진(`public/` 폴더에 넣고 `people.astro`에 연결), 논문 목록 채우기
- [ ] 연구 소개 문구 검토 (현재는 초안)
- [ ] 휴대폰과 데스크톱에서 모든 페이지 확인
- [ ] 개인 홈페이지에 랩 링크 추가
