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
import {MaintenanceMonthMaster} from '../models';
import {MaintenanceMonthMasterRepository} from '../repositories';

export class MaintenanceMonthMasterController {
  constructor(
    @repository(MaintenanceMonthMasterRepository)
    public maintenanceMonthMasterRepository : MaintenanceMonthMasterRepository,
  ) {}

  @post('/maintenance-month-masters')
  @response(200, {
    description: 'MaintenanceMonthMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(MaintenanceMonthMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MaintenanceMonthMaster, {
            title: 'NewMaintenanceMonthMaster',
            
          }),
        },
      },
    })
    maintenanceMonthMaster: MaintenanceMonthMaster,
  ): Promise<MaintenanceMonthMaster> {
    return this.maintenanceMonthMasterRepository.create(maintenanceMonthMaster);
  }

  @get('/maintenance-month-masters/count')
  @response(200, {
    description: 'MaintenanceMonthMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MaintenanceMonthMaster) where?: Where<MaintenanceMonthMaster>,
  ): Promise<Count> {
    return this.maintenanceMonthMasterRepository.count(where);
  }

  @get('/maintenance-month-masters')
  @response(200, {
    description: 'Array of MaintenanceMonthMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MaintenanceMonthMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MaintenanceMonthMaster) filter?: Filter<MaintenanceMonthMaster>,
  ): Promise<MaintenanceMonthMaster[]> {
    return this.maintenanceMonthMasterRepository.find(filter);
  }

  @patch('/maintenance-month-masters')
  @response(200, {
    description: 'MaintenanceMonthMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MaintenanceMonthMaster, {partial: true}),
        },
      },
    })
    maintenanceMonthMaster: MaintenanceMonthMaster,
    @param.where(MaintenanceMonthMaster) where?: Where<MaintenanceMonthMaster>,
  ): Promise<Count> {
    return this.maintenanceMonthMasterRepository.updateAll(maintenanceMonthMaster, where);
  }

  @get('/maintenance-month-masters/{id}')
  @response(200, {
    description: 'MaintenanceMonthMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MaintenanceMonthMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(MaintenanceMonthMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<MaintenanceMonthMaster>
  ): Promise<MaintenanceMonthMaster> {
    return this.maintenanceMonthMasterRepository.findById(id, filter);
  }

  @patch('/maintenance-month-masters/{id}')
  @response(204, {
    description: 'MaintenanceMonthMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MaintenanceMonthMaster, {partial: true}),
        },
      },
    })
    maintenanceMonthMaster: MaintenanceMonthMaster,
  ): Promise<void> {
    await this.maintenanceMonthMasterRepository.updateById(id, maintenanceMonthMaster);
  }

  @put('/maintenance-month-masters/{id}')
  @response(204, {
    description: 'MaintenanceMonthMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() maintenanceMonthMaster: MaintenanceMonthMaster,
  ): Promise<void> {
    await this.maintenanceMonthMasterRepository.replaceById(id, maintenanceMonthMaster);
  }

  @del('/maintenance-month-masters/{id}')
  @response(204, {
    description: 'MaintenanceMonthMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.maintenanceMonthMasterRepository.deleteById(id);
  }
}
