import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisPageComponent } from './chuck-norris-page.component';

describe('ChuckNorrisPageComponent', () => {
  let component: ChuckNorrisPageComponent;
  let fixture: ComponentFixture<ChuckNorrisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckNorrisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckNorrisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
