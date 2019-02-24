import { Component, OnInit } from '@angular/core';
import { InventomryModel } from 'src/app/model/inventory.model';
import { NgForm } from '@angular/forms';
import { Service } from 'src/app/service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  status: string;
  data: InventomryModel;
  errorMsg = false;

  constructor(
    private dataService: Service,
    private router: Router,
    private route: ActivatedRoute) {
    this.data = new InventomryModel();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.getInventory(paramMap.get('id'));
      }
    });
  }

  getInventory(id) {
    this.dataService.getByid(id)
      .subscribe((_data) => {
        this.data = _data['data'];
        console.log(this.data);
      });
  }

  onSave(formData: NgForm) {
    if (formData.valid) {
      formData.value.status = this.status;
      console.log(formData.value);
      this.dataService.saveBill(formData.value)
        .subscribe(res => {
          console.log(res);
          this.router.navigate(['/inventory']);
        },
          err => {
            console.log(err);
          });
    } else {
      console.log('fail');
      this.errorMsg = true;
    }
  }

}
