import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {OtpVerification} from '../models';
import {OtpVerificationRepository} from '../repositories';

export class OtpVerificationController {
  constructor(
    @repository(OtpVerificationRepository)
    public otpVerificationRepository : OtpVerificationRepository,
  ) {}

  @post('/otp-verifications')
  @response(200, {
    description: 'OtpVerification model instance',
    content: {'application/json': {schema: getModelSchemaRef(OtpVerification)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OtpVerification, {
            title: 'NewOtpVerification',
            
          }),
        },
      },
    })
    otpVerification: OtpVerification,
  ): Promise<OtpVerification> {
    return this.otpVerificationRepository.create(otpVerification);
  }

  @get('/otp-verifications/count')
  @response(200, {
    description: 'OtpVerification model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(OtpVerification) where?: Where<OtpVerification>,
  ): Promise<Count> {
    return this.otpVerificationRepository.count(where);
  }

  @get('/otp-verifications')
  @response(200, {
    description: 'Array of OtpVerification model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(OtpVerification, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(OtpVerification) filter?: Filter<OtpVerification>,
  ): Promise<OtpVerification[]> {
    return this.otpVerificationRepository.find(filter);
  }

  @patch('/otp-verifications')
  @response(200, {
    description: 'OtpVerification PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OtpVerification, {partial: true}),
        },
      },
    })
    otpVerification: OtpVerification,
    @param.where(OtpVerification) where?: Where<OtpVerification>,
  ): Promise<Count> {
    return this.otpVerificationRepository.updateAll(otpVerification, where);
  }

  @get('/otp-verifications/{id}')
  @response(200, {
    description: 'OtpVerification model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(OtpVerification, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OtpVerification, {exclude: 'where'}) filter?: FilterExcludingWhere<OtpVerification>
  ): Promise<OtpVerification> {
    return this.otpVerificationRepository.findById(id, filter);
  }

  @patch('/otp-verifications/{id}')
  @response(204, {
    description: 'OtpVerification PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OtpVerification, {partial: true}),
        },
      },
    })
    otpVerification: OtpVerification,
  ): Promise<void> {
    await this.otpVerificationRepository.updateById(id, otpVerification);
  }

  @put('/otp-verifications/{id}')
  @response(204, {
    description: 'OtpVerification PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() otpVerification: OtpVerification,
  ): Promise<void> {
    await this.otpVerificationRepository.replaceById(id, otpVerification);
  }

  @del('/otp-verifications/{id}')
  @response(204, {
    description: 'OtpVerification DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.otpVerificationRepository.deleteById(id);
  }
}
