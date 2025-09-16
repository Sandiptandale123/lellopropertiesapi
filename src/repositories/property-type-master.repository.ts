import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {PropertyTypeMaster, PropertyTypeMasterRelations} from '../models';

export class PropertyTypeMasterRepository extends DefaultCrudRepository<
  PropertyTypeMaster,
  typeof PropertyTypeMaster.prototype.propertyTypeId,
  PropertyTypeMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(PropertyTypeMaster, dataSource);
  }
}
