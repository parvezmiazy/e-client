import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, PaginationModule } from 'ngx-bootstrap';
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component';
import { PaginationFooterComponent } from './components/pagination-footer/pagination-footer.component';
@NgModule({
  declarations: [PaginationHeaderComponent, PaginationFooterComponent],
  imports: [CommonModule, PaginationModule.forRoot(), CarouselModule.forRoot()],
  exports: [
    PaginationModule,
    PaginationHeaderComponent,
    PaginationFooterComponent,
    CarouselModule,
  ],
})
export class SharedModule {}
