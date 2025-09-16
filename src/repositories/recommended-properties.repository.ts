import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {RecommendedProperties, RecommendedPropertiesRelations} from '../models';

export class RecommendedPropertiesRepository extends DefaultCrudRepository<
  RecommendedProperties,
  typeof RecommendedProperties.prototype.recommendPropId,
  RecommendedPropertiesRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(RecommendedProperties, dataSource);
  }
}
