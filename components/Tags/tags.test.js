import React from 'react';
import { render } from '@testing-library/react';
import Tags from '~/components/Tags';

describe('The Tags Component', () => {
  it('accepts user input.', () => {
    render(<Tags></Tags>);
  });
});
