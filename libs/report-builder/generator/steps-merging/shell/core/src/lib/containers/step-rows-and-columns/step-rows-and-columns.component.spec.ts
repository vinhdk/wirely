import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBuilderStepRowsAndColumnsComponent } from './step-rows-and-columns.component';

describe('ReportBuilderStepRowsAndColumnsComponent', () => {
  let component: ReportBuilderStepRowsAndColumnsComponent;
  let fixture: ComponentFixture<ReportBuilderStepRowsAndColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBuilderStepRowsAndColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBuilderStepRowsAndColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
