# 🔎재사용 가능한 & 일관성 있는 컴포넌트 만들기

버튼 컴포넌트를 재사용 가능하게 + 일관성 있게 만들어보자.

## 1. 목표/요구사항

1. **버튼의 shape은 항상 동일해야 한다.**

버튼의 전체적인 모양은 변하지 않아야 한다. 즉, 어떤 크기를 갖든, 어떤 색을 갖던지 간에 border-radius, padding 값에 대한 속성들은 고정되어 있어야 한다.

1. **variant props을 통해 preset된 색상을 선택할 수 있어야 한다.**

일관성 있는 디자인을 구현하기 위해 제한적으로 props를 통해 정의된 스타일을 적용할 수 있도록 만든다.

미리 정의된 색을 variant라는 props을 이용하여 선택할 수 있도록 만든다.

1. **size props를 통해 preset된 크기를 선택할 수 있어야 한다.**

색상과 마찬가지로 size 역시 일관성 있는 디자인을 구현하기 위해, 미리 정의된 스타일을 size라는 props을 이용하여 선택할 수 있도록 한다.

1. **버튼 hover, active, disabled에 대한 각각의 스타일이 존재하며, 사용자가 버튼을 클릭했을 때 클릭하는 느낌이 들어야 한다. disabled 되었을 때는 disabled 되었다는 느낌이 들어야 한다.**

따라서 variant에 맞도록 적절한 색상을 :hover, :active, :diabled 등 다양한 경우에 맞게 배치해야 한다.

재사용성을 높이기 위해서는 해당 컴포넌트가 도메인에 얽히지 않아야 하며, props, attributes의 이름들이 일반적이어야 한다.

## 2. 코드로 이해

React.js + styled-components를 이용해서 만들어보았다.

![IMG1](./assets/img1.jpg)

\*전체 ButtonBase 코드

```jsx
import React from "react";
import styled, { css } from "styled-components";
import { get500Color, get600Color, get700Color, get300Color } from "../../utils/color";
import { DEFAULT_FONT_SIZES } from "../../utils/font";

// 버튼 스타일 정의
const buttonRoleStyle = css`
  ${({ variant = "default", disabled }) => css`
    background-color: ${get500Color(variant)};
    color: ${get500Color()};

    &:hover {
      background-color: ${get600Color(variant)};
    }

    &:active {
      background-color: ${get700Color(variant)};
    }

    &:disabled {
      background-color: ${get300Color(variant)};
      pointer-events: none;
      cursor: ${disabled ? "default" : "pointer"};
    }
  `}
`;

const sizeStyle = css`
  ${({ size = "md" }) => {
    if (size === "sm") {
      return css`
        padding: 8px 10px;
        font-size: ${DEFAULT_FONT_SIZES.b2}px;
      `;
    }

    if (size === "lg") {
      return css`
        padding: 12px 48px;
        font-size: ${DEFAULT_FONT_SIZES.b2}px;
      `;
    }

    if (size === "xl") {
      return css`
        padding: 12px 60px;
        font-size: ${DEFAULT_FONT_SIZES.b1}px;
      `;
    }

    // 기본적으로 'md'일 때의 스타일 (default)
    return css`
      padding: 10px 12px;
      font-size: ${DEFAULT_FONT_SIZES.b2}px;
    `;
  }}
`;

const ButtonBase = styled.button`
  display: inline-flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  position: relative;
  min-width: 64px;
  border: none;
  border-radius: 6px;
  padding: 10px 12px;
  cursor: pointer;

  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* button의 Content를 선택할 수 없도록 한다.*/
  user-select: none;

  transition: background-color 0.1s ease;

  /* 배경색 스타일 적용 */
  ${buttonRoleStyle}
  /* 사이즈 스타일 적용 */
    ${sizeStyle}
`;

function Button(props) {
  return (
    <div>
      <ButtonBase variant={props.variant} size={props.size} disabled={props.disabled}>
        {props.label}
      </ButtonBase>
    </div>
  );
}

export default Button;
```

⇒다음과 같이 사용

```jsx
import Button from "./components/common/ButtonBase";

function App() {
  return (
    <div>
      <Button label="기본버튼" variant="primary" size="lg"></Button>
      <Button label="에러버튼" variant="error"></Button>
      <Button label="비활성화버튼" variant="warning" disabled="disabled"></Button>
    </div>
  );
}

export default App;
```

## 참고

[[React] 재사용 가능한 컴포넌트 만들어 사용하기](https://choyeon-dev.tistory.com/16)

[재사용 가능한 버튼 컴포넌트 만들기 - React](https://velog.io/@mrbartrns/재사용-가능한-버튼-컴포넌트-만들기-React)
