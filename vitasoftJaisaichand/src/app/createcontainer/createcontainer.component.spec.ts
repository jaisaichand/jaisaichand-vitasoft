import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecontainerComponent } from './createcontainer.component';

describe('CreatecontainerComponent', () => {
  let component: CreatecontainerComponent;
  let fixture: ComponentFixture<CreatecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
