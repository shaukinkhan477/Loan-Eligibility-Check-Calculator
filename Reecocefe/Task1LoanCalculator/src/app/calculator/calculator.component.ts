import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit {
  loanForm!: FormGroup;
  eligibilityAmount!: number;

  constructor(private fb: FormBuilder, private loanService: LoanService, private router: Router) { }



  ngOnInit(): void {
    this.loanForm = this.fb.group({
      income: ['', [Validators.required, Validators.min(0)]],
      expenses: ['', [Validators.required, Validators.min(0)]],
      loanAmount: ['', [Validators.required, Validators.min(0)]],
      interestRate: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      loanTerm: ['', [Validators.required, Validators.min(1)]]
    });

    this.loanForm.valueChanges.subscribe(values => {
      this.calculateLoan(values);
    });
  }

  calculateLoan(values: { income: any; expenses: any; loanAmount: any; interestRate: any; loanTerm: any; }): void {
    const { income, expenses, loanAmount, interestRate, loanTerm } = values;
    this.eligibilityAmount = this.loanService.calculateLoanEligibility(income, expenses, loanAmount, interestRate, loanTerm);
  }

  onSubmit(): void {
    if (this.loanForm.valid) {
      this.router.navigate(['/results'], { queryParams: { eligibilityAmount: this.eligibilityAmount } });
    }
  }
}
