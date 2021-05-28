import React from 'react';
import { screen, render, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    const [first, second] = tags;
    await waitFor(() => {
      /** This should error if first is not unique. */
      expect(screen.getByText(first)).toBeInTheDocument();
      expect(screen.getByText(second)).toBeInTheDocument();
    });
  });

  it('can be submitted with enter key.', async () => {
    render(<Tags></Tags>);
    const input = screen.getByLabelText(/Tags/);
    const value = 'foobar';

    userEvent.type(input, `${value}{enter}`);
    expect(input.value).toBe('');
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
