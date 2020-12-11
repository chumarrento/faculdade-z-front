import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public subscription: Subscription | undefined
  loading: boolean

  constructor(private loaderService: LoaderService) {
    this.loading = false
  }

  ngOnInit(): void {
    this.subscription = this.loaderService.isLoading.subscribe(
      (isLoading: boolean) => {
        
        this.loading = isLoading
      }
    )
  }

}
