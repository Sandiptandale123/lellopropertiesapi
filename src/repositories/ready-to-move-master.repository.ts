import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {ReadyToMoveMaster, ReadyToMoveMasterRelations} from '../models';

export class ReadyToMoveMasterRepository extends DefaultCrudRepository<
  ReadyToMoveMaster,
  typeof ReadyToMoveMaster.prototype.readytomoveId,
  ReadyToMoveMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(ReadyToMoveMaster, dataSource);
  }
}
