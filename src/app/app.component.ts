import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  defaultType = "advanced"
  formSubmitted = false
  userData = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit(form) {
    console.log(form)
    this.formSubmitted = true
    this.userData.email = form.value.email
    this.userData.subscription = form.value.subscription
    this.userData.password = form.value.password
    form.reset()
  }

}
