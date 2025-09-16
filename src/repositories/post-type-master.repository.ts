import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {PostTypeMaster, PostTypeMasterRelations} from '../models';

export class PostTypeMasterRepository extends DefaultCrudRepository<
  PostTypeMaster,
  typeof PostTypeMaster.prototype.postTypeId,
  PostTypeMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(PostTypeMaster, dataSource);
  }
}
