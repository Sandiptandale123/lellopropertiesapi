import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, Filter, repository} from '@loopback/repository';
import {LelloappdbDataSource} from '../datasources';
import {PostPropertyMaster, PostPropertyMasterRelations, PropertyTypeMaster} from '../models';
import {PropertyTypeMasterRepository} from './property-type-master.repository';

export interface PostPropertyMasterDTO {
  postpropertyId: number;
  propertyTitle?: string;
  fkpropertytypeId?: number;
  propertytypeName?: string | null;
}

export class PostPropertyMasterRepository extends DefaultCrudRepository<
  PostPropertyMaster,
  typeof PostPropertyMaster.prototype.postpropertyId,
  PostPropertyMasterRelations
> {
  // relation property
  public readonly propertyType: BelongsToAccessor<PropertyTypeMaster, typeof PostPropertyMaster.prototype.postpropertyId>;

  constructor(
    @inject('datasources.lelloappdb') dataSource: LelloappdbDataSource,
    @repository.getter('PropertyTypeMasterRepository')
    protected propertyTypeMasterRepositoryGetter: Getter<PropertyTypeMasterRepository>,
  ) {
    super(PostPropertyMaster, dataSource);

    // create relation accessor
    this.propertyType = this.createBelongsToAccessorFor('propertyType', propertyTypeMasterRepositoryGetter);

    // register inclusion resolver for include queries
    this.registerInclusionResolver('propertyType', this.propertyType.inclusionResolver);
  }

  // 👈 Custom method add karo yaha
  async findWithTypeName(
    filter?: Filter<PostPropertyMaster>,
  ): Promise<PostPropertyMasterDTO[]> {
    const properties = await this.find({
      ...filter,
      include: [
        {
          relation: 'propertyType',
          scope: {fields: ['propertytypeName']},
        },
      ],
    });

    return properties.map(p => {
      // Model instance -> plain object
      const obj = p.toJSON() as any; // ya Record<string, any>

      // propertytypeName ko direct add karo
      obj.propertytypeName = obj.propertyType?.propertytypeName || null;

      // relation object remove karna optional hai
      delete obj.propertyType;

      return obj; // poora object return hoga with propertytypeName
    });

  }
}
