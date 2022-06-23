import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { SharedUICommonTableBodyDirective, SharedUICommonTableHeaderDirective } from "../../directives";
import { JsonApiValue } from "@data-access-primitive";
import { ICommonTableColumn } from "@data-access-common";

@Component({
  selector: 'wr-common-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedUICommonTableComponent<T extends Record<string, JsonApiValue> = Record<string, JsonApiValue>> {

  @Input()
  public rows: T[] = [];

  @Input()
  public columns: ICommonTableColumn<T>[] = [];

  @ContentChildren(SharedUICommonTableBodyDirective)
  public set bodyChildren(list: QueryList<SharedUICommonTableBodyDirective>) {
    list.forEach((item) => {
      this.bodyMap[item.key] = item;
    });
  }

  @ContentChildren(SharedUICommonTableBodyDirective)
  public set headerChildren(list: QueryList<SharedUICommonTableHeaderDirective>) {
    list.forEach((item) => {
      this.headerMap[item.key] = item;
    });
  }

  public readonly bodyMap: Record<string, SharedUICommonTableBodyDirective> = {};
  public readonly headerMap: Record<string, SharedUICommonTableHeaderDirective> = {};
}
