import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalibFormComponent } from './nalib-form.component';

describe('NalibFormComponent', () => {
  let component: NalibFormComponent;
  let fixture: ComponentFixture<NalibFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalibFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalibFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
