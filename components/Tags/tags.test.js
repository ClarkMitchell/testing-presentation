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

  it('creates a maximum of three tags.', () => {
    const { debug } = render(<Tags></Tags>);
    const input = screen.getByLabelText(/Tags/);
    const button = screen.getByText(/Enter/);

    ['foo', 'bar', 'baz'].forEach((tag) => {
      fireEvent.change(input, { target: { tag } });
      fireEvent.click(button);
      screen.findByText(tag).then((createdTag) => expect(createdTag).toBeInTheDocument());
    });

    debug();

    // const invalidTag = 'buz';
    // fireEvent.change(input, { target: { invalidTag } });
    // fireEvent.click(button);
    // screen.getByText(invalidTag);
    // screen.findByText(invalidTag).then((createdTag) => console.error(createdTag));
    // expect(screen.queryByText(invalidTag)).toBeFalsy();
  });
});
