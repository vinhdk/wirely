import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBuilderStepPerformanceComponent } from './step-performance.component';

describe('ReportBuilderStepPerformanceComponent', () => {
  let component: ReportBuilderStepPerformanceComponent;
  let fixture: ComponentFixture<ReportBuilderStepPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBuilderStepPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBuilderStepPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
