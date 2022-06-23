import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBuilderCoreComponent } from './core.component';

describe('ReportBuilderCoreComponent', () => {
  let component: ReportBuilderCoreComponent;
  let fixture: ComponentFixture<ReportBuilderCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBuilderCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBuilderCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
