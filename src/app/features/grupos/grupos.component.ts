import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/shared/services/dialog-service.service';
import { AddEditGruposComponent } from './components/add-edit-grupos/add-edit-grupos.component';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }


  onButtonClick() {
    this.dialogService.openGenericDialog(AddEditGruposComponent, {

    });
  }

}
