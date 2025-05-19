import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interface/user.interface';

@Pipe({
  name: 'filterByDescription',
  standalone: true
})
export class FilterByDescriptionPipe implements PipeTransform {
  transform(users: User[], args: { type: string; query: string }): User[] {
    const type = args.type;
    const query = args.query.trim().toLowerCase();

    if (query) {
      if (type === 'displayName') {
        return users.filter((user: User) => {
          return user.displayname.toLowerCase().includes(query);
        });
      } else if (type === 'id') {
        return users.filter((user: User) => {
          return user.id.toLowerCase().includes(query);
        });
      } else {
        return users.filter((user: User) => {
          return user.displayname.toLowerCase().includes(query) || user.id.toLowerCase().includes(query);
        });
      }
    } else {
      return users;
    }
  }
}
