import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  public _album: Array<any> = [];

  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private config: NgbCarouselConfig,
    private _lightbox: Lightbox
  ) {
    config.showNavigationArrows = false;
    for (let i = 1; i <= 6; i++) {
      const src = 'assets/img/sattva/floorplan' + i + '.webp';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/img/sattva/floorplan' + i + '.webp';
      const album = { src: src, caption: caption, thumb: thumb };
      this._album.push(album);
    }
  }
  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }
  openLightbox(index: number): void {
    this._lightbox.open(this._album, index);
  }
  ngOnInit(): void {}
  
  closeLightbox(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
