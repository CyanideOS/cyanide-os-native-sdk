import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VStackComponent } from './v-stack.component';

describe('VStackComponent', () => {
  let component: VStackComponent;
  let fixture: ComponentFixture<VStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
