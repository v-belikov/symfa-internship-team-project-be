import { AvatarLoader } from './avatars';
import { CoursesLoader } from './courses';
import { CoursesLogosLoader } from './courses-logos';
import { LessonsLoader } from './lessons';
import { UserTeacherLoader } from './users';
import { UserStudentLoader } from './users';

export const DEV_LOADERS = [
  AvatarLoader,
  UserTeacherLoader,
  UserStudentLoader,
  CoursesLogosLoader,
  LessonsLoader,
  CoursesLoader,
];
