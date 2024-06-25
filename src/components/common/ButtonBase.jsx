import React from 'react';
import styled, { css } from "styled-components";
import { get500Color, get600Color, get700Color, get300Color } from '../../utils/color';
import { DEFAULT_FONT_SIZES } from "../../utils/font";

// 버튼 스타일 정의
const buttonRoleStyle = css`
  ${({ variant = 'default', disabled }) => css`
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
      cursor: ${disabled ? 'default' : 'pointer'};
    }
  `}
`;

const sizeStyle = css`
  ${({ size = 'md' }) => {
    if (size === 'sm') {
      return css`
        padding: 8px 10px;
        font-size: ${DEFAULT_FONT_SIZES.b2}px;
      `;
    }

    if (size === 'lg') {
        return css`
        padding: 12px 48px;
        font-size: ${DEFAULT_FONT_SIZES.b2}px;
      `;
    }

    if (size === 'xl') {
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
    return <div>
        <ButtonBase variant={props.variant} size={props.size} disabled={props.disabled}>{props.label}</ButtonBase>
    </div>;
}

export default Button;