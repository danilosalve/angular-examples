import { Pipe, PipeTransform, ResourceStatus } from '@angular/core';

@Pipe({
  name: 'resourceStatus'
})
export class ResourceStatusPipe implements PipeTransform {
  transform(status: ResourceStatus): unknown {
    switch (status) {
      case ResourceStatus.Idle:
        return 'Idle';
      case ResourceStatus.Error:
        return 'Error';
      case ResourceStatus.Loading:
        return 'Loading';
      case ResourceStatus.Resolved:
        return 'Resolved';
      case ResourceStatus.Reloading:
        return 'Reloading';
      case ResourceStatus.Local:
        return 'Local';
      default:
        return 'Unknown';
    }
  }
}
