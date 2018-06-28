import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalibComponentHostComponent } from './nalib-component-host.component';

describe('NalibComponentHostComponent', () => {
  let component: NalibComponentHostComponent;
  let fixture: ComponentFixture<NalibComponentHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalibComponentHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalibComponentHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
