import { JsonApiValue } from "@data-access-primitive";
import { CommonTableColumnDirectionEnum } from "./table.enums";

export interface ICommonTableColumn<T extends Record<string, JsonApiValue> = Record<string, JsonApiValue>> {
  key: keyof T;
  config?: Partial<ICommonTableColumnConfig>;
}

export interface ICommonTableColumnConfig {
  title: string;
  text: string;
  fixedWidth: number;
  customHeaderClass: string;
  customBodyClass: string;
  colSpan: number;
  rowSpan: number;
  sortable: boolean;
  direction: CommonTableColumnDirectionEnum;
}
