# MovieApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Design Choices

## Home

Search Functionality
IN this component Users can search for movies by title. and the movies list will Display
in a list format on the UI.

## Movies

Movie Details:In this component user clicks on a movies button, it will display the movies list and after that when user click on any particular movie title from the list, it will display more detailed
information about the movie in a new view. it has data like full description, average rating, and release date.
also this new view contains add to favorite button.

## Favorites

Favorites: This component allow users to save movies to Favorites list or to remove movies from favorite list.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
