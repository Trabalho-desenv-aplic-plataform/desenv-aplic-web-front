import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Column } from '../interfaces/column';
import { Actions } from '../interfaces/actions';
import { PageEvent } from '@angular/material/paginator';
import { ActionClickEvent } from '../interfaces/action-click-event';
import { Subject } from 'rxjs';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort as MaterialSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, OnDestroy {
  
  @ViewChild(MatTable) table!: MatTable<any>;

  @Input() columns!: Column[];
  @Input() pagination: boolean = true;
  @Input() actions: Actions[] = [];
  @Input() rows: number[] = [];
  @Input() pageSize = 10;
  @Input() totalElements = 0;
  @Input() pageIndex = 0;
  @Input() header: boolean = true;
  
  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() actionClick = new EventEmitter<ActionClickEvent>();
  @Output() sortChange = new EventEmitter<Sort>();

  dataSource!: MatTableDataSource<any>;
  menuIndex: number | undefined = undefined;
  rightActions: Actions[] = [];
  footers: string[] = [];
  headers!: string[];
  displayedColumns!: string[];
  detailExpanseIndex: number | undefined = undefined;

  private destroy$ = new Subject();

  constructor() {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.createTable();
  }

  onSortChange(event: MaterialSort) {
    this.menuIndex = undefined;
    this.sortChange.emit(event);
  }

  onActionClick($event: any) {
    this.actionClick.emit($event)
  }

  private createTable() {
    this.displayedColumns = this.columns.map((column) => column.name);
    let headers: string[] = [];
    headers.push(...this.displayedColumns);

    this.headers = headers;
    this.dataSource.data = this.rows || [];

    if (this.table) {
      this.updateTable();
    } 
  }

  private updateTable() {
    this.table.renderRows();
    this.detailExpanseIndex = undefined;
  }
}
