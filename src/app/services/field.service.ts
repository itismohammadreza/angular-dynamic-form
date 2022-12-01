import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {FieldItem} from "../dynamic-form/field-item.model";

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  constructor(private http: HttpClient) {
  }

  getFields(): Promise<FieldItem[]> {
    return lastValueFrom(this.http.get<FieldItem[]>('/assets/to-render.json'))
  }
}
