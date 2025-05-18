import { render, screen, fireEvent } from '@testing-library/react';
import { RadioGroup } from './RadioGroup';
import { vi } from 'vitest';

describe('RadioGroup', () => {
  it('renders radio options', () => {
    render(<RadioGroup
      name="test"
      options={[{ label: 'One', value: '1' }, { label: 'Two', value: '2' }]}
      onChange={() => {}}
    />);
    expect(screen.getAllByRole('radio')).toHaveLength(2);
  });

  it('calls onChange when selected', () => {
    const handleChange = vi.fn();
    render(<RadioGroup
      name="test"
      options={[{ label: 'One', value: '1' }]}
      onChange={handleChange}
    />);
    fireEvent.click(screen.getByLabelText('One'));
    expect(handleChange).toHaveBeenCalledWith('1');
  });
});
