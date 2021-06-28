import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hobby, Interest, User } from '../_models';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line:typedef
  createDb() {
    const user: User = {
      name: 'Surya Kumar Yadala',
      company: 'QuiddityIt Software Solutions',
      experience: '5+ Years',
      designation: 'Sr Frontend Developer',
      qualification: 'B.Tech',
    };
    const hobbies: Hobby[] = [
      { id: 11, name: 'Reading News, Following international news' },
      { id: 12, name: 'Practicing Yoga, Reading short stories' },
      { id: 13, name: 'Reading books about Yoga, And about my country' },
      { id: 14, name: 'Playing Games' },
      { id: 15, name: 'Travel ancient temples' },
      { id: 16, name: 'Gardening' }
    ];
    const interests: Interest[] = [
      {
        id: 100, name: 'Travelling', description: 'I have travelled many places'
      },
      {
        id: 101, name: 'Drawing', description: 'Test desscription'
      },
      {
        id: 102, name: 'Cycling', description: 'Weekly i go for cycling around 20 Kms'
      }
    ];
    return {user, hobbies, interests};
  }

  // genId(array: Hobby[] | Interest[]): number {
  //   return array.length > 0 ? Math.max(...array.map(element => element.id)) + 1 : (Object.keys(array[0]).length === 3) ? 100 : 11;
  // }

}
