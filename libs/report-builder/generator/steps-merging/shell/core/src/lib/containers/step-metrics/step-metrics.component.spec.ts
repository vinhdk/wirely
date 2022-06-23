import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBuilderStepMetricsComponent } from './step-metrics.component';

describe('ReportBuilderStepMetricsComponent', () => {
  let component: ReportBuilderStepMetricsComponent;
  let fixture: ComponentFixture<ReportBuilderStepMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBuilderStepMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBuilderStepMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
