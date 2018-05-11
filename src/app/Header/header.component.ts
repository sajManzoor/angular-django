import {Component, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl:'header.component.html'
})
export class HeaderComponent{
  @Output()featureSelected = new EventEmitter<string>();

  // not being used any more just for reference.
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
