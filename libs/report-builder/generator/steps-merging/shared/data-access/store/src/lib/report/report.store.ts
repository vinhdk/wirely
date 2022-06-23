import { Inject, Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { ReportBuilderReportsApi } from "@report-builder-shared-data-access-api";
import { IFilter, IReport } from "@wirely/shared/data-access/model";
import { map, switchMap } from "rxjs";
import { IStepsMergingData } from "./report.state";

@Injectable()
export class ReportBuilderGeneratorReportStore extends ComponentStore<IStepsMergingData> {

  constructor(
    @Inject(ReportBuilderReportsApi) protected readonly _reportApi: ReportBuilderReportsApi
    ) {
    super({
      filters: [],
      dataTable: [],
    })

  }

  getFilters = this.effect(
    req$ => req$.pipe(
      switchMap(() => this._reportApi.getFilters()),
      map(data => this.updateFilters(data))
    )
  )

  getDataTable = this.effect<{limit?: number}>(
    req$ => req$.pipe(
      switchMap(req => this._reportApi.getDataTable(req.limit)),
      map(data => this.updateDataTable(data))
    )
  )

  updateDataTable = this.updater(
    (state, dataTable: IReport[]) => ({
      ...state,
      dataTable,
    })
  )

  updateFilters = this.updater(
    (state, filters: IFilter[]) => ({
      ...state,
      filters,
    })
  );
}
