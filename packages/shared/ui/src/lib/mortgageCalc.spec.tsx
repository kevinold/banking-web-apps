import { render } from '@testing-library/react';

import { MortgageCalculator } from './mortgageCalc';

describe('MortgageCalc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MortgageCalculator />);
    expect(baseElement).toBeTruthy();
  });
});
