import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input.component';


const FormInputModuleRoute: Routes = [
  {
    path: '',
    component: FormInputComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(FormInputModuleRoute)
  ],
  exports: [RouterModule]
})

export class BasicDetModule { }
