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
- [Dependency Injection](https://angular.io/guide/dependency-injection)
- [Providers](https://angular.io/guide/providers)