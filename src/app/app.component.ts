import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Productos', url: '/home', icon: 'storefront' },
    { title: 'Carrito', url: '/carrito', icon: 'cart' },
    { title: 'Mis pedido', url: '/pedidos', icon: 'gift' }
  ];
  constructor() { }
}
