import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') form: NgForm;
    answer: string;
    defaultQuestion = 'pet';
    genders = ['male', 'female'];
    suggestUserName() {
        const suggestedName = 'Superuser';
    }

    onSubmit(form: NgForm) {
        console.log(form);
    }

    // alternative option is using the local reference grabbed by ViewChild
    // onSubmit() {
    //     console.log(this.form);
    // }
}
