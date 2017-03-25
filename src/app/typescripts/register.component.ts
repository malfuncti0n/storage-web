import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user.register.model';
import { EmitterService } from '../services/emitter.service';
import { UserService } from '../services/user.service';


@Component({
    templateUrl: '../templates/register.component.html'
})
export class RegisterComponent {
    constructor(
    private userService: UserService
    ){}
submitted = false;
    //new default model
model = new User('Your Email','Your Username','Your Password','Your Firstname','Your Lastname');
//on submit action declared on <form> tag
onSubmit() {
//    this.submitted = true;
    console.log(JSON.stringify(this.model));
//    this.userService.getUsers();
    let response =this.userService.getUsers().subscribe();
    console.log(response);

}

 // TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

}
