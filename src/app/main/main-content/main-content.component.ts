import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RedComponent} from '../red/red.component';
import {GreenComponent} from '../green/green.component';
import {BlueComponent} from '../blue/blue.component';
import {ComponentsLibService} from '../../core/services/components-lib.service';
import {ComponentInjectorService} from '../../core/services/component-injector.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, AfterViewInit {

  list!: {name: string}[];

  @ViewChild('cardContent', {read: ViewContainerRef}) cardContent: ViewContainerRef;

  constructor(
    private componentInjector: ComponentInjectorService
  ) { }

  ngOnInit(): void {
    this.list = [
      {name: 'r'},
      {name: 'g'},
      {name: 'r'},
      {name: 'b'},
      {name: 'r'},
    ];
    this.list = Array(100).fill(1).map(() => {
      const random = Math.random() * 10;
      return random > 3 && random < 7 ? {name: 'r'} : random > 6 ? {name: 'g'} : {name: 'b'};
    });
    console.log(this.list);
  }

  ngAfterViewInit(): void {
    this.list.forEach(item => {
      this.componentInjector.loadComponent(this.cardContent, item.name);
    });
  }
}
