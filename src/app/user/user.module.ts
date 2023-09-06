import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    EditUserComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [ 
    EditUserComponent
  ]
})
export class UserModule {
  
 }
