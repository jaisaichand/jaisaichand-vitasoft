import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreentwoComponent } from './screentwo.component';

describe('ScreentwoComponent', () => {
  let component: ScreentwoComponent;
  let fixture: ComponentFixture<ScreentwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreentwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreentwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
