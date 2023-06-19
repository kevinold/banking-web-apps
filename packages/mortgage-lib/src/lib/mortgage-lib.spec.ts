import { calculateMortgage } from './mortgage-lib';

describe('mortgageLib', () => {
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
});
