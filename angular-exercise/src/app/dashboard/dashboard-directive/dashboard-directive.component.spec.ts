import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDirectiveComponent } from './dashboard-directive.component';

describe('DashboardDirectiveComponent', () => {
  let component: DashboardDirectiveComponent;
  let fixture: ComponentFixture<DashboardDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
