import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Tags from '~/components/Tags';

describe('The Tags Component', () => {
  it('creates tags from input.', () => {
    render(<Tags></Tags>);
    const input = screen.getByLabelText(/Tags/);
    const value = 'foobar';
    fireEvent.change(input, { target: { value } });

    const button = screen.getByText(/Enter/);
    fireEvent.click(button);

    expect(input.value).toBe('');
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
