import { ChildEntity } from 'typeorm';

import { ImageType } from '@models/enum';

import { ImageParentEntity } from './image.entity';

@ChildEntity(ImageType.Cart)
export class ImageCart extends ImageParentEntity {}
