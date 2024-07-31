import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaceteEscolarComponent } from './macete-escolar.component';

describe('MaceteEscolarComponent', () => {
  let component: MaceteEscolarComponent;
  let fixture: ComponentFixture<MaceteEscolarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaceteEscolarComponent]
    });
    fixture = TestBed.createComponent(MaceteEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
