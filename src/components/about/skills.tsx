import * as React from 'react';

import { Link } from '@/components/link';
import { Section } from '@/components/section';

import VuejsIcon from '@/images/icons/vuejs.svg';
import FigmaIcon from '@/images/icons/figma.svg';
import NextjsIcon from '@/images/icons/nextjs.svg';
import VSCodeIcon from '@/images/icons/vscode.svg';
import ReactjsIcon from '@/images/icons/reactjs.svg';
import PostmanIcon from '@/images/icons/postman.svg';
import BootstrapIcon from '@/images/icons/bootstrap.svg';
import JavaScriptIcon from '@/images/icons/javascript.svg';
import TypeScriptIcon from '@/images/icons/typescript.svg';
import TailwindCSSIcon from '@/images/icons/tailwindcss.svg';

type SkillSectionType = {
    title: string;
    skills: {
        href: string;
        title: string;
        icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
    }[];
};

const SkillSection = ({ title, skills }: SkillSectionType) => {
    return (
        <div>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-white">{title}</h3>

            <ul className="flex flex-wrap items-center gap-1 py-2">
                {skills.map(({ icon: Icon, ...item }) => (
                    <li key={item.title}>
                        <Link href={item.href} openNewTab={true} className="group inline-flex items-center space-x-2 border border-slate-400/20 py-1.5 pl-2 pr-2.5 text-xs font-semibold">
                            <Icon className="h-5 w-5" />
                            <span className="group-hover:text-slate-800 dark:group-hover:text-white">{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const Skills = () => {
    return (
        <Section id="skills" title="My Skills" description="Some of the technologies I learned and use" className="relative pt-4">
            <div className="flex flex-col space-y-2 pt-4">
                <SkillSection
                    title="Programming Language"
                    skills={[
                        {
                            title: 'JavaScript',
                            href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                            icon: JavaScriptIcon,
                        },
                        { title: 'TypeScript', href: 'https://typescriptlang.org', icon: TypeScriptIcon },
                    ]}
                />

                <SkillSection
                    title="Framework"
                    skills={[
                        { title: 'React.js', href: 'https://reactjs.org', icon: ReactjsIcon },
                        { title: 'Vue.js', href: 'https://vuejs.org', icon: VuejsIcon },
                        { title: 'Next.js', href: 'https://nextjs.org', icon: NextjsIcon },
                        { title: 'Tailwind CSS', href: 'https://tailwindcss.com', icon: TailwindCSSIcon },
                        { title: 'Bootstrap', href: 'https://getbootstrap.com', icon: BootstrapIcon },
                    ]}
                />

                <SkillSection
                    title="Tools"
                    skills={[
                        { title: 'VS Code', href: 'https://code.visualstudio.com', icon: VSCodeIcon },
                        { title: 'Figma', href: 'https://figma.com', icon: FigmaIcon },
                        { title: 'Postman', href: 'https://postman.com', icon: PostmanIcon },
                    ]}
                />
            </div>
        </Section>
    );
};
