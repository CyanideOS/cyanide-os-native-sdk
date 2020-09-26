import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { NativeButton } from "./ui/controls/button/button.component";
import { NativeCheckbox } from "./ui/controls/checkbox/checkbox.component";
import { TextboxComponent } from "./ui/controls/textbox/textbox.component";
import { VStackComponent } from "./ui/layout/v-stack/v-stack.component";
import { HStackComponent } from "./ui/layout/h-stack/h-stack.component";

@NgModule({
  declarations: [
    /// Controls
    NativeButton,
    NativeCheckbox,
    TextboxComponent,
    /// Layout
    VStackComponent,
    HStackComponent,
  ],
  exports: [NativeButton, NativeCheckbox, TextboxComponent],
  imports: [CommonModule, DragDropModule],
})
export class NativeSdkModule {}
