import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HStackComponent } from './h-stack.component';

describe('HStackComponent', () => {
  let component: HStackComponent;
  let fixture: ComponentFixture<HStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
