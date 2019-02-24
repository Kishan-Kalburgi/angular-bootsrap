import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material';
import { Service } from 'src/app/service.service';
import { InventomryModel } from 'src/app/model/inventory.model';
import { Router } from '@angular/router';

export interface PeriodicElement {
  billNo: number;
  customerName: string;
  orderDate: string;
  deliveryDate: string;
  status: string;
}

@Component({
  selector: 'app-admin-main-content',
  templateUrl: './admin-main-content.component.html',
  styleUrls: ['./admin-main-content.component.css']
})

export class AdminMainContentComponent implements OnInit {

  pageTitle = 'ALL';
  // to hold all bills
  INVENTORY: InventomryModel[] = [];

  constructor(
    private dataService: Service,
    private router: Router) { }

  displayedColumns: string[] = ['customerName', 'phoneNumber', 'orderDate', 'deliveryDate'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.fetchDate();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // function to fetch Data
  fetchDate() {
    this.dataService.getAllBills().subscribe((data: InventomryModel[]) => {
      this.INVENTORY = data['data'];
      this.dataSource = new MatTableDataSource(this.INVENTORY);
      console.log('data was fetched');
      // this.filterData();
    });
  }

  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyBtnFilter(filterValue: string) {
    if (filterValue === '') {
      this.pageTitle = 'ALL';
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } else {
      this.pageTitle = filterValue.toLocaleUpperCase();
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  onRowClick(rowData) {
    this.router.navigate(['/editInventory', rowData._id]);
  }
}
