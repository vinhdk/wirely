import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBuilderViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ReportBuilderViewComponent;
  let fixture: ComponentFixture<ReportBuilderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBuilderViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBuilderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
