import React from 'react';
import clsx from 'clsx';
import styles from './Dropdown.module.css';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  align?: 'left' | 'center';
  width?: 'auto' | 'full' | number;
  variant?: 'default' | 'minimal' | 'flat' | 'elevated' | 'bordered' | 'underline' | 'pill' | 'ghost';
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  align = 'left',
  width = 'full',
  variant = 'default',
  className = '',
  ...rest
}) => {
  const computedStyle =
    width === 'full'
      ? { width: '100%' }
      : width === 'auto'
      ? { width: 'auto' }
      : typeof width === 'number'
      ? { width: `${width}px` }
      : undefined;

  const dropdownClass = clsx(
    styles.dropdown,
    styles[align],
    variant !== 'default' && styles[`dropdown--${variant}`],
    className
  );

  return (
    <select className={dropdownClass} style={computedStyle} {...rest}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
