import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {NewLaunchMaster, NewLaunchMasterRelations} from '../models';

export class NewLaunchMasterRepository extends DefaultCrudRepository<
  NewLaunchMaster,
  typeof NewLaunchMaster.prototype.newLaunchId,
  NewLaunchMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(NewLaunchMaster, dataSource);
  }
}
