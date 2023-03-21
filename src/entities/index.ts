import { CourseEntity } from '@entities/courses';
import { CoursesLogoEntity } from '@entities/courses-logo';
import { LessonsEntity } from '@entities/lessons';

import { Avatar } from './avatars';
import { USER_ENTITIES } from './users';

export const ENTITIES = [Avatar, ...USER_ENTITIES, CourseEntity, LessonsEntity, CoursesLogoEntity];

export const SUBSCRIBERS = [];
