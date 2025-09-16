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
import {DurationMaster} from '../models';
import {DurationMasterRepository} from '../repositories';

export class DurationMasterController {
  constructor(
    @repository(DurationMasterRepository)
    public durationMasterRepository : DurationMasterRepository,
  ) {}

  @post('/duration-masters')
  @response(200, {
    description: 'DurationMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(DurationMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DurationMaster, {
            title: 'NewDurationMaster',
            
          }),
        },
      },
    })
    durationMaster: DurationMaster,
  ): Promise<DurationMaster> {
    return this.durationMasterRepository.create(durationMaster);
  }

  @get('/duration-masters/count')
  @response(200, {
    description: 'DurationMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DurationMaster) where?: Where<DurationMaster>,
  ): Promise<Count> {
    return this.durationMasterRepository.count(where);
  }

  @get('/duration-masters')
  @response(200, {
    description: 'Array of DurationMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DurationMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DurationMaster) filter?: Filter<DurationMaster>,
  ): Promise<DurationMaster[]> {
    return this.durationMasterRepository.find(filter);
  }

  @patch('/duration-masters')
  @response(200, {
    description: 'DurationMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DurationMaster, {partial: true}),
        },
      },
    })
    durationMaster: DurationMaster,
    @param.where(DurationMaster) where?: Where<DurationMaster>,
  ): Promise<Count> {
    return this.durationMasterRepository.updateAll(durationMaster, where);
  }

  @get('/duration-masters/{id}')
  @response(200, {
    description: 'DurationMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DurationMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DurationMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<DurationMaster>
  ): Promise<DurationMaster> {
    return this.durationMasterRepository.findById(id, filter);
  }

  @patch('/duration-masters/{id}')
  @response(204, {
    description: 'DurationMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DurationMaster, {partial: true}),
        },
      },
    })
    durationMaster: DurationMaster,
  ): Promise<void> {
    await this.durationMasterRepository.updateById(id, durationMaster);
  }

  @put('/duration-masters/{id}')
  @response(204, {
    description: 'DurationMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() durationMaster: DurationMaster,
  ): Promise<void> {
    await this.durationMasterRepository.replaceById(id, durationMaster);
  }

  @del('/duration-masters/{id}')
  @response(204, {
    description: 'DurationMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.durationMasterRepository.deleteById(id);
  }
}
