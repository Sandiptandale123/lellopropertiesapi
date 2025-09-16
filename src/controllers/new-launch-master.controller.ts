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
import {NewLaunchMaster} from '../models';
import {NewLaunchMasterRepository} from '../repositories';

export class NewLaunchMasterController {
  constructor(
    @repository(NewLaunchMasterRepository)
    public newLaunchMasterRepository : NewLaunchMasterRepository,
  ) {}

  @post('/new-launch-masters')
  @response(200, {
    description: 'NewLaunchMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(NewLaunchMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NewLaunchMaster, {
            title: 'NewNewLaunchMaster',
            
          }),
        },
      },
    })
    newLaunchMaster: NewLaunchMaster,
  ): Promise<NewLaunchMaster> {
    return this.newLaunchMasterRepository.create(newLaunchMaster);
  }

  @get('/new-launch-masters/count')
  @response(200, {
    description: 'NewLaunchMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(NewLaunchMaster) where?: Where<NewLaunchMaster>,
  ): Promise<Count> {
    return this.newLaunchMasterRepository.count(where);
  }

  @get('/new-launch-masters')
  @response(200, {
    description: 'Array of NewLaunchMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(NewLaunchMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(NewLaunchMaster) filter?: Filter<NewLaunchMaster>,
  ): Promise<NewLaunchMaster[]> {
    return this.newLaunchMasterRepository.find(filter);
  }

  @patch('/new-launch-masters')
  @response(200, {
    description: 'NewLaunchMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NewLaunchMaster, {partial: true}),
        },
      },
    })
    newLaunchMaster: NewLaunchMaster,
    @param.where(NewLaunchMaster) where?: Where<NewLaunchMaster>,
  ): Promise<Count> {
    return this.newLaunchMasterRepository.updateAll(newLaunchMaster, where);
  }

  @get('/new-launch-masters/{id}')
  @response(200, {
    description: 'NewLaunchMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(NewLaunchMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(NewLaunchMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<NewLaunchMaster>
  ): Promise<NewLaunchMaster> {
    return this.newLaunchMasterRepository.findById(id, filter);
  }

  @patch('/new-launch-masters/{id}')
  @response(204, {
    description: 'NewLaunchMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NewLaunchMaster, {partial: true}),
        },
      },
    })
    newLaunchMaster: NewLaunchMaster,
  ): Promise<void> {
    await this.newLaunchMasterRepository.updateById(id, newLaunchMaster);
  }

  @put('/new-launch-masters/{id}')
  @response(204, {
    description: 'NewLaunchMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() newLaunchMaster: NewLaunchMaster,
  ): Promise<void> {
    await this.newLaunchMasterRepository.replaceById(id, newLaunchMaster);
  }

  @del('/new-launch-masters/{id}')
  @response(204, {
    description: 'NewLaunchMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.newLaunchMasterRepository.deleteById(id);
  }
}
