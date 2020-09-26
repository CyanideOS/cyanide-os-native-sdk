import { Component, OnInit } from "@angular/core";

@Component({
  selector: "NativeCheckbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
})
export class NativeCheckbox implements OnInit {
  isChecked: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
