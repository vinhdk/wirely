import { Component, OnInit } from '@angular/core';
import { ReportBuilderGeneratorStepsMergingReportService } from "@report-builder-generator-shared-data-access-service";

@Component({
  selector: 'wr-steps-merging-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class ReportBuilderGeneratorStepsMergingTableComponent implements OnInit {
  public vm$ = this._reportService.vm$;

  constructor(protected readonly _reportService: ReportBuilderGeneratorStepsMergingReportService) {
  }

  ngOnInit() {
  }

}
