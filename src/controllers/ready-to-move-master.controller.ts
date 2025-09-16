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
import {ReadyToMoveMaster} from '../models';
import {ReadyToMoveMasterRepository} from '../repositories';

export class ReadyToMoveMasterController {
  constructor(
    @repository(ReadyToMoveMasterRepository)
    public readyToMoveMasterRepository : ReadyToMoveMasterRepository,
  ) {}

  @post('/ready-to-move-masters')
  @response(200, {
    description: 'ReadyToMoveMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(ReadyToMoveMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReadyToMoveMaster, {
            title: 'NewReadyToMoveMaster',
            
          }),
        },
      },
    })
    readyToMoveMaster: ReadyToMoveMaster,
  ): Promise<ReadyToMoveMaster> {
    return this.readyToMoveMasterRepository.create(readyToMoveMaster);
  }

  @get('/ready-to-move-masters/count')
  @response(200, {
    description: 'ReadyToMoveMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ReadyToMoveMaster) where?: Where<ReadyToMoveMaster>,
  ): Promise<Count> {
    return this.readyToMoveMasterRepository.count(where);
  }

  @get('/ready-to-move-masters')
  @response(200, {
    description: 'Array of ReadyToMoveMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ReadyToMoveMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ReadyToMoveMaster) filter?: Filter<ReadyToMoveMaster>,
  ): Promise<ReadyToMoveMaster[]> {
    return this.readyToMoveMasterRepository.find(filter);
  }

  @patch('/ready-to-move-masters')
  @response(200, {
    description: 'ReadyToMoveMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReadyToMoveMaster, {partial: true}),
        },
      },
    })
    readyToMoveMaster: ReadyToMoveMaster,
    @param.where(ReadyToMoveMaster) where?: Where<ReadyToMoveMaster>,
  ): Promise<Count> {
    return this.readyToMoveMasterRepository.updateAll(readyToMoveMaster, where);
  }

  @get('/ready-to-move-masters/{id}')
  @response(200, {
    description: 'ReadyToMoveMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ReadyToMoveMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ReadyToMoveMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<ReadyToMoveMaster>
  ): Promise<ReadyToMoveMaster> {
    return this.readyToMoveMasterRepository.findById(id, filter);
  }

  @patch('/ready-to-move-masters/{id}')
  @response(204, {
    description: 'ReadyToMoveMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReadyToMoveMaster, {partial: true}),
        },
      },
    })
    readyToMoveMaster: ReadyToMoveMaster,
  ): Promise<void> {
    await this.readyToMoveMasterRepository.updateById(id, readyToMoveMaster);
  }

  @put('/ready-to-move-masters/{id}')
  @response(204, {
    description: 'ReadyToMoveMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() readyToMoveMaster: ReadyToMoveMaster,
  ): Promise<void> {
    await this.readyToMoveMasterRepository.replaceById(id, readyToMoveMaster);
  }

  @del('/ready-to-move-masters/{id}')
  @response(204, {
    description: 'ReadyToMoveMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.readyToMoveMasterRepository.deleteById(id);
  }
}
