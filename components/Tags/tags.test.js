import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
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

  it('creates a maximum of three tags.', async () => {
    render(<Tags></Tags>);
    const input = screen.getByLabelText(/Tags/);
    const button = screen.getByRole('button');

    const tags = ['foo', 'bar', 'baz', 'buz'];
    tags.forEach((value) => {
      fireEvent.change(input, { target: { value } });
      fireEvent.click(button);
    });

    const [first, second, third, fourth] = tags;
    await waitFor(() => {
      expect(screen.getByText(first)).toBeInTheDocument();
      expect(screen.getByText(second)).toBeInTheDocument();
      expect(screen.getByText(third)).toBeInTheDocument();
      expect(screen.queryByText(fourth)).not.toBeInTheDocument();
    });
  });

  it('will not create duplicate tags.', async () => {
    render(<Tags></Tags>);
    const input = screen.getByLabelText(/Tags/);
    const button = screen.getByRole('button');

    const tags = ['foo', 'bar', 'foo'];
    tags.forEach((value) => {
      fireEvent.change(input, { target: { value } });
      fireEvent.click(button);
    });

    const [first, second, third] = tags;
    await waitFor(() => {
      expect(screen.getByText(first)).toBeInTheDocument();
      expect(screen.getByText(second)).toBeInTheDocument();
      expect(screen.queryByText(third)).not.toBeInTheDocument();
    });
  });
});
