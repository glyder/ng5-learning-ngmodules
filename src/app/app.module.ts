import { NgModule } from '@angular/core';
// When you want to run your app in a browser
// ** BrowserModule imports CommonModule
// CommonModule	@angular/common	When you want to use NgIf, NgFor
import { BrowserModule } from '@angular/platform-browser';
// RouterModule	@angular/router
//    For Routing and when you want to use RouterLink,.forRoot(), and .forChild()
import { AppRoutingModule } from './app-routing.module';
// ReactiveFormsModule	@angular/forms	When building reactive forms
// FormsModule	@angular/forms	When you build template driven forms (includes NgModel)
import { FormsModule } from '@angular/forms';
// HttpClientModule	@angular/common/http	When you to talk to a server
import { HttpModule } from '@angular/http';

// THIS!!!
import { AppComponent } from './app.component';


// https://angular.io/guide/feature-modules
// import the feature module here so you can add it to the imports array below
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';

// https://angular.io/guide/providers
// When you add a service provider to the providers array of the root module, it’s available throughout the app.
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  // composing NgModules together
  imports: [                /* add modules here so Angular knows to use them */
    BrowserModule,
    AppRoutingModule,       // created project with routing adds this here.

    FormsModule,
    HttpModule,

    // https://angular.io/guide/feature-modules
    CustomerDashboardModule // add the feature module here
  ],
  // making NgModules available to other parts of the app
  exports: [

  ],
  providers: [
    // https://angular.io/guide/providers
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
