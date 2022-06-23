import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBuilderStepFiltersComponent } from './step-filters.component';

describe('StepFiltersComponent', () => {
  let component: ReportBuilderStepFiltersComponent;
  let fixture: ComponentFixture<ReportBuilderStepFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBuilderStepFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBuilderStepFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
