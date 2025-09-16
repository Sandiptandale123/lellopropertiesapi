import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {CityMaster, CityMasterRelations} from '../models';

export class CityMasterRepository extends DefaultCrudRepository<
  CityMaster,
  typeof CityMaster.prototype.cityId,
  CityMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(CityMaster, dataSource);
  }
}
