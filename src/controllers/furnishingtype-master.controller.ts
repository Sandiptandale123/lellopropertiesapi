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
import {FurnishingtypeMaster} from '../models';
import {FurnishingtypeMasterRepository} from '../repositories';

export class FurnishingtypeMasterController {
  constructor(
    @repository(FurnishingtypeMasterRepository)
    public furnishingtypeMasterRepository : FurnishingtypeMasterRepository,
  ) {}

  @post('/furnishingtype-masters')
  @response(200, {
    description: 'FurnishingtypeMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(FurnishingtypeMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FurnishingtypeMaster, {
            title: 'NewFurnishingtypeMaster',
            
          }),
        },
      },
    })
    furnishingtypeMaster: FurnishingtypeMaster,
  ): Promise<FurnishingtypeMaster> {
    return this.furnishingtypeMasterRepository.create(furnishingtypeMaster);
  }

  @get('/furnishingtype-masters/count')
  @response(200, {
    description: 'FurnishingtypeMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FurnishingtypeMaster) where?: Where<FurnishingtypeMaster>,
  ): Promise<Count> {
    return this.furnishingtypeMasterRepository.count(where);
  }

  @get('/furnishingtype-masters')
  @response(200, {
    description: 'Array of FurnishingtypeMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FurnishingtypeMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FurnishingtypeMaster) filter?: Filter<FurnishingtypeMaster>,
  ): Promise<FurnishingtypeMaster[]> {
    return this.furnishingtypeMasterRepository.find(filter);
  }

  @patch('/furnishingtype-masters')
  @response(200, {
    description: 'FurnishingtypeMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FurnishingtypeMaster, {partial: true}),
        },
      },
    })
    furnishingtypeMaster: FurnishingtypeMaster,
    @param.where(FurnishingtypeMaster) where?: Where<FurnishingtypeMaster>,
  ): Promise<Count> {
    return this.furnishingtypeMasterRepository.updateAll(furnishingtypeMaster, where);
  }

  @get('/furnishingtype-masters/{id}')
  @response(200, {
    description: 'FurnishingtypeMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FurnishingtypeMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FurnishingtypeMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<FurnishingtypeMaster>
  ): Promise<FurnishingtypeMaster> {
    return this.furnishingtypeMasterRepository.findById(id, filter);
  }

  @patch('/furnishingtype-masters/{id}')
  @response(204, {
    description: 'FurnishingtypeMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FurnishingtypeMaster, {partial: true}),
        },
      },
    })
    furnishingtypeMaster: FurnishingtypeMaster,
  ): Promise<void> {
    await this.furnishingtypeMasterRepository.updateById(id, furnishingtypeMaster);
  }

  @put('/furnishingtype-masters/{id}')
  @response(204, {
    description: 'FurnishingtypeMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() furnishingtypeMaster: FurnishingtypeMaster,
  ): Promise<void> {
    await this.furnishingtypeMasterRepository.replaceById(id, furnishingtypeMaster);
  }

  @del('/furnishingtype-masters/{id}')
  @response(204, {
    description: 'FurnishingtypeMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.furnishingtypeMasterRepository.deleteById(id);
  }
}
