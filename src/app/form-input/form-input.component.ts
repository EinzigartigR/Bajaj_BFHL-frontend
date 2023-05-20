import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../service/task.service';


@Component({
  selector: 'app-basic-det',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})

export class FormInputComponent implements OnInit {
  formInputForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private taskservice: TaskService, private router: Router) {
    this.formInputForm = this.formBuilder.group({
      firstname: ["", Validators.compose([Validators.required])],
      lastname: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required])],
      gender: ["", Validators.compose([Validators.required])],
      phone: ["", Validators.compose([Validators.required])],
      dob: ["", Validators.compose([Validators.required])]
      
    });
  }
  ngOnInit() {

  }
  onSubmit() {
    const payload = {
      status: "Completed",
      userid: "831",
      college_email: "ar7150@srmist.edu.in",
      college_roll: "831",
      nums: "831",
      alphas: "AR",
    }
    this.taskservice.add_data(payload).subscribe((res) => {
      console.log(res);
    })
    
  }

}
