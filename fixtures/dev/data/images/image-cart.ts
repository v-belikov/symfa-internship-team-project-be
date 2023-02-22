import { ImageCart } from '@entities/images';
import { ImageType } from '@models/enum';

import { pathByName } from './models';

export const IMAGE_CART_FIXTURES: Partial<ImageCart>[] = [
  {
    id: '48866931-544d-4f54-9825-1fdee26d4225',
    imageType: ImageType.Cart,
    path: pathByName('876661122392077-1-cart.webp'),
  },
  {
    id: 'f066c517-7434-4fe5-b215-d0fdd65361e3',
    imageType: ImageType.Cart,
    path: pathByName('5619496040738316-1-cart.webp'),
  },
  {
    id: 'a7b5e50f-dcb4-46e1-9b3c-d12ddd63cae5',
    imageType: ImageType.Cart,
    path: pathByName('6090484789343891-1-cart.webp'),
  },
  {
    id: 'e2faf70b-7414-42cb-9690-93568b4fb090',
    imageType: ImageType.Cart,
    path: pathByName('8552515751438644-1-cart.webp'),
  },
  {
    id: '8de7e03b-b1c4-42e9-9965-42f89a43b80a',
    imageType: ImageType.Cart,
    path: pathByName('9197907543445676-1-cart.webp'),
  },
  {
    id: '8997b295-4bc8-4c3d-8c60-ea00dd1217bf',
    imageType: ImageType.Cart,
    path: pathByName('10547961582846888-1-cart.webp'),
  },
  {
    id: '20719840-a130-42f7-9888-2727f4a5541b',
    imageType: ImageType.Cart,
    path: pathByName('10686354557628304-1-cart.webp'),
  },
  {
    id: '2c47ee8b-5356-45dc-b2b7-75568dc1fa7c',
    imageType: ImageType.Cart,
    path: pathByName('11033926921508488-1-cart.webp'),
  },
  {
    id: '79cdd40a-b63e-4832-8272-6be4b943af8e',
    imageType: ImageType.Cart,
    path: pathByName('11600983276356164-1-cart.webp'),
  },
  {
    id: '4afb3eee-e88c-43a2-80dc-215839a6562e',
    imageType: ImageType.Cart,
    path: pathByName('11854078013954528-1-cart.webp'),
  },
  {
    id: '63481442-fe03-426d-9aa1-781923fa79e7',
    imageType: ImageType.Cart,
    path: pathByName('12064273040195392-1-cart.webp'),
  },
  {
    id: 'f973c5c8-935c-42c7-a586-72d8ad41fd1c',
    imageType: ImageType.Cart,
    path: pathByName('18532669286405344-1-cart.webp'),
  },
  {
    id: '30ac0673-5c97-44a6-9369-1661995c01b1',
    imageType: ImageType.Cart,
    path: pathByName('18644119330491310-1-cart.webp'),
  },
  {
    id: 'a0b7bc4a-2705-47bd-b4b0-210e98f0b1ac',
    imageType: ImageType.Cart,
    path: pathByName('27250082398145996-1-cart.webp'),
  },
  {
    id: '95bdbcfc-e710-41d7-b777-4cf018a6a164',
    imageType: ImageType.Cart,
    path: pathByName('39876704341265610-1-cart.webp'),
  },
  {
    id: 'c2e9bdce-497a-44ac-aa4a-443fab611c6c',
    imageType: ImageType.Cart,
    path: pathByName('51498472915966370-1-cart.webp'),
  },
];
