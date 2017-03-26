import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRegister } from '../Models/user.register.model';
import { EmitterService } from '../Services/emitter.service';
import { UserService } from '../Services/user.service';


@Component({
    templateUrl: '../views/register.component.html'
})
export class RegisterComponent {
    constructor(
    private userService: UserService
    ){}
submitted = false;
    //new default model
model = new UserRegister('Your Email','Your Username','Your Password','Your Firstname','Your Lastname');
//on submit action declared on <form> tag
onSubmit() {
    this.submitted = true;
    console.log(this.model);

    //make the post request
    let response =this.userService.addUser(this.model).subscribe();
//    console.log(response);

}

 // TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

}
