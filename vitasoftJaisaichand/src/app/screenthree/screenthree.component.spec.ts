import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenthreeComponent } from './screenthree.component';

describe('ScreenthreeComponent', () => {
  let component: ScreenthreeComponent;
  let fixture: ComponentFixture<ScreenthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
