import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AbastractApiService } from 'src/shared/services/abastract-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GruposService extends AbastractApiService<any, any> {

  constructor(
    protected override http: HttpClient
  ) {
    super(http);
    this.entity = "grupos";
  }

  sendBotMessage(groupId: number, message: {}): Observable<any> {
    return this.http.post(`${this.baseUrl}/bot/send-message/${groupId}`, message);
  }
}
