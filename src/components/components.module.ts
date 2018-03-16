import { NgModule } from '@angular/core';
import { ReddittopicComponent } from './reddittopic/reddittopic';
import { PutARingOnItComponent } from './put-a-ring-on-it/put-a-ring-on-it';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [ReddittopicComponent,
    PutARingOnItComponent],
	imports: [
		IonicModule.forRoot(ReddittopicComponent)
	],
	exports: [ReddittopicComponent,
    PutARingOnItComponent]
})
export class ComponentsModule {}
