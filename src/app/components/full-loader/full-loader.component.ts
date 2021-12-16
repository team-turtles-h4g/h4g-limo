import { Component, OnInit } from '@angular/core';
import { FullLoaderService } from 'src/app/services/full-loader.service';

@Component({
  selector: 'app-full-loader',
  templateUrl: './full-loader.component.html',
  styleUrls: ['./full-loader.component.scss']
})
export class FullLoaderComponent implements OnInit {
  show: boolean = false;
  message: string | null = null;

  constructor(private fullLoaderService: FullLoaderService) { }

  ngOnInit(): void {
    this.fullLoaderService.getLoaderStateObservable().subscribe((value) => {
      this.show = value.state;
      this.message = value.message? value.message : null;
    });
  }
}