import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {UnderconstructionMaster, UnderconstructionMasterRelations} from '../models';

export class UnderconstructionMasterRepository extends DefaultCrudRepository<
  UnderconstructionMaster,
  typeof UnderconstructionMaster.prototype.underconstuctionId,
  UnderconstructionMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(UnderconstructionMaster, dataSource);
  }
}
