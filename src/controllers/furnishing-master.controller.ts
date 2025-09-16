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
import {FurnishingMaster} from '../models';
import {FurnishingMasterRepository} from '../repositories';

export class FurnishingMasterController {
  constructor(
    @repository(FurnishingMasterRepository)
    public furnishingMasterRepository : FurnishingMasterRepository,
  ) {}

  @post('/furnishing-masters')
  @response(200, {
    description: 'FurnishingMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(FurnishingMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FurnishingMaster, {
            title: 'NewFurnishingMaster',
            
          }),
        },
      },
    })
    furnishingMaster: FurnishingMaster,
  ): Promise<FurnishingMaster> {
    return this.furnishingMasterRepository.create(furnishingMaster);
  }

  @get('/furnishing-masters/count')
  @response(200, {
    description: 'FurnishingMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FurnishingMaster) where?: Where<FurnishingMaster>,
  ): Promise<Count> {
    return this.furnishingMasterRepository.count(where);
  }

  @get('/furnishing-masters')
  @response(200, {
    description: 'Array of FurnishingMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FurnishingMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FurnishingMaster) filter?: Filter<FurnishingMaster>,
  ): Promise<FurnishingMaster[]> {
    return this.furnishingMasterRepository.find(filter);
  }

  @patch('/furnishing-masters')
  @response(200, {
    description: 'FurnishingMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FurnishingMaster, {partial: true}),
        },
      },
    })
    furnishingMaster: FurnishingMaster,
    @param.where(FurnishingMaster) where?: Where<FurnishingMaster>,
  ): Promise<Count> {
    return this.furnishingMasterRepository.updateAll(furnishingMaster, where);
  }

  @get('/furnishing-masters/{id}')
  @response(200, {
    description: 'FurnishingMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FurnishingMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FurnishingMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<FurnishingMaster>
  ): Promise<FurnishingMaster> {
    return this.furnishingMasterRepository.findById(id, filter);
  }

  @patch('/furnishing-masters/{id}')
  @response(204, {
    description: 'FurnishingMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FurnishingMaster, {partial: true}),
        },
      },
    })
    furnishingMaster: FurnishingMaster,
  ): Promise<void> {
    await this.furnishingMasterRepository.updateById(id, furnishingMaster);
  }

  @put('/furnishing-masters/{id}')
  @response(204, {
    description: 'FurnishingMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() furnishingMaster: FurnishingMaster,
  ): Promise<void> {
    await this.furnishingMasterRepository.replaceById(id, furnishingMaster);
  }

  @del('/furnishing-masters/{id}')
  @response(204, {
    description: 'FurnishingMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.furnishingMasterRepository.deleteById(id);
  }
}
