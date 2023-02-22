import { ImageCart } from '@entities/images';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';
import { IMAGE_CART_FIXTURES } from '../../data/images';

export class ImageCartLoader extends AbstractLoader<ImageCart> {
  entity: new () => ImageCart = ImageCart;

  data: Partial<ImageCart>[] = IMAGE_CART_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
