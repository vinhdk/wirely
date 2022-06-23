import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { IFormData, IFormDataFilter } from "./form-data.state";
import { BehaviorSubject, tap } from "rxjs";
import { ReportBuilderGeneratorStepsMergingReportService } from "@report-builder-generator-shared-data-access-service";
import { ReportBuilderSharedDateUtils as DateUtil } from "@report-builder-shared-utils-date";

@Injectable()
export class ReportBuilderGeneratorFormDataStore extends ComponentStore<IFormData> {
  private _formData$: BehaviorSubject<IFormData> = new BehaviorSubject<IFormData>(defaultFormData);

  public get formData() {
    return this._formData$.value;
  }

  constructor(
    protected readonly _reportService: ReportBuilderGeneratorStepsMergingReportService,
  ) {
    super(defaultFormData);
    this.updateFormDataEffect(this.state$)
  }

  setFormData = this.updater((state, formData: Partial<IFormData>) => ({
    ...state,
    ...formData
  }));

  updateFormDataEffect = this.effect<IFormData>(
    req$ => req$.pipe(
      tap(data => {
        this._formData$.next(data);
      })
    )
  );

  updateReportName = this.effect<{reportName: string}>(
    req$ => req$.pipe(
      tap(({ reportName }) => {
        this.setReportName(reportName);
      })
    )
  );

  updateTimePeriod = this.effect<{timePeriod: string}>(
    req$ => req$.pipe(
      tap(({ timePeriod }) => {
        this.setTimePeriod([timePeriod]);
        let target = [''];
        switch (timePeriod) {
          case 'Current Day': {
            target = [DateUtil.toMMDDYYYY(new Date())];
            break;
          }
          case 'Yesterday': {
            const date = new Date();
            date.setDate(date.getDate() - 1)
            target = [DateUtil.toMMDDYYYY(date)];
            break;
          }
          case 'Week To Date': {
            const date = new Date();
            const week = DateUtil.getMonday(date);
            target = DateUtil.getDatesInRange(week, date);
            break;
          }
          case 'Last Week To Date': {
            const date = new Date();
            date.setDate(date.getDate() - 6)
            target = DateUtil.getDatesInRange(date, new Date());
            break;
          }
          case 'Month To Date': {
            const date = new Date();
            const month = new Date(date.getFullYear(), date.getMonth(), 1);
            target = DateUtil.getDatesInRange(month, date);
            break;
          }
          case 'Last Month To Date': {
            const date = new Date();
            const year = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
            target = DateUtil.getDatesInRange(year, date);
            break;
          }
        }
        this._reportService.updateFiltersByDate(target);
      })
    )
  );

  updateColumns = this.effect<string[]>(
    req$ => req$.pipe(
      tap((data) => {
        this.setColumns(data);
      })
    )
  );

  updateRows = this.effect<string[]>(
    req$ => req$.pipe(
      tap(data => {
        this.setRows(data);
      })
    )
  );

  updateFilters = this.effect<IFormDataFilter[]>(
    req$ => req$.pipe(
      tap(data => {
          this.setFilters(data);
        }
      )
    )
  );

  updateMetrics = this.effect<string[]>(
    req$ => req$.pipe(
      tap(data => {
          this.setMetrics(data);
        }
      )
    )
  );


  setReportName(reportName: string) {
    this.patchState({ reportName });
  }

  setColumns(columns: string[]) {
    this.patchState({ columns });
  }

  setRows(rows: string[]) {
    this.patchState({ rows });
  }

  setFilters(filters: IFormDataFilter[]) {
    this.patchState({ filters });
  }

  setMetrics(metrics: string[]) {
    this.patchState({ metrics });
  }

  setTimePeriod(timePeriod: string[]) {
    this.patchState({ timePeriod });
  }
}

const defaultFormData: IFormData = {
  reportName: '',
  columns: [],
  filters: [],
  metrics: [],
  rows: [],
  timePeriod: []
};
