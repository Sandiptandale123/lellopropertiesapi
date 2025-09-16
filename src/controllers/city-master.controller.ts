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
import {CityMaster} from '../models';
import {CityMasterRepository} from '../repositories';

export class CityMasterController {
  constructor(
    @repository(CityMasterRepository)
    public cityMasterRepository : CityMasterRepository,
  ) {}

  @post('/city-masters')
  @response(200, {
    description: 'CityMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(CityMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CityMaster, {
            title: 'NewCityMaster',
            
          }),
        },
      },
    })
    cityMaster: CityMaster,
  ): Promise<CityMaster> {
    return this.cityMasterRepository.create(cityMaster);
  }

  @get('/city-masters/count')
  @response(200, {
    description: 'CityMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CityMaster) where?: Where<CityMaster>,
  ): Promise<Count> {
    return this.cityMasterRepository.count(where);
  }

  @get('/city-masters')
  @response(200, {
    description: 'Array of CityMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CityMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CityMaster) filter?: Filter<CityMaster>,
  ): Promise<CityMaster[]> {
    return this.cityMasterRepository.find(filter);
  }

  @patch('/city-masters')
  @response(200, {
    description: 'CityMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CityMaster, {partial: true}),
        },
      },
    })
    cityMaster: CityMaster,
    @param.where(CityMaster) where?: Where<CityMaster>,
  ): Promise<Count> {
    return this.cityMasterRepository.updateAll(cityMaster, where);
  }

  @get('/city-masters/{id}')
  @response(200, {
    description: 'CityMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CityMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CityMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<CityMaster>
  ): Promise<CityMaster> {
    return this.cityMasterRepository.findById(id, filter);
  }

  @patch('/city-masters/{id}')
  @response(204, {
    description: 'CityMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CityMaster, {partial: true}),
        },
      },
    })
    cityMaster: CityMaster,
  ): Promise<void> {
    await this.cityMasterRepository.updateById(id, cityMaster);
  }

  @put('/city-masters/{id}')
  @response(204, {
    description: 'CityMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cityMaster: CityMaster,
  ): Promise<void> {
    await this.cityMasterRepository.replaceById(id, cityMaster);
  }

  @del('/city-masters/{id}')
  @response(204, {
    description: 'CityMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cityMasterRepository.deleteById(id);
  }
}
