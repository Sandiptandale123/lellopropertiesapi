import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {BestpropertyLaunch, BestpropertyLaunchRelations} from '../models';

export class BestpropertyLaunchRepository extends DefaultCrudRepository<
  BestpropertyLaunch,
  typeof BestpropertyLaunch.prototype.bestlaunchId,
  BestpropertyLaunchRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(BestpropertyLaunch, dataSource);
  }
}
