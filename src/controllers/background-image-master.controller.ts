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
import {BackgroundImageMaster} from '../models';
import {BackgroundImageMasterRepository} from '../repositories';

export class BackgroundImageMasterController {
  constructor(
    @repository(BackgroundImageMasterRepository)
    public backgroundImageMasterRepository : BackgroundImageMasterRepository,
  ) {}

  @post('/background-image-masters')
  @response(200, {
    description: 'BackgroundImageMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(BackgroundImageMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BackgroundImageMaster, {
            title: 'NewBackgroundImageMaster',
            
          }),
        },
      },
    })
    backgroundImageMaster: BackgroundImageMaster,
  ): Promise<BackgroundImageMaster> {
    return this.backgroundImageMasterRepository.create(backgroundImageMaster);
  }

  @get('/background-image-masters/count')
  @response(200, {
    description: 'BackgroundImageMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BackgroundImageMaster) where?: Where<BackgroundImageMaster>,
  ): Promise<Count> {
    return this.backgroundImageMasterRepository.count(where);
  }

  @get('/background-image-masters')
  @response(200, {
    description: 'Array of BackgroundImageMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BackgroundImageMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BackgroundImageMaster) filter?: Filter<BackgroundImageMaster>,
  ): Promise<BackgroundImageMaster[]> {
    return this.backgroundImageMasterRepository.find(filter);
  }

  @patch('/background-image-masters')
  @response(200, {
    description: 'BackgroundImageMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BackgroundImageMaster, {partial: true}),
        },
      },
    })
    backgroundImageMaster: BackgroundImageMaster,
    @param.where(BackgroundImageMaster) where?: Where<BackgroundImageMaster>,
  ): Promise<Count> {
    return this.backgroundImageMasterRepository.updateAll(backgroundImageMaster, where);
  }

  @get('/background-image-masters/{id}')
  @response(200, {
    description: 'BackgroundImageMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BackgroundImageMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BackgroundImageMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<BackgroundImageMaster>
  ): Promise<BackgroundImageMaster> {
    return this.backgroundImageMasterRepository.findById(id, filter);
  }

  @patch('/background-image-masters/{id}')
  @response(204, {
    description: 'BackgroundImageMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BackgroundImageMaster, {partial: true}),
        },
      },
    })
    backgroundImageMaster: BackgroundImageMaster,
  ): Promise<void> {
    await this.backgroundImageMasterRepository.updateById(id, backgroundImageMaster);
  }

  @put('/background-image-masters/{id}')
  @response(204, {
    description: 'BackgroundImageMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() backgroundImageMaster: BackgroundImageMaster,
  ): Promise<void> {
    await this.backgroundImageMasterRepository.replaceById(id, backgroundImageMaster);
  }

  @del('/background-image-masters/{id}')
  @response(204, {
    description: 'BackgroundImageMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.backgroundImageMasterRepository.deleteById(id);
  }
}
