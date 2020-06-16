import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../model/menu-item';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  @Input()
  selectedItem: MenuItem;

  constructor() { }

  ngOnInit(): void {
  }

}
