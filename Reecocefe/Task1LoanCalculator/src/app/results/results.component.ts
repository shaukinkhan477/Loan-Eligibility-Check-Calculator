import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {
  eligibilityAmount!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the eligibility amount from the route parameters
    this.route.queryParams.subscribe(params => {
      this.eligibilityAmount = +params['eligibilityAmount'] || 0;
    });
  }
}
