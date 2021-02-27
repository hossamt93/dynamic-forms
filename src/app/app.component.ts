import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form';

  form = []
  formString = '';
  failedToParse = false;
  constructor(private http: HttpClient){
    http.get('../assets/form.json').subscribe( (data: [])=>{
      this.form = data;
     this.beautify();
    });
  }
  beautify() {
    this.formString = JSON.stringify(this.form,undefined,4);
    this.failedToParse = false;
  }

  onTextAreaContentUpdate(event){
    try {
      this.form = JSON.parse(event.target.value);
      this.failedToParse = false;
    } catch (error) {
      this.failedToParse = true;
    }
  }
}
