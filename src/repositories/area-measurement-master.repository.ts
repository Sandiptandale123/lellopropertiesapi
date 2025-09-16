import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {AreaMeasurementMaster, AreaMeasurementMasterRelations} from '../models';

export class AreaMeasurementMasterRepository extends DefaultCrudRepository<
  AreaMeasurementMaster,
  typeof AreaMeasurementMaster.prototype.areaMeasurementId,
  AreaMeasurementMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(AreaMeasurementMaster, dataSource);
  }
}
