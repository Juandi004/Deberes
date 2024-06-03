import { Component } from '@angular/core';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { ApiService } from '../../services/api.service';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [
    NzFormItemComponent,
    NzFormDirective,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzColDirective,
    ReactiveFormsModule,
    NzInputDirective,
    NzDatePickerComponent,
    NzButtonComponent,
    NzInputNumberComponent
  ],
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent {
  createForm: FormGroup<{
    productName: FormControl<string>;
    description: FormControl<string>;
    quantityInStock: FormControl<number>;
    unitPrice: FormControl<number>;
  }>;

  editForm: FormGroup<{
    productNameSearch: FormControl<string>;
    editedPrice: FormControl<number>;
    editQuantityInStock: FormControl<number>;
  }>;

  constructor(
    private fb: NonNullableFormBuilder,
    private apiService: ApiService,
    private notification: NzNotificationService
  ) {
    const { required } = Validators;
    this.createForm = this.fb.group({
      productName: ['', [required]],
      description: ['', [required]],
      quantityInStock: [0, [required]],
      unitPrice: [0, [required]]
    });

    this.editForm = this.fb.group({
      productNameSearch: ['', [required]],
      editedPrice: [0, [required]],
      editQuantityInStock: [0, [required]],
    });
  }

  submitCreateForm(): void {
    if (this.createForm.valid) {
      console.log('submit', this.createForm.value);
      this.apiService.create(this.createForm.value).subscribe({
        next: () => {
          this.createNotification('success', `${this.createForm.value.productName}`, 'El producto ha sido creado correctamente');
          this.createForm.reset();
        },
        error: (err) => {
          console.error('Error al crear el producto', err);
          this.createNotification('error', 'Error', 'Hubo un problema al crear el producto.');
        }
      });
    } else {
      Object.values(this.createForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  submitEditForm(): void {
    if (this.editForm.valid) {
      const productName = this.editForm.get('productNameSearch')?.value; 
      if (productName) {
        this.apiService.findByName(productName).subscribe({
          next: (products) => {
            if (products.length > 0) {
              const product = products[0];
              const productId = product.id;
              const updatedProduct = {
                ...product,
                price: this.editForm.get('editedPrice')?.value,
                quantityInStock: this.editForm.get('editQuantityInStock')?.value,
              };
              this.apiService.update(productId, updatedProduct).subscribe({
                next: () => {
                  this.createNotification('success', 'Producto editado', '¡El producto ha sido editado exitosamente!');
                  this.editForm.reset();
                },
                error: (err) => {
                  console.error('Error al editar el producto', err);
                  this.createNotification('error', 'Error', 'Hubo un problema al editar el producto.');
                }
              });
            } else {
              this.createNotification('error', 'Producto no encontrado', 'No se encontró un producto con ese nombre.');
            }
          },
          error: (err) => {
            console.error('Error al buscar el producto', err);
            this.createNotification('error', 'Error', 'Hubo un problema al buscar el producto.');
          }
        });
      }
    } else {
      Object.values(this.editForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }
}
