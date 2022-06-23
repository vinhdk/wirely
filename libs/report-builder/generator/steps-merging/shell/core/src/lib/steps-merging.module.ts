import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  ReportBuilderGeneratorStepOverviewComponent,
  ReportBuilderGeneratorStepsMergingComponent,
  ReportBuilderStepFiltersComponent,
  ReportBuilderStepMetricsComponent, ReportBuilderStepPerformanceComponent,
  ReportBuilderStepReportNameComponent,
  ReportBuilderStepRowsAndColumnsComponent
} from "./containers";
import { ReportBuilderGeneratorStepsMergingRoutes } from "./steps-merging.routing";
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDialogModule,
  TuiSvgModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {
  TuiAccordionModule,
  TuiCheckboxBlockModule,
  TuiCheckboxLabeledModule, TuiCheckboxModule,
  TuiDataListWrapperModule,
  TuiInputModule,
  TuiMultiSelectModule,
  TuiRadioBlockModule,
  TuiSelectModule,
} from "@taiga-ui/kit";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TuiDestroyService, TuiDialogHostModule } from "@taiga-ui/cdk";
import { ReportBuilderGeneratorStepsMergingDisplayNamePipe, TextReplacePipe } from "./pipes";
import { NgChartsModule } from "ng2-charts";
import { SharedUICommonLockableCardModule } from "@report-builder-shared-common-lockable-card";
import { ReportBuilderGeneratorStepsMergingTableComponent } from "./components";
import {
  ReportBuilderGeneratorFormDataService,
  ReportBuilderGeneratorStepsMergingReportService
} from "@report-builder-generator-shared-data-access-service";
import { ExistedReportNameDirective } from "./directives";
import { ReactiveComponentModule } from "@ngrx/component";
import { DragDropModule } from '@angular/cdk/drag-drop'
import {
  ReportBuilderGeneratorFormDataStore,
  ReportBuilderGeneratorReportStore
} from "@report-builder-generator-shared-data-access-store";

const MODULES = [
  ReportBuilderGeneratorStepsMergingRoutes,
  NgChartsModule,
  SharedUICommonLockableCardModule,
  ReactiveComponentModule,
];

const ANGULAR_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  DragDropModule
];

const TUI_MODULES = [
  TuiSvgModule,
  TuiCheckboxBlockModule,
  TuiMultiSelectModule,
  TuiSelectModule,
  TuiDataListModule,
  TuiDataListWrapperModule,
  TuiButtonModule,
  TuiCheckboxLabeledModule,
  TuiDialogModule,
  TuiDialogHostModule,
  TuiTextfieldControllerModule,
  TuiAccordionModule,
  TuiRadioBlockModule,
  TuiInputModule,
  TuiCheckboxModule
];

const COMPONENTS = [
  ReportBuilderGeneratorStepsMergingComponent,
  ReportBuilderStepFiltersComponent,
  ReportBuilderStepMetricsComponent,
  ReportBuilderGeneratorStepOverviewComponent,
  ReportBuilderGeneratorStepsMergingTableComponent,
  ReportBuilderStepRowsAndColumnsComponent,
  ReportBuilderStepReportNameComponent,
  ReportBuilderStepPerformanceComponent
];

const PIPES = [
  TextReplacePipe,
  ReportBuilderGeneratorStepsMergingDisplayNamePipe
];

const DIRECTIVES = [
  ExistedReportNameDirective
]

const SERVICES = [
  TuiDestroyService,
  ReportBuilderGeneratorStepsMergingReportService,
  ReportBuilderGeneratorFormDataService,
];

const STORES = [
  ReportBuilderGeneratorReportStore,
  ReportBuilderGeneratorFormDataStore,
];

@NgModule({
  imports: [...MODULES, ...ANGULAR_MODULES, ...TUI_MODULES],
  exports: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  providers: [...SERVICES, ...STORES],
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
})
export class ReportBuilderGeneratorStepsMergingModule {
}
