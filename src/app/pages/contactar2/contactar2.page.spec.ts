import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contactar2Page } from './contactar2.page';

describe('Contactar2Page', () => {
  let component: Contactar2Page;
  let fixture: ComponentFixture<Contactar2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Contactar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
