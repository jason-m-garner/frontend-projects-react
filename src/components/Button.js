import React from 'react';
import styled from 'styled-components';
import { darken, rgba } from 'polished';

const ButtonBase = props => {
  const { children, className } = props;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const getColor = (variant, colors) => {
  switch (variant) {
    case 'primary':
      return colors.primary;
    case 'secondary':
      return colors.secondary;
    default:
      return '#fff';
  }
};

const Button = styled(ButtonBase)`
  appearance: none;
  background-color: ${({ color, theme }) => getColor(color, theme.colors)};
  border-radius: 2px;
  border: none;
  box-shadow: 0 0 20px ${rgba('#333', 0.25)};
  color: ${({ color, theme }) =>
    color === 'primary' ? '#fff' : theme.colors.secondary};
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  padding: 16px 48px;
  text-align: center;
  transition: ${({ theme }) =>  `background-color ${theme.transitions.duration} ${theme.transitions.timing}` };
  &:hover {
    background-color: ${({ color, theme }) => darken(0.05, getColor(color, theme.colors))}
  }
`;

export default Button;
