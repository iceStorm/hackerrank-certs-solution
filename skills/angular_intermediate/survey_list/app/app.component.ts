import {Component, OnInit} from '@angular/core';
import {Survey} from "../types/Survey";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  statuses: string[] = ['All', 'Active', 'Completed'];
  categories: string[] = ['Development', 'Workplace', 'Hardware'];
  filteredList: Survey[];

  status = 'status';
  category = "category";

  activeStatus = 'All'
  activeCategory?: string

  surveyList: Survey[] = [
    {
      title: "Designer Survey",
      category: "Workplace",
      status: "Active",
      label: "New Framework",
    },
    {
      title: "Developer Survey",
      category: "Development",
      status: "Active",
      label: "Education",
    },
    {
      title: "Backend Survey",
      category: "Hardware",
      status: "Completed",
      label: "Personal",
    }
  ]

  ngOnInit() {
    this.onFilterSelected('All', 'status')
  }

  onFilterSelected(filter: string, type: string) {
    console.log('app filter for:', type, ' -> ', filter)

    if (type === 'status') {
      this.activeStatus = filter
    } else {
      this.activeCategory = filter
    }

    console.warn('filtering:', this.activeStatus, this.activeCategory)

    this.filteredList = this.surveyList.filter(s => {
      if (this.activeCategory) {
        if (this.activeStatus && this.activeStatus !== 'All') {
          return s.status === this.activeStatus && s.category === this.activeCategory
        }

        return s.category === this.activeCategory
      }

      if (this.activeStatus && this.activeStatus !== 'All') {
        if (this.activeCategory) {
          return s.status === this.activeStatus && s.category === this.activeCategory
        }

        return s.status === this.activeStatus
      }

      return true
    })

    console.log('filteredList:', this.filteredList)
  }
}
