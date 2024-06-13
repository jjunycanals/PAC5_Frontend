import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../../models/people.interface';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-component-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule],
  templateUrl: './component-detail.component.html',
  styleUrl: './component-detail.component.scss'
})
export class ComponentDetailComponent implements OnInit {
  people: People | undefined;
  showDetails: boolean = false;

  constructor(
    private apiService:ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
      const identifier = this.activatedRoute.snapshot.paramMap.get('id');
      console.log('identifier -- > ', identifier);
      if (identifier) {
        this.apiService.getPeopleById(identifier).subscribe((people) => {
          // if (!image) {
          //   return this.router.navigateByUrl('/');
          // }
          const id = identifier;
          // console.log({ ...people, id});
          this.people = { ...people, id};
          // console.log('people -- > ', this.people);

        });
      } else {
        console.error('identifier is null');
      }
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  navigateToList() {
    this.router.navigate(['/list']);
  }
}
