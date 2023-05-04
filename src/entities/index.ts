import { CourseEntity } from '@entities/courses';
import { LessonsEntity } from '@entities/lessons';

import { Avatar } from './avatars';
import { USER_ENTITIES } from './users';

export const ENTITIES = [Avatar, ...USER_ENTITIES, CourseEntity, LessonsEntity];

export const SUBSCRIBERS = [];
