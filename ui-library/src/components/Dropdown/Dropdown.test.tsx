import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';
import { vi } from 'vitest';

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
];

describe('Dropdown', () => {
  it('renders all options', () => {
    render(<Dropdown options={options} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(2);
  });

  it('triggers onChange', () => {
    const onChange = vi.fn();
    render(<Dropdown options={options} onChange={onChange} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'b' } });
    expect(onChange).toHaveBeenCalled();
  });
});
