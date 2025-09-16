import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {OtpVerification, OtpVerificationRelations} from '../models';

export class OtpVerificationRepository extends DefaultCrudRepository<
  OtpVerification,
  typeof OtpVerification.prototype.otpId,
  OtpVerificationRelations
> {
  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
  ) {
    super(OtpVerification, dataSource);
  }
}
