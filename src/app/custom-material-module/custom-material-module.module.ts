import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class CustomMaterialModuleModule { }
