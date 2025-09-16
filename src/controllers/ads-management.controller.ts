import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {AdsManagement} from '../models';
import {AdsManagementRepository} from '../repositories';

export class AdsManagementController {
  constructor(
    @repository(AdsManagementRepository)
    public adsManagementRepository: AdsManagementRepository,
  ) { }

  @post('/ads-managements')
  @response(200, {
    description: 'AdsManagement model instance',
    content: {'application/json': {schema: getModelSchemaRef(AdsManagement)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdsManagement, {
            title: 'NewAdsManagement',

          }),
        },
      },
    })
    adsManagement: AdsManagement,
  ): Promise<AdsManagement> {
    return this.adsManagementRepository.create(adsManagement);
  }

  @get('/ads-managements/count')
  @response(200, {
    description: 'AdsManagement model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AdsManagement) where?: Where<AdsManagement>,
  ): Promise<Count> {
    return this.adsManagementRepository.count(where);
  }

  @get('/ads-managements')
  @response(200, {
    description: 'Array of AdsManagement model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AdsManagement, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AdsManagement) filter?: Filter<AdsManagement>,
  ): Promise<AdsManagement[]> {
    return this.adsManagementRepository.find(filter);
  }

  @patch('/ads-managements')
  @response(200, {
    description: 'AdsManagement PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdsManagement, {partial: true}),
        },
      },
    })
    adsManagement: AdsManagement,
    @param.where(AdsManagement) where?: Where<AdsManagement>,
  ): Promise<Count> {
    return this.adsManagementRepository.updateAll(adsManagement, where);
  }

  @get('/ads-managements/{id}')
  @response(200, {
    description: 'AdsManagement model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AdsManagement, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AdsManagement, {exclude: 'where'}) filter?: FilterExcludingWhere<AdsManagement>
  ): Promise<AdsManagement> {
    return this.adsManagementRepository.findById(id, filter);
  }

  @patch('/ads-managements/{id}')
  @response(204, {
    description: 'AdsManagement PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdsManagement, {partial: true}),
        },
      },
    })
    adsManagement: AdsManagement,
  ): Promise<void> {
    await this.adsManagementRepository.updateById(id, adsManagement);
  }

  @put('/ads-managements/{id}')
  @response(204, {
    description: 'AdsManagement PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() adsManagement: AdsManagement,
  ): Promise<void> {
    await this.adsManagementRepository.replaceById(id, adsManagement);
  }

  @del('/ads-managements/{id}')
  @response(204, {
    description: 'AdsManagement DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.adsManagementRepository.deleteById(id);
  }
}
