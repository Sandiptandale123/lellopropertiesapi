import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {OtherRoomMaster, OtherRoomMasterRelations} from '../models';

export class OtherRoomMasterRepository extends DefaultCrudRepository<
  OtherRoomMaster,
  typeof OtherRoomMaster.prototype.otherRoomId,
  OtherRoomMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(OtherRoomMaster, dataSource);
  }
}
