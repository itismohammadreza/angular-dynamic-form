import {Component, OnInit} from '@angular/core';
import {FieldItem} from "./dynamic-form/field-item.model";
import {FieldService} from "./services/field.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fields: FieldItem[] = [];

  constructor(private fieldService: FieldService) {
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    try {
      this.fields = await this.fieldService.getFields();
    } catch (e) {
      console.error(e)
    }
  }
}
