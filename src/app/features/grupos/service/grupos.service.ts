import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AbastractApiService } from 'src/shared/services/abastract-api.service';

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
}
