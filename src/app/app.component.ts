import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app works!';

  public ngOnInit() {
      this.title = 'app should work';
  }

  public someMethod():void {
      //here
  }

}
