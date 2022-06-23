import { Route, RouterModule } from "@angular/router";
import {ReportBuilderCoreGeneratorComponent} from "@report-builder-generator-shell-core";


const routes: Route[] = [
  {
    path: '',
    component: ReportBuilderCoreGeneratorComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@report-builder-generator-steps-merging-shell-core').then((m) => m.ReportBuilderGeneratorStepsMergingModule)
      },
    ]
  }
];

export const ReportBuilderCoreGeneratorRoutes = RouterModule.forChild(routes);
