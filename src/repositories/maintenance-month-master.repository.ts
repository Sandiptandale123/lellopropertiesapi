import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {MaintenanceMonthMaster, MaintenanceMonthMasterRelations} from '../models';

export class MaintenanceMonthMasterRepository extends DefaultCrudRepository<
  MaintenanceMonthMaster,
  typeof MaintenanceMonthMaster.prototype.maintenanacemonthId,
  MaintenanceMonthMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(MaintenanceMonthMaster, dataSource);
  }
}
