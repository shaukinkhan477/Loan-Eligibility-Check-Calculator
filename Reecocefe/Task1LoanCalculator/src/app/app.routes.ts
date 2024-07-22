import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
  { path: '', component: CalculatorComponent },
  {path: 'calculator', component: CalculatorComponent},
  { path: 'results', component: ResultsComponent }
];
