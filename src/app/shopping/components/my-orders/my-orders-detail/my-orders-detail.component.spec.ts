import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersDetailComponent } from './my-orders-detail.component';

describe('MyOrdersDetailComponent', () => {
  let component: MyOrdersDetailComponent;
  let fixture: ComponentFixture<MyOrdersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrdersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
