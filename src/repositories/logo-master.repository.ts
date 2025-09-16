import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {LogoMaster, LogoMasterRelations} from '../models';

export class LogoMasterRepository extends DefaultCrudRepository<
  LogoMaster,
  typeof LogoMaster.prototype.logoId,
  LogoMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(LogoMaster, dataSource);
  }
}
