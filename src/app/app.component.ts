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
    canvas.height = 48;
    canvas.width = context.measureText(text).width + 32;
    console.log(context.measureText(text));
    context.fillStyle = '#ffffcc';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#000000';
    context.font = '13px Roboto';
    context.fillText(text, 16, canvas.height /2 + 4);
    this.dataUrl = canvas.toDataURL('image/png');
    this.safeImageUrl = this.santizier.bypassSecurityTrustUrl(this.dataUrl);
  }

  public addImage(event): void {

console.log('setting drag image');
const image: any = document.createElement('img');
image.src = this.dataUrl;
console.log(image);
event.dataTransfer.setDragImage(image, -1, -1);

  }
}
