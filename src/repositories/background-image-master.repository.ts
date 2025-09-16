import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {BackgroundImageMaster, BackgroundImageMasterRelations} from '../models';

export class BackgroundImageMasterRepository extends DefaultCrudRepository<
  BackgroundImageMaster,
  typeof BackgroundImageMaster.prototype.backImgId,
  BackgroundImageMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(BackgroundImageMaster, dataSource);
  }
}
