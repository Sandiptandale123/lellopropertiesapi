import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {BuyerMaster, BuyerMasterRelations} from '../models';

export class BuyerMasterRepository extends DefaultCrudRepository<
  BuyerMaster,
  typeof BuyerMaster.prototype.buyerId,
  BuyerMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(BuyerMaster, dataSource);
  }
}
