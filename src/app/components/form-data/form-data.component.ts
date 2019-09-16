import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "form-data-component",
  templateUrl: "./form-data.component.html",
  styleUrls: ["./form-data.component.css"]
})
export class FormDataComponent implements OnInit {
  @Input() userData: string;
  constructor() {}

  ngOnInit() {}
}
