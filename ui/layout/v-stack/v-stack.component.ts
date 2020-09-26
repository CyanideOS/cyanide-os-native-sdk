import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "VStack",
  templateUrl: "./v-stack.component.html",
  styleUrls: ["./v-stack.component.scss"],
})
export class VStackComponent implements OnInit {
  @Input("crossAxisAlignment")
  crossAxisAlignment:
    | "start"
    | "end"
    | "center"
    | "spaceBetween"
    | "spaceEvenly"
    | "spaceAround" = "start";

  @Input("mainAxisAlignment")
  mainAxisAlignment:
    | "start"
    | "end"
    | "center"
    | "spaceBetween"
    | "spaceEvenly"
    | "spaceAround" = "start";

  mainAlignment: string;
  crossAlignment: string;

  constructor() {}

  ngOnInit(): void {
    switch (this.crossAxisAlignment) {
      case "spaceAround":
        this.crossAlignment = "space-around";
        break;

      case "spaceBetween":
        this.crossAlignment = "space-between";
        break;

      case "spaceEvenly":
        this.crossAlignment = "space-evenly";
        break;

      case "start":
        this.crossAlignment = "flex-start";
        break;

      case "end":
        this.crossAlignment = "flex-end";
        break;

      default:
        this.crossAlignment = this.crossAxisAlignment;
        break;
    }

    switch (this.mainAxisAlignment) {
      case "spaceAround":
        this.mainAlignment = "space-around";
        break;

      case "spaceBetween":
        this.mainAlignment = "space-between";
        break;

      case "spaceEvenly":
        this.mainAlignment = "space-evenly";
        break;

      case "start":
        this.mainAlignment = "flex-start";
        break;

      case "end":
        this.mainAlignment = "flex-end";
        break;

      default:
        this.mainAlignment = this.mainAxisAlignment;
        break;
    }
  }
}
