import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDirectiveChildComponent } from './dashboard-directive-child.component';

describe('DashboardDirectiveChildComponent', () => {
  let component: DashboardDirectiveChildComponent;
  let fixture: ComponentFixture<DashboardDirectiveChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDirectiveChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDirectiveChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
