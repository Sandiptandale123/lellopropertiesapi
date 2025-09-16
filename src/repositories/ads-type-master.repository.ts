import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {AdsTypeMaster, AdsTypeMasterRelations} from '../models';

export class AdsTypeMasterRepository extends DefaultCrudRepository<
  AdsTypeMaster,
  typeof AdsTypeMaster.prototype.adsTypeId,
  AdsTypeMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(AdsTypeMaster, dataSource);
  }
}
