import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TUI_DEFAULT_MATCHER, tuiPure } from "@taiga-ui/cdk";
import {
  ReportBuilderGeneratorFormDataService,
  ReportBuilderGeneratorStepsMergingReportService
} from "@report-builder-generator-shared-data-access-service";
import { map } from "rxjs";
import { IFilter } from "@wirely/shared/data-access/model";
import { TextReplacePipe } from "../../pipes";
import { IFormDataFilter } from "@report-builder-generator-shared-data-access-store";

const ITEMS = ['Department', "Sales Cat", 'Staff Member', 'Transaction Type', 'Location', 'Department Code'];

@Component({
  selector: 'wr-step-filters',
  templateUrl: './step-filters.component.html',
  styleUrls: ['./step-filters.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportBuilderStepFiltersComponent implements OnInit {

  public form!: FormGroup;
  public search: string | null = '';
  public filters$ = this._reportService.filters$.pipe(
    map(filters => {
      return filters.filter(f => ITEMS.includes(f.categoryName));
    })
  );

  constructor(
    protected readonly _fb: FormBuilder,
    protected readonly _formDataService: ReportBuilderGeneratorFormDataService,
    protected readonly _reportService: ReportBuilderGeneratorStepsMergingReportService,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this._formDataService.updateFilters(
      this.form.valueChanges.pipe(
        map(form => {
          return Object.keys(form).reduce((acc, curr) => {
            if (form[curr].length === 0) {
              return acc;
            }
            acc.push({
              name: new TextReplacePipe().transform(curr, 'normal'),
              options: form[curr]
            });
            return acc;
          }, [] as IFormDataFilter[]);
        })
      )
    )
  }

  public initForm(): void {
    const form = ITEMS.reduce((acc, curr) => {
      acc[new TextReplacePipe().transform(curr)] = [[]];
      return acc;
    }, {} as Record<string, string[][]>);
    this.form = this._fb.group(form)
  }

  @tuiPure
  filter(search: string | null, index: number, filters: IFilter[]): readonly string[] {
    return filters[index].options.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
  }
}
