import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBuilderViewGeneratorComponent } from './view-generator.component';

describe('ViewGeneratorComponent', () => {
  let component: ReportBuilderViewGeneratorComponent;
  let fixture: ComponentFixture<ReportBuilderViewGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBuilderViewGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBuilderViewGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
