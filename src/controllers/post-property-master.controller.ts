import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {PostPropertyMaster} from '../models';
import {PostPropertyMasterDTO, PostPropertyMasterRepository} from '../repositories';

export class PostPropertyMasterController {
  constructor(
    @repository(PostPropertyMasterRepository)
    public postPropertyMasterRepository: PostPropertyMasterRepository,
  ) { }

  @post('/post-property-masters')
  @response(200, {
    description: 'PostPropertyMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(PostPropertyMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PostPropertyMaster, {
            title: 'NewPostPropertyMaster',

          }),
        },
      },
    })
    postPropertyMaster: PostPropertyMaster,
  ): Promise<PostPropertyMaster> {
    return this.postPropertyMasterRepository.create(postPropertyMaster);
  }

  @get('/post-property-masters/count')
  @response(200, {
    description: 'PostPropertyMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PostPropertyMaster) where?: Where<PostPropertyMaster>,
  ): Promise<Count> {
    return this.postPropertyMasterRepository.count(where);
  }

  @get('/post-property-masters')
  @response(200, {
    description: 'Array of PostPropertyMaster with propertytypeName',
    content: {'application/json': {schema: {type: 'array'}}},
  })
  async find(
    @param.filter(PostPropertyMaster) filter?: Filter<PostPropertyMaster>,
  ): Promise<PostPropertyMasterDTO[]> {
    return this.postPropertyMasterRepository.findWithTypeName(filter);
  }


  @patch('/post-property-masters')
  @response(200, {
    description: 'PostPropertyMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PostPropertyMaster, {partial: true}),
        },
      },
    })
    postPropertyMaster: PostPropertyMaster,
    @param.where(PostPropertyMaster) where?: Where<PostPropertyMaster>,
  ): Promise<Count> {
    return this.postPropertyMasterRepository.updateAll(postPropertyMaster, where);
  }

  @get('/post-property-masters/{id}')
  @response(200, {
    description: 'PostPropertyMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PostPropertyMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PostPropertyMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<PostPropertyMaster>
  ): Promise<PostPropertyMaster> {
    return this.postPropertyMasterRepository.findById(id, filter);
  }

  @patch('/post-property-masters/{id}')
  @response(204, {
    description: 'PostPropertyMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PostPropertyMaster, {partial: true}),
        },
      },
    })
    postPropertyMaster: PostPropertyMaster,
  ): Promise<void> {
    await this.postPropertyMasterRepository.updateById(id, postPropertyMaster);
  }

  @put('/post-property-masters/{id}')
  @response(204, {
    description: 'PostPropertyMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() postPropertyMaster: PostPropertyMaster,
  ): Promise<void> {
    await this.postPropertyMasterRepository.replaceById(id, postPropertyMaster);
  }

  @del('/post-property-masters/{id}')
  @response(204, {
    description: 'PostPropertyMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.postPropertyMasterRepository.deleteById(id);
  }
}
