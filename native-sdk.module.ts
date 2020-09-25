import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { NativeButton } from "./ui/button/button.component";
import { NativeCheckbox } from "./ui/checkbox/checkbox.component";
import { TextboxComponent } from "./ui/textbox/textbox.component";

@NgModule({
  declarations: [NativeButton, NativeCheckbox, TextboxComponent],
  exports: [NativeButton, NativeCheckbox, TextboxComponent],
  imports: [CommonModule, DragDropModule],
})
export class NativeSdkModule {}
