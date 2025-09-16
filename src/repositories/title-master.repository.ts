import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {TitleMaster, TitleMasterRelations} from '../models';

export class TitleMasterRepository extends DefaultCrudRepository<
  TitleMaster,
  typeof TitleMaster.prototype.titleId,
  TitleMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(TitleMaster, dataSource);
  }
}
