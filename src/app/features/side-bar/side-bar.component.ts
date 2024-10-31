import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  links = [
    { path: 'grupos', label: 'Grupos' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
