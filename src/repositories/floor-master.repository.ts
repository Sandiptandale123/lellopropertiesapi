import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {FloorMaster, FloorMasterRelations} from '../models';

export class FloorMasterRepository extends DefaultCrudRepository<
  FloorMaster,
  typeof FloorMaster.prototype.floorId,
  FloorMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(FloorMaster, dataSource);
  }
}
