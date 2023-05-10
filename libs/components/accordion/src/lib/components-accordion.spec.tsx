import { render } from '@testing-library/react';

import ComponentsAccordion from './components-accordion';

describe('ComponentsAccordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsAccordion />);
    expect(baseElement).toBeTruthy();
  });
});
