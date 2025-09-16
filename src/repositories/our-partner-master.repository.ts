import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {OurPartnerMaster, OurPartnerMasterRelations} from '../models';

export class OurPartnerMasterRepository extends DefaultCrudRepository<
  OurPartnerMaster,
  typeof OurPartnerMaster.prototype.partnerId,
  OurPartnerMasterRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(OurPartnerMaster, dataSource);
  }
}
