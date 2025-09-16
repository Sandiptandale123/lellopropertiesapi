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
import {OtherRoomMaster} from '../models';
import {OtherRoomMasterRepository} from '../repositories';

export class OtherRoomMasterController {
  constructor(
    @repository(OtherRoomMasterRepository)
    public otherRoomMasterRepository : OtherRoomMasterRepository,
  ) {}

  @post('/other-room-masters')
  @response(200, {
    description: 'OtherRoomMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(OtherRoomMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OtherRoomMaster, {
            title: 'NewOtherRoomMaster',
            
          }),
        },
      },
    })
    otherRoomMaster: OtherRoomMaster,
  ): Promise<OtherRoomMaster> {
    return this.otherRoomMasterRepository.create(otherRoomMaster);
  }

  @get('/other-room-masters/count')
  @response(200, {
    description: 'OtherRoomMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(OtherRoomMaster) where?: Where<OtherRoomMaster>,
  ): Promise<Count> {
    return this.otherRoomMasterRepository.count(where);
  }

  @get('/other-room-masters')
  @response(200, {
    description: 'Array of OtherRoomMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(OtherRoomMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(OtherRoomMaster) filter?: Filter<OtherRoomMaster>,
  ): Promise<OtherRoomMaster[]> {
    return this.otherRoomMasterRepository.find(filter);
  }

  @patch('/other-room-masters')
  @response(200, {
    description: 'OtherRoomMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OtherRoomMaster, {partial: true}),
        },
      },
    })
    otherRoomMaster: OtherRoomMaster,
    @param.where(OtherRoomMaster) where?: Where<OtherRoomMaster>,
  ): Promise<Count> {
    return this.otherRoomMasterRepository.updateAll(otherRoomMaster, where);
  }

  @get('/other-room-masters/{id}')
  @response(200, {
    description: 'OtherRoomMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(OtherRoomMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OtherRoomMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<OtherRoomMaster>
  ): Promise<OtherRoomMaster> {
    return this.otherRoomMasterRepository.findById(id, filter);
  }

  @patch('/other-room-masters/{id}')
  @response(204, {
    description: 'OtherRoomMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OtherRoomMaster, {partial: true}),
        },
      },
    })
    otherRoomMaster: OtherRoomMaster,
  ): Promise<void> {
    await this.otherRoomMasterRepository.updateById(id, otherRoomMaster);
  }

  @put('/other-room-masters/{id}')
  @response(204, {
    description: 'OtherRoomMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() otherRoomMaster: OtherRoomMaster,
  ): Promise<void> {
    await this.otherRoomMasterRepository.replaceById(id, otherRoomMaster);
  }

  @del('/other-room-masters/{id}')
  @response(204, {
    description: 'OtherRoomMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.otherRoomMasterRepository.deleteById(id);
  }
}
