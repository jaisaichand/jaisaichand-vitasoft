import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenoneComponent } from './screenone.component';

describe('ScreenoneComponent', () => {
  let component: ScreenoneComponent;
  let fixture: ComponentFixture<ScreenoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
