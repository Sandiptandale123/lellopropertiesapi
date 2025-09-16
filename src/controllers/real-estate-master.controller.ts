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
import {RealEstateMaster} from '../models';
import {RealEstateMasterRepository} from '../repositories';

export class RealEstateMasterController {
  constructor(
    @repository(RealEstateMasterRepository)
    public realEstateMasterRepository : RealEstateMasterRepository,
  ) {}

  @post('/real-estate-masters')
  @response(200, {
    description: 'RealEstateMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(RealEstateMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RealEstateMaster, {
            title: 'NewRealEstateMaster',
            
          }),
        },
      },
    })
    realEstateMaster: RealEstateMaster,
  ): Promise<RealEstateMaster> {
    return this.realEstateMasterRepository.create(realEstateMaster);
  }

  @get('/real-estate-masters/count')
  @response(200, {
    description: 'RealEstateMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RealEstateMaster) where?: Where<RealEstateMaster>,
  ): Promise<Count> {
    return this.realEstateMasterRepository.count(where);
  }

  @get('/real-estate-masters')
  @response(200, {
    description: 'Array of RealEstateMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RealEstateMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RealEstateMaster) filter?: Filter<RealEstateMaster>,
  ): Promise<RealEstateMaster[]> {
    return this.realEstateMasterRepository.find(filter);
  }

  @patch('/real-estate-masters')
  @response(200, {
    description: 'RealEstateMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RealEstateMaster, {partial: true}),
        },
      },
    })
    realEstateMaster: RealEstateMaster,
    @param.where(RealEstateMaster) where?: Where<RealEstateMaster>,
  ): Promise<Count> {
    return this.realEstateMasterRepository.updateAll(realEstateMaster, where);
  }

  @get('/real-estate-masters/{id}')
  @response(200, {
    description: 'RealEstateMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RealEstateMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RealEstateMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<RealEstateMaster>
  ): Promise<RealEstateMaster> {
    return this.realEstateMasterRepository.findById(id, filter);
  }

  @patch('/real-estate-masters/{id}')
  @response(204, {
    description: 'RealEstateMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RealEstateMaster, {partial: true}),
        },
      },
    })
    realEstateMaster: RealEstateMaster,
  ): Promise<void> {
    await this.realEstateMasterRepository.updateById(id, realEstateMaster);
  }

  @put('/real-estate-masters/{id}')
  @response(204, {
    description: 'RealEstateMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() realEstateMaster: RealEstateMaster,
  ): Promise<void> {
    await this.realEstateMasterRepository.replaceById(id, realEstateMaster);
  }

  @del('/real-estate-masters/{id}')
  @response(204, {
    description: 'RealEstateMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.realEstateMasterRepository.deleteById(id);
  }
}
