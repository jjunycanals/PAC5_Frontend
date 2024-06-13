import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '../../models/image.interface';
import { ImagesService } from '../../services/images.service';


@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];

  constructor(private router: Router, private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((images) => {
        this.images = images;
      });
  }

  navigateToImage(id: string) {
    this.router.navigate(['/image', id]);
  }
}
