import { CommonModule } from '@angular/common';
import { Component, inject, Injector, TemplateRef, viewChild, ViewContainerRef } from '@angular/core';
import { PoButtonModule, PoInfoModule, PoPageModule } from '@po-ui/ng-components';
import { DataServiceToken } from './shared/services/data.service';
import { UserCardComponent } from './user-card/user-card.component';
import { HeroesCardComponent } from './heroes-card/heroes-card.component';

@Component({
  selector: 'app-dynamic-component',
  imports: [CommonModule, PoPageModule, PoButtonModule, PoInfoModule],
  templateUrl: './dynamic-component.component.html'
})
export class DynamicComponentComponent {
  injector = inject(Injector);
  componentSpot = viewChild.required('spot', { read: ViewContainerRef });
  userLabel = viewChild.required('userLabel', { read: TemplateRef });
  heroes = viewChild.required('heroes', { read: TemplateRef });

  myInjector = Injector.create({
    providers: [{ provide: DataServiceToken, useValue: { data: { name: 'DataServiceToken Hi!' } } }],
    parent: this.injector
  });

  loadContent(): void {
    // Create the component and get a reference to it
    const componentRef = this.componentSpot().createComponent(UserCardComponent, { injector: this.myInjector });
    // Use setInput to pass custom header and footer templates to the component
    componentRef.setInput('userLabel', this.userLabel());
  }

  loadHeroes(): void {
    // Create the component and get a reference to it
    const componentRef = this.componentSpot().createComponent(HeroesCardComponent, { injector: this.myInjector });
    // Use setInput to pass custom header and footer templates to the component
    componentRef.setInput('heroes', this.heroes());
  }
}
