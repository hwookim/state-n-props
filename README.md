# 42기 state&props 과제

## 개요

- 해당 과제는 개인별로 작업하는 과제입니다.

## 작업 방식

- 해당 레포를 `clone` 받습니다.
- 해당 프로젝트를 vsCode로 열고 `npm install`을 합니다.
- `feature/42-본인이름` 의 branch를 생성 후 작업을 합니다.
  - 예) `feature/42-wecode` <- 영어로 이름을 적어주세요!

## 과제별 안내

### Color

- [실행 예시](https://hwookim.github.io/state-n-props/color)

- `GREEN`, `PURPLE` 버튼을 눌렀을 때 `.colorBox`의 배경색이 바뀔 수 있도록 코드를 작성해주세요.
- `.colorName`에 나타나는 `색상`을 현재 표시되고 있는 색상의 이름으로 바꿔주세요.

### Toggle

- [실행 예시](https://hwookim.github.io/state-n-props/toggle)

- `.toggleButton`을 누를 때마다 모양이 `▼`과 `▶`로 바뀔 수 있도록 해주세요.
- `.toggleButton`의 모양이 `▼`일 때만 `.toggleContents`의 내용이 보일 수 있도록 변경해주세요.

### Counter

- [실행 예시](https://hwookim.github.io/state-n-props/counter)

- `+`를 눌렀을 때 `.counterText`의 숫자가 1씩 증가되도록 해주세요.
- `-`를 눌렀을 때 `.counterText`의 숫자가 1씩 감소되도록 해주세요. 단, 그 숫자가 0보다 작아질 수는 없습니다.

### Main

- [실행 예시](https://hwookim.github.io/state-n-props)

- 앞서 만든 `Counter`와 `Toggle` 컴포넌트를 바탕으로 `Main/components` 안에 새로운 두 컴포넌트를 작성해주세요.
  - `Counter`는 `props`로 현재 `count` 값과 해당 값이 변경될 때마다 발생할 `onChange` 함수를 받습니다.
  - `Toggle`은 `props`로 `.toggleContents`안의 내용이 될 `contents`를 받습니다.
- `Counter`에 표시되는 값이 5 이상일 때 `Toggle`의 `contents` 값이 `😢`에서 `😊`로 바뀌도록 해주세요.
