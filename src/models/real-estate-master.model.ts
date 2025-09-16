import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'lellopropertydb', table: 'real_estate_master'}
  }
})
export class RealEstateMaster extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mysql: {columnName: 'blogId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: 1},
  })
  blogId?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'blogImage', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  blogImage?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'blogTitle', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  blogTitle?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'blogDescription', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  blogDescription?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'blogDate', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  blogDate?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 15,
    scale: 2,
    generated: false,
    mysql: {columnName: 'blogStartAmount', dataType: 'decimal', dataLength: null, dataPrecision: 15, dataScale: 2, nullable: 'Y', generated: false},
  })
  blogStartAmount?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 15,
    scale: 2,
    generated: false,
    mysql: {columnName: 'blogEndAmount', dataType: 'decimal', dataLength: null, dataPrecision: 15, dataScale: 2, nullable: 'Y', generated: false},
  })
  blogEndAmount?: number;

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

  constructor(data?: Partial<RealEstateMaster>) {
    super(data);
  }
}

export interface RealEstateMasterRelations {
  // describe navigational properties here
}

export type RealEstateMasterWithRelations = RealEstateMaster & RealEstateMasterRelations;
