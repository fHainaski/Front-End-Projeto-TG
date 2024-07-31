import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreDevComponent } from './sobre-dev.component';

describe('SobreDevComponent', () => {
  let component: SobreDevComponent;
  let fixture: ComponentFixture<SobreDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreDevComponent]
    });
    fixture = TestBed.createComponent(SobreDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
