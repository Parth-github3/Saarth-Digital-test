export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  price: string;
  priceSub?: string;
  who: string;
  domainInfo: string;
  features: string[];
  notIncluded?: string[];
  delivery: string;
  featured?: boolean;
  marketingFeatured?: boolean;
  categories?: {
    title: string;
    items: string[];
  }[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Site',
    badge: 'Starter Presence',
    price: '₹15,000',
    who: 'Plumbers, small shops, salons, local traders',
    domainInfo: '+ domain as pass-through',
    features: [
      '3–5 pages, mobile responsive',
      'WhatsApp + call button',
      'Contact form + Google Maps',
      'Basic on-page SEO setup',
      '14-day support'
    ],
    notIncluded: [
      'GBP optimisation',
      'Analytics setup',
      'Custom UI/UX design'
    ],
    delivery: '3–5 days'
  },
  {
    id: 'growth',
    name: 'Full Site + GBP',
    badge: 'Growth Presence',
    price: '₹28,000',
    featured: true,
    who: 'AC repair, salons, clinics, consultants, restaurants',
    domainInfo: '+ domain as pass-through',
    features: [
      'Everything in Starter',
      'Conversion-focused copywriting',
      'Testimonials + gallery section',
      'Google Business Profile setup & optimised',
      'Analytics 4 + Search Console linked',
      '1 extra service / area page',
      '30-day support'
    ],
    notIncluded: [
      'Custom UI/UX design',
      'Animations / interactions'
    ],
    delivery: '5–7 days'
  },
  {
    id: 'marketing',
    name: 'Growth Marketing',
    badge: 'Marketing Focus',
    price: '₹18,000',
    priceSub: '/mo',
    marketingFeatured: true,
    who: 'Businesses wanting leads, followers & brand visibility',
    domainInfo: 'No build cost · Web support available as add-on',
    categories: [
      {
        title: 'Social Media',
        items: [
          '12 posts/month (Instagram + Facebook)',
          'Reels scripting + caption copywriting',
          'Hashtag strategy + posting schedule'
        ]
      },
      {
        title: 'AI Marketing',
        items: [
          'AI content calendar via Claude',
          'AI ad copy variants for A/B testing',
          'Monthly AI competitor analysis report'
        ]
      },
      {
        title: 'Influencer & PR',
        items: [
          '2 micro-influencer collabs/month',
          'Local PR outreach (newspapers, city pages)',
          'GBP posts + review management'
        ]
      },
      {
        title: 'Reporting',
        items: [
          'Monthly performance report',
          'WhatsApp strategy call (1/month)'
        ]
      }
    ],
    features: [], // Handled by categories
    delivery: 'Ongoing · Min 3-month commitment'
  },
  {
    id: 'premium',
    name: 'Luxury Digital + AI',
    badge: 'Signature — Premium',
    price: '₹95,000',
    who: 'High-end businesses, exporters, brand-conscious owners',
    domainInfo: '+ domain + premium tools + hosting',
    categories: [
      {
        title: 'Website',
        items: [
          'Custom coded — Next.js / Node.js or WordPress',
          'Figma UI/UX design before build',
          'Micro-animations + scroll effects',
          'Speed optimisation (90+ PageSpeed)',
          'Advanced SEO + schema markup'
        ]
      },
      {
        title: 'Brand & AI Marketing',
        items: [
          'Brand identity — logo, colors, fonts',
          'AI-powered content strategy (Claude)',
          'AI chatbot / lead capture on site',
          '1 month social media management',
          'WhatsApp automation + lead funnel'
        ]
      },
      {
        title: 'Support',
        items: [
          'GBP full optimisation + review system',
          'Professional copywriting (all pages)',
          '3-month premium support'
        ]
      }
    ],
    features: [],
    delivery: 'Delivery: 18–25 days'
  },
  {
    id: 'ecommerce',
    name: 'Online Store',
    badge: 'E-commerce',
    price: '₹70,000',
    who: 'Retailers, boutiques, manufacturers selling direct',
    domainInfo: '+ domain + payment gateway',
    features: [
      'WooCommerce store up to 50 products',
      'Razorpay / PayU payment integration',
      'Product pages + cart + checkout',
      'Mobile-first + speed optimisation',
      'WhatsApp order notifications',
      'Inventory management training',
      '3-month post-launch support'
    ],
    delivery: 'Delivery: 10–14 days'
  },
  {
    id: 'retainer',
    name: 'Maintenance + Updates',
    badge: 'Monthly Retainer',
    price: '₹3,000–5,500',
    priceSub: '/mo',
    who: 'Post-launch recurring — any client, any package',
    domainInfo: 'per client per month',
    features: [
      'Monthly content / image updates',
      'Offer banners + seasonal pages',
      'GBP profile updates',
      'Basic performance report',
      'Priority WhatsApp support',
      'Plugin + security updates'
    ],
    delivery: 'Ongoing relationship'
  }
];

export const ADD_ONS = [
  { name: 'Logo design', desc: '3 concepts, 2 revisions, all file formats', price: '₹5,000' },
  { name: 'AI chatbot on website', desc: 'Claude/Tidio-powered lead capture bot trained on client\'s business', price: '₹8,000' },
  { name: 'Google Business Profile setup', desc: 'Full optimisation — photos, categories, Q&A, posts', price: '₹4,000' },
  { name: 'WhatsApp lead funnel', desc: 'Automated greeting + quick reply via WATI/AiSensy', price: '₹5,500' },
  { name: 'AI content calendar (3 months)', desc: 'Claude-generated post ideas, captions, hashtags for 90 days', price: '₹4,500' },
  { name: 'Micro-influencer campaign', desc: '1 campaign — sourcing, briefing, coordination (2–3 influencers)', price: '₹7,000' },
  { name: 'Speed optimisation', desc: 'Caching, image compression, 90+ PageSpeed target', price: '₹4,500' },
  { name: 'Blog post (per post)', desc: 'AI-assisted + human edited, SEO-optimised, 800–1,200 words', price: '₹1,500' },
  { name: 'Google Ads setup', desc: 'Campaign build, keyword research, conversion tracking', price: '₹7,500' },
  { name: 'Extra pages (per page)', desc: 'Services, FAQ, Gallery, Team — matching existing design', price: '₹2,500' },
  { name: 'Annual maintenance renewal', desc: 'Hosting renewal, plugin updates, security check (year 2+)', price: '₹7,500' }
];
