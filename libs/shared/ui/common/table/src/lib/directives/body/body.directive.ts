import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[wrCommonTableBody]',
  exportAs: 'wrCommonTableBody'
})
export class SharedUICommonTableBodyDirective {
  @Input()
  public key!: string;
}
