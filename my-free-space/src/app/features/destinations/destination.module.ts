import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDestinationComponent } from './create-destination/create-destination.component';
import { DetailsComponent } from './details/details.component';
import { SearchDestinationComponent } from './search-destination/search-destination.component';
import { CommentComponent } from './comment/comment.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserDestinationListComponent } from './user-destination-list/user-destination-list.component';

@NgModule({
  declarations: [
    CreateDestinationComponent,
    DetailsComponent,
    SearchDestinationComponent,
    CommentComponent,
    UserDestinationListComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    SharedModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  exports: [SearchDestinationComponent],
})
export class DestinationModule {}
