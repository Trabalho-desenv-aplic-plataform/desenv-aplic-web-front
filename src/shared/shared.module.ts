import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DynamicTableModule } from './dynamic-table/dynamic-table.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BaseLayoutComponent } from './base-layout/base-layout.component';

@NgModule({
  declarations: [
    DynamicTableComponent,
    BaseLayoutComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule 
  ],
  exports: [
    DynamicTableComponent,
    BaseLayoutComponent,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
