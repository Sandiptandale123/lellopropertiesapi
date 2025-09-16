import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {PublishTypeMaster, PublishTypeMasterRelations} from '../models';

export class PublishTypeMasterRepository extends DefaultCrudRepository<
  PublishTypeMaster,
  typeof PublishTypeMaster.prototype.publishTypeId,
  PublishTypeMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(PublishTypeMaster, dataSource);
  }
}
