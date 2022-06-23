export interface IReport {
  departmentCode: number;
  departmentDescription: string;
  department: string;
  discountApplied: number;
  locationNumber: number;
  locationName: string;
  location: string;
  pOSTerminalNumber: number;
  pOSTerminalDescription: string;
  pOSTerminal: string;
  preDiscountPrice: number;
  quantity: number;
  salesCatCode: number;
  salesCatDescription: string;
  salesCat: string;
  staffID: number;
  staffName: string;
  staff: string;
  stockItemPOSCode: number;
  stockItemDescription: string;
  stockItem: string;
  totalPriceExGST: number;
  totalPriceIncGST: number;
  transID: number;
  transactionDate: Date | string;
  priceLevel: number;
  cOGS: number;
  date: number;
  transactionType: string;
}

export type IReportKeys = (keyof IReport)[];
