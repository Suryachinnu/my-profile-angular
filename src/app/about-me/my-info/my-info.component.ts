import { Component, OnInit } from '@angular/core';
import { Hobby, Interest, User } from 'src/app/_models';
import {forkJoin} from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from 'src/app/repositories/myinfo.repository.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent implements OnInit {
  user: User;
  hobbies: Hobby[] = [];
  interest: Interest[] = [];
  userForm: FormGroup;
  constructor(private ApiService: RepositoryService, private fb: FormBuilder, ) { }


  ngOnInit(): void {
    const calls = [];
    calls.push(this.ApiService.getUserDetails());
    calls.push(this.ApiService.getUserHobbies());
    calls.push(this.ApiService.getUserInterests());
    forkJoin(calls).subscribe(([user, hobbies, interests]: [User, Hobby[], Interest[]]) => {
        this.user = user;
        this.hobbies = hobbies;
        this.interest = interests;
        this.userForm.patchValue(user);
    });
    this.userForm = this.fb.group({
      name: new FormControl(''),
      qualification: new FormControl(''),
      designation: new FormControl(''),
      experience: new FormControl(''),
      company: new FormControl('')
    });


  }

}
