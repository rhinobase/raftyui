import { render } from '@testing-library/react';

import ComponentsButton from './components-button';

describe('ComponentsButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsButton />);
    expect(baseElement).toBeTruthy();
  });
});
