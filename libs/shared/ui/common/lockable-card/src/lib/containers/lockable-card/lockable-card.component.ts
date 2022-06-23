import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild, EventEmitter,
  Input, OnChanges,
  OnInit, Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {SharedUICommonLockableCardBodyDirective, SharedUICommonLockableCardTitleDirective} from "../../directives";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";

@Component({
  selector: 'wr-common-lockable-card',
  templateUrl: './lockable-card.component.html',
  styleUrls: ['./lockable-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SharedUICommonLockableCardComponent{

  @Input()
  public isLocked!: boolean;

  @Input()
  public editable!: boolean

  @Output()
  public locked = new EventEmitter();

  @ContentChild(SharedUICommonLockableCardTitleDirective, { static: true })
  public cardTitle!: SharedUICommonLockableCardTitleDirective;
  @ContentChild(SharedUICommonLockableCardBodyDirective, { static: true })
  public cardBody!: SharedUICommonLockableCardBodyDirective;

  public get icon() {
    return this.isLocked ? 'tuiIconLockLarge' : 'tuiIconLockOpenLarge';
  }

}
