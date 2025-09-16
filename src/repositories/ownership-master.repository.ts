import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {OwnershipMaster, OwnershipMasterRelations} from '../models';

export class OwnershipMasterRepository extends DefaultCrudRepository<
  OwnershipMaster,
  typeof OwnershipMaster.prototype.ownershipId,
  OwnershipMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(OwnershipMaster, dataSource);
  }
}
