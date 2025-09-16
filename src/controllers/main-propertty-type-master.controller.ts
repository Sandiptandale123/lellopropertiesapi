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
import {MainProperttyTypeMaster} from '../models';
import {MainProperttyTypeMasterRepository} from '../repositories';

export class MainProperttyTypeMasterController {
  constructor(
    @repository(MainProperttyTypeMasterRepository)
    public mainProperttyTypeMasterRepository : MainProperttyTypeMasterRepository,
  ) {}

  @post('/main-propertty-type-masters')
  @response(200, {
    description: 'MainProperttyTypeMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(MainProperttyTypeMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MainProperttyTypeMaster, {
            title: 'NewMainProperttyTypeMaster',
            
          }),
        },
      },
    })
    mainProperttyTypeMaster: MainProperttyTypeMaster,
  ): Promise<MainProperttyTypeMaster> {
    return this.mainProperttyTypeMasterRepository.create(mainProperttyTypeMaster);
  }

  @get('/main-propertty-type-masters/count')
  @response(200, {
    description: 'MainProperttyTypeMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MainProperttyTypeMaster) where?: Where<MainProperttyTypeMaster>,
  ): Promise<Count> {
    return this.mainProperttyTypeMasterRepository.count(where);
  }

  @get('/main-propertty-type-masters')
  @response(200, {
    description: 'Array of MainProperttyTypeMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MainProperttyTypeMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MainProperttyTypeMaster) filter?: Filter<MainProperttyTypeMaster>,
  ): Promise<MainProperttyTypeMaster[]> {
    return this.mainProperttyTypeMasterRepository.find(filter);
  }

  @patch('/main-propertty-type-masters')
  @response(200, {
    description: 'MainProperttyTypeMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MainProperttyTypeMaster, {partial: true}),
        },
      },
    })
    mainProperttyTypeMaster: MainProperttyTypeMaster,
    @param.where(MainProperttyTypeMaster) where?: Where<MainProperttyTypeMaster>,
  ): Promise<Count> {
    return this.mainProperttyTypeMasterRepository.updateAll(mainProperttyTypeMaster, where);
  }

  @get('/main-propertty-type-masters/{id}')
  @response(200, {
    description: 'MainProperttyTypeMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MainProperttyTypeMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(MainProperttyTypeMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<MainProperttyTypeMaster>
  ): Promise<MainProperttyTypeMaster> {
    return this.mainProperttyTypeMasterRepository.findById(id, filter);
  }

  @patch('/main-propertty-type-masters/{id}')
  @response(204, {
    description: 'MainProperttyTypeMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MainProperttyTypeMaster, {partial: true}),
        },
      },
    })
    mainProperttyTypeMaster: MainProperttyTypeMaster,
  ): Promise<void> {
    await this.mainProperttyTypeMasterRepository.updateById(id, mainProperttyTypeMaster);
  }

  @put('/main-propertty-type-masters/{id}')
  @response(204, {
    description: 'MainProperttyTypeMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() mainProperttyTypeMaster: MainProperttyTypeMaster,
  ): Promise<void> {
    await this.mainProperttyTypeMasterRepository.replaceById(id, mainProperttyTypeMaster);
  }

  @del('/main-propertty-type-masters/{id}')
  @response(204, {
    description: 'MainProperttyTypeMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.mainProperttyTypeMasterRepository.deleteById(id);
  }
}
