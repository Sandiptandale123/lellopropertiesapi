import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';

export {ApplicationConfig};

export class LelloPropertiesApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // ---------------------- Serve static files ----------------------
    this.static('/', path.join(__dirname, '../public'));

    // Serve static files under /uploads
    this.static('/uploads', path.join(__dirname, '../src/uploads'));


    // ---------------------- Rest Explorer ----------------------
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;

    // Boot options
    this.bootOptions = {
      controllers: {
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
