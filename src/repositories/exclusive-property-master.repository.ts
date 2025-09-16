import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {ExclusivePropertyMaster, ExclusivePropertyMasterRelations} from '../models';

export class ExclusivePropertyMasterRepository extends DefaultCrudRepository<
  ExclusivePropertyMaster,
  typeof ExclusivePropertyMaster.prototype.exclusivePropertyId,
  ExclusivePropertyMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(ExclusivePropertyMaster, dataSource);
  }
}
