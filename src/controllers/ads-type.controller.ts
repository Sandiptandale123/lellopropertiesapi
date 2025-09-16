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
import {AdsTypeMaster} from '../models';
import {AdsTypeMasterRepository} from '../repositories';

export class AdsTypeControllerController {
  constructor(
    @repository(AdsTypeMasterRepository)
    public adsTypeMasterRepository : AdsTypeMasterRepository,
  ) {}

  @post('/ads-type-masters')
  @response(200, {
    description: 'AdsTypeMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(AdsTypeMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdsTypeMaster, {
            title: 'NewAdsTypeMaster',
            
          }),
        },
      },
    })
    adsTypeMaster: AdsTypeMaster,
  ): Promise<AdsTypeMaster> {
    return this.adsTypeMasterRepository.create(adsTypeMaster);
  }

  @get('/ads-type-masters/count')
  @response(200, {
    description: 'AdsTypeMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AdsTypeMaster) where?: Where<AdsTypeMaster>,
  ): Promise<Count> {
    return this.adsTypeMasterRepository.count(where);
  }

  @get('/ads-type-masters')
  @response(200, {
    description: 'Array of AdsTypeMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AdsTypeMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AdsTypeMaster) filter?: Filter<AdsTypeMaster>,
  ): Promise<AdsTypeMaster[]> {
    return this.adsTypeMasterRepository.find(filter);
  }

  @patch('/ads-type-masters')
  @response(200, {
    description: 'AdsTypeMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdsTypeMaster, {partial: true}),
        },
      },
    })
    adsTypeMaster: AdsTypeMaster,
    @param.where(AdsTypeMaster) where?: Where<AdsTypeMaster>,
  ): Promise<Count> {
    return this.adsTypeMasterRepository.updateAll(adsTypeMaster, where);
  }

  @get('/ads-type-masters/{id}')
  @response(200, {
    description: 'AdsTypeMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AdsTypeMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AdsTypeMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<AdsTypeMaster>
  ): Promise<AdsTypeMaster> {
    return this.adsTypeMasterRepository.findById(id, filter);
  }

  @patch('/ads-type-masters/{id}')
  @response(204, {
    description: 'AdsTypeMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdsTypeMaster, {partial: true}),
        },
      },
    })
    adsTypeMaster: AdsTypeMaster,
  ): Promise<void> {
    await this.adsTypeMasterRepository.updateById(id, adsTypeMaster);
  }

  @put('/ads-type-masters/{id}')
  @response(204, {
    description: 'AdsTypeMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() adsTypeMaster: AdsTypeMaster,
  ): Promise<void> {
    await this.adsTypeMasterRepository.replaceById(id, adsTypeMaster);
  }

  @del('/ads-type-masters/{id}')
  @response(204, {
    description: 'AdsTypeMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.adsTypeMasterRepository.deleteById(id);
  }
}
