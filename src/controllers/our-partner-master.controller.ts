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
import {OurPartnerMaster} from '../models';
import {OurPartnerMasterRepository} from '../repositories';

export class OurPartnerMasterController {
  constructor(
    @repository(OurPartnerMasterRepository)
    public ourPartnerMasterRepository : OurPartnerMasterRepository,
  ) {}

  @post('/our-partner-masters')
  @response(200, {
    description: 'OurPartnerMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(OurPartnerMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OurPartnerMaster, {
            title: 'NewOurPartnerMaster',
            
          }),
        },
      },
    })
    ourPartnerMaster: OurPartnerMaster,
  ): Promise<OurPartnerMaster> {
    return this.ourPartnerMasterRepository.create(ourPartnerMaster);
  }

  @get('/our-partner-masters/count')
  @response(200, {
    description: 'OurPartnerMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(OurPartnerMaster) where?: Where<OurPartnerMaster>,
  ): Promise<Count> {
    return this.ourPartnerMasterRepository.count(where);
  }

  @get('/our-partner-masters')
  @response(200, {
    description: 'Array of OurPartnerMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(OurPartnerMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(OurPartnerMaster) filter?: Filter<OurPartnerMaster>,
  ): Promise<OurPartnerMaster[]> {
    return this.ourPartnerMasterRepository.find(filter);
  }

  @patch('/our-partner-masters')
  @response(200, {
    description: 'OurPartnerMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OurPartnerMaster, {partial: true}),
        },
      },
    })
    ourPartnerMaster: OurPartnerMaster,
    @param.where(OurPartnerMaster) where?: Where<OurPartnerMaster>,
  ): Promise<Count> {
    return this.ourPartnerMasterRepository.updateAll(ourPartnerMaster, where);
  }

  @get('/our-partner-masters/{id}')
  @response(200, {
    description: 'OurPartnerMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(OurPartnerMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OurPartnerMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<OurPartnerMaster>
  ): Promise<OurPartnerMaster> {
    return this.ourPartnerMasterRepository.findById(id, filter);
  }

  @patch('/our-partner-masters/{id}')
  @response(204, {
    description: 'OurPartnerMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OurPartnerMaster, {partial: true}),
        },
      },
    })
    ourPartnerMaster: OurPartnerMaster,
  ): Promise<void> {
    await this.ourPartnerMasterRepository.updateById(id, ourPartnerMaster);
  }

  @put('/our-partner-masters/{id}')
  @response(204, {
    description: 'OurPartnerMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ourPartnerMaster: OurPartnerMaster,
  ): Promise<void> {
    await this.ourPartnerMasterRepository.replaceById(id, ourPartnerMaster);
  }

  @del('/our-partner-masters/{id}')
  @response(204, {
    description: 'OurPartnerMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ourPartnerMasterRepository.deleteById(id);
  }
}
