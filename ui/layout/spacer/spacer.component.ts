import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "Spacer",
  templateUrl: "./spacer.component.html",
  styleUrls: ["./spacer.component.scss"],
})
export class SpacerComponent implements OnInit {
  @Input("width")
  width: number;

  @Input("height")
  height: number;

  constructor() {}

  ngOnInit(): void {}
}
