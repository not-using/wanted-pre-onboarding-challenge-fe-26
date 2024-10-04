# 라이브러리 사용을 최소화한 무한 스크롤 목록
[2024 10월 원티드 프리온보딩](https://www.wanted.co.kr/events/pre_challenge_fe_26) FE 사전과제

## Preview
![preview](/docs/preview.gif)

## 실행 방법

- 실행하기 위해서는 git과 Node.js가 설치된 환경이 필요합니다. (Node.js LTS, 18.17.0 버전 기준)
- 해당 레포지토리를 클론 후 디렉토리로 이동합니다.
- `pnpm i & pnpm dev` 명령어로 실행하실 수 있습니다.
- pnpm를 사용하지 않는 환경이라면
  `yarn & yarn dev` 혹은 `npm i & npm run dev` 로도 실행하실 수 있습니다.

```
  git clone https://github.com/not-using/wanted-pre-onboarding-challenge-fe-26.git && cd wanted-pre-onboarding-challenge-fe-26;
  pnpm i & pnpm dev;
```

## [과제 요구사항](https://gist.github.com/goldfrosch/034b966075059447efa1c00476849d68)

- 하나의 SinglePage에 Intersection Observer를 이용해 무한스크롤을 구현하세요.
- 현재 가져온 상품 리스트들의 액수들의 합계를 화면에 보여주세요 (ex. 현재 20개의 상품을 가져온 상태라면 20개 물품의 가격 총 합을 보여주면 됨)

### 무한 스크롤의 조건

- 페이지를 현재 보여주는 페이지의 최하단으로 이동 시 다음 페이지 정보를 가져오게 합니다.
- 더이상 가져올 수 없는 상황이라면 더 이상 데이터를 가져오는 함수를 호출하지 않습니다.
- 로딩 시 로딩 UI가 보여아 합니다. (UI의 형식은 자유)

### 과제 유의 사항

1. React + 함수형 컴포넌트를 사용해서 개발해주세요
2. 제공해드린 Mock 데이터는 수정 및 추가가 가능합니다.
3. 무한스크롤 관련된 라이브러리 사용 절대 금지
4. 비동기 상태 관리 라이브러리 사용 절대 금지 (ex. tanstack-query)
5. 3, 4번 조건 외의 라이브러리는 자유롭게 사용하셔도 됩니다


## 기술 스택 및 사용한 라이브러리

- Vite React (+ Typescript)
- styled-components