import { calculateMortgage } from './mortgage-lib';

describe('mortgage-lib', () => {
  it('calculate the monthly mortgage price for a property in USD', () => {
    const mortgage = calculateMortgage({
      homePrice: 100000,
      downPayment: 500,
      interestRate: 2.5,
      loanTerm: 30,
      currency: 'USD',
    });

    expect(mortgage).toEqual('393.15 USD');
  });
  it('calculate the monthly mortgage price for a property in USD - 2', () => {
    const mortgage = calculateMortgage({
      homePrice: 200000,
      downPayment: 50000,
      interestRate: 3.5,
      loanTerm: 30,
      currency: 'USD',
    });

    expect(mortgage).toEqual('673.57 USD');
  });
});
