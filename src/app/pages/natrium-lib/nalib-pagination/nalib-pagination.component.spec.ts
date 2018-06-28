import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalibPaginationComponent } from './nalib-pagination.component';

describe('NalibPaginationComponent', () => {
  let component: NalibPaginationComponent;
  let fixture: ComponentFixture<NalibPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalibPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalibPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
