import { AfterContentInit, Component, viewChild } from '@angular/core';
import { PoAccordionItemComponent, PoAccordionModule, PoPageModule } from '@po-ui/ng-components';
import { PersonComponent } from './person/person.component';
import { SellerComponent } from './seller/seller.component';

@Component({
  selector: 'app-control-container',
  imports: [PoPageModule, PersonComponent, SellerComponent, PoAccordionModule],
  templateUrl: './control-container.component.html'
})
export class ControlContainerComponent implements AfterContentInit {
  readonly accordionItem = viewChild.required(PoAccordionItemComponent);

  ngAfterContentInit(): void {
   this.accordionItem().expand();
  }
}
