
import type { BlogPost } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const FOOTER_LINKS = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Use', path: '/terms' },
];

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'mastering-tiktok-downloads',
        title: 'Mastering TikTok Downloads: A Comprehensive Guide',
        author: 'SnapTik HD Team',
        date: 'October 26, 2023',
        excerpt: 'Learn the ins and outs of downloading TikTok videos without watermarks. This guide covers everything from quality settings to legal considerations.',
        imageUrl: 'https://picsum.photos/seed/blog1/800/400',
        content: `
<p class="mb-4">In today's digital age, TikTok has become a powerhouse of short-form video content. From viral dances to educational snippets, there's something for everyone. But what if you want to save a video for offline viewing, or share it on another platform without the distracting watermark? This guide will walk you through the entire process, making you a master of TikTok downloads.</p>
<h3 class="text-2xl font-bold text-primary mb-2 mt-6">Why Download TikTok Videos?</h3>
<p class="mb-4">There are many reasons you might want to download a TikTok video. Perhaps it's a recipe you want to follow in the kitchen, a workout routine you want to use at the gym, or simply a hilarious clip you want to keep forever. Downloading allows you to bypass the need for an internet connection and ensures the content is always available to you.</p>
<h3 class="text-2xl font-bold text-primary mb-2 mt-6">The Watermark Problem</h3>
<p>When you download a video directly from the TikTok app, it comes with a prominent watermark that moves around the screen. While this is great for creator attribution, it can be visually distracting, especially if you want to repurpose the content (with permission, of course). Our tool provides a clean version of the video, just as the creator uploaded it.</p>
        `
    },
    {
        slug: 'top-5-tiktok-trends',
        title: 'Top 5 TikTok Trends You Need to Know About This Month',
        author: 'SnapTik HD Team',
        date: 'October 15, 2023',
        excerpt: 'Stay ahead of the curve with our breakdown of the hottest trends taking over TikTok right now. From new sounds to viral challenges, we\'ve got you covered.',
        imageUrl: 'https://picsum.photos/seed/blog2/800/400',
        content: `
<p class="mb-4">TikTok trends move at lightning speed. Blink, and you might miss the next big thing. To help you stay in the loop, we've compiled a list of the top 5 trends currently dominating the platform. Whether you're a creator looking for inspiration or just a curious scroller, this is for you.</p>
<h3 class="text-2xl font-bold text-primary mb-2 mt-6">1. The "Ancient AI" Filter</h3>
<p class="mb-4">This filter transforms your face into an ancient statue, leading to hilarious and sometimes surprisingly artistic results. It's being paired with dramatic classical music for maximum effect.</p>
<h3 class="text-2xl font-bold text-primary mb-2 mt-6">2. "Made You Look" Dance Challenge</h3>
<p>Set to the catchy tune by Meghan Trainor, this dance is relatively simple, making it accessible for everyone to join in. It's all about fun, positive vibes.</p>
        `
    },
];
