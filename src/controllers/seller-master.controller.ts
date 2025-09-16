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
import {SellerMaster} from '../models';
import {SellerMasterRepository} from '../repositories';

export class SellerMasterController {
  constructor(
    @repository(SellerMasterRepository)
    public sellerMasterRepository : SellerMasterRepository,
  ) {}

  @post('/seller-masters')
  @response(200, {
    description: 'SellerMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(SellerMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SellerMaster, {
            title: 'NewSellerMaster',
            
          }),
        },
      },
    })
    sellerMaster: SellerMaster,
  ): Promise<SellerMaster> {
    return this.sellerMasterRepository.create(sellerMaster);
  }

  @get('/seller-masters/count')
  @response(200, {
    description: 'SellerMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SellerMaster) where?: Where<SellerMaster>,
  ): Promise<Count> {
    return this.sellerMasterRepository.count(where);
  }

  @get('/seller-masters')
  @response(200, {
    description: 'Array of SellerMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SellerMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SellerMaster) filter?: Filter<SellerMaster>,
  ): Promise<SellerMaster[]> {
    return this.sellerMasterRepository.find(filter);
  }

  @patch('/seller-masters')
  @response(200, {
    description: 'SellerMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SellerMaster, {partial: true}),
        },
      },
    })
    sellerMaster: SellerMaster,
    @param.where(SellerMaster) where?: Where<SellerMaster>,
  ): Promise<Count> {
    return this.sellerMasterRepository.updateAll(sellerMaster, where);
  }

  @get('/seller-masters/{id}')
  @response(200, {
    description: 'SellerMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SellerMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SellerMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<SellerMaster>
  ): Promise<SellerMaster> {
    return this.sellerMasterRepository.findById(id, filter);
  }

  @patch('/seller-masters/{id}')
  @response(204, {
    description: 'SellerMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SellerMaster, {partial: true}),
        },
      },
    })
    sellerMaster: SellerMaster,
  ): Promise<void> {
    await this.sellerMasterRepository.updateById(id, sellerMaster);
  }

  @put('/seller-masters/{id}')
  @response(204, {
    description: 'SellerMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sellerMaster: SellerMaster,
  ): Promise<void> {
    await this.sellerMasterRepository.replaceById(id, sellerMaster);
  }

  @del('/seller-masters/{id}')
  @response(204, {
    description: 'SellerMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sellerMasterRepository.deleteById(id);
  }
}
