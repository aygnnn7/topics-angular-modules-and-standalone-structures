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

## Advantages of Lazy Loading:
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

