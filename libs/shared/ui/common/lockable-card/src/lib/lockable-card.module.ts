import { NgModule } from "@angular/core";
import { SharedUICommonLockableCardComponent } from "./containers";
import { SharedUICommonLockableCardBodyDirective, SharedUICommonLockableCardTitleDirective } from "./directives";
import { CommonModule } from "@angular/common";
import { TuiSvgModule } from "@taiga-ui/core";

const ANGULAR_MODULES = [CommonModule];

const TUI_MODULES = [TuiSvgModule];

const COMPONENTS = [SharedUICommonLockableCardComponent];

const DIRECTIVES = [
  SharedUICommonLockableCardTitleDirective,
  SharedUICommonLockableCardBodyDirective
];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [...ANGULAR_MODULES, ...TUI_MODULES],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class SharedUICommonLockableCardModule {
}
