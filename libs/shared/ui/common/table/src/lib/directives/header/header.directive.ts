import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[wrCommonTableHeader]',
  exportAs: 'wrCommonTableHeader'
})
export class SharedUICommonTableHeaderDirective {
  @Input()
  public key!: string;
}
