import { Component } from '@angular/core';

@Component({
    selector: 'custom-navbar',
    templateUrl: '../templates/navbar.component.html'
})
export class NavbarComponent {
    //function to check collapse state for navigation menu and togle collapse
    isIn = false; //default state false
    toggleState() {
        let bool = this.isIn;
        this.isIn = bool === false ? true : false;

    }

}
