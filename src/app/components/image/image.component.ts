import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from '../../services/images.service';
import { Image } from '../../models/image.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent implements OnInit {
  image: Image | undefined;
  constructor(
    private imagesService:ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
      const identifier = this.activatedRoute.snapshot.paramMap.get('id');
      console.log('identifier -- > ', identifier);
      if (identifier) {
        this.imagesService.getImageById(identifier).subscribe((image) => {
          // if (!image) {
          //   return this.router.navigateByUrl('/');
          // }
          this.image = image;
          console.log('image -- > ', this.image);

        });
      } else {
        console.error('identifier is null');
      }
  }
  navigateToImages() {
    this.router.navigate(['/']);
  }
}
