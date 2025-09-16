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
import {TestimonialMaster} from '../models';
import {TestimonialMasterRepository} from '../repositories';

export class TestimonialMasterController {
  constructor(
    @repository(TestimonialMasterRepository)
    public testimonialMasterRepository : TestimonialMasterRepository,
  ) {}

  @post('/testimonial-masters')
  @response(200, {
    description: 'TestimonialMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(TestimonialMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TestimonialMaster, {
            title: 'NewTestimonialMaster',
            
          }),
        },
      },
    })
    testimonialMaster: TestimonialMaster,
  ): Promise<TestimonialMaster> {
    return this.testimonialMasterRepository.create(testimonialMaster);
  }

  @get('/testimonial-masters/count')
  @response(200, {
    description: 'TestimonialMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TestimonialMaster) where?: Where<TestimonialMaster>,
  ): Promise<Count> {
    return this.testimonialMasterRepository.count(where);
  }

  @get('/testimonial-masters')
  @response(200, {
    description: 'Array of TestimonialMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TestimonialMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TestimonialMaster) filter?: Filter<TestimonialMaster>,
  ): Promise<TestimonialMaster[]> {
    return this.testimonialMasterRepository.find(filter);
  }

  @patch('/testimonial-masters')
  @response(200, {
    description: 'TestimonialMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TestimonialMaster, {partial: true}),
        },
      },
    })
    testimonialMaster: TestimonialMaster,
    @param.where(TestimonialMaster) where?: Where<TestimonialMaster>,
  ): Promise<Count> {
    return this.testimonialMasterRepository.updateAll(testimonialMaster, where);
  }

  @get('/testimonial-masters/{id}')
  @response(200, {
    description: 'TestimonialMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TestimonialMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TestimonialMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<TestimonialMaster>
  ): Promise<TestimonialMaster> {
    return this.testimonialMasterRepository.findById(id, filter);
  }

  @patch('/testimonial-masters/{id}')
  @response(204, {
    description: 'TestimonialMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TestimonialMaster, {partial: true}),
        },
      },
    })
    testimonialMaster: TestimonialMaster,
  ): Promise<void> {
    await this.testimonialMasterRepository.updateById(id, testimonialMaster);
  }

  @put('/testimonial-masters/{id}')
  @response(204, {
    description: 'TestimonialMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() testimonialMaster: TestimonialMaster,
  ): Promise<void> {
    await this.testimonialMasterRepository.replaceById(id, testimonialMaster);
  }

  @del('/testimonial-masters/{id}')
  @response(204, {
    description: 'TestimonialMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.testimonialMasterRepository.deleteById(id);
  }
}
