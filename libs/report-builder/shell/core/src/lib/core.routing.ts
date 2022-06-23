import { Route, RouterModule } from "@angular/router";
import {ReportBuilderCoreComponent} from "./containers";

const routes: Route[] = [
  {
    path: '',
    component: ReportBuilderCoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'generator',
        pathMatch: 'full'
      },
      {
        path: 'generator',
        loadChildren: () => import('@report-builder-generator-shell-core').then((m) => m.ReportBuilderCoreGeneratorModule)
      }
    ]
  }
];

export const ReportBuilderCoreRoutes = RouterModule.forRoot(routes);
