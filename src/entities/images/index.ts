import { ImageParentEntity } from './image.entity';
import { ImageCart } from './image-cart.entity';
import { ImagePreview } from './image-preview.entity';

export * from './image-cart.entity';
export * from './image-preview.entity';

export const IMAGE_ENTITIES = [
  ImageParentEntity,
  //
  ImagePreview,
  ImageCart,
];
