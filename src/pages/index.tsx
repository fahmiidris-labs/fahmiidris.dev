import * as React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { GoMarkGithub, GoFilePdf } from 'react-icons/go';

import { Link } from '@/components/atoms/fi-link/link';
import { MainLayout } from '@/components/templates/main-layout';

import { ReactComponent as NodeJsLogo } from '@/images/icons/nodejs-icon.svg';
import { ReactComponent as JavaScriptLogo } from '@/images/icons/javascript-icon.svg';
import { ReactComponent as TypeScriptLogo } from '@/images/icons/typescript-icon.svg';
import { ReactComponent as ReactJsLogo } from '@/images/icons/reactjs-icon.svg';
import { ReactComponent as TailwindCSSLogo } from '@/images/icons/tailwindcss-icon.svg';
import { ReactComponent as NextJsLogo } from '@/images/icons/nextjs-icon.svg';

import type { IconType } from 'react-icons';
import type { TNextPageWithLayout } from '@/types/app.type';

type TLink = {
  name: string;
  href: string;
};

type TLinkWithIcon = TLink & {
  username?: string;
  className?: string;
  icon: IconType;
};

const socialMedia: TLinkWithIcon[] = [
  {
    name: 'Github',
    username: 'fahmiidris-labs',
    href: 'https://github.com/fahmiidris-labs/',
    icon: GoMarkGithub,
    className: 'w-5 h-5 fill-gray-800',
  },
  {
    name: 'LinkedIn',
    username: 'linkedin.com/in/fahmiidris-labs',
    href: 'https://www.linkedin.com/in/fahmiidris-labs/',
    icon: FaLinkedin,
    className: 'w-5 h-5 fill-primary-600',
  },
  {
    name: 'My Resume',
    username: 'My Resume',
    href: '#',
    icon: GoFilePdf,
    className: 'w-5 h-5 fill-rose-600',
  },
];

const myStacks: TLinkWithIcon[] = [
  {
    name: 'JavaScript',
    href: '#',
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

const ButtonLink = () => {
  return (
    <div className="flex items-center justify-center space-x-6 py-[46px] text-center">
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-lg border border-transparent bg-gray-700 px-8 py-2 font-quicksand text-sm font-semibold text-white duration-200 ease-in-out hover:bg-gray-600 hover:ring-2 hover:ring-cyan-400 hover:ring-offset-2"
      >
        Say Hi to Me{' '}
      </Link>
      <Link
        href="/blog"
        className="inline-flex items-center justify-center rounded-lg border-[1.5px] border-gray-300 bg-white px-8 py-2 font-quicksand text-sm font-semibold text-gray-700 duration-200 ease-in-out hover:bg-gray-100 hover:ring-2 hover:ring-cyan-400 hover:ring-offset-2"
      >
        Read My Blog
      </Link>
    </div>
  );
};

const HomePage: TNextPageWithLayout = () => {
  return (
    <>
      <section id="hero-section">
        <div className="container flex flex-col items-center justify-center pt-[130px]">
          {/* Main Title */}
          <div className="text-center">
            <p className="font-quicksand text-xs font-bold">Hello World!, I'm</p>
            <h3 className="text-2xl font-semibold uppercase">Fahmi Idris</h3>
          </div>

          <div className="max-w-[910px] pt-[33px] text-center">
            <h1 className="text-5xl font-bold leading-[125%]">
              Stay a Student in the field of{' '}
              <span className="text-primary-400">Information Technology</span> and focus on{' '}
              <span className="text-primary-400">Website Technology</span>.
            </h1>
          </div>

          {/* Button Link */}
          <ButtonLink />

          {/* Social Media */}
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center justify-start space-x-[45px]">
              {socialMedia.map((item, idx) => (
                <Link
                  href={item.href}
                  key={idx}
                  className="inline-flex items-center justify-center space-x-2 font-quicksand text-xs font-bold"
                >
                  {<item.icon className={item.className} />}
                  <span>{item.username}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* My Stacks */}
          <div className="flex items-center justify-center pt-[30px] text-center">
            <div className="flex items-center justify-center space-x-5">
              {myStacks.map((item, idx) => (
                <Link
                  href={item.href}
                  key={idx}
                  className="inline-flex items-center justify-center font-quicksand text-sm font-bold"
                >
                  {<item.icon className="h-8 w-full" />}
                </Link>
              ))}
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex items-center justify-center pt-[40px] text-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center space-x-2 rounded-lg px-4 py-2 text-xs font-semibold hover:bg-primary-50"
            >
              <span>See More Details</span>
              <HiArrowDown className="h-4 w-4 animate-bounce" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

HomePage.Props = {
  Layout: MainLayout,
  meta: {
    title: "Hi! I'm Fahmi Idris",
    description:
      'Fahmi Idris Portfolio, Blog, Personal Project Showcase, and My Experience History.',
  },
};

export default HomePage;