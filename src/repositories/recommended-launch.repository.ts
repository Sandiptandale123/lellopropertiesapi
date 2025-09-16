import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {RecommendedLaunch, RecommendedLaunchRelations} from '../models';

export class RecommendedLaunchRepository extends DefaultCrudRepository<
  RecommendedLaunch,
  typeof RecommendedLaunch.prototype.reclaunchId,
  RecommendedLaunchRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(RecommendedLaunch, dataSource);
  }
}
