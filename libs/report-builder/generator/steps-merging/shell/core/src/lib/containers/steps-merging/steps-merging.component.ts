import { ReportBuilderGeneratorStepsMergingReportService } from "@report-builder-generator-shared-data-access-service";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import { SharedUICommonLockableCardComponent } from "@report-builder-shared-common-lockable-card";

@Component({
  selector: 'wr-steps-merging',
  templateUrl: './steps-merging.component.html',
  styleUrls: ['./steps-merging.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportBuilderGeneratorStepsMergingComponent implements OnInit, AfterViewInit {
  @ViewChild('reportZone', { static: true })
  public reportZone!: ElementRef<any>;

  constructor(protected readonly _reportService: ReportBuilderGeneratorStepsMergingReportService) {
  }

  @ViewChildren(SharedUICommonLockableCardComponent)
  public lockableCards!: QueryList<SharedUICommonLockableCardComponent>

  public STEPS: ISteps[] = [
    {
      name: 'Filters',
      editable: true,
      isLocked: false
    },
    {
      name: 'Metrics',
      editable: false,
      isLocked: true
    },
    {
      name: 'Rows and Columns',
      editable: false,
      isLocked: true
    },
    {
      name: 'Performance',
      editable: false,
      isLocked: true
    },
  ]


  ngAfterViewInit(): void {
  }

  ngOnInit() {
    this._reportService.init(8);
  }

  public onSubmit(value: boolean): void {
    if (value) {
      this.reportZone.nativeElement.scrollIntoView()
    }
  }

  public changeLock(): void {
    this.lockableCards.first.isLocked = !this.lockableCards.first.isLocked;
  }

  public getLocked(item: ISteps, index: number): void {
    console.log(item, index);
  }

}

export interface ISteps {
  name: string,
  editable: boolean,
  isLocked: boolean
}
