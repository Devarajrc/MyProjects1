
import {MatButtonModule,MatCheckboxModule} from '@angular/material';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import { MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';


 @NgModule({

    imports:[MatButtonModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatBottomSheetModule,
        MatMenuModule,MatIconModule,MatListModule,
        MatSliderModule,MatCardModule,
        MatInputModule,MatFormFieldModule],
    exports:[MatButtonModule,MatListModule,MatBottomSheetModule,
        MatSliderModule,MatCardModule,MatIconModule,MatMenuModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatFormFieldModule,MatSidenavModule],
 })

 export class MaterialModule{}