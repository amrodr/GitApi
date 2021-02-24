import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-description-modal',
  templateUrl: './description-modal.component.html',
  styleUrls: ['./description-modal.component.scss']
})
export class DescriptionModalComponent implements OnInit {

  @Input() data: any;
  @ViewChild('theModal') theModal: any;
  type = 0;
  items;
  objectId;
  login;
  repo;
  followers;
  createDate;


  constructor(private modalService: NgbModal, private _UserListService: UserListService) { }

  ngOnInit(): void {
  }

  showModal(id) {
    const objectId = id;
    this.items = this.data.find(obj => obj.id == objectId);
    this.login = this.items.login

    this.getDate()
    this.getFollowers()
    this.getRepo()
    this.modalService.open(this.theModal, { size: 'sm', backdrop: 'static' });
  }

  getRepo() {
    this._UserListService.getRepo(this.login).subscribe(
      data => {
        this.repo = data.length
      }, error => { }
    )
  }

  getFollowers() {
    this._UserListService.getFollowers(this.login).subscribe(
      data => {
        this.followers = data.length
      }, error => { }
    )
  }

  getDate() {
    this._UserListService.getDate(this.login).subscribe(
      data => {
        this.createDate = data
      }, error => { }
    )
  }

}
