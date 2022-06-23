import { Route, RouterModule } from "@angular/router";
import { ReportBuilderGeneratorStepsMergingComponent } from "./containers";

const routes: Route[] = [
  {
    path: '',
    component: ReportBuilderGeneratorStepsMergingComponent,
  }
];
export const ReportBuilderGeneratorStepsMergingRoutes = RouterModule.forChild(routes);
