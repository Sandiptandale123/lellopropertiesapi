import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {FurnishingMaster, FurnishingMasterRelations} from '../models';

export class FurnishingMasterRepository extends DefaultCrudRepository<
  FurnishingMaster,
  typeof FurnishingMaster.prototype.furnishingId,
  FurnishingMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(FurnishingMaster, dataSource);
  }
}
