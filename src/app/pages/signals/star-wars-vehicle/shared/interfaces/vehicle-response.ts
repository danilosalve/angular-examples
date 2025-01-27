import { Vehicle } from "./vehicle";

export interface VehicleResponse {
  count: number;
  next: string;
  previous: string;
  results: Vehicle[];
}
