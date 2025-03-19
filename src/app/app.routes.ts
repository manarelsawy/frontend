import { ResetpasswordComponent } from './components/layout/admin/resetpassword/resetpassword.component';
import { VerificationComponent } from './components/layout/admin/verification/verification.component';
import { ForgetpasswordComponent } from './components/layout/admin/forgetpassword/forgetpassword.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/admin/login/login.component';

export const routes: Routes = [
    {path:'' , component:LoginComponent ,
        children:[
        {path:'' , redirectTo:'login' , pathMatch:'full'},
        {path:'fotgetpassword', component:ForgetpasswordComponent },
        {path:'verification', component:VerificationComponent},
        {path:'resetpaasword', component:ResetpasswordComponent }
    ]}
];
