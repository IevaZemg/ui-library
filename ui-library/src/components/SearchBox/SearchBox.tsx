import React from 'react';
import styles from './SearchBox.module.css';
import clsx from 'clsx';

interface SearchBoxProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  align?: 'left' | 'center';
  width?: 'auto' | 'full' | number;
  variant?: 'default' | 'minimal' | 'flat' | 'elevated' | 'bordered' | 'underline' | 'pill' | 'ghost';
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = 'Search...',
  onSearch,
  align = 'left',
  width = 'full',
  variant = 'default',
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(e.currentTarget.value);
    }
  };

  const computedStyle =
    width === 'full'
      ? { width: '100%' }
      : width === 'auto'
      ? {
          width: 'fit-content',
          maxWidth: '100%',
          minWidth: '160px'
        }
      : typeof width === 'number'
      ? { width: `${width}px`, maxWidth: '100%' }
      : undefined;

  const inputClass = clsx(
    styles.searchBox,
    styles[align],
    variant !== 'default' && styles[`searchBox--${variant}`]
  );

  return (
    <input
      type="text"
      className={inputClass}
      style={computedStyle}
      placeholder={placeholder}
      onKeyDown={handleKeyPress}
    />
  );
};
