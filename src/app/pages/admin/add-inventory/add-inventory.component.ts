import { Component, OnInit } from '@angular/core';
import { InventomryModel } from 'src/app/model/inventory.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  data: InventomryModel;
  errorMsg = false;

  constructor() {
    this.data = new InventomryModel();
  }

  ngOnInit() {
  }

  onSave(formData: NgForm) {
    if (formData.valid) {
      console.log(formData.value);
    } else {
      console.log('fail');
      this.errorMsg = true;
    }
  }

}
