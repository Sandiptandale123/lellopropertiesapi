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
import {AreaMeasurementMaster} from '../models';
import {AreaMeasurementMasterRepository} from '../repositories';

export class AreaMeasurementMasterController {
  constructor(
    @repository(AreaMeasurementMasterRepository)
    public areaMeasurementMasterRepository : AreaMeasurementMasterRepository,
  ) {}

  @post('/area-measurement-masters')
  @response(200, {
    description: 'AreaMeasurementMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(AreaMeasurementMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaMeasurementMaster, {
            title: 'NewAreaMeasurementMaster',
            
          }),
        },
      },
    })
    areaMeasurementMaster: AreaMeasurementMaster,
  ): Promise<AreaMeasurementMaster> {
    return this.areaMeasurementMasterRepository.create(areaMeasurementMaster);
  }

  @get('/area-measurement-masters/count')
  @response(200, {
    description: 'AreaMeasurementMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AreaMeasurementMaster) where?: Where<AreaMeasurementMaster>,
  ): Promise<Count> {
    return this.areaMeasurementMasterRepository.count(where);
  }

  @get('/area-measurement-masters')
  @response(200, {
    description: 'Array of AreaMeasurementMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AreaMeasurementMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AreaMeasurementMaster) filter?: Filter<AreaMeasurementMaster>,
  ): Promise<AreaMeasurementMaster[]> {
    return this.areaMeasurementMasterRepository.find(filter);
  }

  @patch('/area-measurement-masters')
  @response(200, {
    description: 'AreaMeasurementMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaMeasurementMaster, {partial: true}),
        },
      },
    })
    areaMeasurementMaster: AreaMeasurementMaster,
    @param.where(AreaMeasurementMaster) where?: Where<AreaMeasurementMaster>,
  ): Promise<Count> {
    return this.areaMeasurementMasterRepository.updateAll(areaMeasurementMaster, where);
  }

  @get('/area-measurement-masters/{id}')
  @response(200, {
    description: 'AreaMeasurementMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AreaMeasurementMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AreaMeasurementMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<AreaMeasurementMaster>
  ): Promise<AreaMeasurementMaster> {
    return this.areaMeasurementMasterRepository.findById(id, filter);
  }

  @patch('/area-measurement-masters/{id}')
  @response(204, {
    description: 'AreaMeasurementMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaMeasurementMaster, {partial: true}),
        },
      },
    })
    areaMeasurementMaster: AreaMeasurementMaster,
  ): Promise<void> {
    await this.areaMeasurementMasterRepository.updateById(id, areaMeasurementMaster);
  }

  @put('/area-measurement-masters/{id}')
  @response(204, {
    description: 'AreaMeasurementMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() areaMeasurementMaster: AreaMeasurementMaster,
  ): Promise<void> {
    await this.areaMeasurementMasterRepository.replaceById(id, areaMeasurementMaster);
  }

  @del('/area-measurement-masters/{id}')
  @response(204, {
    description: 'AreaMeasurementMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.areaMeasurementMasterRepository.deleteById(id);
  }
}
