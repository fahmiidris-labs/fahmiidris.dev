import * as React from 'react';
import { ArrowSmUpIcon } from '@heroicons/react/outline';

export const BackToTopSection = () => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            if (!visible && window.scrollY > 300) {
                setVisible(true);
            } else if (visible && window.scrollY <= 300) {
                setVisible(false);
            }
        };

        onScroll();

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            (window as any).removeEventListener('scroll', onScroll, { passive: true });
        };
    }, [visible]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed right-4 bottom-4 z-50" style={{ visibility: visible ? 'visible' : 'hidden' }}>
            <button type="button" onClick={() => scrollToTop()} className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-500 p-2 text-white hover:bg-cyan-400 focus:outline-none dark:bg-slate-800 dark:hover:bg-slate-800/90">
                <ArrowSmUpIcon className="h-5 w-5" />
            </button>
        </div>
    );
};
