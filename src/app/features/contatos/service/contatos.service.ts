import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbastractApiService } from "src/shared/services/abastract-api.service";

@Injectable({
    providedIn: 'root'
})
export class ContatosService extends AbastractApiService<any, any> {
    
    constructor(
        protected override http: HttpClient
    )   {
        super(http);
        this.entity = "contatos";
    }
}