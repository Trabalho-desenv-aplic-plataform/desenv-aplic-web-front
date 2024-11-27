import { ComponentType } from '@angular/cdk/portal';
import { Injectable, Optional } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  // O optional vai impedir o erro de injeção de dependência
  constructor(@Optional() private dialog: MatDialog) { }

  openGenericDialog<T>(
    cmp: ComponentType<T>,
    cfg?: MatDialogConfig
  ): MatDialogRef<any> {
    const baseOptions = {
      autofocus: false,
      disableClod: true,
      minWidth: '40vw',
      minHeight: '80vh',
      panelClass: 'position-relative',
      data: cfg
    }

    return this.dialog?.open(cmp, {
      ...baseOptions
    });
  }
}
