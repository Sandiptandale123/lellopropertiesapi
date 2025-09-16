import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {MainProperttyTypeMaster, MainProperttyTypeMasterRelations} from '../models';

export class MainProperttyTypeMasterRepository extends DefaultCrudRepository<
  MainProperttyTypeMaster,
  typeof MainProperttyTypeMaster.prototype.mainpropertytypeId,
  MainProperttyTypeMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(MainProperttyTypeMaster, dataSource);
  }
}
