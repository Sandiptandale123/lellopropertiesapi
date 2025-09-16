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
import {PropertyTypeMaster} from '../models';
import {PropertyTypeMasterRepository} from '../repositories';

export class PropertyTypeMasterController {
  constructor(
    @repository(PropertyTypeMasterRepository)
    public propertyTypeMasterRepository: PropertyTypeMasterRepository,
  ) { }

  @post('/property-type-masters')
  @response(200, {
    description: 'PropertyTypeMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(PropertyTypeMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertyTypeMaster, {
            title: 'NewPropertyTypeMaster',
            exclude: ['id'], // अपनी primary key field का नाम adjust करो
          }),
        },
      },
    })
    propertyTypeMaster: Omit<PropertyTypeMaster, 'id'>,
  ): Promise<PropertyTypeMaster> {
    return this.propertyTypeMasterRepository.create(propertyTypeMaster);
  }

  @get('/property-type-masters/count')
  @response(200, {
    description: 'PropertyTypeMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PropertyTypeMaster) where?: Where<PropertyTypeMaster>,
  ): Promise<Count> {
    return this.propertyTypeMasterRepository.count(where);
  }

  @get('/property-type-masters')
  @response(200, {
    description: 'Array of PropertyTypeMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PropertyTypeMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PropertyTypeMaster) filter?: Filter<PropertyTypeMaster>,
  ): Promise<PropertyTypeMaster[]> {
    return this.propertyTypeMasterRepository.find(filter);
  }

  @get('/property-type-masters/{id}')
  @response(200, {
    description: 'PropertyTypeMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PropertyTypeMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PropertyTypeMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<PropertyTypeMaster>,
  ): Promise<PropertyTypeMaster> {
    return this.propertyTypeMasterRepository.findById(id, filter);
  }

  @patch('/property-type-masters/{id}')
  @response(204, {
    description: 'PropertyTypeMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertyTypeMaster, {partial: true}),
        },
      },
    })
    propertyTypeMaster: PropertyTypeMaster,
  ): Promise<void> {
    await this.propertyTypeMasterRepository.updateById(id, propertyTypeMaster);
  }

  @put('/property-type-masters/{id}')
  @response(204, {
    description: 'PropertyTypeMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() propertyTypeMaster: PropertyTypeMaster,
  ): Promise<void> {
    await this.propertyTypeMasterRepository.replaceById(id, propertyTypeMaster);
  }

  @del('/property-type-masters/{id}')
  @response(204, {
    description: 'PropertyTypeMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.propertyTypeMasterRepository.deleteById(id);
  }
}
