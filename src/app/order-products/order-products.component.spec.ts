import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderProductsComponent } from './order-products.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('OrderProductsComponent', () => {
  let component: OrderProductsComponent;
  let fixture: ComponentFixture<OrderProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [OrderProductsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(OrderProductsComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render title in a mat-toolbar tag', () => {
    const fixture = TestBed.createComponent(OrderProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(' mat-toolbar ').textContent).toContain('Order Product');
  });

  it('should render Order Id in a input tag', () => {
    const fixture = TestBed.createComponent(OrderProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-label').textContent).toContain('Order Id');
  });

  it('should be productId is invalid', () => {
    const fixture = TestBed.createComponent(OrderProductsComponent);
    fixture.detectChanges();
    let component=fixture.componentInstance;
    component.orderForm.controls['productId'].setValue('');
    fixture.detectChanges();
    expect(component.orderForm.valid).toBeFalsy();
  });


});
