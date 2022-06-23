import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  ReportBuilderGeneratorFormDataService,
  ReportBuilderGeneratorStepsMergingReportService
} from "@report-builder-generator-shared-data-access-service";
import { combineLatest, map, tap } from "rxjs";
import { IReportKeys } from "@wirely/shared/data-access/model";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { TextReplacePipe } from '@report-builder-generator-steps-merging-shell-core';

@Component({
  selector: 'wr-step-rows-and-columns',
  templateUrl: './step-rows-and-columns.component.html',
  styleUrls: ['./step-rows-and-columns.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportBuilderStepRowsAndColumnsComponent implements OnInit {

  public rowsForm!: FormGroup;
  public columnsForm!: FormGroup;

  public rowItems$ = this._reportService.originalColumns$.pipe(
    tap((rs) => {
      const mapped = rs.reduce((acc, curr) => {
        acc[curr] = [false];
        return acc;
      }, {} as Record<string, [boolean]>);
      this.rowsForm = this._fb.group(mapped);
      this._formDataService.updateRows(
        this.rowsForm.valueChanges.pipe(
          map((item: any) => {
            const tmp = Object.keys(item).filter(key => item[key]) as IReportKeys;
            const final = this._savedPositionColumns.reduce((acc, curr) => {
              if (tmp.includes(curr)) {
                acc.push(curr);
              }
              return acc;
            }, [] as IReportKeys);
            const result = final.length ? final : tmp.length ? tmp : this._reportService.originalColumns;
            this._reportService.updateFilters(result);
            return result.map(item => new TextReplacePipe().transform(item, 'normal'));
          })
        )
      );
    })
  );

  public columnItems$ = this._reportService.originalColumns$.pipe(
    tap((rs) => {
      this.columnsForm = this._fb.group({
        columnControl: [rs[0]],
      });
      this._formDataService.updateColumns(
        this.columnsForm.valueChanges.pipe(map(item => [item.columnControl]))
      );
    })
  )

  public readonly COLUMN_ITEMS = [
    'Date',
    'Department Code',
    'Department Description',
    'Department',
    'Discount Applied',
    'Location Name'
  ];

  private _savedPositionColumns: IReportKeys = [];

  constructor(
    protected readonly _fb: FormBuilder,
    protected readonly _destroy$: TuiDestroyService,
    protected readonly _reportService: ReportBuilderGeneratorStepsMergingReportService,
    protected readonly _formDataService: ReportBuilderGeneratorFormDataService,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  public initForm(): void {

  }

  public drop(event: CdkDragDrop<any[]>): void {
    const formArr = Object.keys(this.rowsForm.controls).filter(key => this.rowsForm.controls[key].value === true) as IReportKeys
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    const dragArr = event.container.data.map(item => item);
    this._savedPositionColumns = dragArr;
    const final = dragArr.filter(value => formArr.includes(value));
    const ogCol = this._reportService.originalColumns;
    this._reportService.updateFilters(final.length ? final : ogCol);
  }
}
