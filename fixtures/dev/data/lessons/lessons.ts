import { DeepPartial } from 'typeorm';

import { LessonsEntity } from '@entities/lessons';

export const LESSONS_FIXTURES: DeepPartial<LessonsEntity>[] = [
  {
    id: 'bf8f553f-4769-4e5c-b474-4dacc08aacab',
    title: 'Web-design',
    duration: 2,
    materialPath: '/lessons-material/material1.mp4',
    course: {
      id: '7ff9c441-70f0-4635-a4b8-17e0e3503dbd',
    },
  },
  {
    id: 'f51ec145-f28c-4b3d-ab6a-c39b9d96f815',
    title: 'Color theory',
    duration: 1,
    materialPath: '/lessons-material/material2.mp4',
    course: {
      id: '7ff9c441-70f0-4635-a4b8-17e0e3503dbd',
    },
  },
  {
    id: 'b1c7fe9f-5640-4058-96f0-10e274b3e9d8',
    title: 'UI/UX theory',
    duration: 2,
    materialPath: '/lessons-material/material3.mp4',
    course: {
      id: '394db5cc-005f-45f4-b179-a7f6239039b3',
    },
  },
  {
    id: 'f62539a1-b92b-44f7-aeb7-465430b8f8bc',
    title: 'Design patterns',
    duration: 4,
    materialPath: '/lessons-material/material4.mp4',
    course: {
      id: '394db5cc-005f-45f4-b179-a7f6239039b3',
    },
  },
  {
    id: 'c7cedcea-0034-4d61-843b-0ef1f73d96e0',
    title: 'ISO',
    duration: 2,
    materialPath: '/lessons-material/material1.mp4',
    course: {
      id: 'd3144c68-84ac-4e27-86b1-6e625cad2b3e',
    },
  },
  {
    id: 'c55c1cfd-f3a1-4b3f-9e04-3f759ec91c47',
    title: 'Documentation',
    duration: 1,
    materialPath: '/lessons-material/material2.mp4',
    course: {
      id: 'd3144c68-84ac-4e27-86b1-6e625cad2b3e',
    },
  },
  {
    id: '97ebc9f3-d08b-4010-aa2b-1861c4d17d3f',
    title: 'Math',
    duration: 3,
    materialPath: '/lessons-material/material3.mp4',
    course: {
      id: '431556fa-d0a4-4b8b-a4fe-be89bc499a98',
    },
  },
  {
    id: '69f367f5-cf33-4fb0-af4e-54ff59e5a90d',
    title: 'OOP',
    duration: 2,
    materialPath: '/lessons-material/material4.mp4',
    course: {
      id: '431556fa-d0a4-4b8b-a4fe-be89bc499a98',
    },
  },
  {
    id: 'ac7cf8f2-f1b1-48d2-adde-ecd021831fa6',
    title: 'ISaT',
    duration: 2,
    materialPath: '/lessons-material/material3.mp4',
    course: {
      id: '087527c5-12b9-4fef-b0d9-13a2cd1e7589',
    },
  },
  {
    id: '08e737d4-4932-49ba-8604-a88586a494cc',
    title: 'Philosophy',
    duration: 1,
    materialPath: '/lessons-material/material2.mp4',
    course: {
      id: '087527c5-12b9-4fef-b0d9-13a2cd1e7589',
    },
  },
];
