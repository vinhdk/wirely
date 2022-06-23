import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUICommonLockableCardComponent } from './lockable-card.component';

describe('SharedUICommonLockableCardComponent', () => {
  let component: SharedUICommonLockableCardComponent;
  let fixture: ComponentFixture<SharedUICommonLockableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedUICommonLockableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedUICommonLockableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
