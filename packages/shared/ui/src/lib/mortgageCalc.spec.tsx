import { render } from '@testing-library/react';

import MortgageCalc from './mortgageCalc';

describe('MortgageCalc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MortgageCalc />);
    expect(baseElement).toBeTruthy();
  });
});
