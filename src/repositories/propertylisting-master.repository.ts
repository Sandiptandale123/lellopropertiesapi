import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {PropertylistingMaster, PropertylistingMasterRelations} from '../models';

export class PropertylistingMasterRepository extends DefaultCrudRepository<
  PropertylistingMaster,
  typeof PropertylistingMaster.prototype.propertylistId,
  PropertylistingMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(PropertylistingMaster, dataSource);
  }
}
