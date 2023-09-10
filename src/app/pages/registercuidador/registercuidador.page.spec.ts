import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistercuidadorPage } from './registercuidador.page';

describe('RegistercuidadorPage', () => {
  let component: RegistercuidadorPage;
  let fixture: ComponentFixture<RegistercuidadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistercuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
