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
import {PostTypeMaster} from '../models';
import {PostTypeMasterRepository} from '../repositories';

export class PostTypeMasterRepositoryController {
  constructor(
    @repository(PostTypeMasterRepository)
    public postTypeMasterRepository : PostTypeMasterRepository,
  ) {}

  @post('/post-type-masters')
  @response(200, {
    description: 'PostTypeMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(PostTypeMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PostTypeMaster, {
            title: 'NewPostTypeMaster',
            
          }),
        },
      },
    })
    postTypeMaster: PostTypeMaster,
  ): Promise<PostTypeMaster> {
    return this.postTypeMasterRepository.create(postTypeMaster);
  }

  @get('/post-type-masters/count')
  @response(200, {
    description: 'PostTypeMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PostTypeMaster) where?: Where<PostTypeMaster>,
  ): Promise<Count> {
    return this.postTypeMasterRepository.count(where);
  }

  @get('/post-type-masters')
  @response(200, {
    description: 'Array of PostTypeMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PostTypeMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PostTypeMaster) filter?: Filter<PostTypeMaster>,
  ): Promise<PostTypeMaster[]> {
    return this.postTypeMasterRepository.find(filter);
  }

  @patch('/post-type-masters')
  @response(200, {
    description: 'PostTypeMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PostTypeMaster, {partial: true}),
        },
      },
    })
    postTypeMaster: PostTypeMaster,
    @param.where(PostTypeMaster) where?: Where<PostTypeMaster>,
  ): Promise<Count> {
    return this.postTypeMasterRepository.updateAll(postTypeMaster, where);
  }

  @get('/post-type-masters/{id}')
  @response(200, {
    description: 'PostTypeMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PostTypeMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PostTypeMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<PostTypeMaster>
  ): Promise<PostTypeMaster> {
    return this.postTypeMasterRepository.findById(id, filter);
  }

  @patch('/post-type-masters/{id}')
  @response(204, {
    description: 'PostTypeMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PostTypeMaster, {partial: true}),
        },
      },
    })
    postTypeMaster: PostTypeMaster,
  ): Promise<void> {
    await this.postTypeMasterRepository.updateById(id, postTypeMaster);
  }

  @put('/post-type-masters/{id}')
  @response(204, {
    description: 'PostTypeMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() postTypeMaster: PostTypeMaster,
  ): Promise<void> {
    await this.postTypeMasterRepository.replaceById(id, postTypeMaster);
  }

  @del('/post-type-masters/{id}')
  @response(204, {
    description: 'PostTypeMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.postTypeMasterRepository.deleteById(id);
  }
}
