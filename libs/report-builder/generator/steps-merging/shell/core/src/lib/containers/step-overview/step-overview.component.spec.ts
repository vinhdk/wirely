/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportBuilderGeneratorStepOverviewComponent } from './step-overview.component';

describe('ReportBuilderGeneratorStepOverviewComponent', () => {
  let component: ReportBuilderGeneratorStepOverviewComponent;
  let fixture: ComponentFixture<ReportBuilderGeneratorStepOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBuilderGeneratorStepOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBuilderGeneratorStepOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
