import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "NativeCheckbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
})
export class NativeCheckbox implements OnInit {
  @Input("isChecked")
  isChecked: boolean = false;

  @Input("innerText")
  innerText: string = "";

  constructor() {}

  ngOnInit(): void {}
}
