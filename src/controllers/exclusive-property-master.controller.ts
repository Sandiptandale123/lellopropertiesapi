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
import {ExclusivePropertyMaster} from '../models';
import {ExclusivePropertyMasterRepository} from '../repositories';

export class ExclusivePropertyMasterController {
  constructor(
    @repository(ExclusivePropertyMasterRepository)
    public exclusivePropertyMasterRepository : ExclusivePropertyMasterRepository,
  ) {}

  @post('/exclusive-property-masters')
  @response(200, {
    description: 'ExclusivePropertyMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(ExclusivePropertyMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ExclusivePropertyMaster, {
            title: 'NewExclusivePropertyMaster',
            
          }),
        },
      },
    })
    exclusivePropertyMaster: ExclusivePropertyMaster,
  ): Promise<ExclusivePropertyMaster> {
    return this.exclusivePropertyMasterRepository.create(exclusivePropertyMaster);
  }

  @get('/exclusive-property-masters/count')
  @response(200, {
    description: 'ExclusivePropertyMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ExclusivePropertyMaster) where?: Where<ExclusivePropertyMaster>,
  ): Promise<Count> {
    return this.exclusivePropertyMasterRepository.count(where);
  }

  @get('/exclusive-property-masters')
  @response(200, {
    description: 'Array of ExclusivePropertyMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ExclusivePropertyMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ExclusivePropertyMaster) filter?: Filter<ExclusivePropertyMaster>,
  ): Promise<ExclusivePropertyMaster[]> {
    return this.exclusivePropertyMasterRepository.find(filter);
  }

  @patch('/exclusive-property-masters')
  @response(200, {
    description: 'ExclusivePropertyMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ExclusivePropertyMaster, {partial: true}),
        },
      },
    })
    exclusivePropertyMaster: ExclusivePropertyMaster,
    @param.where(ExclusivePropertyMaster) where?: Where<ExclusivePropertyMaster>,
  ): Promise<Count> {
    return this.exclusivePropertyMasterRepository.updateAll(exclusivePropertyMaster, where);
  }

  @get('/exclusive-property-masters/{id}')
  @response(200, {
    description: 'ExclusivePropertyMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ExclusivePropertyMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ExclusivePropertyMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<ExclusivePropertyMaster>
  ): Promise<ExclusivePropertyMaster> {
    return this.exclusivePropertyMasterRepository.findById(id, filter);
  }

  @patch('/exclusive-property-masters/{id}')
  @response(204, {
    description: 'ExclusivePropertyMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ExclusivePropertyMaster, {partial: true}),
        },
      },
    })
    exclusivePropertyMaster: ExclusivePropertyMaster,
  ): Promise<void> {
    await this.exclusivePropertyMasterRepository.updateById(id, exclusivePropertyMaster);
  }

  @put('/exclusive-property-masters/{id}')
  @response(204, {
    description: 'ExclusivePropertyMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() exclusivePropertyMaster: ExclusivePropertyMaster,
  ): Promise<void> {
    await this.exclusivePropertyMasterRepository.replaceById(id, exclusivePropertyMaster);
  }

  @del('/exclusive-property-masters/{id}')
  @response(204, {
    description: 'ExclusivePropertyMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.exclusivePropertyMasterRepository.deleteById(id);
  }
}
