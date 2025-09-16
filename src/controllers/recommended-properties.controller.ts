import {inject} from '@loopback/core';
import {
  Count,
  CountSchema,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put, Request, requestBody,
  response,
  RestBindings
} from '@loopback/rest';
import {RecommendedProperties} from '../models';
import {RecommendedPropertiesRepository} from '../repositories';

export class RecommendedPropertiesController {
  constructor(
    @repository(RecommendedPropertiesRepository)
    public recommendedPropertiesRepository: RecommendedPropertiesRepository,
  ) { }

  @post('/recommended-properties')
  @response(200, {
    description: 'RecommendedProperties model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RecommendedProperties),
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecommendedProperties, {
            title: 'NewRecommendedProperties',
          }),
        },
      },
    })
    recommendedProperties: RecommendedProperties,
  ): Promise<RecommendedProperties> {
    return this.recommendedPropertiesRepository.create(recommendedProperties);
  }

  @get('/recommended-properties/count')
  @response(200, {
    description: 'RecommendedProperties model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RecommendedProperties) where?: Where<RecommendedProperties>,
  ): Promise<Count> {
    return this.recommendedPropertiesRepository.count(where);
  }

  @get('/recommended-properties')
  @response(200, {
    description: 'Array of RecommendedProperties model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RecommendedProperties, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @inject(RestBindings.Http.REQUEST) req?: Request,
  ): Promise<RecommendedProperties[]> {
    const properties = await this.recommendedPropertiesRepository.find();
    return properties;
  }

  @patch('/recommended-properties')
  @response(200, {
    description: 'RecommendedProperties PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecommendedProperties, {partial: true}),
        },
      },
    })
    recommendedProperties: RecommendedProperties,
    @param.where(RecommendedProperties) where?: Where<RecommendedProperties>,
  ): Promise<Count> {
    return this.recommendedPropertiesRepository.updateAll(recommendedProperties, where);
  }

  @get('/recommended-properties/{id}')
  @response(200, {
    description: 'RecommendedProperties model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RecommendedProperties, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RecommendedProperties, {exclude: 'where'})
    filter?: FilterExcludingWhere<RecommendedProperties>,
  ): Promise<RecommendedProperties> {
    return this.recommendedPropertiesRepository.findById(id, filter);
  }

  @patch('/recommended-properties/{id}')
  @response(204, {
    description: 'RecommendedProperties PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecommendedProperties, {partial: true}),
        },
      },
    })
    recommendedProperties: RecommendedProperties,
  ): Promise<void> {
    await this.recommendedPropertiesRepository.updateById(id, recommendedProperties);
  }

  @put('/recommended-properties/{id}')
  @response(204, {
    description: 'RecommendedProperties PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() recommendedProperties: RecommendedProperties,
  ): Promise<void> {
    await this.recommendedPropertiesRepository.replaceById(id, recommendedProperties);
  }

  @del('/recommended-properties/{id}')
  @response(204, {
    description: 'RecommendedProperties DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.recommendedPropertiesRepository.deleteById(id);
  }
}
