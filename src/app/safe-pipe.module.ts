import { NgModule } from '@angular/core';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [ 
    SafePipe
  ],
  exports: [
    SafePipe
  ]
})
export class ApplicationPipesModule {}