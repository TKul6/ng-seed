import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataUrl = '';
  safeImageUrl = null;

constructor(private santizier: DomSanitizer) {

}

  public generateImage(text: string): void {
    const canvas: any = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.fillText(text, 30, 30);
    this.dataUrl = canvas.toDataURL('image/png');
    this.safeImageUrl = this.santizier.bypassSecurityTrustUrl(this.dataUrl);
  }

  public addImage(event): void {

console.log('setting drag image');
const image: any = document.createElement('img');
image.src = this.dataUrl;
console.log(image);
event.dataTransfer.setDragImage(image, 10, 10);

  }
}
