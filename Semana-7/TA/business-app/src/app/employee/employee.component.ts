import { Component, Input } from '@angular/core';
import { Order } from '../order.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  @Input() order!: Order;
}
