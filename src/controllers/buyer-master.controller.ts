import {inject} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  Request,
  requestBody,
  response,
  RestBindings
} from '@loopback/rest';
import fs from 'fs';
import multer from 'multer';
import path from 'path';
import {BuyerMaster} from '../models';
import {BuyerMasterRepository} from '../repositories';

// -------------------- Ensure uploads folder exists --------------------
const uploadDir = path.join(__dirname, '../../src/uploads'); // adjust path to your project
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {recursive: true});
}

// -------------------- Multer storage config --------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({storage});

// -------------------- Controller --------------------
export class BuyerMasterController {
  constructor(
    @repository(BuyerMasterRepository)
    public buyerMasterRepository: BuyerMasterRepository,
  ) { }

  // ================= CREATE =================
  @post('/buyer-masters')
  @response(200, {
    description: 'BuyerMaster model instance',
    content: {'application/json': {schema: {type: 'object'}}},
  })
  async create(
    @requestBody({
      description: 'Create Buyer with profile photo',
      required: true,
      content: {
        'multipart/form-data': {
          'x-parser': 'stream',
          schema: {
            type: 'object',
            properties: {
              fkusertypeId: {type: 'integer'},
              buyerName: {type: 'string'},
              buyerGmail: {type: 'string'},
              buyerMobile: {type: 'string'},
              buyerLocation: {type: 'string'},
              profilePhoto: {type: 'string', format: 'binary'},
              buyerGender: {type: 'string'},
              fkcityId: {type: 'integer'},
              lastChanged: {type: 'string', format: 'date-time'},
            },
          },
        },
      },
    })
    @inject(RestBindings.Http.REQUEST) req: Request,
  ): Promise<BuyerMaster> {
    return new Promise((resolve, reject) => {
      upload.single('profilePhoto')(req, {} as any, async err => {
        if (err) return reject(err);

        try {
          const body: any = req.body;
          const file = req.file;
          const filePath = file ? `/uploads/${file.filename}` : undefined;

          // Manual validation
          if (!body.buyerName || !body.buyerGmail || !body.buyerMobile || !body.fkcityId) {
            return reject(new Error('Missing required fields'));
          }

          const buyer = await this.buyerMasterRepository.create({
            fkusertypeId: body.fkusertypeId ? Number(body.fkusertypeId) : undefined,
            buyerName: body.buyerName,
            buyerGmail: body.buyerGmail,
            buyerMobile: Number(body.buyerMobile),
            buyerLocation: body.buyerLocation || '',
            profilePhoto: filePath,
            buyerGender: body.buyerGender || '',
            fkcityId: Number(body.fkcityId),
            lastChanged: body.lastChanged || new Date().toISOString(),
          });

          resolve(buyer);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  // ================= UPDATE =================
  @patch('/buyer-masters/{id}')
  @response(200, {
    description: 'BuyerMaster PATCH success',
    content: {'application/json': {schema: getModelSchemaRef(BuyerMaster)}},
  })
  async updateByIdWithFile(
    @param.path.number('id') id: number,
    @requestBody({
      description: 'Update Buyer with optional profile photo',
      required: true,
      content: {
        'multipart/form-data': {
          'x-parser': 'stream',
          schema: {
            type: 'object',
            properties: {
              fkusertypeId: {type: 'number'},
              buyerName: {type: 'string'},
              buyerGmail: {type: 'string'},
              buyerMobile: {type: 'number'},
              buyerLocation: {type: 'string'},
              profilePhoto: {type: 'string', format: 'binary'},
              buyerGender: {type: 'string'},
              fkcityId: {type: 'number'},
              lastChanged: {type: 'string', format: 'date-time'},
            },
          },
        },
      },
    })
    @inject(RestBindings.Http.REQUEST) req: Request,
  ): Promise<BuyerMaster> {
    return new Promise((resolve, reject) => {
      upload.single('profilePhoto')(req, {} as any, async err => {
        if (err) return reject(err);

        try {
          const body: any = req.body;
          const file = req.file;

          const existing = await this.buyerMasterRepository.findById(id);
          const filePath = file ? `/uploads/${file.filename}` : existing.profilePhoto;

          const updatedData = {
            fkusertypeId: body.fkusertypeId ? Number(body.fkusertypeId) : existing.fkusertypeId,
            buyerName: body.buyerName || existing.buyerName,
            buyerGmail: body.buyerGmail || existing.buyerGmail,
            buyerMobile: body.buyerMobile ? Number(body.buyerMobile) : existing.buyerMobile,
            buyerLocation: body.buyerLocation || existing.buyerLocation,
            profilePhoto: filePath,
            buyerGender: body.buyerGender || existing.buyerGender,
            fkcityId: body.fkcityId ? Number(body.fkcityId) : existing.fkcityId,
            lastChanged: new Date().toISOString(),
          };

          await this.buyerMasterRepository.updateById(id, updatedData);
          const updated = await this.buyerMasterRepository.findById(id);
          resolve(updated);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  // ================= OTHER CRUD =================
  @get('/buyer-masters/count')
  @response(200, {description: 'BuyerMaster model count', content: {'application/json': {schema: CountSchema}}})
  async count(@param.where(BuyerMaster) where?: Where<BuyerMaster>): Promise<Count> {
    return this.buyerMasterRepository.count(where);
  }

  @get('/buyer-masters')
  @response(200, {
    description: 'Array of BuyerMaster model instances',
    content: {
      'application/json': {
        schema: {type: 'array', items: getModelSchemaRef(BuyerMaster, {includeRelations: true})},
      },
    },
  })
  async find(
    @param.filter(BuyerMaster) filter?: Filter<BuyerMaster>,
    @inject(RestBindings.Http.REQUEST) req?: Request,
  ): Promise<BuyerMaster[]> {
    const buyers = await this.buyerMasterRepository.find(filter);

    const baseUrl = req ? `${req.protocol}://${req.headers.host}` : '';

    buyers.forEach(buyer => {
      if (buyer.profilePhoto) {
        buyer.profilePhoto = `${baseUrl}${buyer.profilePhoto}`;
      }
    });

    return buyers;
  }


  @get('/buyer-masters/{id}')
  @response(200, {description: 'BuyerMaster model instance', content: {'application/json': {schema: getModelSchemaRef(BuyerMaster, {includeRelations: true})}}})
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BuyerMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<BuyerMaster>
  ): Promise<BuyerMaster> {
    return this.buyerMasterRepository.findById(id, filter);
  }

  @del('/buyer-masters/{id}')
  @response(204, {description: 'BuyerMaster DELETE success'})
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.buyerMasterRepository.deleteById(id);
  }
}
