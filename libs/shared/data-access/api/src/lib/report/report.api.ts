import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IFilter, IReport } from "@wirely/shared/data-access/model";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportBuilderReportsApi {
  constructor(protected readonly _http: HttpClient) { }

  getFilters(): Observable<IFilter[]> {
    const url = '/wr-assets/jsons/filters.json';
    return this._http.get<IFilter[]>(url);
  }

  getDataTable(limit: number = 4): Observable<IReport[]> {
    const url = '/wr-assets/jsons/report-builder.json';
    return this._http.get<IReport[]>(url)
      .pipe(
        map(val => {
          val = val.filter(item => item.department);
          return !limit ? val : val.slice(0, limit);
        })
      )
  }
}
