type LoanOptions = {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
  currency: string;
};

export function calculateMortgage({
  homePrice,
  downPayment,
  interestRate,
  loanTerm,
  currency,
}: LoanOptions): string {
  // Mortgage formula: M = P * (r(1 + r)^n) / ((1 + r)^n - 1)
  // M = Monthly payment
  // P = Principal loan amount
  // r = Monthly interest rate (i.e. annual rate / 12)
  // n = Number of payments (loan term * 12)

  const principal = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const payments = loanTerm * 12;

  const payment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, payments))) /
    (Math.pow(1 + monthlyRate, payments) - 1);

  return `${payment.toFixed(2)} ${currency}`;
}
