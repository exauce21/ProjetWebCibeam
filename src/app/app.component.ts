import { Component } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetTheme';

  constructor(private titleService: Title, private meta: Meta) {
    titleService.setTitle('cibeam');
    meta.addTag({name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}, true );
    meta.addTag({name: 'description', content: 'Learn Bootstrap and Angular'}, true );
    meta.addTag({name: 'author', content: 'BootstrapAngular'}, true );
    meta.addTag({name: 'generator', content: 'Jekyll v3.8.6'}, true );
  }
}
