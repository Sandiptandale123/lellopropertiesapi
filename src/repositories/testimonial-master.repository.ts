import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {TestimonialMaster, TestimonialMasterRelations} from '../models';

export class TestimonialMasterRepository extends DefaultCrudRepository<
  TestimonialMaster,
  typeof TestimonialMaster.prototype.testimonialId,
  TestimonialMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(TestimonialMaster, dataSource);
  }
}
