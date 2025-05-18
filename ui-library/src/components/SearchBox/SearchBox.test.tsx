import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBox } from './SearchBox';
import { vi } from 'vitest';

describe('SearchBox', () => {
  it('renders with placeholder', () => {
    render(<SearchBox onSearch={() => {}} />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('calls onSearch on Enter key press', () => {
    const onSearch = vi.fn();
    render(<SearchBox onSearch={onSearch} />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(onSearch).toHaveBeenCalledWith('test');
  });
});
