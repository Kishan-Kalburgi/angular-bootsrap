import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material';

export interface PeriodicElement {
  billNo: number;
  customerName: string;
  orderDate: string;
  deliveryDate: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    billNo: 1,
    customerName: 'Ole Bucher',
    orderDate: '8/22/2018',
    deliveryDate: '7/3/2018',
    status: 'todo'
  },
  {
    billNo: 2,
    customerName: 'Iolande Smeaton',
    orderDate: '6/27/2018',
    deliveryDate: '4/4/2018',
    status: 'todo'
  },
  {
    billNo: 3,
    customerName: 'Dennie Freestone',
    orderDate: '4/5/2018',
    deliveryDate: '8/12/2018',
    status: 'todo'
  },
  {
    billNo: 4,
    customerName: 'Gussy Yashnov',
    orderDate: '5/27/2018',
    deliveryDate: '6/22/2018',
    status: 'todo'
  },
  {
    billNo: 5,
    customerName: 'Paxton Vinck',
    orderDate: '10/1/2018',
    deliveryDate: '3/15/2018',
    status: 'todo'
  },
  {
    billNo: 6,
    customerName: 'Seline McKeever',
    orderDate: '7/28/2018',
    deliveryDate: '1/23/2019',
    status: 'todo'
  },
  {
    billNo: 7,
    customerName: 'Brook Storer',
    orderDate: '5/29/2018',
    deliveryDate: '1/29/2019',
    status: 'todo'
  },
  {
    billNo: 8,
    customerName: 'Enrique Selly',
    orderDate: '10/27/2018',
    deliveryDate: '9/15/2018',
    status: 'todo'
  },
  {
    billNo: 9,
    customerName: 'Riordan Passo',
    orderDate: '12/23/2018',
    deliveryDate: '5/27/2018',
    status: 'todo'
  },
  {
    billNo: 10,
    customerName: 'Bathsheba Mottley',
    orderDate: '2/22/2018',
    deliveryDate: '3/1/2018',
    status: 'todo'
  },
  {
    billNo: 11,
    customerName: 'Fransisco Bayly',
    orderDate: '11/23/2018',
    deliveryDate: '4/16/2018',
    status: 'todo'
  },
  {
    billNo: 12,
    customerName: 'Hulda Babon',
    orderDate: '4/26/2018',
    deliveryDate: '6/26/2018',
    status: 'todo'
  },
  {
    billNo: 13,
    customerName: 'Rachelle Pietesch',
    orderDate: '5/27/2018',
    deliveryDate: '5/11/2018',
    status: 'todo'
  },
  {
    billNo: 14,
    customerName: 'York Pearce',
    orderDate: '12/10/2018',
    deliveryDate: '5/24/2018',
    status: 'todo'
  },
  {
    billNo: 15,
    customerName: 'Vinson Dayborne',
    orderDate: '6/18/2018',
    deliveryDate: '8/10/2018',
    status: 'todo'
  },
  {
    billNo: 16,
    customerName: 'Akim Fattorini',
    orderDate: '9/16/2018',
    deliveryDate: '7/7/2018',
    status: 'todo'
  },
  {
    billNo: 17,
    customerName: 'Josephine Geyton',
    orderDate: '4/17/2018',
    deliveryDate: '5/7/2018',
    status: 'todo'
  },
  {
    billNo: 18,
    customerName: 'Wren Haveline',
    orderDate: '12/6/2018',
    deliveryDate: '2/14/2019',
    status: 'todo'
  },
  {
    billNo: 19,
    customerName: 'Christiana Licquorish',
    orderDate: '3/23/2018',
    deliveryDate: '1/30/2019',
    status: 'todo'
  },
  {
    billNo: 20,
    customerName: 'Chiquia Nudds',
    orderDate: '3/25/2018',
    deliveryDate: '4/26/2018',
    status: 'todo'
  },
  {
    billNo: 21,
    customerName: 'Wolf Mayfield',
    orderDate: '2/3/2019',
    deliveryDate: '10/4/2018',
    status: 'todo'
  },
  {
    billNo: 22,
    customerName: 'Briggs Ceney',
    orderDate: '7/31/2018',
    deliveryDate: '1/17/2019',
    status: 'todo'
  },
  {
    billNo: 23,
    customerName: 'Berny McAloren',
    orderDate: '9/24/2018',
    deliveryDate: '1/23/2019',
    status: 'todo'
  },
  {
    billNo: 24,
    customerName: 'Miguel Cronkshaw',
    orderDate: '9/29/2018',
    deliveryDate: '3/11/2018',
    status: 'todo'
  },
  {
    billNo: 25,
    customerName: 'Garrott Hubball',
    orderDate: '11/1/2018',
    deliveryDate: '12/2/2018',
    status: 'todo'
  },
  {
    billNo: 26,
    customerName: 'Kristy Goodridge',
    orderDate: '11/11/2018',
    deliveryDate: '3/16/2018',
    status: 'todo'
  },
  {
    billNo: 27,
    customerName: 'Benita Bogaert',
    orderDate: '12/19/2018',
    deliveryDate: '1/11/2019',
    status: 'started'
  },
  {
    billNo: 28,
    customerName: 'Nikola Lamberton',
    orderDate: '12/27/2018',
    deliveryDate: '10/3/2018',
    status: 'started'
  },
  {
    billNo: 29,
    customerName: 'Margaux Rawson',
    orderDate: '10/12/2018',
    deliveryDate: '8/12/2018',
    status: 'started'
  },
  {
    billNo: 30,
    customerName: 'Gifford Colyer',
    orderDate: '10/25/2018',
    deliveryDate: '10/2/2018',
    status: 'started'
  },
  {
    billNo: 31,
    customerName: 'Zerk Gilbeart',
    orderDate: '12/22/2018',
    deliveryDate: '4/18/2018',
    status: 'started'
  },
  {
    billNo: 32,
    customerName: 'Gearalt Bavin',
    orderDate: '9/20/2018',
    deliveryDate: '5/27/2018',
    status: 'started'
  },
  {
    billNo: 33,
    customerName: 'Lorinda Odde',
    orderDate: '11/14/2018',
    deliveryDate: '3/26/2018',
    status: 'started'
  },
  {
    billNo: 34,
    customerName: 'Frederich Dran',
    orderDate: '7/3/2018',
    deliveryDate: '11/6/2018',
    status: 'started'
  },
  {
    billNo: 35,
    customerName: 'Sean Divver',
    orderDate: '5/19/2018',
    deliveryDate: '7/21/2018',
    status: 'started'
  },
  {
    billNo: 36,
    customerName: 'Garth Elia',
    orderDate: '10/14/2018',
    deliveryDate: '12/15/2018',
    status: 'started'
  },
  {
    billNo: 37,
    customerName: 'Kalie Hubbins',
    orderDate: '11/8/2018',
    deliveryDate: '5/26/2018',
    status: 'started'
  },
  {
    billNo: 38,
    customerName: 'Nickolai Duer',
    orderDate: '12/25/2018',
    deliveryDate: '8/28/2018',
    status: 'started'
  },
  {
    billNo: 39,
    customerName: 'Brandais Paull',
    orderDate: '2/14/2019',
    deliveryDate: '7/17/2018',
    status: 'started'
  },
  {
    billNo: 40,
    customerName: 'Gibb Mewett',
    orderDate: '8/30/2018',
    deliveryDate: '6/15/2018',
    status: 'started'
  },
  {
    billNo: 41,
    customerName: 'Karlen Rennicks',
    orderDate: '12/26/2018',
    deliveryDate: '4/12/2018',
    status: 'started'
  },
  {
    billNo: 42,
    customerName: 'Victoir Touzey',
    orderDate: '5/28/2018',
    deliveryDate: '7/22/2018',
    status: 'started'
  },
  {
    billNo: 43,
    customerName: 'Bail Jeffcoat',
    orderDate: '11/12/2018',
    deliveryDate: '6/30/2018',
    status: 'started'
  },
  {
    billNo: 44,
    customerName: 'Ginger Nestoruk',
    orderDate: '6/20/2018',
    deliveryDate: '1/30/2019',
    status: 'started'
  },
  {
    billNo: 45,
    customerName: 'Toni Mullins',
    orderDate: '6/21/2018',
    deliveryDate: '11/2/2018',
    status: 'started'
  },
  {
    billNo: 46,
    customerName: 'Kendrick Prin',
    orderDate: '12/16/2018',
    deliveryDate: '10/11/2018',
    status: 'started'
  },
  {
    billNo: 47,
    customerName: 'Mira Juorio',
    orderDate: '7/22/2018',
    deliveryDate: '12/24/2018',
    status: 'started'
  },
  {
    billNo: 48,
    customerName: 'Erasmus Cristofolo',
    orderDate: '3/17/2018',
    deliveryDate: '5/14/2018',
    status: 'started'
  },
  {
    billNo: 49,
    customerName: 'Melva Pygott',
    orderDate: '11/7/2018',
    deliveryDate: '5/15/2018',
    status: 'started'
  },
  {
    billNo: 50,
    customerName: 'Brynne Cursons',
    orderDate: '11/15/2018',
    deliveryDate: '7/15/2018',
    status: 'started'
  },
  {
    billNo: 51,
    customerName: 'Abran Newens',
    orderDate: '1/26/2019',
    deliveryDate: '12/28/2018',
    status: 'started'
  },
  {
    billNo: 52,
    customerName: 'Hephzibah Coulthard',
    orderDate: '7/5/2018',
    deliveryDate: '8/4/2018',
    status: 'started'
  },
  {
    billNo: 53,
    customerName: 'Conway Ratie',
    orderDate: '9/15/2018',
    deliveryDate: '2/10/2019',
    status: 'started'
  },
  {
    billNo: 54,
    customerName: 'Winne Culley',
    orderDate: '5/4/2018',
    deliveryDate: '7/22/2018',
    status: 'ready'
  },
  {
    billNo: 55,
    customerName: 'Erinn Culmer',
    orderDate: '5/8/2018',
    deliveryDate: '7/30/2018',
    status: 'ready'
  },
  {
    billNo: 56,
    customerName: 'Haslett Sloyan',
    orderDate: '1/15/2019',
    deliveryDate: '3/9/2018',
    status: 'ready'
  },
  {
    billNo: 57,
    customerName: 'Corliss Petroselli',
    orderDate: '1/25/2019',
    deliveryDate: '4/9/2018',
    status: 'ready'
  },
  {
    billNo: 58,
    customerName: 'Rubie Travers',
    orderDate: '7/8/2018',
    deliveryDate: '6/11/2018',
    status: 'ready'
  },
  {
    billNo: 59,
    customerName: 'Eleanor Staff',
    orderDate: '9/3/2018',
    deliveryDate: '8/28/2018',
    status: 'ready'
  },
  {
    billNo: 60,
    customerName: 'Sherwynd Haydney',
    orderDate: '10/21/2018',
    deliveryDate: '4/2/2018',
    status: 'ready'
  },
  {
    billNo: 61,
    customerName: 'Jillian Guillet',
    orderDate: '7/7/2018',
    deliveryDate: '11/8/2018',
    status: 'ready'
  },
  {
    billNo: 62,
    customerName: 'Chas Caves',
    orderDate: '8/11/2018',
    deliveryDate: '8/15/2018',
    status: 'ready'
  },
  {
    billNo: 63,
    customerName: 'Cullen Lobb',
    orderDate: '1/11/2019',
    deliveryDate: '12/7/2018',
    status: 'ready'
  },
  {
    billNo: 64,
    customerName: 'Bob Seamons',
    orderDate: '10/5/2018',
    deliveryDate: '12/4/2018',
    status: 'ready'
  },
  {
    billNo: 65,
    customerName: 'Zorana Byron',
    orderDate: '12/31/2018',
    deliveryDate: '8/14/2018',
    status: 'ready'
  },
  {
    billNo: 66,
    customerName: 'Bay Dragoe',
    orderDate: '6/9/2018',
    deliveryDate: '1/4/2019',
    status: 'ready'
  },
  {
    billNo: 67,
    customerName: 'Remus Nutman',
    orderDate: '2/22/2018',
    deliveryDate: '9/24/2018',
    status: 'ready'
  },
  {
    billNo: 68,
    customerName: 'Ronnica Stone Fewings',
    orderDate: '5/19/2018',
    deliveryDate: '4/29/2018',
    status: 'ready'
  },
  {
    billNo: 69,
    customerName: 'Sammy Eilhersen',
    orderDate: '5/22/2018',
    deliveryDate: '12/14/2018',
    status: 'ready'
  },
  {
    billNo: 70,
    customerName: 'Rachael Copeland',
    orderDate: '1/8/2019',
    deliveryDate: '12/3/2018',
    status: 'ready'
  },
  {
    billNo: 71,
    customerName: 'Seymour Webby',
    orderDate: '1/13/2019',
    deliveryDate: '5/24/2018',
    status: 'delivered'
  },
  {
    billNo: 72,
    customerName: 'Lesli Verbeke',
    orderDate: '7/11/2018',
    deliveryDate: '12/10/2018',
    status: 'delivered'
  },
  {
    billNo: 73,
    customerName: 'Arlen Scudder',
    orderDate: '5/30/2018',
    deliveryDate: '4/26/2018',
    status: 'delivered'
  },
  {
    billNo: 74,
    customerName: 'Anselm Gemmill',
    orderDate: '7/7/2018',
    deliveryDate: '4/22/2018',
    status: 'delivered'
  },
  {
    billNo: 75,
    customerName: 'Lesya Unworth',
    orderDate: '4/10/2018',
    deliveryDate: '11/17/2018',
    status: 'delivered'
  },
  {
    billNo: 76,
    customerName: 'Nora Tithacott',
    orderDate: '1/25/2019',
    deliveryDate: '3/2/2018',
    status: 'delivered'
  },
  {
    billNo: 77,
    customerName: 'Randa Kilius',
    orderDate: '5/6/2018',
    deliveryDate: '4/14/2018',
    status: 'delivered'
  },
  {
    billNo: 78,
    customerName: 'Ashbey Payn',
    orderDate: '12/14/2018',
    deliveryDate: '2/26/2018',
    status: 'delivered'
  },
  {
    billNo: 79,
    customerName: 'Hermann McCreery',
    orderDate: '11/9/2018',
    deliveryDate: '7/27/2018',
    status: 'delivered'
  },
  {
    billNo: 80,
    customerName: 'Bambie Giabucci',
    orderDate: '2/12/2019',
    deliveryDate: '7/14/2018',
    status: 'delivered'
  },
  {
    billNo: 81,
    customerName: 'Erie Gigg',
    orderDate: '2/3/2019',
    deliveryDate: '11/26/2018',
    status: 'delivered'
  },
  {
    billNo: 82,
    customerName: 'Madeline Kibbel',
    orderDate: '5/1/2018',
    deliveryDate: '2/1/2019',
    status: 'delivered'
  },
  {
    billNo: 83,
    customerName: 'Genny Glisane',
    orderDate: '12/13/2018',
    deliveryDate: '3/3/2018',
    status: 'delivered'
  },
  {
    billNo: 84,
    customerName: 'Cornelia Hulse',
    orderDate: '2/5/2019',
    deliveryDate: '9/2/2018',
    status: 'delivered'
  },
  {
    billNo: 85,
    customerName: 'Ware Scrivens',
    orderDate: '2/24/2018',
    deliveryDate: '10/14/2018',
    status: 'delivered'
  },
  {
    billNo: 86,
    customerName: 'Godfry Littlepage',
    orderDate: '9/17/2018',
    deliveryDate: '5/28/2018',
    status: 'delivered'
  },
  {
    billNo: 87,
    customerName: 'Lacee De Hooge',
    orderDate: '1/22/2019',
    deliveryDate: '1/13/2019',
    status: 'delivered'
  },
  {
    billNo: 88,
    customerName: 'Ty Jordan',
    orderDate: '1/27/2019',
    deliveryDate: '12/23/2018',
    status: 'delivered'
  },
  {
    billNo: 89,
    customerName: 'Terri Crane',
    orderDate: '12/13/2018',
    deliveryDate: '2/5/2019',
    status: 'delivered'
  },
  {
    billNo: 90,
    customerName: 'Derrik Fagan',
    orderDate: '12/12/2018',
    deliveryDate: '7/28/2018',
    status: 'delivered'
  },
  {
    billNo: 91,
    customerName: 'Samaria Poynor',
    orderDate: '5/27/2018',
    deliveryDate: '3/27/2018',
    status: 'delivered'
  },
  {
    billNo: 92,
    customerName: 'Sloan Sloat',
    orderDate: '4/27/2018',
    deliveryDate: '10/28/2018',
    status: 'delivered'
  },
  {
    billNo: 93,
    customerName: 'Kenyon Sich',
    orderDate: '8/25/2018',
    deliveryDate: '2/15/2019',
    status: 'delivered'
  },
  {
    billNo: 94,
    customerName: 'Timofei Jurczik',
    orderDate: '8/23/2018',
    deliveryDate: '3/14/2018',
    status: 'delivered'
  },
  {
    billNo: 95,
    customerName: 'Freddy Addenbrooke',
    orderDate: '3/27/2018',
    deliveryDate: '4/11/2018',
    status: 'delivered'
  },
  {
    billNo: 96,
    customerName: 'Virginia Willshear',
    orderDate: '6/22/2018',
    deliveryDate: '6/5/2018',
    status: 'delivered'
  },
  {
    billNo: 97,
    customerName: 'Flss Jacobsz',
    orderDate: '9/11/2018',
    deliveryDate: '9/9/2018',
    status: 'delivered'
  },
  {
    billNo: 98,
    customerName: 'Doralia Flye',
    orderDate: '9/23/2018',
    deliveryDate: '7/10/2018',
    status: 'delivered'
  },
  {
    billNo: 99,
    customerName: 'Dolores Syddon',
    orderDate: '10/20/2018',
    deliveryDate: '5/9/2018',
    status: 'delivered'
  },
  {
    billNo: 100,
    customerName: 'Bee Frederick',
    orderDate: '12/19/2018',
    deliveryDate: '6/13/2018',
    status: 'delivered'
  }
];

@Component({
  selector: 'app-admin-main-content',
  templateUrl: './admin-main-content.component.html',
  styleUrls: ['./admin-main-content.component.css']
})

export class AdminMainContentComponent implements OnInit {

  pageTitle = 'ALL';
  constructor() { }

  displayedColumns: string[] = ['billNo', 'customerName', 'orderDate', 'deliveryDate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    if (filterValue === '') {
      this.pageTitle = 'ALL';
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } else {
      this.pageTitle = filterValue.toLocaleUpperCase();
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}
