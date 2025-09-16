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
import {BestpropertyLaunch} from '../models';
import {BestpropertyLaunchRepository} from '../repositories';

export class BestpropertyLaunchController {
  constructor(
    @repository(BestpropertyLaunchRepository)
    public bestpropertyLaunchRepository : BestpropertyLaunchRepository,
  ) {}

  @post('/bestproperty-launches')
  @response(200, {
    description: 'BestpropertyLaunch model instance',
    content: {'application/json': {schema: getModelSchemaRef(BestpropertyLaunch)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BestpropertyLaunch, {
            title: 'NewBestpropertyLaunch',
            
          }),
        },
      },
    })
    bestpropertyLaunch: BestpropertyLaunch,
  ): Promise<BestpropertyLaunch> {
    return this.bestpropertyLaunchRepository.create(bestpropertyLaunch);
  }

  @get('/bestproperty-launches/count')
  @response(200, {
    description: 'BestpropertyLaunch model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BestpropertyLaunch) where?: Where<BestpropertyLaunch>,
  ): Promise<Count> {
    return this.bestpropertyLaunchRepository.count(where);
  }

  @get('/bestproperty-launches')
  @response(200, {
    description: 'Array of BestpropertyLaunch model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BestpropertyLaunch, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BestpropertyLaunch) filter?: Filter<BestpropertyLaunch>,
  ): Promise<BestpropertyLaunch[]> {
    return this.bestpropertyLaunchRepository.find(filter);
  }

  @patch('/bestproperty-launches')
  @response(200, {
    description: 'BestpropertyLaunch PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BestpropertyLaunch, {partial: true}),
        },
      },
    })
    bestpropertyLaunch: BestpropertyLaunch,
    @param.where(BestpropertyLaunch) where?: Where<BestpropertyLaunch>,
  ): Promise<Count> {
    return this.bestpropertyLaunchRepository.updateAll(bestpropertyLaunch, where);
  }

  @get('/bestproperty-launches/{id}')
  @response(200, {
    description: 'BestpropertyLaunch model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BestpropertyLaunch, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BestpropertyLaunch, {exclude: 'where'}) filter?: FilterExcludingWhere<BestpropertyLaunch>
  ): Promise<BestpropertyLaunch> {
    return this.bestpropertyLaunchRepository.findById(id, filter);
  }

  @patch('/bestproperty-launches/{id}')
  @response(204, {
    description: 'BestpropertyLaunch PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BestpropertyLaunch, {partial: true}),
        },
      },
    })
    bestpropertyLaunch: BestpropertyLaunch,
  ): Promise<void> {
    await this.bestpropertyLaunchRepository.updateById(id, bestpropertyLaunch);
  }

  @put('/bestproperty-launches/{id}')
  @response(204, {
    description: 'BestpropertyLaunch PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() bestpropertyLaunch: BestpropertyLaunch,
  ): Promise<void> {
    await this.bestpropertyLaunchRepository.replaceById(id, bestpropertyLaunch);
  }

  @del('/bestproperty-launches/{id}')
  @response(204, {
    description: 'BestpropertyLaunch DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bestpropertyLaunchRepository.deleteById(id);
  }
}
