import { Button, Heading, TextField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { calculateMortgage } from '@banking-web-apps/mortgage-lib';
import { useState } from 'react';

export const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculate = () => {
    const payment = calculateMortgage({
      homePrice,
      downPayment,
      interestRate,
      loanTerm,
      currency,
    });
    setMonthlyPayment(payment);
  };

  return (
    <div>
      <Heading width="30vw" level={3}>
        Mortgage Calculator
      </Heading>
      <br />
      <br />
      <TextField
        label="Home price"
        type="number"
        value={homePrice}
        onChange={(e: any) => setHomePrice(e.target.value)}
      />
      <TextField
        label="Down payment"
        type="number"
        value={downPayment}
        onChange={(e: any) => setDownPayment(e.target.value)}
      />
      <TextField
        label="Interest rate"
        type="number"
        value={interestRate}
        onChange={(e: any) => setInterestRate(e.target.value)}
      />
      <TextField
        label="Loan term (years)"
        type="number"
        value={loanTerm}
        onChange={(e: any) => setLoanTerm(e.target.value)}
      />
      <br />
      <br />
      <Button onClick={calculate}>Calculate</Button>
      <br />
      <br />
      {monthlyPayment && (
        <Heading width="30vw" level={5}>
          Monthly payment: ${monthlyPayment}
        </Heading>
      )}
    </div>
  );
};
