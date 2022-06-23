import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[wrLockableCardTitle]",
})
export class SharedUICommonLockableCardTitleDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
