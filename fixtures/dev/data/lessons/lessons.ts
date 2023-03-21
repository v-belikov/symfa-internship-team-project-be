import { LessonsEntity } from '@entities/lessons';

export const LESSONS_FIXTURES: Partial<LessonsEntity>[] = [
  {
    id: 'bf8f553f-4769-4e5c-b474-4dacc08aacab',
    title: 'Web-design',
    duration: 2,
    materialPath: './lessons-material/material1.mp4',
  },
  {
    id: 'f51ec145-f28c-4b3d-ab6a-c39b9d96f815',
    title: 'Color theory',
    duration: 1,
    materialPath: './lessons-material/material2.mp4',
  },
  {
    id: 'b1c7fe9f-5640-4058-96f0-10e274b3e9d8',
    title: 'UI/UX theory',
    duration: 2,
    materialPath: './lessons-material/material3.mp4',
  },
  {
    id: 'f62539a1-b92b-44f7-aeb7-465430b8f8bc',
    title: 'Design patterns',
    duration: 4,
    materialPath: './lessons-material/material4.mp4',
  },
];
