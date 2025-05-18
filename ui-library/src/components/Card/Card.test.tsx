import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';
import { vi } from 'vitest';

describe('Card', () => {
  it('renders title and description', () => {
    render(<Card title="Hello" description="This is a test card" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('This is a test card')).toBeInTheDocument();
  });

  it('renders actions and handles clicks', () => {
    const onClick = vi.fn();
    render(
      <Card
        title="Title"
        actions={[{ label: 'Action', onClick }]}
      />
    );
    fireEvent.click(screen.getByText('Action'));
    expect(onClick).toHaveBeenCalled();
  });
});
