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
import {OwnershipMaster} from '../models';
import {OwnershipMasterRepository} from '../repositories';

export class OwnershipMasterController {
  constructor(
    @repository(OwnershipMasterRepository)
    public ownershipMasterRepository : OwnershipMasterRepository,
  ) {}

  @post('/ownership-masters')
  @response(200, {
    description: 'OwnershipMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(OwnershipMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OwnershipMaster, {
            title: 'NewOwnershipMaster',
            
          }),
        },
      },
    })
    ownershipMaster: OwnershipMaster,
  ): Promise<OwnershipMaster> {
    return this.ownershipMasterRepository.create(ownershipMaster);
  }

  @get('/ownership-masters/count')
  @response(200, {
    description: 'OwnershipMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(OwnershipMaster) where?: Where<OwnershipMaster>,
  ): Promise<Count> {
    return this.ownershipMasterRepository.count(where);
  }

  @get('/ownership-masters')
  @response(200, {
    description: 'Array of OwnershipMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(OwnershipMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(OwnershipMaster) filter?: Filter<OwnershipMaster>,
  ): Promise<OwnershipMaster[]> {
    return this.ownershipMasterRepository.find(filter);
  }

  @patch('/ownership-masters')
  @response(200, {
    description: 'OwnershipMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OwnershipMaster, {partial: true}),
        },
      },
    })
    ownershipMaster: OwnershipMaster,
    @param.where(OwnershipMaster) where?: Where<OwnershipMaster>,
  ): Promise<Count> {
    return this.ownershipMasterRepository.updateAll(ownershipMaster, where);
  }

  @get('/ownership-masters/{id}')
  @response(200, {
    description: 'OwnershipMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(OwnershipMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OwnershipMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<OwnershipMaster>
  ): Promise<OwnershipMaster> {
    return this.ownershipMasterRepository.findById(id, filter);
  }

  @patch('/ownership-masters/{id}')
  @response(204, {
    description: 'OwnershipMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OwnershipMaster, {partial: true}),
        },
      },
    })
    ownershipMaster: OwnershipMaster,
  ): Promise<void> {
    await this.ownershipMasterRepository.updateById(id, ownershipMaster);
  }

  @put('/ownership-masters/{id}')
  @response(204, {
    description: 'OwnershipMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ownershipMaster: OwnershipMaster,
  ): Promise<void> {
    await this.ownershipMasterRepository.replaceById(id, ownershipMaster);
  }

  @del('/ownership-masters/{id}')
  @response(204, {
    description: 'OwnershipMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ownershipMasterRepository.deleteById(id);
  }
}
