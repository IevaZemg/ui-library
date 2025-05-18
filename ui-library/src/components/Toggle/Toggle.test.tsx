import { render, screen, fireEvent } from '@testing-library/react';
import { Toggle } from './Toggle';
import { vi } from 'vitest';

describe('Toggle', () => {
  it('renders correctly', () => {
    render(<Toggle checked={false} onChange={() => {}} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('toggles value on click', () => {
    const onChange = vi.fn();
    render(<Toggle checked={false} onChange={onChange} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
