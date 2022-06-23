import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wr-core-generator',
  templateUrl: './core-generator.component.html',
  styleUrls: ['./core-generator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportBuilderCoreGeneratorComponent implements OnInit {
  constructor(
    protected readonly router: Router
  ) { }

  ngOnInit(): void {
  }

}
