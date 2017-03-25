import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user.register.model';

@Component({
    templateUrl: '../templates/register.component.html'
})
export class RegisterComponent {
submitted = false;
model = new User('Your Email','Your Username','Your Password','Your Firstname','Your Lastname');
onSubmit() { this.submitted = true;

    console.log(JSON.stringify(this.model));

}

 // TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

}
