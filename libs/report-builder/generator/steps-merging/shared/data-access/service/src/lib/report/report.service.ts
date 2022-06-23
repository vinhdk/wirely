import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map, of, switchMap, takeUntil } from "rxjs";
import { IReport, IReportKeys } from "@wirely/shared/data-access/model";
import {
  ReportBuilderGeneratorReportStore
} from "@report-builder-generator-shared-data-access-store";
import { TuiDestroyService } from "@taiga-ui/cdk";

@Injectable()
export class ReportBuilderGeneratorStepsMergingReportService {
  public readonly state$ = this._stepsMergingStore.state$;
  public readonly filters$ = this._stepsMergingStore.select(state => state.filters);
  public readonly dataTable$ = this._stepsMergingStore.select(state => state.dataTable)
    .pipe(
      map(data => {
        const keys = Object.keys(data?.[0] || []) as IReportKeys;
        this.updateFilters(keys);
        this._originalColumns$.next(keys);
        return data;
      })
    );

  private _originalColumns$: BehaviorSubject<IReportKeys> = new BehaviorSubject<IReportKeys>([]);
  private _filterColumns$: BehaviorSubject<IReportKeys> = new BehaviorSubject<IReportKeys>([]);
  private _filterColumnsByDate$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public get originalColumns() {
    return this._originalColumns$.value;
  }

  public get originalColumns$() {
    return this._originalColumns$.asObservable();
  }

  public get filterColumns() {
    return this._filterColumns$.value;
  }

  public get filterColumns$() {
    return this._filterColumns$.asObservable();
  }

  public vm$ = combineLatest([this.dataTable$, this._filterColumns$, this._filterColumnsByDate$])
    .pipe(
      switchMap(([rows, filterColumns, filterColumnsByDate]) => {
        const filterRows = rows.map(row =>
          filterColumns.reduce((acc, curr: keyof IReport) => {
            acc[curr] = row[curr];
            return acc;
          }, {} as any)
        );
        const displayedColumns = [...filterColumns, ...filterColumnsByDate];
        return of({ rows, filterColumns, displayedColumns, filterRows })
      }),
      takeUntil(this._destroy$)
    )

  constructor(
    protected readonly _stepsMergingStore: ReportBuilderGeneratorReportStore,
    protected readonly _destroy$: TuiDestroyService,
  ) {
  }

  updateFilters(filters: IReportKeys): void {
    this._filterColumns$.next(filters);
  }

  updateFiltersByDate(filters: string[]): void {
    this._filterColumnsByDate$.next(filters);
  }

  init(limit?: number) {
    this._stepsMergingStore.getFilters();
    this._stepsMergingStore.getDataTable({ limit });
  }
}
