import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpResponse ,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }
  

}
