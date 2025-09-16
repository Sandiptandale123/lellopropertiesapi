import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {AdsManagement, AdsManagementRelations} from '../models';

export class AdsManagementRepository extends DefaultCrudRepository<
  AdsManagement,
  typeof AdsManagement.prototype.adsId,
  AdsManagementRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(AdsManagement, dataSource);
  }
}
