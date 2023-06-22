import { calculateMortgage } from '@banking-web-apps/mortgage-lib';
import { NextRequest, NextResponse } from 'next/server';

export default function handler(req: NextRequest, res: NextResponse) {
  const { homePrice, downPayment, interestRate, loanTerm, currency } =
    req.query;

  if (!homePrice || !downPayment || !interestRate || !loanTerm || !currency) {
    return res.json({ error: 'Missing parameters' }, { status: 400 });
  }

  const payment = calculateMortgage({
    homePrice: +homePrice,
    downPayment: +downPayment,
    interestRate: +interestRate,
    loanTerm: +loanTerm,
    currency,
  });

  res.status(200).json({ payment });
}
