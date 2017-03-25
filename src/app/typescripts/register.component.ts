import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user.register.model';

@Component({
    templateUrl: '../templates/register.component.html'
})
export class RegisterComponent {
submitted = false;
model = new User('emai','username','firstname','last','password');
onSubmit() { this.submitted = true; }

 // TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }
}
