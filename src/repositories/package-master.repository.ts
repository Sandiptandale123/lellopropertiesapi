import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {PackageMaster, PackageMasterRelations} from '../models';

export class PackageMasterRepository extends DefaultCrudRepository<
  PackageMaster,
  typeof PackageMaster.prototype.packageId,
  PackageMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(PackageMaster, dataSource);
  }
}
