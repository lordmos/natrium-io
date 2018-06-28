import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalibOutletComponent } from './nalib-outlet.component';

describe('NalibOutletComponent', () => {
  let component: NalibOutletComponent;
  let fixture: ComponentFixture<NalibOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalibOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalibOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
