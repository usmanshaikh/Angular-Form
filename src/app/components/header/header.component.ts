import { Component, OnInit } from "@angular/core";

@Component({
  selector: "header-component",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  imagePath: string = "../assets/logo.png"
  constructor() {}

  ngOnInit() {}
}
