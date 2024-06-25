import React from 'react';
import styles from './ButtonBase.module.css';
import { get500Color, get600Color, get700Color, get300Color } from '../../../utils/color';
import { DEFAULT_FONT_SIZES } from "../../../utils/font";

const getButtonStyle = (variant, size, disabled) => {
  const style = {
    '--color-background-500': get500Color(variant),
    '--color-font-500': get500Color(),
    '--color-background-600': get600Color(variant),
    '--color-background-700': get700Color(variant),
    '--color-background-300': get300Color(variant),
    '--button-active-bg-color': get700Color(variant),
    '--button-disabled-bg-color': get300Color(variant),
    '--button-cursor': disabled ? 'default' : 'pointer',
  };

  if (size === 'sm') {
    style['--normal'] =  DEFAULT_FONT_SIZES.b2;
  } else if (size === 'md') {
    style['--normal'] =  DEFAULT_FONT_SIZES.b2;
  } else if (size === 'lg') {
    style['--normal'] =  DEFAULT_FONT_SIZES.b2;
  } else if (size === 'xl') {
    style['--large'] =  DEFAULT_FONT_SIZES.b1;
    console.log(style);
  }

  if (disabled) {
    style['--button-bg-color'] = get300Color(variant);
    style['--button-pointer-events'] = 'none';
  }

  return style;
};

const getButtonClassNames = (variant, size) => {
  return [styles.buttonBase, styles[variant || 'default'], styles[size || 'md']].join(' ');
};

function Button(props) {
  const { variant = 'default', size = 'md', disabled, label } = props;
  const buttonStyle = getButtonStyle(variant, size, disabled);

  return (
    <div>
      <button
        className={getButtonClassNames(variant, size)}
        style={buttonStyle}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
