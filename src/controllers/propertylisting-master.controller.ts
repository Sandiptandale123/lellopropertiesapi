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
import {PropertylistingMaster} from '../models';
import {PropertylistingMasterRepository} from '../repositories';

export class PropertylistingMasterController {
  constructor(
    @repository(PropertylistingMasterRepository)
    public propertylistingMasterRepository : PropertylistingMasterRepository,
  ) {}

  @post('/propertylisting-masters')
  @response(200, {
    description: 'PropertylistingMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(PropertylistingMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertylistingMaster, {
            title: 'NewPropertylistingMaster',
            
          }),
        },
      },
    })
    propertylistingMaster: PropertylistingMaster,
  ): Promise<PropertylistingMaster> {
    return this.propertylistingMasterRepository.create(propertylistingMaster);
  }

  @get('/propertylisting-masters/count')
  @response(200, {
    description: 'PropertylistingMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PropertylistingMaster) where?: Where<PropertylistingMaster>,
  ): Promise<Count> {
    return this.propertylistingMasterRepository.count(where);
  }

  @get('/propertylisting-masters')
  @response(200, {
    description: 'Array of PropertylistingMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PropertylistingMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PropertylistingMaster) filter?: Filter<PropertylistingMaster>,
  ): Promise<PropertylistingMaster[]> {
    return this.propertylistingMasterRepository.find(filter);
  }

  @patch('/propertylisting-masters')
  @response(200, {
    description: 'PropertylistingMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertylistingMaster, {partial: true}),
        },
      },
    })
    propertylistingMaster: PropertylistingMaster,
    @param.where(PropertylistingMaster) where?: Where<PropertylistingMaster>,
  ): Promise<Count> {
    return this.propertylistingMasterRepository.updateAll(propertylistingMaster, where);
  }

  @get('/propertylisting-masters/{id}')
  @response(200, {
    description: 'PropertylistingMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PropertylistingMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PropertylistingMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<PropertylistingMaster>
  ): Promise<PropertylistingMaster> {
    return this.propertylistingMasterRepository.findById(id, filter);
  }

  @patch('/propertylisting-masters/{id}')
  @response(204, {
    description: 'PropertylistingMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertylistingMaster, {partial: true}),
        },
      },
    })
    propertylistingMaster: PropertylistingMaster,
  ): Promise<void> {
    await this.propertylistingMasterRepository.updateById(id, propertylistingMaster);
  }

  @put('/propertylisting-masters/{id}')
  @response(204, {
    description: 'PropertylistingMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() propertylistingMaster: PropertylistingMaster,
  ): Promise<void> {
    await this.propertylistingMasterRepository.replaceById(id, propertylistingMaster);
  }

  @del('/propertylisting-masters/{id}')
  @response(204, {
    description: 'PropertylistingMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.propertylistingMasterRepository.deleteById(id);
  }
}
