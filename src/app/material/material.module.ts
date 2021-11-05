import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

const materialComponent = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule
];

@NgModule({
  imports: [materialComponent],
  exports: [materialComponent]
})

export class  MaterialModule {}
