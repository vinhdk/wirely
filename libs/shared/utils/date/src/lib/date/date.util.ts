export class ReportBuilderSharedDateUtils {
  static getDatesInRange(startDate: Date, endDate: Date): string[] {
    const date = new Date(startDate.getTime());
    const dates = [];
    while (date <= endDate) {
      dates.push(this.toMMDDYYYY(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }

  static toMMDDYYYY(source: Date): string {
    const date = source.getDate();
    const month = source.getMonth() + 1;
    const year = source.getFullYear();
    return `${ month }/${ date }/${ year }`;
  }

  static getMonday(d: Date) {
    d = new Date(d);
    const day = d.getDay();
    const diff = d.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }
}
