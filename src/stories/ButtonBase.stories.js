// src/ButtonBase.stories.js

import React from "react";
import Button from "../components/common/ButtonBase";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary"], // variant 옵션에 맞게 수정
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl"],
      },
    },
    disabled: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "md",
  disabled: false,
  label: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "md",
  disabled: false,
  label: "Primary Button",
};

export const Large = Template.bind({});
Large.args = {
  variant: "error",
  size: "lg",
  disabled: false,
  label: "Large ERROR Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "default",
  size: "md",
  disabled: true,
  label: "Disabled Button",
};
