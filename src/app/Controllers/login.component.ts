import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserLogin } from '../Models/user.login.model';
import { EmitterService } from '../Services/emitter.service';
import { UserService } from '../Services/user.service';

@Component({
    templateUrl: '../views/login.component.html'
})
export class LoginComponent {
    constructor(
    private userService: UserService
    ){}
submitted = false;
    //new default model
model = new UserLogin('Your Username','Your Password');
//on submit action declared on <form> tag
onSubmit() {
    this.submitted = true;
    console.log(this.model);

    //make the post request
    let response =this.userService.getUsers().subscribe();
//    console.log(response);

}

 // TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }
}
