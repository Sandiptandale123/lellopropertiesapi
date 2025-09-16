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
import {PublishTypeMaster} from '../models';
import {PublishTypeMasterRepository} from '../repositories';

export class PublishTypeMasterController {
  constructor(
    @repository(PublishTypeMasterRepository)
    public publishTypeMasterRepository : PublishTypeMasterRepository,
  ) {}

  @post('/publish-type-masters')
  @response(200, {
    description: 'PublishTypeMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(PublishTypeMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PublishTypeMaster, {
            title: 'NewPublishTypeMaster',
            
          }),
        },
      },
    })
    publishTypeMaster: PublishTypeMaster,
  ): Promise<PublishTypeMaster> {
    return this.publishTypeMasterRepository.create(publishTypeMaster);
  }

  @get('/publish-type-masters/count')
  @response(200, {
    description: 'PublishTypeMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PublishTypeMaster) where?: Where<PublishTypeMaster>,
  ): Promise<Count> {
    return this.publishTypeMasterRepository.count(where);
  }

  @get('/publish-type-masters')
  @response(200, {
    description: 'Array of PublishTypeMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PublishTypeMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PublishTypeMaster) filter?: Filter<PublishTypeMaster>,
  ): Promise<PublishTypeMaster[]> {
    return this.publishTypeMasterRepository.find(filter);
  }

  @patch('/publish-type-masters')
  @response(200, {
    description: 'PublishTypeMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PublishTypeMaster, {partial: true}),
        },
      },
    })
    publishTypeMaster: PublishTypeMaster,
    @param.where(PublishTypeMaster) where?: Where<PublishTypeMaster>,
  ): Promise<Count> {
    return this.publishTypeMasterRepository.updateAll(publishTypeMaster, where);
  }

  @get('/publish-type-masters/{id}')
  @response(200, {
    description: 'PublishTypeMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PublishTypeMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PublishTypeMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<PublishTypeMaster>
  ): Promise<PublishTypeMaster> {
    return this.publishTypeMasterRepository.findById(id, filter);
  }

  @patch('/publish-type-masters/{id}')
  @response(204, {
    description: 'PublishTypeMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PublishTypeMaster, {partial: true}),
        },
      },
    })
    publishTypeMaster: PublishTypeMaster,
  ): Promise<void> {
    await this.publishTypeMasterRepository.updateById(id, publishTypeMaster);
  }

  @put('/publish-type-masters/{id}')
  @response(204, {
    description: 'PublishTypeMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() publishTypeMaster: PublishTypeMaster,
  ): Promise<void> {
    await this.publishTypeMasterRepository.replaceById(id, publishTypeMaster);
  }

  @del('/publish-type-masters/{id}')
  @response(204, {
    description: 'PublishTypeMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.publishTypeMasterRepository.deleteById(id);
  }
}
