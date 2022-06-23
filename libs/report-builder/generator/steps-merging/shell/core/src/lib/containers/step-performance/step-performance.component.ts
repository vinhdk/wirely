import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReportBuilderGeneratorFormDataService, ReportBuilderGeneratorStepsMergingReportService } from '@report-builder-generator-shared-data-access-service';
import { map } from 'rxjs';

@Component({
  selector: 'wr-step-performance',
  templateUrl: './step-performance.component.html',
  styleUrls: ['./step-performance.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportBuilderStepPerformanceComponent implements OnInit {

  public form!: FormGroup;

  public readonly filter$ = this._reportService.filters$
  .pipe(
    map((filters) => {
      const mapped = filters.find(f => f.categoryName === 'Date Type');
      return mapped?.options || [];
    })
  );
  
  constructor(
    protected readonly _fb: FormBuilder,
    protected readonly _reportService: ReportBuilderGeneratorStepsMergingReportService,
    protected readonly _formDataService: ReportBuilderGeneratorFormDataService,
  ) { 
    this.initForm();
  }

  ngOnInit(): void {
    this._formDataService.updateTimePeriod(this.form.valueChanges);
  }

  public initForm(): void {
    this.form = this._fb.group({
      timePeriod: ['Default Date Period']
    });
  }

}
