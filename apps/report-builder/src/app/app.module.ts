import { NgModule } from '@angular/core';
import { ReportBuilderCoreComponent, ReportBuilderCoreModule } from "@report-builder-shell-core";
import { interceptorProvider } from "@report-builder-shared-utils-validators";

@NgModule({
  imports: [ReportBuilderCoreModule],
  bootstrap: [ReportBuilderCoreComponent],
  providers: [interceptorProvider],
})
export class AppModule {}
