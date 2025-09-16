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
import {UnderconstructionMaster} from '../models';
import {UnderconstructionMasterRepository} from '../repositories';

export class UnderconstructionMasterController {
  constructor(
    @repository(UnderconstructionMasterRepository)
    public underconstructionMasterRepository : UnderconstructionMasterRepository,
  ) {}

  @post('/underconstruction-masters')
  @response(200, {
    description: 'UnderconstructionMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(UnderconstructionMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UnderconstructionMaster, {
            title: 'NewUnderconstructionMaster',
            
          }),
        },
      },
    })
    underconstructionMaster: UnderconstructionMaster,
  ): Promise<UnderconstructionMaster> {
    return this.underconstructionMasterRepository.create(underconstructionMaster);
  }

  @get('/underconstruction-masters/count')
  @response(200, {
    description: 'UnderconstructionMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UnderconstructionMaster) where?: Where<UnderconstructionMaster>,
  ): Promise<Count> {
    return this.underconstructionMasterRepository.count(where);
  }

  @get('/underconstruction-masters')
  @response(200, {
    description: 'Array of UnderconstructionMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UnderconstructionMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UnderconstructionMaster) filter?: Filter<UnderconstructionMaster>,
  ): Promise<UnderconstructionMaster[]> {
    return this.underconstructionMasterRepository.find(filter);
  }

  @patch('/underconstruction-masters')
  @response(200, {
    description: 'UnderconstructionMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UnderconstructionMaster, {partial: true}),
        },
      },
    })
    underconstructionMaster: UnderconstructionMaster,
    @param.where(UnderconstructionMaster) where?: Where<UnderconstructionMaster>,
  ): Promise<Count> {
    return this.underconstructionMasterRepository.updateAll(underconstructionMaster, where);
  }

  @get('/underconstruction-masters/{id}')
  @response(200, {
    description: 'UnderconstructionMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UnderconstructionMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UnderconstructionMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<UnderconstructionMaster>
  ): Promise<UnderconstructionMaster> {
    return this.underconstructionMasterRepository.findById(id, filter);
  }

  @patch('/underconstruction-masters/{id}')
  @response(204, {
    description: 'UnderconstructionMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UnderconstructionMaster, {partial: true}),
        },
      },
    })
    underconstructionMaster: UnderconstructionMaster,
  ): Promise<void> {
    await this.underconstructionMasterRepository.updateById(id, underconstructionMaster);
  }

  @put('/underconstruction-masters/{id}')
  @response(204, {
    description: 'UnderconstructionMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() underconstructionMaster: UnderconstructionMaster,
  ): Promise<void> {
    await this.underconstructionMasterRepository.replaceById(id, underconstructionMaster);
  }

  @del('/underconstruction-masters/{id}')
  @response(204, {
    description: 'UnderconstructionMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.underconstructionMasterRepository.deleteById(id);
  }
}
