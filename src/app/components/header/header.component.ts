import { Component, OnInit } from "@angular/core";

@Component({
  selector: "header-component",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  imagePath: string =
    "https://firebasestorage.googleapis.com/v0/b/you-watch-now.appspot.com/o/analyticsfox-logo.png?alt=media&token=ce39d49a-bdaa-43f7-bdd5-01ab414826c9";
  constructor() {}

  ngOnInit() {}
}
