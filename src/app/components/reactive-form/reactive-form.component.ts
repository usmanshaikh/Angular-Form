import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "reactive-form-component",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  rtfForm: FormGroup;
  isSubmitted: boolean = false;
  showData: boolean = false;
  userData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  };
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.rtfForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      phone: ["", [Validators.required,Validators.pattern("^[0-9]*$"), Validators.maxLength(10),Validators.minLength(10)]],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  get formControls() {
    return this.rtfForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.rtfForm.valid) {
      this.showData = true;
      this.userData.firstName = this.rtfForm.value.firstName;
      this.userData.lastName = this.rtfForm.value.lastName;
      this.userData.phone = this.rtfForm.value.phone;
      this.userData.email = this.rtfForm.value.email;
      this.resetForm();
    }
  }

  resetForm() {
    this.isSubmitted = false;
    this.rtfForm.reset();
  }
}
