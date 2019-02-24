import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BTypePageComponent } from './b-type-page.component';

describe('BTypePageComponent', () => {
  let component: BTypePageComponent;
  let fixture: ComponentFixture<BTypePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BTypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
