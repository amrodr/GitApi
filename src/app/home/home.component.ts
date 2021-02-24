
import { Component, OnInit } from '@angular/core';
import { Userlist } from '../model/userlist.model';
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  data: Userlist['id'];
  login: any;

  constructor(private _UserListService: UserListService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this._UserListService.getUsers().subscribe(
      data => {
        this.data = data
      }, error => {}
    )
  }

}
