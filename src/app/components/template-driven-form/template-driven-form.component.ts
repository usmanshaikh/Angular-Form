import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "template-driven-form-component",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.css"]
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild("tdfForm") tdfForm: NgForm;
  userData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  };
  showData: boolean = false;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if (this.tdfForm.valid) {
      this.showData = true;
      this.userData.firstName = this.tdfForm.value.firstName;
      this.userData.lastName = this.tdfForm.value.lastName;
      this.userData.phone = this.tdfForm.value.phone;
      this.userData.email = this.tdfForm.value.email;
      this.tdfForm.resetForm();
    }
  }
}
