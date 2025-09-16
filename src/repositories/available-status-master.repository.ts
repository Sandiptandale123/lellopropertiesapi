import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {AvailableStatusMaster, AvailableStatusMasterRelations} from '../models';

export class AvailableStatusMasterRepository extends DefaultCrudRepository<
  AvailableStatusMaster,
  typeof AvailableStatusMaster.prototype.availablestatusId,
  AvailableStatusMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(AvailableStatusMaster, dataSource);
  }
}
