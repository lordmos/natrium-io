import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalibDetailEditorComponent } from './nalib-detail-editor.component';

describe('NalibDetailEditorComponent', () => {
  let component: NalibDetailEditorComponent;
  let fixture: ComponentFixture<NalibDetailEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalibDetailEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalibDetailEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
