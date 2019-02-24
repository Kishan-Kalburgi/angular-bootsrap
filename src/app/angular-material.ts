import { NgModule } from '@angular/core';
import {
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSelectModule
    ],
    exports: [
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSelectModule
    ]
})
export class AngularMaterial { }
