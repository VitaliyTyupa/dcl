import {ComponentFactoryResolver, Injectable} from '@angular/core';
import {ComponentsLibService} from './components-lib.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentInjectorService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private componentsLibService: ComponentsLibService,
  ) { }

  loadComponent(targetComponent, componentName): void {
    const component = this.componentsLibService.getComponent(componentName);
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = targetComponent.createComponent(childComponent);
  }
}
