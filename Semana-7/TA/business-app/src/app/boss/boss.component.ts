import { Component } from '@angular/core';
import { Order } from '../order.model';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.scss']
})
export class BossComponent {
  orders: Order[] = [];
  newOrderDescription: string = '';

  addOrder() {
    if (this.newOrderDescription.trim()) {
      const newOrder: Order = {
        id: this.orders.length + 1,
        description: this.newOrderDescription
      };
      this.orders.push(newOrder);
      this.newOrderDescription = '';
    }
  }
}
