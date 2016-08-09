import { Component } from '@angular/core';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';

import { SpotifyService } from './services/spotify.service';

@Component({
		moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ NavbarTopComponent, ROUTER_DIRECTIVES ],
    precompile: [ SearchComponent, AboutComponent ],
    providers: [ HTTP_PROVIDERS, SpotifyService ]
})
export class AppComponent { }
