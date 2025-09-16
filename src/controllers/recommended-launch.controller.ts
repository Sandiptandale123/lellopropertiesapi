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
import {RecommendedLaunch} from '../models';
import {RecommendedLaunchRepository} from '../repositories';

export class RecommendedLaunchController {
  constructor(
    @repository(RecommendedLaunchRepository)
    public recommendedLaunchRepository : RecommendedLaunchRepository,
  ) {}

  @post('/recommended-launches')
  @response(200, {
    description: 'RecommendedLaunch model instance',
    content: {'application/json': {schema: getModelSchemaRef(RecommendedLaunch)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecommendedLaunch, {
            title: 'NewRecommendedLaunch',
            
          }),
        },
      },
    })
    recommendedLaunch: RecommendedLaunch,
  ): Promise<RecommendedLaunch> {
    return this.recommendedLaunchRepository.create(recommendedLaunch);
  }

  @get('/recommended-launches/count')
  @response(200, {
    description: 'RecommendedLaunch model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RecommendedLaunch) where?: Where<RecommendedLaunch>,
  ): Promise<Count> {
    return this.recommendedLaunchRepository.count(where);
  }

  @get('/recommended-launches')
  @response(200, {
    description: 'Array of RecommendedLaunch model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RecommendedLaunch, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RecommendedLaunch) filter?: Filter<RecommendedLaunch>,
  ): Promise<RecommendedLaunch[]> {
    return this.recommendedLaunchRepository.find(filter);
  }

  @patch('/recommended-launches')
  @response(200, {
    description: 'RecommendedLaunch PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecommendedLaunch, {partial: true}),
        },
      },
    })
    recommendedLaunch: RecommendedLaunch,
    @param.where(RecommendedLaunch) where?: Where<RecommendedLaunch>,
  ): Promise<Count> {
    return this.recommendedLaunchRepository.updateAll(recommendedLaunch, where);
  }

  @get('/recommended-launches/{id}')
  @response(200, {
    description: 'RecommendedLaunch model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RecommendedLaunch, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RecommendedLaunch, {exclude: 'where'}) filter?: FilterExcludingWhere<RecommendedLaunch>
  ): Promise<RecommendedLaunch> {
    return this.recommendedLaunchRepository.findById(id, filter);
  }

  @patch('/recommended-launches/{id}')
  @response(204, {
    description: 'RecommendedLaunch PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecommendedLaunch, {partial: true}),
        },
      },
    })
    recommendedLaunch: RecommendedLaunch,
  ): Promise<void> {
    await this.recommendedLaunchRepository.updateById(id, recommendedLaunch);
  }

  @put('/recommended-launches/{id}')
  @response(204, {
    description: 'RecommendedLaunch PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() recommendedLaunch: RecommendedLaunch,
  ): Promise<void> {
    await this.recommendedLaunchRepository.replaceById(id, recommendedLaunch);
  }

  @del('/recommended-launches/{id}')
  @response(204, {
    description: 'RecommendedLaunch DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.recommendedLaunchRepository.deleteById(id);
  }
}
