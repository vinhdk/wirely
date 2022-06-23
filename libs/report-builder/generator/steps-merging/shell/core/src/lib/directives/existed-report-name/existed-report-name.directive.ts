import {Directive, forwardRef, Input, Provider} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

export const EXISTED_REPORT_NAME: Provider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => ExistedReportNameDirective),
  multi: true
}

@Directive({
  selector: '[wrExistedReportName]',
  providers: [
    EXISTED_REPORT_NAME
  ]
})
export class ExistedReportNameDirective implements Validator {

  private _rpNames: string[] = [];

  @Input()
  get wrExistedReportName() {
    return this._rpNames;
  }

  set wrExistedReportName(value: string | Array<string> | null) {
    if(typeof value === 'string'){
      this._rpNames = value.split(' ');
    } else if (Array.isArray(value)) {
      this._rpNames = value;
    } else {
      this._rpNames = [];
    }
  }

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
        return this._rpNames.includes(control.value) ? {
          duplicate_report_name: true
        } : null
    }
}
