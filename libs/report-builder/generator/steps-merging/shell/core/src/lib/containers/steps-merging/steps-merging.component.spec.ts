/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBuilderGeneratorStepsMergingComponent } from './steps-merging.component';

describe('ReportBuilderGeneratorStepsMergingComponent', () => {
  let component: ReportBuilderGeneratorStepsMergingComponent;
  let fixture: ComponentFixture<ReportBuilderGeneratorStepsMergingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBuilderGeneratorStepsMergingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBuilderGeneratorStepsMergingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
