import * as React from 'react';
import { ArrowSmDownIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';
import { Products } from '@/components/projects/products';
import { FeaturedBlog } from '@/components/home/featured-blog';
import { CurrentTechStack } from '@/components/current-tech-stack';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { FeaturedSnippets } from '@/components/home/featured-snippets';
import { FeaturedExperiences } from '@/components/home/featured-experiences';

import DefaultLayout from '@/layouts/default-layout';

import type { NextPageWithLayoutType } from 'next';

const HomePage: NextPageWithLayoutType = () => {
    return (
        <>
            <div className="container space-y-20 overflow-hidden pb-8">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center">
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            Hello World!, I&apos;m
                        </p>
                        <h2 className="text-2xl font-semibold uppercase text-slate-800 dark:text-cyan-400">
                            Fahmi Idris
                        </h2>
                    </div>

                    <div className="max-w-[910px] pt-4 text-center">
                        <h1 className="text-[34px] font-bold leading-tight text-slate-800 dark:text-slate-200 md:text-5xl md:leading-[125%]">
                            A software engineer from <span className="text-cyan-400">West Java</span> -{' '}
                            <span className="text-cyan-400">Indonesia</span> who focuses on{' '}
                            <span className="text-cyan-400">Website Technology</span>.
                        </h1>
                        <p className="pt-4 text-sm md:text-lg font-semibold">
                            This website was established not just as a learning tool, but also as a place for me
                            to write and show off my projects, as well as a repository of my past experiences.
                        </p>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-4 pt-8 text-center sm:flex sm:items-center sm:justify-center sm:gap-0 sm:space-x-6">
                        <Link href="mailto:fahmiidris.1607@gmail.com" openNewTab={true} className="rounded-md border border-transparent bg-slate-800 py-3 px-6 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:bg-white dark:text-slate-800 dark:focus:ring-offset-slate-900 dark:hover:bg-slate-100">
                            Say &quot;Hi!&quot; to Me! ????????
                        </Link>
                        <Link href="/blog" className="rounded-md border border-slate-300 bg-white py-3 px-6 text-sm font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:focus:ring-offset-slate-900 dark:hover:bg-slate-700">
                            Read My Blog ????
                        </Link>
                        <Link href="https://www.trakteer.id/fahmiidris" openNewTab={true} className="rounded-md border border-slate-300 bg-white py-3 px-6 text-sm font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:focus:ring-offset-slate-900 dark:hover:bg-slate-700">
                            Trakteer Fahmi Idris ????
                        </Link>
                    </div>

                    <CurrentTechStack className="pt-8" />

                    <div className="flex items-center justify-center py-8 text-center">
                        <Link href="#featured-blog" className="inline-flex items-center space-x-2 rounded-md border border-slate-300 bg-white py-2 pl-4 pr-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700">
                            <span>See More Details</span>
                            <ArrowSmDownIcon className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <Products />
            </div>

            <div className="container mb-20 space-y-32 overflow-hidden pb-10">
                <FeaturedBlog />
                <FeaturedExperiences />
                <FeaturedProjects />
                <FeaturedSnippets />
            </div>
        </>
    );
};

HomePage.Props = {
    Layout: DefaultLayout,
    meta: {
        title: "Hi, I'm Fahmi Idris",
        description: "Fahmi Idris Personal Portfolio Website, Blog, Project Showcase, and My Experience History.",
    },
};

export default HomePage;
