import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[] ;
  constructor( private userService: UserService,) { }

  ngOnInit() {
    // this.userService.getUsers()
    //   .subscribe( data => {
    //     this.users = data;
    //   });
  }

}
