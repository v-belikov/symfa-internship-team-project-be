import { DeepPartial } from 'typeorm';

import { CourseEntity } from '@entities/courses';

export const COURSES_FIXTURES: DeepPartial<CourseEntity>[] = [
  {
    id: '7ff9c441-70f0-4635-a4b8-17e0e3503dbd',
    title: 'History of graphic design',
    description:
      "Graphic design can be traced all the way back to 15,000 BC, when the first known visual communications arose. These pictographs and symbols are present in the Lascaux caves in southern France. Fast-forward several thousand years, and you'll discover the Blau Monument.",
    teacher: '',
    lessons: [
      {
        id: 'bf8f553f-4769-4e5c-b474-4dacc08aacab',
      },
      {
        id: 'f51ec145-f28c-4b3d-ab6a-c39b9d96f815',
      },
      {
        id: '8d9ac641-759e-45b6-95c1-06d05ef26b90',
      },
    ],
    logo: {
      id: 'bee4c87a-0745-47e5-b05a-566a14144713',
    },
  },
  {
    id: '394db5cc-005f-45f4-b179-a7f6239039b3',
    title: 'Graphic Design',
    description:
      "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.",
    teacher: '',
    lessons: [
      {
        id: 'f51ec145-f28c-4b3d-ab6a-c39b9d96f815',
      },
      {
        id: 'f62539a1-b92b-44f7-aeb7-465430b8f8bc',
      },
      {
        id: 'b1c7fe9f-5640-4058-96f0-10e274b3e9d8',
      },
    ],
    logo: {
      id: 'e9db95a2-5be0-4e90-9995-1be3da9b32ba',
    },
  },
  {
    id: 'd3144c68-84ac-4e27-86b1-6e625cad2b3e',
    title: 'Digital Panting',
    description:
      'Digital painting is an established art medium that typically combines a computer, a graphics tablet, and software of choice. The artist uses painting and drawing with the stylus that comes with the graphics tablet to create 2D paintings within a digital art software.',
    teacher: '',
    lessons: [
      {
        id: 'b1c7fe9f-5640-4058-96f0-10e274b3e9d8',
      },
      {
        id: 'f51ec145-f28c-4b3d-ab6a-c39b9d96f815',
      },
      {
        id: '8d9ac641-759e-45b6-95c1-06d05ef26b90',
      },
    ],
    logo: {
      id: 'de519f7a-a712-4390-9ad2-26b1b0184f25',
    },
  },
  {
    id: '431556fa-d0a4-4b8b-a4fe-be89bc499a98',
    title: 'Design Thinking',
    description:
      'Design thinking is a non-linear, iterative process that teams use to understand users, challenge assumptions, redefine problems and create innovative solutions to prototype and test. Involving five phases—Empathize, Define, Ideate, Prototype and Test—it is most useful to tackle problems that are ill-defined or unknown.',
    teacher: '',
    lessons: [
      {
        id: 'f62539a1-b92b-44f7-aeb7-465430b8f8bc',
      },
      {
        id: '8d9ac641-759e-45b6-95c1-06d05ef26b90',
      },
      {
        id: 'bf8f553f-4769-4e5c-b474-4dacc08aacab',
      },
    ],
    logo: {
      id: 'feb9ae8f-e40d-4397-9982-5078a086f40e',
    },
  },
  {
    id: '087527c5-12b9-4fef-b0d9-13a2cd1e7589',
    title: 'App Design Course',
    description:
      "App design is the look and feel of a mobile application. This includes all of the visual elements and interactive elements that impact how the app functions. Mobile app design combines two concepts—UI and UX. The user interface (UI) encompasses the app's look and feel.",
    teacher: '',
    lessons: [
      {
        id: '8d9ac641-759e-45b6-95c1-06d05ef26b90',
      },
      {
        id: 'f51ec145-f28c-4b3d-ab6a-c39b9d96f815',
      },
      {
        id: 'b1c7fe9f-5640-4058-96f0-10e274b3e9d8',
      },
    ],
    logo: {
      id: 'de519f7a-a712-4390-9ad2-26b1b0184f25',
    },
  },
];
