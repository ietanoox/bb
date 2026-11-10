// Content transcribed from the nine-page public Broad Branding site.
// Images, logos and icons are served locally; no WordPress runtime is required.
export type ServiceBlock =
  | { type: 'paragraph'; text: string; callout?: boolean; presentation?: 'quote' }
  | { type: 'heading'; text: string; level: number; presentation?: 'quote' | 'subheading' | 'section-heading' }
  | { type: 'image'; src: string; alt: string };

/** Original text-widget boundaries preserve typography, mobile insets and blank lines. */
export interface ServiceContentGroup {
  blocks: number[];
  marginTop?: number;
  mobileMarginTop?: number;
  mobilePadding?: number;
  centerMobile?: boolean;
  regular?: boolean;
  blankBefore?: number[];
  blankAfter?: boolean;
}

export interface Service {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  relatedSlugs: string[];
  relatedBrandImage: boolean;
  heroImage: string;
  heroAlt: string;
  cardDescription: string;
  icon: string;
  blocks: ServiceBlock[];
  contentGroups: ServiceContentGroup[];
}

export const services: Service[] = [
  {
    "slug": "project-management",
    "title": "Project management",
    "seoTitle": "Project Management Services | Broad Branding Malta",
    "description": "Broad Branding delivers expert project management in Malta. We ensure every project meets deadlines, budgets, and goals.",
    "relatedSlugs": [
      "marketing",
      "sustainability",
      "business-strategy",
      "cloud",
      "technology-innovation"
    ],
    "relatedBrandImage": true,
    "heroImage": "/assets/project-management-1024x563.webp",
    "heroAlt": "project management",
    "cardDescription": "The success of project work is inconceivable without impeccable management.",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 350 350\" xml:space=\"preserve\"><path d=\"M238.6 153.4h-10.8v-34.8c0-6.6-2.6-12.9-7.3-17.6s-11-7.3-17.6-7.3h-55.8c-6.7 0-12.9 2.6-17.6 7.3s-7.3 11-7.3 17.6v34.8h-10.8v-34.8c0-9.5 3.7-18.5 10.5-25.2 6.7-6.7 15.7-10.5 25.2-10.5h55.8c9.5 0 18.4 3.7 25.2 10.4 6.7 6.7 10.5 15.7 10.5 25.2z\"></path><path d=\"M141.7 120.9h10.8v32.5h-10.8zm55.8 0h10.8v32.5h-10.8zm-22.5-45c-19.7 0-35.7-16-35.7-35.7s16-35.7 35.7-35.7 35.7 16 35.7 35.7-16 35.7-35.7 35.7m0-60.6c-13.7 0-24.9 11.2-24.9 24.9s11.2 24.9 24.9 24.9 24.9-11.2 24.9-24.9-11.2-24.9-24.9-24.9m123.1 210.8h-10.8c0-6.2-2.4-12.1-6.8-16.4-4.4-4.4-10.2-6.8-16.4-6.8H85.9c-6.2 0-12 2.4-16.4 6.8s-6.8 10.2-6.8 16.4H51.9c0-9.1 3.5-17.6 10-24 6.4-6.4 14.9-10 24-10h178.2c9.1 0 17.6 3.5 24 10 6.4 6.3 10 14.8 10 24\"></path><path d=\"M169.6 167.4h10.8V226h-10.8zm123.1 142c-10.2 0-18.6-8.3-18.6-18.5s8.3-18.6 18.6-18.6c10.2 0 18.6 8.3 18.6 18.6 0 10.2-8.4 18.5-18.6 18.5m0-26.3c-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8-3.5-7.8-7.8-7.8\"></path><path d=\"m336 318.7-9-5.8c10.3-16 8-37.4-5.5-50.8-15.9-15.9-41.7-15.9-57.6 0-13.5 13.5-15.8 34.9-5.5 50.8l-9 5.8c-13.1-20.2-10.2-47.2 6.9-64.3 20.1-20.1 52.7-20.1 72.8 0 17 17.1 19.9 44.1 6.9 64.3\"></path><path d=\"M292.7 342.3c-9.2 0-18.2-2.4-26.1-7.1l-3.1-1.8.5-3.6c.7-4.5 2.7-8.6 6-11.8 4-4 9.3-6.2 14.9-6.2h15.7c5.6 0 10.9 2.2 14.9 6.2 3.2 3.2 5.3 7.3 6 11.8l.5 3.6-3.1 1.8c-8 4.7-17 7.1-26.2 7.1m-16.9-14.4c10.5 4.8 23.2 4.8 33.7 0-.5-.8-1-1.6-1.8-2.3-1.9-1.9-4.5-3-7.3-3h-15.7c-2.7 0-5.3 1.1-7.3 3-.5.7-1.1 1.5-1.6 2.3M175 309.4c-10.2 0-18.6-8.3-18.6-18.5s8.3-18.6 18.6-18.6c10.2 0 18.6 8.3 18.6 18.6 0 10.2-8.4 18.5-18.6 18.5m0-26.3c-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8-3.5-7.8-7.8-7.8\"></path><path d=\"m218.3 318.7-9-5.8c10.3-16 8-37.4-5.5-50.8-15.9-15.9-41.7-15.9-57.6 0-13.5 13.5-15.8 34.9-5.5 50.8l-9 5.8c-13.1-20.2-10.2-47.2 6.9-64.3 20.1-20.1 52.7-20.1 72.8 0 17 17.1 19.9 44.1 6.9 64.3\"></path><path d=\"M175 342.3c-9.2 0-18.2-2.4-26.1-7.1l-3.1-1.8.5-3.6c.7-4.5 2.7-8.6 6-11.8 4-4 9.3-6.2 14.9-6.2h15.7c5.6 0 10.9 2.2 14.9 6.2 3.2 3.2 5.3 7.3 6 11.8l.5 3.6-3.1 1.8c-8 4.7-17 7.1-26.2 7.1m-16.9-14.4c10.5 4.8 23.2 4.8 33.7 0-.5-.8-1.1-1.6-1.8-2.3-1.9-1.9-4.5-3-7.3-3H167c-2.7 0-5.3 1.1-7.3 3-.5.7-1.1 1.5-1.6 2.3M57.3 309.4c-10.2 0-18.6-8.3-18.6-18.5s8.3-18.6 18.6-18.6c10.2 0 18.6 8.3 18.6 18.6-.1 10.2-8.4 18.5-18.6 18.5m0-26.3c-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8-3.5-7.8-7.8-7.8\"></path><path d=\"m100.6 318.7-9-5.8c10.3-16 8-37.4-5.5-50.8-15.9-15.9-41.7-15.9-57.6 0-13.5 13.5-15.8 34.8-5.5 50.8l-9 5.8c-13-20.2-10.2-47.2 6.9-64.2 20.1-20.1 52.7-20.1 72.8 0 17 17 19.9 44 6.9 64.2\"></path><path d=\"M57.3 342.3c-9.2 0-18.2-2.4-26.1-7.1l-3.1-1.8.5-3.6c.7-4.5 2.7-8.6 6-11.8 4-4 9.3-6.2 14.9-6.2h15.7c5.6 0 10.9 2.2 14.9 6.2 3.2 3.2 5.3 7.3 6 11.8l.5 3.6-3.1 1.8c-8 4.7-17 7.1-26.2 7.1m-16.9-14.4c10.5 4.8 23.2 4.8 33.7 0-.5-.8-1.1-1.6-1.8-2.3-1.9-1.9-4.5-3-7.3-3H49.5c-2.7 0-5.3 1.1-7.3 3-.7.7-1.3 1.5-1.8 2.3\"></path></svg>",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The success of project work is inconceivable without impeccable management. We specialize in the complete or partial planning and coordination of projects with requirements and constraints, from conceptualization to implementation and completion of the project on time and on budget, as originally defined."
      },
      {
        "type": "paragraph",
        "text": "Optimization and resource allocation, as well as the integration of baseline data, play a significant role in achieving the objectives. The time frame of the project plan and the predetermined workforce ensure that the objectives are met on time."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "You need to be sure of what you are doing, how can you do this?",
        "presentation": "subheading"
      },
      {
        "type": "paragraph",
        "text": "Our specialists determine the overall project budget, specific deadlines, and accurate reporting. We use dashboards, project planning, resource planning, teamwork, time management, issue tracking, and project reporting. Any force majeure situations that arise are handled by a dedicated team, who provide the best solutions with predictable consequences."
      },
      {
        "type": "paragraph",
        "text": "The professional approach of our specialists, the unique concept and the creative solutions proposed for your project will help you get the best possible results."
      },
      {
        "type": "paragraph",
        "text": "The professional approach, the unique concept, and the creative solutions of our specialists for your project will help you get the best possible results!",
        "callout": true,
        "presentation": "quote"
      }
    ],
    "contentGroups": [
      {
        "blocks": [
          0,
          1
        ],
        "marginTop": 30,
        "blankBefore": [
          1
        ]
      },
      {
        "blocks": [
          2
        ]
      },
      {
        "blocks": [
          3,
          4
        ],
        "regular": true,
        "blankBefore": [
          4
        ]
      },
      {
        "blocks": [
          5
        ],
        "mobilePadding": 20
      }
    ]
  },
  {
    "slug": "marketing",
    "title": "Marketing",
    "seoTitle": "Marketing Services | Digital Strategy & Branding by Broad Branding",
    "description": "Discover Broad Branding’s marketing services in Malta. From strategy and content to campaigns and brand growth.",
    "relatedSlugs": [
      "project-management",
      "marketing",
      "sustainability",
      "cloud",
      "technology-innovation"
    ],
    "relatedBrandImage": true,
    "heroImage": "/assets/marketing-3-1024x560.webp",
    "heroAlt": "marketing",
    "cardDescription": "We study the relevance of the product on the market, increase the set goals to the limit.",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 350 350\" xml:space=\"preserve\"><path d=\"M265.9 142.4c6.8-4.3 11.6-10.8 13.7-18.5 2.2-8.2 1.1-16.7-3.2-24-8.5-14.7-27.2-20-42.1-12.2L206 38.6c-3.8-6.5-9.8-11.2-17.1-13.1-7.3-2-14.9-1-21.4 2.8s-11.2 9.8-13.1 17.1c-1.5 5.5-1.3 11.2.5 16.4-13.5 34-42 68.6-80.7 98.1-.6-.4-1.3-.7-2-.9-1.7-.5-3.5-.2-5.1.7l-36.2 20.9c-12.2 7-20.9 18.4-24.6 32.1s-1.8 27.9 5.2 40.1c9.8 16.9 27.6 26.4 45.9 26.4 9 0 18-2.3 26.3-7.1l2.1-1.2 39.9 52.1c2.8 3.6 6.6 5.7 11.1 6.1.5 0 1 .1 1.5.1 3.9 0 7.5-1.4 10.5-4.1l11-10c6.1-5.6 7-14.7 2-21.3l-37.5-49.3c44.6-18.4 88.4-25.7 124.3-20.4 5.4 6.2 13.3 9.6 21.3 9.6 4.8 0 9.6-1.2 14-3.8 13.5-7.8 18.1-25 10.3-38.5zm-1-35.9c2.4 4.2 3.1 9.2 1.8 13.9-1.2 4.3-3.8 8-7.5 10.4L241 99.3c8.5-4.2 19-1.1 23.9 7.2M57.4 265.9c-13.7 0-27-7.1-34.3-19.8-5.3-9.1-6.6-19.7-3.9-30 2.7-10.2 9.3-18.8 18.4-24L68 174.5l39.5 68.5-30.4 17.6c-6.2 3.6-13 5.3-19.7 5.3m93.6 39.4-11 10c-.6.5-1.1.7-1.9.6s-1.3-.3-1.7-1l-38.9-50.7 17.4-10.1 36.4 47.8c.8 1.1.6 2.5-.3 3.4m-33.8-72.2-35.8-62c37.3-28.3 65.7-61.3 81.5-94.4l76.8 133.1c-36.5-3-79.4 5.2-122.5 23.3m160.1-14.6c-7.1 4.1-16.2 1.7-20.3-5.4l-88.3-153c-4.1-7.1-1.7-16.2 5.4-20.3 2.3-1.3 4.8-2 7.4-2 1.3 0 2.6.2 3.9.5 3.9 1 7.1 3.5 9 6.9l88.3 153c4.1 7.1 1.7 16.2-5.4 20.3m7.2-123.3c-1.8-3.2-.7-7.3 2.4-9.1l26.7-15.4c3.2-1.8 7.3-.7 9.1 2.4 1.8 3.2.7 7.3-2.4 9.1l-26.7 15.4c-1 .6-2.2.9-3.3.9-2.3 0-4.5-1.2-5.8-3.3m-30.8-42.9L270 24.1c1.8-3.2 5.9-4.3 9.1-2.4 3.2 1.8 4.3 5.9 2.4 9.1L265.2 59c-1.2 2.1-3.5 3.3-5.8 3.3-1.1 0-2.3-.3-3.3-.9-3.1-1.9-4.2-5.9-2.4-9.1m91.8 84.4c0 3.7-3 6.7-6.7 6.7h-32.6a6.7 6.7 0 0 1 0-13.4h32.6c3.7 0 6.7 3 6.7 6.7\"></path></svg>",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Global changes in people’s daily lives have made huge changes in the marketing industry. If yesterday we were still amazed that a smartphone solves almost any task given to the user with certain skills, today we are moving into virtual reality. And that is something we only saw in the movies once: “Robots are cleaning your apartments, and refrigerators know how to order food on their own”."
      },
      {
        "type": "paragraph",
        "text": "Consumer expectations are growing, and the number of modern promotion channels that require constant data analysis to work effectively is increasing. Requirements of clients and businesses are increasing and changing and with them the adaptation of marketers. There is more and more work to be done."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Starting today, always make the right decisions, and use only the most effective.",
        "presentation": "subheading"
      },
      {
        "type": "image",
        "src": "/assets/marketing-sub-1-1024x257.webp",
        "alt": "marketing-sub"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Brand, uniqueness, and Marketing Strategy",
        "presentation": "section-heading"
      },
      {
        "type": "paragraph",
        "text": "At BroadBranding, we’re committed to finding the most effective way to market your product. We study the relevance of your product on the market, increase its set goals to the limit, and fully cover all promotion channels."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "What do we do with you?",
        "presentation": "subheading"
      },
      {
        "type": "paragraph",
        "text": "Nobody is surprised by the word “creativity” today. In line with your goals, and given the current factors and our customer experience, we develop a unique idea that makes you stand out in the market. The brand becomes unique, recognizable, memorable, and relevant in the future."
      },
      {
        "type": "image",
        "src": "/assets/marketing-sub-2-1024x257.webp",
        "alt": "marketing-sub"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Content marketing and Advertising campaigns",
        "presentation": "section-heading"
      },
      {
        "type": "paragraph",
        "text": "Modern content using advanced technology. Requirements for the created content are growing. Unfortunately, today, they pay more attention to the visual quality than the ideas of the realized content. The out-of-the-box approach in most cases guarantees better results in organic coverage. In simple words, the more successful idea of effective product promotion, the cheaper and better the result."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "How are we creating?",
        "presentation": "subheading"
      },
      {
        "type": "paragraph",
        "text": "Using the latest technology in producing any kind of content, our main goals are to save money in production and promotion and show the best result. We provide management of the process from idea development to the moment of publication. You should be talked about and remembered in the future."
      },
      {
        "type": "image",
        "src": "/assets/marketing-sub-3-1024x257.webp",
        "alt": "marketing-sub"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Marketing Performance",
        "presentation": "section-heading"
      },
      {
        "type": "paragraph",
        "text": "The brand must grow. With quality content for promotion, it is necessary to give the right impetus to advertising campaigns. Having defined your target audience, it is necessary to understand how to properly address the selected audience."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "How is this implemented?",
        "presentation": "subheading"
      },
      {
        "type": "paragraph",
        "text": "When you’re looking for the right teams for a project, you want to be sure that your marketing campaign is set up and managed effectively. We optimize working hours so you can deliver advertising campaigns at the right time to the selected target audience."
      },
      {
        "type": "paragraph",
        "text": "If you haven’t sold your product or service today. This is called a loss. It’s time to make a change.",
        "callout": true,
        "presentation": "quote"
      }
    ],
    "contentGroups": [
      {
        "blocks": [
          0,
          1
        ],
        "mobilePadding": 20,
        "marginTop": 20
      },
      {
        "blocks": [
          2
        ],
        "mobilePadding": 20,
        "centerMobile": true
      },
      {
        "blocks": [
          3
        ]
      },
      {
        "blocks": [
          4
        ],
        "mobilePadding": 20
      },
      {
        "blocks": [
          5
        ],
        "mobilePadding": 20,
        "marginTop": 20
      },
      {
        "blocks": [
          6
        ],
        "mobilePadding": 20,
        "centerMobile": true
      },
      {
        "blocks": [
          7
        ],
        "mobilePadding": 20,
        "marginTop": 20,
        "mobileMarginTop": 0
      },
      {
        "blocks": [
          8
        ]
      },
      {
        "blocks": [
          9
        ],
        "mobilePadding": 20
      },
      {
        "blocks": [
          10
        ],
        "mobilePadding": 20,
        "marginTop": 20
      },
      {
        "blocks": [
          11
        ],
        "mobilePadding": 20,
        "centerMobile": true
      },
      {
        "blocks": [
          12
        ],
        "mobilePadding": 20,
        "marginTop": 20,
        "mobileMarginTop": 0
      },
      {
        "blocks": [
          13
        ]
      },
      {
        "blocks": [
          14
        ],
        "mobilePadding": 20
      },
      {
        "blocks": [
          15
        ],
        "mobilePadding": 20,
        "marginTop": 20
      },
      {
        "blocks": [
          16
        ],
        "mobilePadding": 20,
        "centerMobile": true
      },
      {
        "blocks": [
          17
        ],
        "mobilePadding": 20,
        "marginTop": 20,
        "mobileMarginTop": 0
      },
      {
        "blocks": [
          18
        ],
        "mobilePadding": 20
      }
    ]
  },
  {
    "slug": "sustainability",
    "title": "Sustainability",
    "seoTitle": "Sustainability Consulting | Broad Branding Malta",
    "description": "Broad Branding helps businesses grow sustainably through strategic roadmaps, innovation, and technology that drive long-term success.",
    "relatedSlugs": [
      "project-management",
      "marketing",
      "business-strategy",
      "cloud",
      "technology-innovation"
    ],
    "relatedBrandImage": true,
    "heroImage": "/assets/sustainability-1024x561.webp",
    "heroAlt": "sustainability",
    "cardDescription": "We integrate into all aspects, from the chosen business direction to the products clients admire.",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 350 350\" xml:space=\"preserve\"><path d=\"M57.3 318.1h25.4c7.6 0 14.9-3 20.2-8.4s8.4-12.6 8.4-20.2V155.9c0-7.6-3-14.9-8.4-20.2-5.4-5.4-12.6-8.4-20.2-8.4H57.3c-7.6 0-14.9 3-20.2 8.4-5.4 5.4-8.4 12.6-8.4 20.2v133.6c0 7.6 3 14.9 8.4 20.2 5.3 5.4 12.6 8.4 20.2 8.4m-9.5-162.2c0-2.5 1-5 2.8-6.7 1.8-1.8 4.2-2.8 6.7-2.8h25.4c2.5 0 5 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7v133.6c0 2.5-1 5-2.8 6.7-1.8 1.8-4.2 2.8-6.7 2.8H57.3c-2.5 0-5-1-6.7-2.8-1.8-1.8-2.8-4.2-2.8-6.7zm190.8-95.4v229c0 7.6 3 14.9 8.4 20.2s12.6 8.4 20.2 8.4h25.4c7.6 0 14.9-3 20.2-8.4 5.4-5.4 8.4-12.6 8.4-20.2v-229c0-7.6-3-14.9-8.4-20.2-5.4-5.4-12.6-8.4-20.2-8.4h-25.4c-7.6 0-14.9 3-20.2 8.4-5.4 5.3-8.4 12.6-8.4 20.2m63.6 0v229c0 2.5-1 5-2.8 6.7-1.8 1.8-4.2 2.8-6.7 2.8h-25.4c-2.5 0-5-1-6.7-2.8-1.8-1.8-2.8-4.2-2.8-6.7v-229c0-2.5 1-5 2.8-6.7 1.8-1.8 4.2-2.8 6.7-2.8h25.4c2.5 0 5 1 6.7 2.8 1.8 1.7 2.8 4.2 2.8 6.7M162.3 318.1h25.4c7.6 0 14.9-3 20.2-8.4 5.4-5.4 8.4-12.6 8.4-20.2v-70c0-7.6-3-14.9-8.4-20.2-5.4-5.4-12.6-8.4-20.2-8.4h-25.4c-7.6 0-14.9 3-20.2 8.4-5.4 5.4-8.4 12.6-8.4 20.2v70c0 7.6 3 14.9 8.4 20.2 5.3 5.4 12.6 8.4 20.2 8.4m-9.6-98.6c0-2.5 1-5 2.8-6.7 1.8-1.8 4.2-2.8 6.7-2.8h25.4c2.5 0 5 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7v70c0 2.5-1 5-2.8 6.7-1.8 1.8-4.2 2.8-6.7 2.8h-25.4c-2.5 0-5-1-6.7-2.8-1.8-1.8-2.8-4.2-2.8-6.7z\"></path></svg>",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The road to sustainable business growth is not a straight one. We believe that sustainable development has become the norm and expect companies to give the same importance to sustainability. Our roadmaps and strategies help companies implement appropriate measures, which ensure long-term success."
      },
      {
        "type": "paragraph",
        "text": "The experience of each specialist in our company, and the continuous work of our partners on developing various projects, help us properly determine the value of the business and its impact. Today’s digital technologies open all doors to sustainability for our clients."
      },
      {
        "type": "paragraph",
        "text": "Working with our clients, we integrate into all aspects, from the chosen business direction to the products they admire. In-depth analysis and the use of modern technology allow us to define and align our behaviors for sustainable growth towards their sustainable brand development."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "That question is: Are you going to be Sustainable? We know that!",
        "presentation": "subheading"
      }
    ],
    "contentGroups": [
      {
        "blocks": [
          0,
          1,
          2
        ],
        "mobilePadding": 20,
        "marginTop": 20,
        "blankBefore": [
          1,
          2
        ]
      },
      {
        "blocks": [
          3
        ],
        "mobilePadding": 20,
        "centerMobile": true
      }
    ]
  },
  {
    "slug": "business-strategy",
    "title": "Business strategy",
    "seoTitle": "Business Strategy Consulting | Broad Branding Malta",
    "description": "Broad Branding develops tailored business strategies that drive growth, adaptability, and success through expert analysis and planning.",
    "relatedSlugs": [
      "project-management",
      "marketing",
      "sustainability",
      "cloud",
      "technology-innovation"
    ],
    "relatedBrandImage": true,
    "heroImage": "/assets/busines-strategy-1024x561.webp",
    "heroAlt": "busines-strategy",
    "cardDescription": "Years of experience in full-service delivery and creates detailed business strategies.",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 350 350\" xml:space=\"preserve\"><path d=\"m329.4 277.8-5.2-15.5c-.5-1.5-1.6-2.8-3.1-3.4 2.2-3.6 3.4-7.8 3.4-12v-5.8c0-1.2-.4-2.5-1.2-3.4-10.4-14-16.1-30.9-16.1-48.3v-12.2c4.9-1.3 9.3-4.2 12.4-8.2s4.8-9 4.8-14.1v-51.8c0-3.2-2.6-5.8-5.8-5.8h-23c-1.9 0-3.7 1-4.8 2.6l-6.7 10.1-6.7-10.1c-1.1-1.6-2.9-2.6-4.8-2.6h-23c-3.2 0-5.8 2.6-5.8 5.8v51.8c0 5.1 1.7 10.1 4.8 14.1s7.5 6.9 12.4 8.2v12.2c0 17.4-5.7 34.4-16.1 48.3-.7 1-1.2 2.2-1.2 3.4v5.8c0 4.2 1.2 8.4 3.4 12-1.5.7-2.6 1.9-3.1 3.4l-5.2 15.5c-.2.2-.4.3-.7.5-1.8-2-3.8-3.9-6-5.6v-14.3c0-3.2-2.6-5.8-5.8-5.8h-9c-9-9.8-14-22.6-14-35.9v-50.4h5.8c3.2 0 5.8-2.6 5.8-5.8v-5.8c0-7.7-3.9-15-10.4-19.2l15.8-42c.7-1.8.4-3.7-.7-5.3s-2.8-2.5-4.7-2.5h-8.6L190.8 65c-1.1-1.4-2.8-2.3-4.6-2.3h-5.8V51.3h11.5V39.8h-11.5V28.3h-11.5v11.5h-11.5v11.5h11.5v11.5h-5.8c-1.8 0-3.5.9-4.6 2.3L143 85.8h-8.6c-1.9 0-3.7.9-4.7 2.5-1.1 1.6-1.3 3.5-.7 5.3l15.8 42c-6.5 4.2-10.4 11.5-10.4 19.2v5.8c0 3.2 2.6 5.8 5.8 5.8h5.8v50.4c0 13.3-5 26.1-14 35.9h-9c-3.2 0-5.8 2.6-5.8 5.8v14.3c-2.2 1.7-4.2 3.5-6 5.6-.2-.2-.4-.3-.7-.5l-4.9-14.6V149.1c0-12.2-4.9-23.9-13.5-32.5s-20.3-13.5-32.5-13.5H14c-3.2 0-5.8 2.6-5.8 5.8v11.5c0 1.5.6 3 1.7 4.1L25.5 140v49.4c0 3.2 2.6 5.8 5.8 5.8h11.5c1.3 0 2.6-.4 3.6-1.3l19.4-15.5v8.7l-14.2 14.2a88.54 88.54 0 0 0-26.1 62l-4.9 14.6c-11.4 8.4-18.2 21.7-18.2 35.9v2.3c0 3.2 2.6 5.8 5.8 5.8h333.6c3.2 0 5.8-2.6 5.8-5.8v-2.3c0-14.3-6.8-27.6-18.2-36m-73.9-30.9H313c0 3.1-1.2 6-3.4 8.1-2.2 2.2-5.1 3.4-8.1 3.4H267c-3.1 0-6-1.2-8.1-3.4-2.2-2.1-3.4-5.1-3.4-8.1m14.2-138 9.8 14.7c1.1 1.6 2.9 2.6 4.8 2.6s3.7-1 4.8-2.6l9.8-14.7H313v34.5h-57.5v-34.5zm-14.2 46H313c0 3.1-1.2 6-3.4 8.1-2.2 2.2-5.1 3.4-8.1 3.4H267c-3.1 0-6-1.2-8.1-3.4-2.2-2.2-3.4-5.1-3.4-8.1m17.3 34.5v-11.5h23v11.5c0 16.2 4.3 32 12.3 46h-47.7c8.1-14 12.3-29.9 12.4-46m-126.6-34.5c0-3.1 1.2-6 3.4-8.1 2.2-2.2 5.1-3.4 8.1-3.4h34.5c3.1 0 6 1.2 8.1 3.4 2.2 2.2 3.4 5.1 3.4 8.1zm20.2-80.6h17.3l8.6 11.5h-34.5zM156 131.9l-13-34.5h64l-13 34.5zm1.7 84.8v-50.4h34.5v50.4c0 12.8 3.7 25.3 10.9 35.9h-56.2c7.1-10.6 10.9-23.1 10.8-35.9m-117-33.1H37v-46c0-1.5-.6-3-1.7-4.1L19.7 118v-3.4H60c9.1 0 17.9 3.6 24.4 10.1s10.1 15.2 10.1 24.4v51.3l-17.3-13.8v-31.7c0-6.1-2.4-11.9-6.7-16.3-4.3-4.3-10.2-6.7-16.3-6.7v11.5c3.1 0 6 1.2 8.1 3.4 2.2 2.2 3.4 5.1 3.4 8.1v8.7zm19 25.7 12.2-12.2 22.6 18.1v43.2H37.2c1.3-18.5 9.3-36 22.5-49.1m-31.1 76.9c1.1-.7 1.9-1.8 2.3-3l4.4-13.3H96l4.4 13.3c.4 1.2 1.2 2.3 2.3 3 .8.5 1.5 1.1 2.2 1.6-3.1 6.2-4.8 13.1-4.8 20.1v2.3h-86c1.1-9.8 6.4-18.6 14.5-24m83.1 24v-2.3c0-11 5.5-21.3 14.7-27.5 1.6-1.1 2.6-2.9 2.6-4.8v-11.5h92v11.5c0 1.9 1 3.7 2.6 4.8 9.2 6.1 14.7 16.4 14.7 27.5v2.3zm138.1 0v-2.3c0-7-1.6-13.8-4.8-20.1.7-.6 1.5-1.1 2.2-1.6 1.1-.7 1.9-1.8 2.3-3l4.4-13.3h60.7l4.4 13.3c.4 1.2 1.2 2.3 2.3 3 8.2 5.4 13.5 14.2 14.5 24z\"></path></svg>",
    "blocks": [
      {
        "type": "paragraph",
        "text": "You cannot imagine development without the strategy. It is like a car without fuel-you can push it, but you cannot use it for its intended purpose. Broad Branding has years of experience in full-service delivery and creates detailed business strategies for its clients."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "What business strategy should we choose?",
        "presentation": "subheading"
      },
      {
        "type": "paragraph",
        "text": "In recent years, recent events have forced companies to react quickly and adapt to complex situations. The strategy must be adaptable to the modern world."
      },
      {
        "type": "paragraph",
        "text": "When creating business strategies, the company relies on many years of its own experience, as well as consultations and experience of large companies. We define the value of your mission, do a SWOT analysis, examine performance and data, set goals and objectives, and work out actionable steps."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "The success of your company is our reputation.",
        "presentation": "quote"
      }
    ],
    "contentGroups": [
      {
        "blocks": [
          0
        ],
        "mobilePadding": 20,
        "marginTop": 20
      },
      {
        "blocks": [
          1
        ],
        "mobilePadding": 20,
        "centerMobile": true
      },
      {
        "blocks": [
          2,
          3
        ],
        "mobilePadding": 20,
        "marginTop": 20,
        "mobileMarginTop": 0,
        "blankBefore": [
          3
        ],
        "blankAfter": true
      },
      {
        "blocks": [
          4
        ],
        "mobilePadding": 20,
        "centerMobile": true
      }
    ]
  },
  {
    "slug": "technology-innovation",
    "title": "Technology innovation",
    "seoTitle": "Technology Innovation Services | Broad Branding Malta",
    "description": "Broad Branding helps businesses stay ahead through technology innovation. Improving efficiency, relevance, and customer satisfaction.",
    "relatedSlugs": [
      "project-management",
      "marketing",
      "sustainability",
      "business-strategy",
      "cloud"
    ],
    "relatedBrandImage": true,
    "heroImage": "/assets/technology-innovation-1024x561.webp",
    "heroAlt": "technology innovation",
    "cardDescription": "We ensure our clients implement the newest ways to meet their customer's expectations.",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 350 350\" xml:space=\"preserve\"><path d=\"M234.3 69c-17-16.2-39.9-24.7-63.4-23.3-21.1 1.1-41 9.9-55.9 24.8s-23.9 34.8-25 55.8c-1.2 21.1 5.5 41.8 18.7 58.3 13.1 16.8 20.1 37.5 19.8 58.8 0 2.2.9 4.3 2.4 5.8s3.6 2.4 5.8 2.4H214c2.2 0 4.3-.9 5.8-2.4s2.4-3.6 2.4-5.8c.3-22 7.8-43.3 21.4-60.6 12.7-16.8 18.8-37.7 17.1-58.7S249.6 83.5 234.3 69m-3.7 103.7c-14 18-22.5 39.8-24.4 62.5h-22.6v-46l23.4-37.4c2.2-3.8 1-8.7-2.7-11.1-3.8-2.4-8.7-1.3-11.2 2.4l-17.7 28.3-17.7-28.3c-2.5-3.7-7.4-4.8-11.2-2.4s-5 7.3-2.7 11.1l23.4 37.4v46h-22.6c-1.4-22.1-9.4-43.3-23.2-60.8-14-17.5-18.7-40.7-12.5-62.3s22.4-38.8 43.6-46.2 44.6-4.1 62.9 8.9 29.1 34 29.1 56.4c0 15-4.9 29.6-13.9 41.5m-16.9 93H137c-4.5 0-8.2 3.7-8.2 8.2s3.7 8.2 8.2 8.2h68.5v21.4c0 9.8-4.8 18.9-12.8 24.6-8 5.6-18.2 7.1-27.4 3.8s-16.3-10.8-19-20.2h35.4c4.5 0 8.2-3.7 8.2-8.2s-3.7-8.2-8.2-8.2H137c-4.5 0-8.2 3.7-8.2 8.2.5 16.3 9.5 31.2 23.7 39.2s31.6 8 45.8 0 23.2-22.9 23.7-39.2v-29.6c-.1-4.5-3.7-8.2-8.3-8.2m84.4-141.3h-11.2c-4.5 0-8.2 3.7-8.2 8.2s3.7 8.2 8.2 8.2h11.2c4.5 0 8.2-3.7 8.2-8.2s-3.7-8.2-8.2-8.2m-235 0H51.9c-4.5 0-8.2 3.7-8.2 8.2s3.7 8.2 8.2 8.2h11.2c4.5 0 8.2-3.7 8.2-8.2s-3.7-8.2-8.2-8.2M257.3 39l-6 6c-3.2 3.2-3.2 8.4 0 11.6s8.4 3.2 11.6 0l6-6.1c3.2-3.2 3.2-8.4 0-11.6-3.1-3.2-8.3-3.2-11.6.1M87.4 209.1l-5.6 5.6c-3.2 3.2-3.2 8.4 0 11.6s8.4 3.2 11.6 0l5.6-5.6c3.2-3.2 3.2-8.4 0-11.6s-8.4-3.2-11.6 0m175.5-.5c-3.2-3.2-8.4-3.2-11.6 0s-3.2 8.4 0 11.6l6 6c3.2 3 8.2 2.9 11.3-.2s3.3-8.1.3-11.3zM87.4 56.2c3.2 3.2 8.4 3.2 11.6 0s3.2-8.4 0-11.6L93.4 39c-1.5-1.7-3.6-2.8-5.9-2.9s-4.5.8-6.1 2.4-2.5 3.8-2.4 6.1 1.1 4.4 2.8 5.9zM175 28.9c2.2 0 4.3-.9 5.8-2.4s2.4-3.6 2.4-5.8V9.5c0-4.5-3.7-8.2-8.2-8.2s-8.2 3.7-8.2 8.2v11.2c0 2.2.9 4.3 2.4 5.8 1.5 1.6 3.6 2.4 5.8 2.4\"></path></svg>",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Our technology innovation services ensure our clients implement the newest ways to meet their customer’s expectations. A wide variety of services are provided, from the newest marketing strategy to the look of your website, which will assist our clients to stay relevant."
      },
      {
        "type": "paragraph",
        "text": "Technology innovation is a new must for a business to stay relevant. As the market gets more competitive, it has become critical for a business to adopt the latest technology and methods to fulfill the customers’ expectations."
      },
      {
        "type": "paragraph",
        "text": "Influencing business operations is essential if you want to stay competitive and ahead of the curve. With constant innovation, a business can continuously improve efficiency and gain market competitiveness in a crowded market."
      }
    ],
    "contentGroups": [
      {
        "blocks": [
          0,
          1,
          2
        ],
        "mobilePadding": 20,
        "marginTop": 20,
        "blankBefore": [
          1,
          2
        ]
      }
    ]
  },
  {
    "slug": "cloud",
    "title": "Cloud",
    "seoTitle": "Cloud Services & Solutions | Broad Branding Malta",
    "description": "Broad Branding provides tailored cloud solutions to boost collaboration, efficiency, and ROI for businesses in Malta and Worldwide.",
    "relatedSlugs": [
      "project-management",
      "marketing",
      "sustainability",
      "business-strategy",
      "technology-innovation"
    ],
    "relatedBrandImage": true,
    "heroImage": "/assets/cloud-1024x561.webp",
    "heroAlt": "cloud",
    "cardDescription": "A full range of cloud services allows you to accelerate the process of performing tasks.",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 350 350\" xml:space=\"preserve\"><path d=\"M340.5 160.4c0-34.5-22.3-65.2-54-75.5.2-1.5.3-3 .3-4.4 0-23.8-19.3-43.1-43-43.1-7.1 0-14 1.8-20.3 5.3C207.4 21.8 183 9.6 156.8 9.6 113 9.5 76.9 43.1 72.3 87c-36.2 7-62.8 39.4-62.8 77.8 0 34.9 22.9 65.9 55.2 75.9v41.5l-24 20c-3.1-1.8-6.6-3-10.5-3-11.4 0-20.7 9.3-20.7 20.7s9.3 20.7 20.7 20.7 20.7-9.3 20.7-20.7c0-2.5-.5-4.9-1.4-7.2l26.5-22c1.6-1.3 2.5-3.2 2.5-5.3v-41.8c2.7.3 5.5.4 8.3.4 11.6 0 22.8-2.7 33.1-7.7v41.1l-7.3 21.8c-11.2.2-20.3 9.4-20.3 20.6 0 11.4 9.3 20.7 20.7 20.7s20.7-9.3 20.7-20.7c0-6.6-3.2-12.4-8-16.2l7.7-23c.2-.7.4-1.4.4-2.2V155.2c0-3.8-3.1-6.9-6.9-6.9s-6.9 3.1-6.9 6.9v65.1c-10 6.4-21.3 9.9-33.1 9.9-2.8 0-5.6-.2-8.3-.6v-63.1c0-3.8-3.1-6.9-6.9-6.9s-6.9 3.1-6.9 6.9v59.6c-24.4-9.4-41.4-33.9-41.4-61.3 0-33.3 24.2-61.2 56.2-64.9 3.4-.4 5.9-3.2 6.1-6.6 1.7-39.3 32.9-70 71.1-70 23.8 0 45.9 12.2 59.1 32.5 1 1.6 2.7 2.7 4.6 3s3.9-.2 5.4-1.4c3.7-2.9 9.9-6.3 17.9-6.3 16.1 0 29.2 13.1 29.2 29.3 0 2.4-.4 4.8-1.1 7.5-.5 1.8-.2 3.8.7 5.4 1 1.6 2.6 2.8 4.4 3.2 28.8 6.6 49.7 33.4 49.7 63.8 0 27.4-17 51.8-41.4 61.3V162c0-3.8-3.1-6.9-6.9-6.9s-6.9 3.1-6.9 6.9v63.1c-2.7.4-5.4.6-8.3.6-11.8 0-23.1-3.5-33.1-9.8v-65.1c0-3.8-3.1-6.9-6.9-6.9s-6.9 3.1-6.9 6.9v127.6c0 .7.1 1.5.4 2.2l7.7 23c-4.8 3.8-8 9.6-8 16.2 0 11.4 9.3 20.7 20.7 20.7s20.7-9.3 20.7-20.7c0-11.3-9.1-20.4-20.3-20.6l-7.3-21.8V232c10.3 5 21.5 7.7 33.1 7.7 2.8 0 5.5-.2 8.3-.4v46.2c0 2 .9 4 2.5 5.3l26.5 22c-.8 2.2-1.4 4.6-1.4 7.2 0 11.4 9.3 20.7 20.7 20.7s20.7-9.3 20.7-20.7-9.3-20.7-20.7-20.7c-3.8 0-7.4 1.1-10.5 3l-24-20v-45.9c32.2-10.1 55.1-41.1 55.1-76M30.2 326.7c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9m82.7 0c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9m124.2-13.8c3.8 0 6.9 3.1 6.9 6.9s-3.1 6.9-6.9 6.9-6.9-3.1-6.9-6.9 3.1-6.9 6.9-6.9m82.7 0c3.8 0 6.9 3.1 6.9 6.9s-3.1 6.9-6.9 6.9-6.9-3.1-6.9-6.9 3.1-6.9 6.9-6.9\"></path></svg>",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Software is improving every year. We moved from paper sheets to files that were easy to share, and today we use cloud services. A full range of cloud services allows you to accelerate the process of performing tasks and get maximum return on investment."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Which cloud is right for our business? – Question with several answers.",
        "presentation": "subheading"
      },
      {
        "type": "paragraph",
        "text": "Today, cloud services allow specialists from different parts of the world to collaborate on the same project at the same time. You can forget about sending a huge number of files and waiting for the person on the other line to figure them out, then add something and then send it back, while you need to seek out where the changes were made. Working with specialists on one project virtually brings them to one table, where each person can do his or her part."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Relying on our many years of experience and a number of completed projects in various industries, we evaluate your goals and offer specific cloud solutions for each group of tasks.",
        "presentation": "quote"
      }
    ],
    "contentGroups": [
      {
        "blocks": [
          0
        ],
        "mobilePadding": 20,
        "marginTop": 20
      },
      {
        "blocks": [
          1
        ],
        "mobilePadding": 20,
        "centerMobile": true
      },
      {
        "blocks": [
          2
        ],
        "mobilePadding": 20,
        "marginTop": 20,
        "mobileMarginTop": 0
      },
      {
        "blocks": [
          3
        ],
        "mobilePadding": 20,
        "centerMobile": true
      }
    ]
  }
];
