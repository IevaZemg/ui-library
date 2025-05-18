import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeSelector } from './ThemeSelector';

const themes = [
  { label: 'Light', value: 'light', color: '#fff' },
  { label: 'Dark', value: 'dark', color: '#000' },
];

describe('ThemeSelector', () => {
  it('renders all theme buttons', () => {
    const setTheme = vi.fn();
    render(<ThemeSelector currentTheme="light" setTheme={setTheme} themes={themes} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(screen.getByLabelText('Switch to Light theme')).toBeInTheDocument();
    expect(screen.getByLabelText('Switch to Dark theme')).toBeInTheDocument();
  });

  it('calls setTheme with correct value on click', () => {
    const setTheme = vi.fn();
    render(<ThemeSelector currentTheme="light" setTheme={setTheme} themes={themes} />);

    const darkButton = screen.getByLabelText('Switch to Dark theme');
    fireEvent.click(darkButton);
    expect(setTheme).toHaveBeenCalledWith('dark');
  });

  it('applies selected theme styles', () => {
    const setTheme = vi.fn();
    render(<ThemeSelector currentTheme="dark" setTheme={setTheme} themes={themes} />);

    const darkButton = screen.getByLabelText('Switch to Dark theme');
    expect(darkButton).toHaveStyle('border: 2px solid #000');
    expect(darkButton).toHaveStyle('box-shadow: 0 0 0 3px rgba(0,0,0,0.2)');
  });
});
