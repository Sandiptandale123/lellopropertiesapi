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
import {PackageMaster} from '../models';
import {PackageMasterRepository} from '../repositories';

export class PackageMasterController {
  constructor(
    @repository(PackageMasterRepository)
    public packageMasterRepository : PackageMasterRepository,
  ) {}

  @post('/package-masters')
  @response(200, {
    description: 'PackageMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(PackageMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PackageMaster, {
            title: 'NewPackageMaster',
            
          }),
        },
      },
    })
    packageMaster: PackageMaster,
  ): Promise<PackageMaster> {
    return this.packageMasterRepository.create(packageMaster);
  }

  @get('/package-masters/count')
  @response(200, {
    description: 'PackageMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PackageMaster) where?: Where<PackageMaster>,
  ): Promise<Count> {
    return this.packageMasterRepository.count(where);
  }

  @get('/package-masters')
  @response(200, {
    description: 'Array of PackageMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PackageMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PackageMaster) filter?: Filter<PackageMaster>,
  ): Promise<PackageMaster[]> {
    return this.packageMasterRepository.find(filter);
  }

  @patch('/package-masters')
  @response(200, {
    description: 'PackageMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PackageMaster, {partial: true}),
        },
      },
    })
    packageMaster: PackageMaster,
    @param.where(PackageMaster) where?: Where<PackageMaster>,
  ): Promise<Count> {
    return this.packageMasterRepository.updateAll(packageMaster, where);
  }

  @get('/package-masters/{id}')
  @response(200, {
    description: 'PackageMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PackageMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PackageMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<PackageMaster>
  ): Promise<PackageMaster> {
    return this.packageMasterRepository.findById(id, filter);
  }

  @patch('/package-masters/{id}')
  @response(204, {
    description: 'PackageMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PackageMaster, {partial: true}),
        },
      },
    })
    packageMaster: PackageMaster,
  ): Promise<void> {
    await this.packageMasterRepository.updateById(id, packageMaster);
  }

  @put('/package-masters/{id}')
  @response(204, {
    description: 'PackageMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() packageMaster: PackageMaster,
  ): Promise<void> {
    await this.packageMasterRepository.replaceById(id, packageMaster);
  }

  @del('/package-masters/{id}')
  @response(204, {
    description: 'PackageMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.packageMasterRepository.deleteById(id);
  }
}
