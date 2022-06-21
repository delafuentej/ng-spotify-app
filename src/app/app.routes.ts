import { Routes } from "@angular/router";
import { ArtistComponent } from "./components/artist/artist.component";
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from "./components/search/search.component";

export const APP_ROUTES: Routes =[
    {path:'home', component: HomeComponent},
    {path:'artist',component:ArtistComponent},
    {path:'search/:searchTerm',component:SearchComponent},
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'**', pathMatch:'full', redirectTo:'home'}

]