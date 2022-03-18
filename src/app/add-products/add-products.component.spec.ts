import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductsComponent } from './add-products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('AddProductsComponent', () => {
  let component: AddProductsComponent;
  let fixture: ComponentFixture<AddProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [AddProductsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }) .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AddProductsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a mat-toolbar tag', () => {
    const fixture = TestBed.createComponent(AddProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(' mat-toolbar ').textContent).toContain('Add Product');
  });

  it('should render Product Name in a input tag', () => {
    const fixture = TestBed.createComponent(AddProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-label').textContent).toContain('Product Name');
  });

  it('should be productName is invalid', () => {
    const fixture = TestBed.createComponent(AddProductsComponent);
    fixture.detectChanges();
    let component=fixture.componentInstance;
    component.addForm.controls['productName'].setValue('');
    fixture.detectChanges();
    expect(component.addForm.controls['productName'].valid).toBeFalsy();
  });

  it('should be productName is valid', () => {
    const fixture = TestBed.createComponent(AddProductsComponent);
    fixture.detectChanges();
    let component = fixture.componentInstance;
    component.addForm.controls['productName'].setValue('sarath');
    fixture.detectChanges();
    expect(component.addForm.controls['productName'].valid).toBeTruthy();
  });

  it('should render submit in a button tag', () => {
    const fixture = TestBed.createComponent(AddProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Submit');
  });


});
