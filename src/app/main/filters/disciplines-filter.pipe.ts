import { Pipe, PipeTransform } from '@angular/core';
import { Discipline } from 'src/app/interfaces/Discipline';
import { SchoolRecord } from 'src/app/interfaces/SchoolRecord';

@Pipe({
  name: 'filter'
})
export class DisciplinesFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, isDisciplines: boolean): any[] {
    if (!items) return [];
    if (!searchText) return items;
    
    if (isDisciplines) {
      searchText = searchText.toLowerCase()
      return items.filter((discipline: Discipline) => {
        return discipline.discipline_name.toLowerCase().includes(searchText)
      })
    } else {
      const semester = parseInt(searchText)
      return items.filter((schoolRecord: SchoolRecord) => {
        return schoolRecord.semester === semester
      })
    }
  }

}
