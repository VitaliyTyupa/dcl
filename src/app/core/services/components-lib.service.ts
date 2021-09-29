import {ComponentRef, Injectable} from '@angular/core';
import {RedComponent} from '../../main/red/red.component';
import {GreenComponent} from '../../main/green/green.component';
import {BlueComponent} from '../../main/blue/blue.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentsLibService {

  components =  {
    r: RedComponent,
    g: GreenComponent,
    b: BlueComponent
  };

  constructor() { }

  getComponent(name: string): any {
    return this.components[name];
  }
}
