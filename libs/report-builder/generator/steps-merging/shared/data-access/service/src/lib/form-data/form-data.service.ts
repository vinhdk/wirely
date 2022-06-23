import { Injectable } from "@angular/core";
import {
  IFormData,
  IFormDataFilter,
  ReportBuilderGeneratorFormDataStore
} from "@report-builder-generator-shared-data-access-store";
import { Observable } from "rxjs";

@Injectable()
export class ReportBuilderGeneratorFormDataService {
  public readonly state$ = this._formDataStore.state$;
  public readonly reportName$ = this._formDataStore.select(state => state.reportName);
  public readonly filters$ = this._formDataStore.select(state => state.filters);
  public readonly metrics$ = this._formDataStore.select(state => state.metrics);
  public readonly columns$ = this._formDataStore.select(state => state.columns);
  public readonly rows$ = this._formDataStore.select(state => state.rows);
  public readonly timePeriod$ = this._formDataStore.select(state => state.timePeriod);

  public get formData() {
    return this._formDataStore.formData;
  }

  constructor(
    protected readonly _formDataStore: ReportBuilderGeneratorFormDataStore
  ) {
  }

  public setFormData(formData: Partial<IFormData>) {
    return this._formDataStore.setFormData(formData);
  }

  public updateReportName(form$: Observable<{reportName: string}>) {
    return this._formDataStore.updateReportName(form$);
  }

  public updateTimePeriod(form$: Observable<{timePeriod: string}>) {
    return this._formDataStore.updateTimePeriod(form$);
  }

  public updateColumns(form$: Observable<string[]>) {
    return this._formDataStore.updateColumns(form$);
  }

  public updateRows(form$: Observable<string[]>) {
    return this._formDataStore.updateRows(form$);
  }

  public updateFilters(form$: Observable<IFormDataFilter[]>) {
    return this._formDataStore.updateFilters(form$);
  }

  public updateMetrics(form$: Observable<string[]>) {
    return this._formDataStore.updateMetrics(form$);
  }
}
