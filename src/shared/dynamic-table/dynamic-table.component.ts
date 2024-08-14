import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Column } from '../interfaces/column';
import { Actions } from '../interfaces/actions';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActionClickEvent } from '../interfaces/action-click-event';
import { Subject } from 'rxjs';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort as MaterialSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, OnDestroy, OnChanges {
  
  // @ViewChild(MatTable) table!: MatTable<any>;

  @Input() displayedColumns: Column[] = [];
  @Input() data: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  // @Input() columns!: Column[];
  // @Input() pagination: boolean = true;
  @Input() actions: Actions[] = [];
  @Input() header: boolean = true;
  headers!: string[];

  // @Input() rows: number[] = [];
  // @Input() pageSize = 10;
  // @Input() totalElements = 0;
  // @Input() pageIndex = 0;
  // @Input() header: boolean = true;
  
  // @Output() pageChange = new EventEmitter<PageEvent>();
  // @Output() actionClick = new EventEmitter<ActionClickEvent>();
  // @Output() sortChange = new EventEmitter<Sort>();

  dataSource!: MatTableDataSource<any>;
  columns: any = [];
  rightActions: Actions[] = [];
  public actionColumnName = 'actions';
  // menuIndex: number | undefined = undefined;
  // footers: string[] = [];
  // headers!: string[];
  // displayedColumns!: string[];
  // detailExpanseIndex: number | undefined = undefined;

  private destroy$ = new Subject();

  constructor() {
    // this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnChanges(changes: SimpleChanges): void {  
    // if (changes['rows']) {
    //   this.rows = changes['rows'].currentValue;
    //   this.dataSource.data = changes['rows'].currentValue;
    //   if (this.table) {
    //     this.updateTable();
    //   }
    // }
    // if (changes['columns']) {
    //   this.createTable();
    // }
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.columns = this.displayedColumns.map(c => c.name);
    this.columns.push(this.actionColumnName);
  }

  onSortChange(event: MaterialSort) {
    // this.menuIndex = undefined;
    // this.sortChange.emit(event);
  }

  onActionClick($event: any) {
    // this.actionClick.emit($event)
  }

  private createTable() {
    // this.displayedColumns = this.columns.map((column) => column.name);
    let headers: string[] = [];
    // headers.push(...this.displayedColumns);

    this.headers = headers;
    this.dataSource.data = this.data || [];
    if (this.actions.length > 0) headers.push('actions');
    // if (this.table) {
    //   this.updateTable();
    // } 
  }

  // private updateTable() {
  //   this.table.renderRows();
  //   this.detailExpanseIndex = undefined;
  // }
}
