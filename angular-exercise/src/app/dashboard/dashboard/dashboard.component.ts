import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from "../../core/services/api.service";
import { DummyData } from "../../core/model/dummyData";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private apiService: ApiService
  ) { }

  displayedColumns: string[] = ["avatar","first_name", "last_name", "email"];
  dataSource: any;
  elementData: DummyData[] = [];

  ngOnInit(): void {
    this.getDashboardSampleData();
  }

  getDashboardSampleData() {
    this.apiService.getRequest('https://reqres.in/api/users?page=1')//This link may be a temporary one. Not sure.
      .subscribe(
        (response) => {
          console.log(response)
          this.elementData = response.data;
          this.dataSource = new MatTableDataSource<any>(this.elementData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        (error) => {
          console.log(error);
        }
      );
  }
  filter(event){
    this.dataSource.filter = event.currentTarget.value.trim().toLowerCase();
  }

}
