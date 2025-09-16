import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {DurationMaster, DurationMasterRelations} from '../models';

export class DurationMasterRepository extends DefaultCrudRepository<
  DurationMaster,
  typeof DurationMaster.prototype.durationId,
  DurationMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(DurationMaster, dataSource);
  }
}
