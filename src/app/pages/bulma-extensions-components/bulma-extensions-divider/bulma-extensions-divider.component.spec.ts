import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaExtensionsDividerComponent } from './bulma-extensions-divider.component';

describe('BulmaExtensionsDividerComponent', () => {
  let component: BulmaExtensionsDividerComponent;
  let fixture: ComponentFixture<BulmaExtensionsDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaExtensionsDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaExtensionsDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
