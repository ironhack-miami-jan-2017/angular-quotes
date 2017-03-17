import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondCounterComponent } from './my-second-counter.component';

describe('MySecondCounterComponent', () => {
  let component: MySecondCounterComponent;
  let fixture: ComponentFixture<MySecondCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySecondCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
