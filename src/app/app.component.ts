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
    canvas.height = 45;
    context.font = "13px Arial";
    canvas.width = context.measureText(text).width + 80;
    context.fillStyle = '#ffffcc';
    context.shadowColor = '#b8b8b8';
    context.shadowBlur = 50;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2.3;
    context.fillRect(0, 0, canvas.width - 10, canvas.height - 10);

    const textContext = canvas.getContext('2d');

    textContext.fillStyle = '#000000';
    textContext.font = "13px Arial";
    textContext.shadowColor = '#000000';
    textContext.shadowBlur = 0;
    textContext.shadowOffsetX = 0;
    textContext.shadowOffsetY = 0;
    textContext.fillText(text, 16, canvas.height / 2 + 4);
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
