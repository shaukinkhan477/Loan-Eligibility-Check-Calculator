import { Component } from '@angular/core';
import { CalculatorComponent } from "../calculator/calculator.component";
import { ResultsComponent } from "../results/results.component";

@Component({
  selector: 'app-loan-calculator',
  standalone: true,
  imports: [CalculatorComponent, ResultsComponent],
  templateUrl: './loan-calculator.component.html',
  styleUrl: './loan-calculator.component.css'
})
export class LoanCalculatorComponent {

}
