import {NgModule} from "@angular/core";
import {SharedUICommonTableComponent} from "./containers";
import { CommonModule } from "@angular/common";
import { SharedUICommonTableBodyDirective, SharedUICommonTableHeaderDirective } from "./directives";

const CONTAINERS = [SharedUICommonTableComponent];
const MODULES = [CommonModule];
const DIRECTIVES = [SharedUICommonTableBodyDirective, SharedUICommonTableHeaderDirective];

@NgModule({
  declarations: [CONTAINERS, DIRECTIVES],
  imports: [MODULES],
  exports: [CONTAINERS, DIRECTIVES]
})
export class SharedUICommonTableModule {
}
