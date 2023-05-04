import { DeepPartial } from 'typeorm';

import { CourseEntity } from '@entities/courses';

export const COURSES_FIXTURES: DeepPartial<CourseEntity>[] = [
  {
    id: '7ff9c441-70f0-4635-a4b8-17e0e3503dbd',
    title: 'History of graphic design',
    description:
      "Graphic design can be traced all the way back to 15,000 BC, when the first known visual communications arose. These pictographs and symbols are present in the Lascaux caves in southern France. Fast-forward several thousand years, and you'll discover the Blau Monument.",
    teacher: {
      id: '53ecdcb5-8abb-413d-b6a2-6ec1fd6947ca',
    },
    logo: 'images/courses-logos/logo1.jpg',
  },
  {
    id: '394db5cc-005f-45f4-b179-a7f6239039b3',
    title: 'Graphic Design',
    description:
      "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.",
    teacher: {
      id: '4fb3c988-2ff3-4c18-b3e3-bc3b4bd78c25',
    },
    logo: 'images/courses-logos/logo2.jpg',
  },
  {
    id: 'd3144c68-84ac-4e27-86b1-6e625cad2b3e',
    title: 'Digital Panting',
    description:
      'Digital painting is an established art medium that typically combines a computer, a graphics tablet, and software of choice. The artist uses painting and drawing with the stylus that comes with the graphics tablet to create 2D paintings within a digital art software.',
    teacher: {
      id: '7542839a-e305-428e-b1c1-65ff6ea17943',
    },
    logo: 'images/courses-logos/logo3.jpg',
  },
  {
    id: '431556fa-d0a4-4b8b-a4fe-be89bc499a98',
    title: 'Design Thinking',
    description:
      'Design thinking is a non-linear, iterative process that teams use to understand users, challenge assumptions, redefine problems and create innovative solutions to prototype and test. Involving five phases—Empathize, Define, Ideate, Prototype and Test—it is most useful to tackle problems that are ill-defined or unknown.',
    teacher: {
      id: '39a0f862-01a7-4230-8d82-07b3d5c0c33f',
    },
    logo: 'images/courses-logos/logo4.jpg',
  },
  {
    id: '087527c5-12b9-4fef-b0d9-13a2cd1e7589',
    title: 'App Design Course',
    description:
      "App design is the look and feel of a mobile application. This includes all of the visual elements and interactive elements that impact how the app functions. Mobile app design combines two concepts—UI and UX. The user interface (UI) encompasses the app's look and feel.",
    teacher: {
      id: 'c2277a4f-9a7b-433e-9268-0aaf76775665',
    },
    logo: 'images/courses-logos/logo3.jpg',
  },
  {
    id: '087527c5-12b9-4fef-b0d9-26b1b0184f25',
    title: 'SDFsdfcvc',
    description:
      "App design is the look and feel of a mobile application. This includes all of the visual elements and interactive elements that impact how the app functions. Mobile app design combines two concepts—UI and UX. The user interface (UI) encompasses the app's look and feel.",
    teacher: {
      id: 'c2277a4f-9a7b-433e-9268-0aaf76775665',
    },
    logo: 'images/courses-logos/logo3.jpg',
  },
];
