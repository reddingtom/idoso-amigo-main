import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisteridosoPage } from './registeridoso.page';

describe('RegisteridosoPage', () => {
  let component: RegisteridosoPage;
  let fixture: ComponentFixture<RegisteridosoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisteridosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
