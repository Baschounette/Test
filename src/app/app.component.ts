import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  title = 'Test';

  ngOnDestroy(): void {
    localStorage.removeItem("Name")
    localStorage.removeItem("Role")
    localStorage.removeItem("Connecté ?")
  }

}
