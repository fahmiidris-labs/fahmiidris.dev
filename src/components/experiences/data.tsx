import * as React from 'react';

import { Link } from '@/components/link';

import type { TSteps } from '@/components/experiences/steps';

import sidangPkl from '@/public/images/sidang-pkl.jpg';
import jccOnline1 from '@/public/images/jcc-online-1.png';
import jcc1 from '@/public/images/jcc-1.png';
import jcc2 from '@/public/images/jcc-2.png';
import jcc3 from '@/public/images/jcc-3.png';
import aquaTroops from '@/public/images/meet-aquatroops.png';
import sprintReview from '@/public/images/sprint-review.png';

export let data: TSteps['steps'] = [
  {
    id: 1,
    title: 'Field Work Practice at Defense University - LPPPM - Kapus Eva',
    time: 'October 23th, 2019 - February 7th, 2020',
    images: [
      {
        src: sidangPkl,
        alt: 'Sidang PKL',
      },
    ],
    body: () => (
      <>
        <p>
          Implementing Field Work Practice at the Defense University for 3 Months as a Vocational
          Graduation Requirement.
        </p>
        <Link
          href="https://drive.google.com/file/d/1W3BUSYCBfrLVM0lSlpJSzZVi5_-RVakE/view?usp=sharing"
          openNewTab={true}
          className="inline-flex items-center rounded-md bg-cyan-400 px-4 py-2 text-xs text-white no-underline hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-600"
        >
          View Certificate
        </Link>
      </>
    ),
  },
  {
    id: 2,
    title: 'Candradimuka Jabar Coding Camp 2021 Bootcamp - Online',
    time: 'August 25th, 2021 - September 25th, 2021',
    images: [
      {
        src: jccOnline1,
        alt: 'JCC Online 2021 Bootcamp',
      },
    ],
    body: () => (
      <>
        <p>
          Join the JCC 2021 bootcamp - online phase (react.js class) for a month starting from
          August 2021 to September 2021.
        </p>
        <Link
          href="https://drive.google.com/file/d/1whSsmdfx18tIxbacbXdrVb8sFdOO2fsw/view?usp=sharing"
          openNewTab={true}
          className="inline-flex items-center rounded-md bg-cyan-400 px-4 py-2 text-xs text-white no-underline hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-600"
        >
          View e-Certificate
        </Link>
      </>
    ),
  },
  {
    id: 3,
    title: 'Candradimuka Jabar Coding Camp 2020 Bootcamp - Offline',
    time: 'October 6th, 2021 - March 31th, 2022',
    images: [
      {
        src: jcc1,
        alt: 'JCC 2021 Bootcamp',
      },
      {
        src: jcc2,
        alt: 'JCC 2021 Bootcamp',
      },
      {
        src: jcc3,
        alt: 'JCC 2021 Bootcamp',
      },
    ],
    body: () => (
      <>
        <p>
          Passed into the offline phase of Jabar Coding Camp 2021 taken from the best participants
          in the class.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: 'Internship as a Frontend Web Developer at eFishery',
    // time: 'March 1st, 2022 - June 1st, 2022',
    time: 'March 1st, 2022 - Present',
    images: [
      {
        src: aquaTroops,
        alt: 'Meet Aquatroops',
      },
      {
        src: sprintReview,
        alt: 'Sprint Review',
      },
    ],
    body: () => (
      <>
        <p>
          Internship at eFishery to be precise in the Feeder Ops section as a Frontend Engineer.
        </p>
      </>
    ),
  },
];