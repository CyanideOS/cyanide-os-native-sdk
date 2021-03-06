import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { NativeButton } from "./ui/controls/button/button.component";
import { NativeCheckbox } from "./ui/controls/checkbox/checkbox.component";
import { TextboxComponent } from "./ui/controls/textbox/textbox.component";
import { VStackComponent } from "./ui/layout/v-stack/v-stack.component";
import { HStackComponent } from "./ui/layout/h-stack/h-stack.component";
import { TypographyComponent } from "./ui/typography/typography.component";
import { SpacerComponent } from "./ui/layout/spacer/spacer.component";

@NgModule({
  declarations: [
    /// Controls
    NativeButton,
    NativeCheckbox,
    TextboxComponent,
    /// Layout
    VStackComponent,
    HStackComponent,
    TypographyComponent,
    SpacerComponent,
  ],
  exports: [
    /// Controls
    NativeButton,
    NativeCheckbox,
    TextboxComponent,
    /// Layout
    VStackComponent,
    HStackComponent,
    TypographyComponent,
    SpacerComponent,
  ],
  imports: [CommonModule, DragDropModule],
})
export class NativeSdkModule {}
