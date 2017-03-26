import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserLogin } from '../Models/user.login.model';
import { EmitterService } from '../Services/emitter.service';
import { UserService } from '../Services/user.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
    templateUrl: '../views/login.component.html'
})
export class LoginComponent {
    constructor(
    private userService: UserService,
    private router: Router
    ){}
submitted = false;
    //new default model
model = new UserLogin('malfunction','123456');
//on submit action declared on <form> tag
onSubmit() {
    this.submitted = true;
    console.log(this.model);

    //make the post request
    var response =this.userService.getUsers(this.model).subscribe(response);

    this.router.navigate(['application']);

}

 // TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }
}
