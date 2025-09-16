import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {Usertype, UsertypeRelations} from '../models';

export class UsertypeRepository extends DefaultCrudRepository<
  Usertype,
  typeof Usertype.prototype.userId,
  UsertypeRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(Usertype, dataSource);
  }
}
