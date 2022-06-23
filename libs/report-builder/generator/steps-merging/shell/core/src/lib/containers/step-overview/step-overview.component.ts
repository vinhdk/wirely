import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartDataset, ChartOptions, ChartType } from "chart.js";
import {
  ReportBuilderGeneratorFormDataService,
  ReportBuilderGeneratorStepsMergingReportService
} from "@report-builder-generator-shared-data-access-service";
import { filter, map } from "rxjs";

@Component({
  selector: 'wr-step-overview',
  templateUrl: './step-overview.component.html',
  styleUrls: ['./step-overview.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportBuilderGeneratorStepOverviewComponent implements OnInit {
  public search: string | null = '';
  public form!: FormGroup

  public barChartOptions: ChartOptions = { responsive: true };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', stack: 'a' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', stack: 'a' }
  ];

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
    this.form = _fb.group({
      timePeriod: [],
    })
  }

  ngOnInit() {
    this._formDataService.updateTimePeriod(this.form.valueChanges);
  }

  onSave() {
    console.log(this._formDataService.formData);
  }
}
