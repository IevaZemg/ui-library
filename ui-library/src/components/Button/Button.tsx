import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, disabled, ...rest }, ref) => {
    const classNames = clsx(
      styles.button,
      styles[`button--${variant}`],
      styles[`button--${size}`],
      {
        [styles['button--disabled']]: disabled,
      },
      className
    );

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled}
        {...rest}
      />
    );
  }
);

Button.displayName = 'Button';
