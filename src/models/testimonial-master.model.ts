import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'lellopropertydb', table: 'testimonial_master'}
  }
})
export class TestimonialMaster extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mysql: {columnName: 'testimonialId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: 1},
  })
  testimonialId?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'section_title', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  sectionTitle?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'section_subtitle', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  sectionSubtitle?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'rating', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  rating?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 65535,
    generated: false,
    mysql: {columnName: 'testimonial_text', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  testimonialText: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 100,
    generated: false,
    mysql: {columnName: 'customer_name', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  customerName: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 100,
    generated: false,
    mysql: {columnName: 'customer_location', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  customerLocation?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'profile_image', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  profileImage?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'property_image', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  propertyImage?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'is_default', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  isDefault?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'is_on', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  isOn?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'is_active', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  isActive?: number;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'created_date', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  createdDate?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'created_by', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  createdBy?: number;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'modified_date', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  modifiedDate?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'modified_by', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  modifiedBy?: number;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'deleted_date', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  deletedDate?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'deleted_by', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  deletedBy?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 200,
    generated: false,
    mysql: {columnName: 'delete_remark', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  deleteRemark?: string;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    mysql: {columnName: 'last_changed', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  lastChanged: string;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    mysql: {columnName: 'created_at', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  createdAt: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TestimonialMaster>) {
    super(data);
  }
}

export interface TestimonialMasterRelations {
  // describe navigational properties here
}

export type TestimonialMasterWithRelations = TestimonialMaster & TestimonialMasterRelations;
