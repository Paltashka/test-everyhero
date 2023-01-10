import Link from 'next/link';
import { Logo } from './Logo';

export function Header() {
    return (
        <header className="bg-teal-600">
            <nav
                className="mx-auto max-w-7xl px-6 lg:px-8"
                aria-label="Top"
            >
                <div className="flex w-full items-center justify-between border-b border-teal-500 py-6 lg:border-none">
                    <div className="flex items-center">
                        <Link href="/">
                            <span className="sr-only">Everyhero</span>
                            <Logo className="h-12 fill-white" />
                        </Link>
                        <div className="ml-10 hidden space-x-8 lg:block">
                            <Link
                                href="/imprint"
                                className="text-base font-medium text-white hover:text-teal-50"
                            >
                                Imprint
                            </Link>
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                        <a
                            href="#"
                            className="inline-block rounded-md border border-transparent bg-teal-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                        >
                            Sign in
                        </a>
                        <a
                            href="#"
                            className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-teal-600 hover:bg-teal-50"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
                    <Link
                        href="/imprint"
                        className="text-base font-medium text-white hover:text-teal-50"
                    >
                        Imprint
                    </Link>
                </div>
            </nav>
        </header>
    );
}
