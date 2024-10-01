import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  @Input() headerTitle!: string;
  @Input() headerIcon!: string;
  @Input() headerAction!: string;

  @Output() buttonClick = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
