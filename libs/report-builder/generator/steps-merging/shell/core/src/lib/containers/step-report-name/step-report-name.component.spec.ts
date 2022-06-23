import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBuilderStepReportNameComponent } from './step-report-name.component';

describe('ReportBuilderStepReportNameComponent', () => {
  let component: ReportBuilderStepReportNameComponent;
  let fixture: ComponentFixture<ReportBuilderStepReportNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBuilderStepReportNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBuilderStepReportNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
