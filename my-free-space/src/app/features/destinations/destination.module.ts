import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDestinationComponent } from './create-destination/create-destination.component';
import { DetailsComponent } from './details/details.component';
import { SearchDestinationComponent } from './search-destination/search-destination.component';
import { CommentComponent } from './comment/comment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateDestinationComponent,
    DetailsComponent,
    SearchDestinationComponent,
    CommentComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [SearchDestinationComponent],
})
export class DestinationModule {}
