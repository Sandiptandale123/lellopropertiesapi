import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {SellerMaster, SellerMasterRelations} from '../models';

export class SellerMasterRepository extends DefaultCrudRepository<
  SellerMaster,
  typeof SellerMaster.prototype.sellerId,
  SellerMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(SellerMaster, dataSource);
  }
}
