import logo from 'logo';
import { useRouter } from 'next/router';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/Theryston/gender-name',
  },
  docsRepositoryBase: 'https://github.com/Theryston/gender-name/tree/main/docs',
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Gender Name',
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="An API that uses artificial intelligence to predict someone's gender based on their name"
        />
        <meta
          name="og:description"
          content="An API that uses artificial intelligence to predict someone's gender based on their name"
        />
        <meta name="twitter:site:domain" content="gendername.org" />
        <meta name="twitter:url" content="https://gendername.org" />
        <meta
          name="og:title"
          content={title ? title + ' – Gender Name' : 'Gender Name'}
        />
        <meta name="apple-mobile-web-app-title" content="Gender Name" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    );
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">Made with ❤️ by Theryston</p>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },
};

export default config;
