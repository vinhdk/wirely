import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  ReportBuilderGeneratorFormDataService,
  ReportBuilderGeneratorStepsMergingReportService
} from "@report-builder-generator-shared-data-access-service";
import { catchError, map, of } from "rxjs";

@Component({
  selector: 'wr-step-metrics',
  templateUrl: './step-metrics.component.html',
  styleUrls: ['./step-metrics.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportBuilderStepMetricsComponent implements OnInit {
  public form!: FormGroup;

  public options$ = this._reportService.filters$.pipe(
    map(filters => {
      const mapped = filters.find(f => f.categoryName === 'Metrics');
      const form = (mapped?.options || []).reduce((acc, curr) => {
        acc[curr] = [false];
        return acc;
      }, {} as Record<string, [boolean]>);
      this.form = this._fb.group(form);
      this._formDataService.updateMetrics(
        this.form.valueChanges.pipe(
          map(data => {
            return Object.keys(data).filter(key => data[key]);
          })
        )
      );
      return mapped?.options || [];
    }),
    catchError(() => {
      this.form = this._fb.group({});
      return of([]);
    })
  )

  constructor(
    protected readonly _fb: FormBuilder,
    protected readonly _formDataService: ReportBuilderGeneratorFormDataService,
    protected readonly _reportService: ReportBuilderGeneratorStepsMergingReportService
  ) {
  }

  ngOnInit(): void {
  }
}
