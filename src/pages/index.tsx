import * as React from 'react';
import { ArrowSmDownIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';
import { LatestBlog } from '@/components/home/latest-blog';
import { BasicLayout } from '@/layouts/basic-layout';
import { LatestExperience } from '@/components/home/latest-experience';

import { ReactComponent as NextJsLogo } from '@/images/icons/nextjs.svg';
import { ReactComponent as NodeJsLogo } from '@/images/icons/nodejs.svg';
import { ReactComponent as ReactJsLogo } from '@/images/icons/reactjs.svg';
import { ReactComponent as JavaScriptLogo } from '@/images/icons/javascript.svg';
import { ReactComponent as TypeScriptLogo } from '@/images/icons/typescript.svg';
import { ReactComponent as TailwindCSSLogo } from '@/images/icons/tailwindcss.svg';

import type { TNextPageWithLayout } from 'next';
import { LatestProject } from '@/components/home/latest-project';

type TLink = {
  name: string;
  href: string;
};

type TLinkWithIcon = TLink & {
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

const stacks: TLinkWithIcon[] = [
  {
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: JavaScriptLogo,
  },
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    icon: TypeScriptLogo,
  },
  {
    name: 'NodeJS',
    href: 'https://nodejs.org/en/',
    icon: NodeJsLogo,
  },
  {
    name: 'ReactJS',
    href: 'https://reactjs.org/',
    icon: ReactJsLogo,
  },
  {
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    icon: TailwindCSSLogo,
  },
  {
    name: 'NextJS',
    href: 'https://nextjs.org/',
    icon: NextJsLogo,
  },
];

const Hero = (): JSX.Element => {
  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="text-xs font-bold text-slate-700 dark:text-slate-200">
          Hello World!, I&apos;m
        </p>
        <h3 className="text-2xl font-semibold uppercase text-slate-700 dark:text-cyan-400">
          Fahmi Idris
        </h3>
      </div>
      <div className="max-w-[910px] pt-4 text-center">
        <h1 className="text-[34px] font-bold leading-tight text-slate-700 dark:text-slate-200 md:text-5xl md:leading-[125%]">
          A software engineer from <span className="text-cyan-400">West Java</span> -{' '}
          <span className="text-cyan-400">Indonesia</span> who focuses on{' '}
          <span className="text-cyan-400">Website Technology</span>.
        </h1>
        <p className="pt-4 text-sm md:text-lg">
          This website was established not just as a learning tool, but also as a place for me to
          write and show off my projects, as well as a repository of my past experiences.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 pt-8 text-center sm:flex sm:items-center sm:justify-center sm:gap-0 sm:space-x-6">
        <Link
          href="mailto:fahmiidris.1607@gmail.com"
          openNewTab={true}
          className="rounded-lg border border-transparent bg-slate-800 py-3 px-6 text-sm font-semibold text-slate-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:bg-slate-200 dark:text-slate-700 dark:ring-offset-slate-900 dark:hover:bg-slate-300"
        >
          Say &quot;Hi!&quot; to Me! 👋🏻
        </Link>
        <Link
          href="/blogs"
          className="rounded-lg border border-slate-300 bg-slate-100 py-3 px-6 text-sm font-semibold text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700"
        >
          Read My Blog 📖
        </Link>
        <Link
          href="https://trakteer.id/fahmiidris"
          openNewTab={true}
          className="rounded-lg border border-slate-300 bg-slate-100 py-3 px-6 text-sm font-semibold text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700"
        >
          Trakteer Fahmi Idris 🍦
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-5 pt-8">
        {stacks.map((item, idx) => (
          <Link key={idx} href={item.href} openNewTab={true}>
            <span className="sr-only">{item.name}</span>
            {<item.icon className="h-8 w-full" />}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center py-8 text-center">
        <Link
          href="#latest-blog"
          className="inline-flex items-center space-x-2 rounded-lg border border-slate-300 bg-slate-100 py-2 pl-4 pr-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700"
        >
          <span>See More Details</span>
          <ArrowSmDownIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const HomePage: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div className="space-y-20 overflow-hidden">
        <Hero />
      </div>
      <div className="mb-20 space-y-20 overflow-hidden">
        <LatestBlog />
        <LatestExperience />
        <LatestProject />
      </div>
    </>
  );
};

HomePage.Props = {
  Layout: BasicLayout,
  meta: {
    title: "Hi, I'm Fahmi Idris - www.fahmiidris.dev",
    description:
      'Fahmi Idris Personal Portfolio Website, Blog, Project Showcase, and My Experience History.',
  },
};

export default HomePage;
