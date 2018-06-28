import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalibTableComponent } from './nalib-table.component';

describe('NalibTableComponent', () => {
  let component: NalibTableComponent;
  let fixture: ComponentFixture<NalibTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalibTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalibTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
