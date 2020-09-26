import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "Typography",
  templateUrl: "./typography.component.html",
  styleUrls: ["./typography.component.scss"],
})
export class TypographyComponent implements OnInit {
  @Input("content")
  content: string = "";

  @Input("variant")
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h6";

  fontSize: number;
  fontWeight: number;

  constructor() {}

  ngOnInit(): void {
    this.styleText();
  }

  styleText(): void {
    const variants = {
      h1: {
        fontWeight: 600,
        fontSize: 20,
      },
      h2: {
        fontWeight: 600,
        fontSize: 20,
      },
      h3: {
        fontWeight: 600,
        fontSize: 20,
      },
      h4: {
        fontWeight: 600,
        fontSize: 20,
      },
      h5: {
        fontWeight: 600,
        fontSize: 20,
      },
      h6: {
        fontWeight: 600,
        fontSize: 20,
      },
    };
    this.fontSize = variants[this.variant].fontSize;
    this.fontWeight = variants[this.variant].fontWeight;
  }
}
