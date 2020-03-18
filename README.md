# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Notes

```bash
# create the app with all defaults using Angular CLI commands
ng new angular-tour-of-heroes

# launch the app
cd angular-tour-of-heroes
ng serve --open
## The --open flag opens a browser to http://localhost:4200/.

# generate a component to display list heroes
ng generate component heroes

# generate a component to display hero details page
ng generate component hero-detail

# create a service - hero
ng generate service hero

# create a component to display messages
ng generate component messages

# creating an injectable, app-wide MessageService for sending messages to be displayed
ng generate service message

# create a component for the dashboard
ng generate component dashboard


# install In-Memory Web API to test and demo CRUD operations over a RESTy API
npm install angular-in-memory-web-api --save

# create an InMemoryData service
ng generate service InMemoryData

# need to update the angular version due to bug in TypeScript old version
ng update @angular/cli @angular/core


# create a component to do searches
ng generate component hero-search
```

## Reference

- [Create the app](https://angular.io/tutorial/toh-pt0)
  - You created the initial application structure using the Angular CLI.
  - You learned that Angular components display data.
  - You used the double curly braces of interpolation to display the app title.
- [1. The hero editor](https://angular.io/tutorial/toh-pt1)
  - You used the CLI to create a second HeroesComponent.
  - You displayed the HeroesComponent by adding it to the AppComponent shell.
  - You applied the UppercasePipe to format the name.
  - You used two-way data binding with the ngModel directive.
  - You learned about the AppModule.
  - You imported the FormsModule in the AppModule so that Angular would recognize and apply the ngModel directive.
  - You learned the importance of declaring components in the AppModule and appreciated that the CLI declared it for you.
- [2. Display a selection list](https://angular.io/tutorial/toh-pt2)
  - The Tour of Heroes app displays a list of heroes in a Master/Detail view.
  - The user can select a hero and see that hero's details.
  - You used *ngFor to display a list.
  - You used *ngIf to conditionally include or exclude a block of HTML.
  - You can toggle a CSS style class with a class binding.
- [3. Create a feature component](https://angular.io/tutorial/toh-pt3)
  - You created a separate, reusable HeroDetailComponent.
  - You used a property binding to give the parent HeroesComponent control over the child HeroDetailComponent.
  - You used the @Input decorator to make the hero property available for binding by the external HeroesComponent.
- [4. Add services](https://angular.io/tutorial/toh-pt4)
  - Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.
  - You refactored data access to the HeroService class.
  - You registered the HeroService as the provider of its service at the root level so that it can be injected anywhere in the app.
  - You used Angular Dependency Injection to inject it into a component.
  - You gave the HeroService get data method an asynchronous signature.
  - You discovered Observable and the RxJS Observable library.
  - You used RxJS of() to return an observable of mock heroes (Observable<Hero[]>).
  - The component's ngOnInit lifecycle hook calls the HeroService method, not the constructor.
  - You created a MessageService for loosely-coupled communication between classes.
  - The HeroService injected into a component is created with another injected service, MessageService.
- [5. Add in-app navigation with routing](https://angular.io/tutorial/toh-pt5)
  - You added the Angular router to navigate among different components.
  - You turned the AppComponent into a navigation shell with <a> links and a <router-outlet>.
  - You configured the router in an AppRoutingModule
  - You defined simple routes, a redirect route, and a parameterized route.
  - You used the routerLink directive in anchor elements.
  - You refactored a tightly-coupled master/detail view into a routed detail view.
  - You used router link parameters to navigate to the detail view of a user-selected hero.
  - You shared the HeroService among multiple components.
- [6. Get data from a server](https://angular.io/tutorial/toh-pt6)
  - You added the necessary dependencies to use HTTP in the app.
  - You refactored HeroService to load heroes from a web API.
  - You extended HeroService to support post(), put(), and delete() methods.
  - You updated the components to allow adding, editing, and deleting of heroes.
  - You configured an in-memory web API.
  - You learned how to use observables.

### Other references

- [Pipes](https://angular.io/guide/pipes)
- [Angular CLI](https://angular.io/cli)
- [NgModule](https://angular.io/guide/ngmodules)
- [Lifecycle hooks](https://angular.io/guide/lifecycle-hooks)
- [Event Binding](https://angular.io/guide/template-syntax#event-binding)
- Template Syntax
  - [Class Binding](https://angular.io/guide/template-syntax#class-binding)
  - [Inputs & Outputs](https://angular.io/guide/template-syntax#inputs-outputs)
  - [Property binding](https://angular.io/guide/template-syntax#property-binding)
  - [Interpolation](https://angular.io/guide/template-syntax#interpolation)
- [Dependency Injection](https://angular.io/guide/dependency-injection)
- [Providers](https://angular.io/guide/providers)
- [RouterLink](https://angular.io/api/router/RouterLink)
- [RxJS](https://rxjs-dev.firebaseapp.com/)
- [In-Memory Web API](https://github.com/angular/in-memory-web-api)
- [Architecture](https://angular.io/guide/architecture)
