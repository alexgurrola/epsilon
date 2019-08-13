import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './core.datasource.json';

export class CoreDataSource extends juggler.DataSource {
  static dataSourceName = 'core';

  constructor(
    @inject('datasources.config.core', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
