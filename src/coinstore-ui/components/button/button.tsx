import type { ButtonType, Size } from './types';
import type { MouseEventHandler, ReactNode } from 'react';

import classNames from 'classnames';
import { FC } from 'react';
import './style.scss';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  size?: Size;
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, disabled, size = 'middle', type = 'default', onClick } = props;

  return (
    <button
      className={classNames(
        'btn',
        {
          [`btn-${size}`]: size !== 'middle',
          [`btn-${type}`]: type !== 'default',
        },
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
