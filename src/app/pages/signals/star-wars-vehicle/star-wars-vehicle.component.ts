import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { PoContainerModule, PoFieldModule, PoPageModule, PoTagModule, PoWidgetModule } from '@po-ui/ng-components';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseDetailComponent } from '../../../shared/components/base/base-detail.component';
import { VehicleService } from './shared/services/vehicle.service';

@Component({
  selector: 'app-star-wars-vehicle',
  imports: [
    PoPageModule,
    PoContainerModule,
    PoFieldModule,
    PoTagModule,
    FormsModule,
    CommonModule,
    CurrencyPipe
  ],
  templateUrl: './star-wars-vehicle.component.html'
})
export class StarWarsVehicleComponent extends BaseDetailComponent {
  private vehicleService = inject(VehicleService);
  // Signals to support the template
  color = this.vehicleService.color;
  quantity = this.vehicleService.quantity;
  selectedVehicle = this.vehicleService.selectedVehicle;
  total = this.vehicleService.total;
  vehicles = this.vehicleService.vehicles;
  options = this.vehicleService.options;
  costInCredits = this.vehicleService.costInCredits;

  constructor() {
    super('home/signals/samples');
  }

  onVehicleSelected(name: string): void {
    const vehicle = this.vehicles().find(v => v.name === name);
    this.selectedVehicle.set(vehicle);
  }
}
