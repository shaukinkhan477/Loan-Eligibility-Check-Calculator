import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultsComponent } from './results/results.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';

export const routes: Routes = [
  { path: '', component: LoanCalculatorComponent },
  {path: 'calculator', component: CalculatorComponent},
  { path: 'results', component: ResultsComponent }
];
