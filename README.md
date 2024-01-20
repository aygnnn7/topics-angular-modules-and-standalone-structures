# Angular - My Notes 3
## Angular Module
An Angular Module is a structure that allows for the modular partitioning of an application, enhancing its manageability. Each module in the application contains components, directives, services, etc., focused on specific functionalities, enabling their modular management and configuration. Angular architecture is fundamentally built on this modular structure. An Angular module is essentially a TypeScript class marked with the `@NgModule` decorator.

### Anatomy of NgModule Decorator
```javascript
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
  ],
  providers: [
    ...
  ],
  exports: [
    ...
  ],
  entryComponents: [
    ...
  ],
  schemas: [
    ...
  ],
  bootstrap: [
    ...
  ],
  id: ""
})
```

**Declarations**: Here, declarations of `components`, `directives`, and `pipes` within the module are made. 
**Note**: A component cannot be declared in more than one module.
**Imports**: This section handles the import of other modules. Importing another module allows for the use of components, services, and directives defined in that module.
**Providers**: Here, declarations for services to be used with dependency injection at the module level are made.
**Exports**: This section manages the export of components, directives, and pipes from the module. Exported structures become usable by another module that imports this module.
**Note**: If a component is to be used via its selector, it needs to be exported.
**EntryComponents**: Previously used for dynamically/programmatically created components. Now, it's no longer needed for this purpose.
**Schemas**: Used for structural validation in HTML templates. This validation checks whether elements or custom tags in HTML templates comply with a certain template structure or standard. **Note**: Not a frequently used feature.
**Id**: This field allows assigning a unique identifier to the module. If not manually specified, Angular assigns an id by itself. Generally, this task is left to Angular.
**Bootstrap**: This field specifies the application's startup component. When the application is initiated, this component is automatically displayed. **Note**: If the module is the main module of the application, bootstrap definition is mandatory.

### Creating a Module in Angular
A module can be created using the Angular CLI with the command `ng g m [name]`.

For a created module to be used in Angular, it must either be imported into the main module or be imported by another module that is already imported into the main module.
![Module schema](md-images/modules-schema.png)

## Lazy Loading
In Angular, the Lazy Loading mechanism is used in modules to enhance the performance of the application and to improve startup time.

Lazy loading is a technique that allows loading only the necessary components or features when required by the user. With this technique, instead of loading all modules and components in these modules at the start of the application, only the parts needed by the user are loaded. 

If lazy loading is not manually implemented, Angular will load all components every time, leading to significant unnecessary performance loss.

### Advantages of Lazy Loading:
- Reduces initial loading time
- Improves performance
- Decreases resource usage on the client-side

Example usage is as follows:
**In app-routing.module**
```javascript
  { path: "customers", loadChildren: () => import("../app/components/customers/customers.module").then(m => m.CustomersModule) },
```
**In customers.module**
```javascript
imports: [
    RouterModule.forChild([
      { path: "add", component: AddCustomerComponent },
      { path: ":id", component: DetailCustomerComponent },
      { path: "", component: ListCustomerComponent }
    ])
  ]
```

## Preloading Strategy
Preloading is a strategy that allows for the background loading of large and significant modules that the user is likely to use. This ensures that when the user needs to access these modules, they can do so without experiencing long waiting times. For preloading to be implemented, the Lazy Loading technique must already be in place.

### Applying Preloading to a Module
To implement preloading in your Angular application, you can specify a preloading strategy in the routing module. Here's an example of how to use the `PreloadAllModules` strategy, which preloads all lazy-loaded modules after the app has loaded:

```javascript
imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
```

### Creating a Custom Preloading Strategy
- Initially, core modules that are essential and can be used at any point in the application are directly loaded. For example, an authentication module.
- Subsequently, frequently used modules are preloaded using the `Preloading` strategy.
- Finally, the remaining modules are loaded using the `lazy loading` method.

An example of a custom preload strategy using Route Data passing:
```javascript
export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        // customer - preloading: true,
        // products - preloading: false

        if (route.data["preload"] === true) {
            return fn();
        }
        return of(null);
    }
}
```

**Note:** To use this strategy, it must be added to the providers of the relevant module. This approach allows for more control over which modules are preloaded and when, optimizing the application's performance and user experience.

## Standalone Component & Directive & Pipe
In Angular, the standalone component structure helps to reduce modular dependencies in the application, facilitating a faster and easier development process.

### Creating a Standalone Component
Using Angular CLI:
`ng g c components/standalone --standalone`

Alternatively, you can add `standalone: true` to the `@Component` decorator of a standard component. In this version, you'll need to remove the component from the module.

### Usage of Standalone Components
- A standalone component must be imported into the module where it will be used.
- To import a standalone component directly at the component level instead of the module level, both components involved need to be standalone.
- To use modular structures in standalone components, the `imports` property inside the `@Component` decorator needs to define the necessary modules.

### Lazy Loading in Standalone Structures
In lazy loading processes, while modular structures are declared with `loadChildren`, standalone components, having no modules, must be declared using the `loadComponent` function.

### Bootstrapping an Application with a Standalone Component
To set up the main configuration of the application with a standalone component instead of in `app.module.ts`, the following steps should be taken:
Modification in `main.ts`:
```javascript
//platformBrowserDynamic().bootstrapModule(AppModule)
// .catch(err => console.error(err));

bootstrapApplication(StandaloneComponent)
```
Then, add the `<app-standalone></app-standalone>` selector in `index.html`.
This makes the `StandaloneComponent` the first component to be loaded by the browser. Consequently, `app.module.ts` becomes redundant.

Standalone components, directives, and pipes in Angular represent a shift towards a more flexible and decoupled approach in application development, simplifying the architecture and potentially enhancing the maintainability and scalability of Angular applications.

## BootstrapApplication
`bootstrapApplication` is a function in Angular that allows bootstrapping an application using a Standalone Component, without any dependency on an Angular module. This means that once the application is booted using the `bootstrapApplication` function with a standalone component, the dependency on `AppModule` is eliminated, making this file redundant and removable.

Application-wide providers, routes, and preloading strategies can also be added via the `bootstrapApplication` function. For example:
```javascript
bootstrapApplication(AppComponent, {
  providers: [
    {provide: "url", useValue: "https://www.google.com"},
    provideRouter([
      {path: "", component: HomeComponent},
      {path: "about", component: AboutComponent},
      {path: "products", component: ProductComponent}
    ], withPreloading(PreloadAllModules))
  ]
})
```
This example demonstrates adding global providers and configuring routing and preloading strategies directly in the `bootstrapApplication` function.

## Router Inputs
The Router Inputs feature allows easy and quick reading of data from various structures like Route & Query Parameters, Route Data Passing, and Resolve Guards. To utilize this feature, the application’s `Component Input Binding` needs to be enabled. 

In applications using RouterModule, the `bindToComponentInputs` feature should be activated. In contrast, in standalone applications, the `withComponentInputBinding` configuration should be called.

This functionality enhances the ease and efficiency of accessing routing-related data directly in components, streamlining the process of handling route parameters and other related data in Angular applications.