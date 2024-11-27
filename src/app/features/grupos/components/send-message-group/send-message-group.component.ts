import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GruposService } from '../../service/grupos.service';

@Component({
  selector: 'app-send-message-group',
  templateUrl: './send-message-group.component.html',
  styleUrls: ['./send-message-group.component.scss']
})
export class SendMessageGroupComponent implements OnInit {

  message!: string;
  groupName!: string;
  groupId!: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private matDialogRef: MatDialogRef<SendMessageGroupComponent>,
    private service: GruposService
  ) {
    this.groupName = data.nome;
    this.groupId = data.id;
  }

  ngOnInit(): void {
  }

  save() {
    const payload = {
      message: this.message,
    };

    this.service.sendBotMessage(this.groupId, payload).subscribe({
      next: (response) => {
      }
    });
  }

}
