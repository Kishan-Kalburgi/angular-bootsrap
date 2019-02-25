import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InventomryModel } from './model/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) { }

  // get all bills information
  getAllBills() {
    //   http call
    return this.http.get('http://localhost:3000/bill/all');
    // return this.http.get('https://ufixibreak.herokuapp.com/bill/all');
  }

  // get bill information by id
  getByid(data) {
    //   http call
    return this.http.get('http://localhost:3000/bill/byid/' + data);
    // return this.http.get('https://ufixibreak.herokuapp.com/bill/byid/' + data);
  }

  // save bill
  saveBill(data: InventomryModel) {
    // http call
    return this.http.post('http://localhost:3000/bill/add', data);
    // return this.http.post('https://ufixibreak.herokuapp.com/bill/add', data);
  }

  // update bill
  updateBill(data: InventomryModel) {
    // http call
    return this.http.put('http://localhost:3000/bill/edit', data);
    // return this.http.put('https://ufixibreak.herokuapp.com/bill/edit', data);
  }

  // delete bill
  deleteBill(data) {
    // http call
    return this.http.put('http://localhost:3000/bill/delete', data);
    // return this.http.put('https://ufixibreak.herokuapp.com/bill/delete', data);
  }
}
