import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Tags from '~/components/Tags';

describe('The Tags Component', () => {
  it('accepts user input.', () => {
    render(<Tags></Tags>);
    const input = screen.getByLabelText(/Tags/);
  });
});
