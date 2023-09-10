import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhechatPage } from './detalhechat.page';

describe('DetalhechatPage', () => {
  let component: DetalhechatPage;
  let fixture: ComponentFixture<DetalhechatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalhechatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
