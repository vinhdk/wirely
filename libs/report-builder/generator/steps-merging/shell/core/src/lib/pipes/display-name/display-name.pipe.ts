import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'displayName'
})
export class ReportBuilderGeneratorStepsMergingDisplayNamePipe implements PipeTransform {
  transform(value: string): string {
    const res = value.replace(/([A-Z])/g, " $1");
    return res.charAt(0).toUpperCase() + res.slice(1);
  }
}
