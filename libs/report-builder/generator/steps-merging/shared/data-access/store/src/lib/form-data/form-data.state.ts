export interface IFormData {
  reportName: string;
  filters: IFormDataFilter[];
  metrics: string[];
  rows: string[];
  columns: string[];
  timePeriod: string[];
}

export interface IFormDataFilter {
  name: string;
  options: string[];
}
