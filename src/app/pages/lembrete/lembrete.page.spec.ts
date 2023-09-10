import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LembretePage } from './lembrete.page';

describe('LembretePage', () => {
  let component: LembretePage;
  let fixture: ComponentFixture<LembretePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LembretePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
