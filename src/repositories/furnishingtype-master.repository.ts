import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {FurnishingtypeMaster, FurnishingtypeMasterRelations} from '../models';

export class FurnishingtypeMasterRepository extends DefaultCrudRepository<
  FurnishingtypeMaster,
  typeof FurnishingtypeMaster.prototype.furnishingtypeId,
  FurnishingtypeMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(FurnishingtypeMaster, dataSource);
  }
}
