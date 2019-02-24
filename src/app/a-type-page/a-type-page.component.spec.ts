import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATypePageComponent } from './a-type-page.component';

describe('ATypePageComponent', () => {
  let component: ATypePageComponent;
  let fixture: ComponentFixture<ATypePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
