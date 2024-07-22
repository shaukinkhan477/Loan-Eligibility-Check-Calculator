import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  calculateLoanEligibility(income: number, expenses: number, loanAmount: number, interestRate: number, loanTerm: number): number {
    const availableIncome = income - expenses;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Check if the monthly payment is affordable within the available income
    if (monthlyPayment <= availableIncome) {
      return loanAmount;
    } else {
      return 0;
    }
  }

  constructor() { }
}
     