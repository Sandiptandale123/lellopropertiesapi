import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {BestPropertyMaster, BestPropertyMasterRelations} from '../models';

export class BestPropertyMasterRepository extends DefaultCrudRepository<
  BestPropertyMaster,
  typeof BestPropertyMaster.prototype.bestPropertyId,
  BestPropertyMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(BestPropertyMaster, dataSource);
  }
}
