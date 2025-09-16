import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'lellopropertydb', table: 'buyer_master'}}
})
export class BuyerMaster extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mysql: {columnName: 'buyerId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: 1},
  })
  buyerId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'fkusertypeId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  fkusertypeId?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'buyerName', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  buyerName?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'buyerGmail', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  buyerGmail?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 19,
    scale: 0,
    generated: false,
    mysql: {columnName: 'buyerMobile', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y', generated: false},
  })
  buyerMobile?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'buyerLocation', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  buyerLocation?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'profilePhoto', dataType: 'varchar', dataLength: 255, nullable: 'Y'},
  })
  profilePhoto?: string | null;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'buyerGender', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  buyerGender?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'fkcityId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  fkcityId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'referense_flag', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  referenseFlag?: number;

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

  constructor(data?: Partial<BuyerMaster>) {
    super(data);
  }
}

export interface BuyerMasterRelations {
  // describe navigational properties here
}

export type BuyerMasterWithRelations = BuyerMaster & BuyerMasterRelations;
