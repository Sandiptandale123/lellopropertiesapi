import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {RealEstateMaster, RealEstateMasterRelations} from '../models';

export class RealEstateMasterRepository extends DefaultCrudRepository<
  RealEstateMaster,
  typeof RealEstateMaster.prototype.blogId,
  RealEstateMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(RealEstateMaster, dataSource);
  }
}
