import * as React from 'react';

import { Link } from '@/components/link';

import GitHubIcon from '@/images/icons/github.svg';
import DribbbleIcon from '@/images/icons/dribbble.svg';
import LinkedInIcon from '@/images/icons/linkedin.svg';

export const GitHubLinkedInDribbble = () => {
    return (
        <div className="hidden items-center space-x-4 sm:flex">
            <Link href="https://www.linkedin.com/in/fahmiidris-labs" openNewTab={true} className="block text-sky-500 hover:text-sky-600 dark:text-sky-600 dark:hover:text-sky-500">
                <span className="sr-only">Fahmi Idris on LinkedIn</span>
                <LinkedInIcon className="h-5 w-5" />
            </Link>

            <Link href="https://www.github.com/fahmiidris-labs" openNewTab={true} className="block text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-500">
                <span className="sr-only">Fahmi Idris on GitHub</span>
                <GitHubIcon className="h-5 w-5" />
            </Link>

            <Link href="https://dribbble.com/_fahmiidris" openNewTab={true} className="block text-slate-400 hover:text-slate-500">
                <span className="sr-only">Fahmi Idris on Dribbble</span>
                <DribbbleIcon className="h-5 w-5" />
            </Link>
        </div>
    );
};
