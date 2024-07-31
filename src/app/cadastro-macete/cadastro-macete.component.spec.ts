import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMaceteComponent } from './cadastro-macete.component';

describe('CadastroMaceteComponent', () => {
  let component: CadastroMaceteComponent;
  let fixture: ComponentFixture<CadastroMaceteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroMaceteComponent]
    });
    fixture = TestBed.createComponent(CadastroMaceteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
