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
import {AvailableStatusMaster} from '../models';
import {AvailableStatusMasterRepository} from '../repositories';

export class AvailableStatusMasterController {
  constructor(
    @repository(AvailableStatusMasterRepository)
    public availableStatusMasterRepository : AvailableStatusMasterRepository,
  ) {}

  @post('/available-status-masters')
  @response(200, {
    description: 'AvailableStatusMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(AvailableStatusMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AvailableStatusMaster, {
            title: 'NewAvailableStatusMaster',
            
          }),
        },
      },
    })
    availableStatusMaster: AvailableStatusMaster,
  ): Promise<AvailableStatusMaster> {
    return this.availableStatusMasterRepository.create(availableStatusMaster);
  }

  @get('/available-status-masters/count')
  @response(200, {
    description: 'AvailableStatusMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AvailableStatusMaster) where?: Where<AvailableStatusMaster>,
  ): Promise<Count> {
    return this.availableStatusMasterRepository.count(where);
  }

  @get('/available-status-masters')
  @response(200, {
    description: 'Array of AvailableStatusMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AvailableStatusMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AvailableStatusMaster) filter?: Filter<AvailableStatusMaster>,
  ): Promise<AvailableStatusMaster[]> {
    return this.availableStatusMasterRepository.find(filter);
  }

  @patch('/available-status-masters')
  @response(200, {
    description: 'AvailableStatusMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AvailableStatusMaster, {partial: true}),
        },
      },
    })
    availableStatusMaster: AvailableStatusMaster,
    @param.where(AvailableStatusMaster) where?: Where<AvailableStatusMaster>,
  ): Promise<Count> {
    return this.availableStatusMasterRepository.updateAll(availableStatusMaster, where);
  }

  @get('/available-status-masters/{id}')
  @response(200, {
    description: 'AvailableStatusMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AvailableStatusMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AvailableStatusMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<AvailableStatusMaster>
  ): Promise<AvailableStatusMaster> {
    return this.availableStatusMasterRepository.findById(id, filter);
  }

  @patch('/available-status-masters/{id}')
  @response(204, {
    description: 'AvailableStatusMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AvailableStatusMaster, {partial: true}),
        },
      },
    })
    availableStatusMaster: AvailableStatusMaster,
  ): Promise<void> {
    await this.availableStatusMasterRepository.updateById(id, availableStatusMaster);
  }

  @put('/available-status-masters/{id}')
  @response(204, {
    description: 'AvailableStatusMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() availableStatusMaster: AvailableStatusMaster,
  ): Promise<void> {
    await this.availableStatusMasterRepository.replaceById(id, availableStatusMaster);
  }

  @del('/available-status-masters/{id}')
  @response(204, {
    description: 'AvailableStatusMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.availableStatusMasterRepository.deleteById(id);
  }
}
