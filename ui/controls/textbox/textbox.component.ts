import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "NativeTextbox",
  templateUrl: "./textbox.component.html",
  styleUrls: ["./textbox.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class TextboxComponent implements OnInit {
  @Input("isDisabled") isDisabled: boolean = false;
  @Input("placeholder") placeholder: string = "";
  @Input("autoWidth") autoWidth: boolean = false;
  @Input("width") width: number;
  @Input("height") height: number = 1.3;
  @Input("type") type: string = "text";
  @Input("prefixIcon") prefixIcon: string;
  @Input("suffixIcon") suffixIcon: string;
  @Input("prefixNutellaIcon") prefixNutellaIcon: string;
  @Input("suffixNutellaIcon") suffixNutellaIcon: string;
  @Input("value") value: BehaviorSubject<string> = new BehaviorSubject("");

  isFocused: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
