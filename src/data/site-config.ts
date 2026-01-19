import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://bynorthwest.github.io',
    title: 'Your Blog',
    subtitle: 'Personal Blog',
    description: 'A personal blog about technology, coding, and life.',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/'
        }
    ],
    hero: {
        title: 'Welcome to My Blog',
        text: "Hi, I'm **Your Name**. I'm a developer passionate about building great software and sharing knowledge.\n\nThis is my personal space where I write about coding, technology, and things I learn along the way.\n\nFeel free to explore my posts on [GitHub](https://github.com/)."
    },
    postsPerPage: 8
};

export default siteConfig;
