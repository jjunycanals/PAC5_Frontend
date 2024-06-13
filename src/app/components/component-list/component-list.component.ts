import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { People } from '../../models/people.interface';
import { ApiService } from '../../services/api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-component-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatTableModule, MatCardModule],
  templateUrl: './component-list.component.html',
  styleUrl: './component-list.component.scss'
})
export class ComponentListComponent implements OnInit {
  people: People[] = [];
  loading: boolean = true;
  isTableView: boolean = true;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService
      .getAllPeople()
      .subscribe((people) => {
        // console.log(people.results);
        this.people = people.results.map((person: { url: any; }) => {
          const id = this.extractIdFromUrl(person.url);
          return { ...person, id };
        });
        // console.log(this.people);
        this.loading = false;
      });
  }

  navigateToPeople(id: string) {
    this.router.navigate(['/list', id]);
  }

  toggleView(): void {
    this.isTableView = !this.isTableView;
  }

  extractIdFromUrl(url:any) {
    // Per capturar l'ID de la URL
    const regex = /\/(\d+)\/$/;
    const match = url.match(regex);

    if (match) {
      return match[1];
    } else {
      console.error('ID no trobat en la URL');
      return null;
    }
  }
}
