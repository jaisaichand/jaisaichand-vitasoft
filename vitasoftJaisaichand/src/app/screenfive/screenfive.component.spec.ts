import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenfiveComponent } from './screenfive.component';

describe('ScreenfiveComponent', () => {
  let component: ScreenfiveComponent;
  let fixture: ComponentFixture<ScreenfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
