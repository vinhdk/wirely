import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReportBuilderCoreComponent } from "./containers";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TuiRootModule} from "@taiga-ui/core";
import {ReportBuilderCoreRoutes} from "./core.routing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TuiStepperModule} from "@taiga-ui/kit";
import {HttpClientModule} from "@angular/common/http";
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import * as CDK from '@taiga-ui/cdk';
import * as CORE from '@taiga-ui/core';
import * as KIT from '@taiga-ui/kit';
import {RouterModule} from "@angular/router";

const {TUI_ICONS_PATH, iconsPathFactory} = CORE;
const {TUI_SANITIZER} = CDK;

const ANGUlAR_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule
];

const TUI_MODULES = [
  TuiRootModule,
  TuiStepperModule
];

const MODULES = [
  ReportBuilderCoreRoutes
];
@NgModule({
  imports: [
    ...ANGUlAR_MODULES,
    ...TUI_MODULES,
    ...MODULES
  ],
  declarations: [
    ReportBuilderCoreComponent,
  ],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory('https://taiga-ui.dev/assets/taiga-ui/icons'),
    },
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ],
  bootstrap: [ReportBuilderCoreComponent]
})
export class ReportBuilderCoreModule {}

// function tuiPropagateModules<T>(entryPoint: T) {
//   const modules = [];
//
//   for (const name in entryPoint) {
//     if (name.endsWith('Module')) {
//       modules.push(entryPoint[name]);
//     }
//   }
//
//   return modules;
// }

