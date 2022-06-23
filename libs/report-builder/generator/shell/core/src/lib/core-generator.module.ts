import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiButtonModule, TuiRootModule, TuiSvgModule } from "@taiga-ui/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiStepperModule, TuiTabsModule } from "@taiga-ui/kit";
import { HttpClientModule } from "@angular/common/http";
import * as CDK from '@taiga-ui/cdk';
import * as CORE from '@taiga-ui/core';
import * as KIT from '@taiga-ui/kit';
import { RouterModule } from "@angular/router";
import { ReportBuilderCoreGeneratorComponent } from "@report-builder-generator-shell-core";
import { ReportBuilderCoreGeneratorRoutes } from "./core-generator.routing";
import { CommonModule } from "@angular/common";

const { TUI_ICONS_PATH, iconsPathFactory } = CORE;
const { TUI_SANITIZER } = CDK;

const ANGUlAR_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule
];

const TUI_MODULES = [
  TuiRootModule,
  TuiStepperModule,
  TuiTabsModule,
  TuiSvgModule,
  TuiButtonModule
];

const MODULES = [
  ReportBuilderCoreGeneratorRoutes
];

const COMPONENTS = [
  ReportBuilderCoreGeneratorComponent
];

@NgModule({
  imports: [
    ...ANGUlAR_MODULES,
    ...TUI_MODULES,
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ReportBuilderCoreGeneratorModule { }


