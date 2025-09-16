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
import {FloorMaster} from '../models';
import {FloorMasterRepository} from '../repositories';

export class FloorMasterController {
  constructor(
    @repository(FloorMasterRepository)
    public floorMasterRepository : FloorMasterRepository,
  ) {}

  @post('/floor-masters')
  @response(200, {
    description: 'FloorMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(FloorMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FloorMaster, {
            title: 'NewFloorMaster',
            
          }),
        },
      },
    })
    floorMaster: FloorMaster,
  ): Promise<FloorMaster> {
    return this.floorMasterRepository.create(floorMaster);
  }

  @get('/floor-masters/count')
  @response(200, {
    description: 'FloorMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FloorMaster) where?: Where<FloorMaster>,
  ): Promise<Count> {
    return this.floorMasterRepository.count(where);
  }

  @get('/floor-masters')
  @response(200, {
    description: 'Array of FloorMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FloorMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FloorMaster) filter?: Filter<FloorMaster>,
  ): Promise<FloorMaster[]> {
    return this.floorMasterRepository.find(filter);
  }

  @patch('/floor-masters')
  @response(200, {
    description: 'FloorMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FloorMaster, {partial: true}),
        },
      },
    })
    floorMaster: FloorMaster,
    @param.where(FloorMaster) where?: Where<FloorMaster>,
  ): Promise<Count> {
    return this.floorMasterRepository.updateAll(floorMaster, where);
  }

  @get('/floor-masters/{id}')
  @response(200, {
    description: 'FloorMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FloorMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FloorMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<FloorMaster>
  ): Promise<FloorMaster> {
    return this.floorMasterRepository.findById(id, filter);
  }

  @patch('/floor-masters/{id}')
  @response(204, {
    description: 'FloorMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FloorMaster, {partial: true}),
        },
      },
    })
    floorMaster: FloorMaster,
  ): Promise<void> {
    await this.floorMasterRepository.updateById(id, floorMaster);
  }

  @put('/floor-masters/{id}')
  @response(204, {
    description: 'FloorMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() floorMaster: FloorMaster,
  ): Promise<void> {
    await this.floorMasterRepository.replaceById(id, floorMaster);
  }

  @del('/floor-masters/{id}')
  @response(204, {
    description: 'FloorMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.floorMasterRepository.deleteById(id);
  }
}
