import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'lellopropertydb', table: 'package_master'}}
})
export class PackageMaster extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mysql: {columnName: 'packageId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: 1},
  })
  packageId?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 255,
    generated: false,
    mysql: {columnName: 'packageName', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  packageName: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 255,
    generated: false,
    mysql: {columnName: 'packageDescription', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  packageDescription: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'fkdurationId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false},
  })
  fkdurationId: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 255,
    generated: false,
    mysql: {columnName: 'packagePhoto', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  packagePhoto: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 255,
    generated: false,
    mysql: {columnName: 'packageTitle', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  packageTitle: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 19,
    scale: 0,
    generated: false,
    mysql: {columnName: 'packageCost', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N', generated: false},
  })
  packageCost: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 18,
    scale: 2,
    generated: false,
    mysql: {columnName: 'packageDiscount', dataType: 'float', dataLength: null, dataPrecision: 18, dataScale: 2, nullable: 'N', generated: false},
  })
  packageDiscount: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 18,
    scale: 2,
    generated: false,
    mysql: {columnName: 'percent', dataType: 'float', dataLength: null, dataPrecision: 18, dataScale: 2, nullable: 'N', generated: false},
  })
  percent: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 3,
    scale: 0,
    generated: false,
    mysql: {columnName: 'is_default', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y', generated: false},
  })
  isDefault?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 3,
    scale: 0,
    generated: false,
    mysql: {columnName: 'is_on', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y', generated: false},
  })
  isOn?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 3,
    scale: 0,
    generated: false,
    mysql: {columnName: 'is_active', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y', generated: false},
  })
  isActive?: number;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'created_date', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
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
    mysql: {columnName: 'modified_date', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
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
    mysql: {columnName: 'deleted_date', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
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
    mysql: {columnName: 'last_changed', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  lastChanged: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PackageMaster>) {
    super(data);
  }
}

export interface PackageMasterRelations {
  // describe navigational properties here
}

export type PackageMasterWithRelations = PackageMaster & PackageMasterRelations;
