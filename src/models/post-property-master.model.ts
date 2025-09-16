import {belongsTo, Entity, model, property} from '@loopback/repository';
import {PropertyTypeMaster} from './property-type-master.model';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'lellopropertydb', table: 'post_property_master'}
  }
})
export class PostPropertyMaster extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mysql: {columnName: 'postpropertyId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: 1},
  })
  postpropertyId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'fksellerId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  fksellerId?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 512,
    generated: false,
    mysql: {columnName: 'Property_Title', dataType: 'varchar', dataLength: 512, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  propertyTitle?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 512,
    generated: false,
    mysql: {columnName: 'Property_Description', dataType: 'varchar', dataLength: 512, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  propertyDescription?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'fkpostpropertytypeId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  fkpostpropertytypeId?: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'fkmainpropertytypeId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false},
  })
  fkmainpropertytypeId: number;

  // @property({
  //   type: 'number',
  //   jsonSchema: {nullable: true},
  //   precision: 10,
  //   scale: 0,
  //   generated: false,
  //   mysql: {columnName: 'fkpropertytypeId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  // })
  // fkpropertytypeId?: number;

  @belongsTo(() => PropertyTypeMaster, {name: 'propertyType'})
  fkpropertytypeId: number;

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
    mysql: {columnName: 'fklocalityId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  fklocalityId?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'sublocality', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  sublocality?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'apartmentName/areaName', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  apartmentNameAreaName?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 19,
    scale: 0,
    generated: false,
    mysql: {columnName: 'housenumber', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y', generated: false},
  })
  housenumber?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'noofbedrooms', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  noofbedrooms?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'noofbathrooms', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  noofbathrooms?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 65535,
    generated: false,
    mysql: {columnName: 'noofbalkanies', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  noofbalkanies?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'carpetarea', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  carpetarea?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'builduparea', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  builduparea?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 2,
    generated: false,
    mysql: {columnName: 'supperbuilduparea', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'Y', generated: false},
  })
  supperbuilduparea?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'fkfurnishingtypeId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  fkfurnishingtypeId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'openparking', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  openparking?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'coverparking', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  coverparking?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 65535,
    generated: false,
    mysql: {columnName: 'totalfloor', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  totalfloor?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 2,
    generated: false,
    mysql: {columnName: 'fkfloorId', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'Y', generated: false},
  })
  fkfloorId?: number;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'fkavailablestatusId', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  fkavailablestatusId?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'video', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  video?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 65535,
    generated: false,
    mysql: {columnName: 'photo', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  photo?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 65535,
    generated: false,
    mysql: {columnName: 'photos', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  photos?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'fkownershipId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  fkownershipId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'fkuserId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  fkuserId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 2,
    generated: false,
    mysql: {columnName: 'price', dataType: 'double', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'Y', generated: false},
  })
  price?: number;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'maintenance', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  maintenance?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'fkmaintnecemonthId', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  fkmaintnecemonthId?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'expectedrental', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  expectedrental?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'bookingamount', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  bookingamount?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'annualduespay', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  annualduespay?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'membershipcharge', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  membershipcharge?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'description', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  description?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'fkotherrooms', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  fkotherrooms?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'publish_Fag', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  publishFag?: number;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'publish_StartDate', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  publishStartDate?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'publish_EndDate', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  publishEndDate?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'fkpublish_TypeId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y', generated: false},
  })
  fkpublishTypeId?: number;

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

  constructor(data?: Partial<PostPropertyMaster>) {
    super(data);
  }
}

export interface PostPropertyMasterRelations {
  // describe navigational properties here
}

export type PostPropertyMasterWithRelations = PostPropertyMaster & PostPropertyMasterRelations;
