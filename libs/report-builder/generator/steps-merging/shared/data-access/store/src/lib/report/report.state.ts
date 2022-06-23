import { IFilter, IReport } from "@wirely/shared/data-access/model";

export interface IStepsMergingData {
  filters: IFilter[];
  dataTable: IReport[];
}
