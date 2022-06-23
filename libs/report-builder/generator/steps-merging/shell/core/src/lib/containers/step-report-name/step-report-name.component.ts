import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, NgForm } from "@angular/forms";
import { ReportBuilderGeneratorFormDataService } from "@report-builder-generator-shared-data-access-service";

@Component({
  selector: 'wr-step-report-name',
  templateUrl: './step-report-name.component.html',
  styleUrls: ['./step-report-name.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportBuilderStepReportNameComponent implements OnInit {

  public listNames = [
    'Alexander',
    'Bill Gates',
    'Johnny Depp',
    'Elon Musk'
  ]

  @ViewChild('form', { static: true }) ngForm!: NgForm;
  public reportName = '';

  constructor(
    protected readonly _fb: FormBuilder,
    protected readonly _formDataService: ReportBuilderGeneratorFormDataService,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this._formDataService.updateReportName(this.ngForm.form.valueChanges);
  }

  public initForm(): void {
  }

}
