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
import {TitleMaster} from '../models';
import {TitleMasterRepository} from '../repositories';

export class TitleMasterController {
  constructor(
    @repository(TitleMasterRepository)
    public titleMasterRepository : TitleMasterRepository,
  ) {}

  @post('/title-masters')
  @response(200, {
    description: 'TitleMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(TitleMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TitleMaster, {
            title: 'NewTitleMaster',
            
          }),
        },
      },
    })
    titleMaster: TitleMaster,
  ): Promise<TitleMaster> {
    return this.titleMasterRepository.create(titleMaster);
  }

  @get('/title-masters/count')
  @response(200, {
    description: 'TitleMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TitleMaster) where?: Where<TitleMaster>,
  ): Promise<Count> {
    return this.titleMasterRepository.count(where);
  }

  @get('/title-masters')
  @response(200, {
    description: 'Array of TitleMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TitleMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TitleMaster) filter?: Filter<TitleMaster>,
  ): Promise<TitleMaster[]> {
    return this.titleMasterRepository.find(filter);
  }

  @patch('/title-masters')
  @response(200, {
    description: 'TitleMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TitleMaster, {partial: true}),
        },
      },
    })
    titleMaster: TitleMaster,
    @param.where(TitleMaster) where?: Where<TitleMaster>,
  ): Promise<Count> {
    return this.titleMasterRepository.updateAll(titleMaster, where);
  }

  @get('/title-masters/{id}')
  @response(200, {
    description: 'TitleMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TitleMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TitleMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<TitleMaster>
  ): Promise<TitleMaster> {
    return this.titleMasterRepository.findById(id, filter);
  }

  @patch('/title-masters/{id}')
  @response(204, {
    description: 'TitleMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TitleMaster, {partial: true}),
        },
      },
    })
    titleMaster: TitleMaster,
  ): Promise<void> {
    await this.titleMasterRepository.updateById(id, titleMaster);
  }

  @put('/title-masters/{id}')
  @response(204, {
    description: 'TitleMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() titleMaster: TitleMaster,
  ): Promise<void> {
    await this.titleMasterRepository.replaceById(id, titleMaster);
  }

  @del('/title-masters/{id}')
  @response(204, {
    description: 'TitleMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.titleMasterRepository.deleteById(id);
  }
}
