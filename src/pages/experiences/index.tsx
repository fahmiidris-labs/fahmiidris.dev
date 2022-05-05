import * as React from 'react';
import { ClockIcon, SearchIcon } from '@heroicons/react/outline';

import { Logo } from '@/components/logo';
import { Link } from '@/components/link';
import { Steps } from '@/components/experiences/steps';
import { BasicLayout } from '@/layouts/basic-layout';
import { HeadingSection } from '@/components/heading-section';

import { data as myExperiences, TExperience } from '@/components/experiences/data';

import type { TNextPageWithLayout } from 'next';

const ExperiencesPage: TNextPageWithLayout = (): JSX.Element => {
  const [search, setSearch] = React.useState<string | null>(null);
  const [data, setData] = React.useState<TExperience[]>(myExperiences);

  React.useEffect(() => {
    if (search) {
      const filteredData: TExperience[] = myExperiences.filter((step) => {
        return step.title.toLowerCase().includes(search.toLowerCase());
      });

      setData(filteredData);
    } else {
      setData(myExperiences);
    }
  }, [search]);

  return (
    <>
      <div className="relative mb-20">
        <div className="container flex flex-col space-y-6">
          <HeadingSection
            title="My Experiences"
            description="My historical experience, non-formal education, big event, internship, etc."
            icon={ClockIcon}
          />
        </div>
        <div className="container pt-8">
          <div className="flex flex-wrap items-center space-y-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 py-6 px-6 dark:from-amber-500 dark:to-yellow-600 md:flex-nowrap md:space-y-0 md:space-x-8 md:py-4 md:pr-4 md:pl-5">
            <h2 className="text-whihte flex-none">
              <h2 className="flex-none">
                <span className="sr-only">My Certificates</span>
                <Logo className="h-auto w-24 text-white" />
              </h2>
            </h2>
            <p className="flex-auto text-sm font-medium text-white sm:text-lg">
              All certificates in the field of programming owned by Fahmi Idris
            </p>
            <Link
              href="/experiences/certificates"
              className="flex-none rounded-lg bg-white py-3 px-5 text-xs font-bold text-slate-900 transition-colors duration-200 hover:bg-slate-100 sm:text-sm sm:font-semibold"
            >
              View My Certificates
            </Link>
          </div>
        </div>
        <div className="container pt-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="sticky top-20 z-30 col-span-12 self-start md:col-span-3">
              <div className="-mx-3 -mt-6 bg-white/95 px-3 pt-6 backdrop-blur dark:bg-slate-900/75">
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon className="h-[18px] w-[18px]" />
                  </span>
                  <input
                    type="text"
                    name="search"
                    placeholder='Search "My Experiences"'
                    className="block w-full rounded-lg border border-slate-300/50 pl-9 text-xs placeholder:text-xs placeholder:font-semibold focus:border-slate-300/75 focus:ring-2 focus:ring-cyan-400 dark:border-transparent dark:bg-slate-800 dark:ring-offset-slate-900"
                    style={{ outline: 'none' }}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <Steps steps={data.sort((a, b) => b.id - a.id)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ExperiencesPage.Props = {
  Layout: BasicLayout,
  meta: {
    title: 'Experiences',
    description: 'My historical experience, non-formal education, big event, internship, etc.',
  },
};

export default ExperiencesPage;
