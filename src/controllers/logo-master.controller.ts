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
import {LogoMaster} from '../models';
import {LogoMasterRepository} from '../repositories';

export class LogoMasterController {
  constructor(
    @repository(LogoMasterRepository)
    public logoMasterRepository : LogoMasterRepository,
  ) {}

  @post('/logo-masters')
  @response(200, {
    description: 'LogoMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(LogoMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LogoMaster, {
            title: 'NewLogoMaster',
            
          }),
        },
      },
    })
    logoMaster: LogoMaster,
  ): Promise<LogoMaster> {
    return this.logoMasterRepository.create(logoMaster);
  }

  @get('/logo-masters/count')
  @response(200, {
    description: 'LogoMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(LogoMaster) where?: Where<LogoMaster>,
  ): Promise<Count> {
    return this.logoMasterRepository.count(where);
  }

  @get('/logo-masters')
  @response(200, {
    description: 'Array of LogoMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(LogoMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(LogoMaster) filter?: Filter<LogoMaster>,
  ): Promise<LogoMaster[]> {
    return this.logoMasterRepository.find(filter);
  }

  @patch('/logo-masters')
  @response(200, {
    description: 'LogoMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LogoMaster, {partial: true}),
        },
      },
    })
    logoMaster: LogoMaster,
    @param.where(LogoMaster) where?: Where<LogoMaster>,
  ): Promise<Count> {
    return this.logoMasterRepository.updateAll(logoMaster, where);
  }

  @get('/logo-masters/{id}')
  @response(200, {
    description: 'LogoMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LogoMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LogoMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<LogoMaster>
  ): Promise<LogoMaster> {
    return this.logoMasterRepository.findById(id, filter);
  }

  @patch('/logo-masters/{id}')
  @response(204, {
    description: 'LogoMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LogoMaster, {partial: true}),
        },
      },
    })
    logoMaster: LogoMaster,
  ): Promise<void> {
    await this.logoMasterRepository.updateById(id, logoMaster);
  }

  @put('/logo-masters/{id}')
  @response(204, {
    description: 'LogoMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() logoMaster: LogoMaster,
  ): Promise<void> {
    await this.logoMasterRepository.replaceById(id, logoMaster);
  }

  @del('/logo-masters/{id}')
  @response(204, {
    description: 'LogoMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.logoMasterRepository.deleteById(id);
  }
}
