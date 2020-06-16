import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  selectedItem;

  menuItems = [
    new MenuItem('Pizza', 'Super tasty meal from Italy', false, 32),
    new MenuItem('Burger', 'Super tasty meal from Usa', false, 27),
    new MenuItem('Ramen', 'Super tasty meal from Japan', false, 33),
    new MenuItem('Pad Thai', 'Super tasty meal from Thailand', false, 25),
  ];

  constructor() { }

  ngOnInit(): void {
    this.selectedItem = this.menuItems[0];
  }

  selectMenuItem(menuItem: MenuItem) {
    this.selectedItem = menuItem;
  }
}
