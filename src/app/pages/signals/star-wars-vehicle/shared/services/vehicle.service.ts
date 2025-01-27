import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { VehicleResponse } from '../interfaces/vehicle-response';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private readonly vehicleUrl: string = 'https://swapi.py4e.com/api/vehicles';
  private readonly http: HttpClient = inject(HttpClient);

  // Signals managed by the service
  selectedVehicle = signal<Vehicle | undefined>(undefined);

  // Reset the quantity when the vehicle changes
  quantity = linkedSignal({
    source: this.selectedVehicle,
    computation: v => {
      if (v) {
        return v.passengers == 0 ? v.crew : v.passengers;
      }
      return 0;
    }
  });
  costInCredits = linkedSignal({
    source: this.selectedVehicle,
    computation: v => {
      if (v) {
        return isNaN(v.cost_in_credits) ? 0 : v.cost_in_credits;
      }
      return 0;
    }
  });

  // Computed signals
  //total = computed(() => (this.selectedVehicle()?.cost_in_credits ?? 0) * this.quantity());
  total = computed(() => {
    const costInCredits = isNaN(this.selectedVehicle()?.cost_in_credits!) ? 0 : (this.selectedVehicle()?.cost_in_credits ?? 0);
    return costInCredits * this.quantity()
  })
  color = computed(() => (this.total() === 0 ? 'color-07' : this.total() > 50000 ? 'color-10' : 'color-02'));

  vehiclesResource = rxResource({
    loader: () => this.http.get<VehicleResponse>(this.vehicleUrl)
      .pipe(
        map(vr => vr.results),
      )
  });
  vehicles = computed(() => this.vehiclesResource.value() ?? ([] as Vehicle[]));
  options = computed(() => this.vehiclesResource.value()?.map(v => ({value: v.name, label: `${v.name} - ${v.passengers}`})) ?? ([] as Vehicle[]));
}
