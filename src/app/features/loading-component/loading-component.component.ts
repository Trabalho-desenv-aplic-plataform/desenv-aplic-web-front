import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.css']
})
export class LoadingComponentComponent implements OnInit {
  @Input() isLoading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
