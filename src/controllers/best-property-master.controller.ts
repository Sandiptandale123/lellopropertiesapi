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
import {BestPropertyMaster} from '../models';
import {BestPropertyMasterRepository} from '../repositories';

export class BestPropertyMasterController {
  constructor(
    @repository(BestPropertyMasterRepository)
    public bestPropertyMasterRepository : BestPropertyMasterRepository,
  ) {}

  @post('/best-property-masters')
  @response(200, {
    description: 'BestPropertyMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(BestPropertyMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BestPropertyMaster, {
            title: 'NewBestPropertyMaster',
            
          }),
        },
      },
    })
    bestPropertyMaster: BestPropertyMaster,
  ): Promise<BestPropertyMaster> {
    return this.bestPropertyMasterRepository.create(bestPropertyMaster);
  }

  @get('/best-property-masters/count')
  @response(200, {
    description: 'BestPropertyMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BestPropertyMaster) where?: Where<BestPropertyMaster>,
  ): Promise<Count> {
    return this.bestPropertyMasterRepository.count(where);
  }

  @get('/best-property-masters')
  @response(200, {
    description: 'Array of BestPropertyMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BestPropertyMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BestPropertyMaster) filter?: Filter<BestPropertyMaster>,
  ): Promise<BestPropertyMaster[]> {
    return this.bestPropertyMasterRepository.find(filter);
  }

  @patch('/best-property-masters')
  @response(200, {
    description: 'BestPropertyMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BestPropertyMaster, {partial: true}),
        },
      },
    })
    bestPropertyMaster: BestPropertyMaster,
    @param.where(BestPropertyMaster) where?: Where<BestPropertyMaster>,
  ): Promise<Count> {
    return this.bestPropertyMasterRepository.updateAll(bestPropertyMaster, where);
  }

  @get('/best-property-masters/{id}')
  @response(200, {
    description: 'BestPropertyMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BestPropertyMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BestPropertyMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<BestPropertyMaster>
  ): Promise<BestPropertyMaster> {
    return this.bestPropertyMasterRepository.findById(id, filter);
  }

  @patch('/best-property-masters/{id}')
  @response(204, {
    description: 'BestPropertyMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BestPropertyMaster, {partial: true}),
        },
      },
    })
    bestPropertyMaster: BestPropertyMaster,
  ): Promise<void> {
    await this.bestPropertyMasterRepository.updateById(id, bestPropertyMaster);
  }

  @put('/best-property-masters/{id}')
  @response(204, {
    description: 'BestPropertyMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() bestPropertyMaster: BestPropertyMaster,
  ): Promise<void> {
    await this.bestPropertyMasterRepository.replaceById(id, bestPropertyMaster);
  }

  @del('/best-property-masters/{id}')
  @response(204, {
    description: 'BestPropertyMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bestPropertyMasterRepository.deleteById(id);
  }
}
