import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[wrLockableCardBody]",
})
export class SharedUICommonLockableCardBodyDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
