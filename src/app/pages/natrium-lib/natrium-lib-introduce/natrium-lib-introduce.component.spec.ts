import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatriumLibIntroduceComponent } from './natrium-lib-introduce.component';

describe('NatriumLibIntroduceComponent', () => {
  let component: NatriumLibIntroduceComponent;
  let fixture: ComponentFixture<NatriumLibIntroduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatriumLibIntroduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatriumLibIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
