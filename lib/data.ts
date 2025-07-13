import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'patelpoojan2099@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Poojan, I am reaching out to you because...',

    oldPortfolio: '',
    resume: 'https://drive.google.com/file/d/1Ii9kEX9H1fY7xzIFGNAmPkEYwAn1gx2H/view?usp=sharing',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/poojanpatel' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/poojan-patel/',
    },
    // { name: 'facebook', url: 'https://www.facebook.com/okhan945' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/poojanpatel/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: './logo/js.png',
        },
        {
            name: 'Typescript',
            icon: './logo/ts.png',
        },
        {
            name: 'React',
            icon: './logo/react.png',
        },
        {
            name: 'Next.js',
            icon: './logo/next.png',
        },
        {
            name: 'HTML',
            icon: './logo/HTML5.png',
        },
        {
            name: 'Tailwind CSS',
            icon: './logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: './logo/gsap.png',
        },
        {
            name: 'CSS',
            icon: './logo/CSS3.svg',
        },
        {
            name: 'SASS',
            icon: './logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: './logo/bootstrap.svg',
        },
    ],
    Readers: [
        {
            name: 'NVDA',
            icon: './logo/NVDA_Logo.png',
        },
        {
            name: 'JAWS',
            icon: './logo/jaws.png',
        },
        // {
        //     name: 'Express.js',
        //     icon: './logo/express.png',
        // },
    ],
    // database: [
    //     {
    //         name: 'MySQL',
    //         icon: './logo/mysql.svg',
    //     },
    //     {
    //         name: 'PostgreSQL',
    //         icon: './logo/postgreSQL.png',
    //     },
    //     {
    //         name: 'MongoDB',
    //         icon: './logo/mongodb.svg',
    //     },
    //     {
    //         name: 'Prisma',
    //         icon: './logo/prisma.png',
    //     },
    // ],
    tools: [
        {
            name: 'axe DevTools',
            icon: './logo/axe_DevTools.png',
        },
        {
            name: 'Git',
            icon: './logo/git.png',
        },
        {
            name: 'WAVE',
            icon: './logo/WAVE.webp',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Malkit Sweets & Catering',
        slug: 'malkit-sweets',
        liveUrl: 'https://malkitsweetsandcatering.com/',
        year: 2024,
        description: `
      A vibrant and immersive restaurant and catering services platform developed for Malkit Sweets & Catering, a premier provider of traditional Indian cuisine in California. The site blends rich cultural storytelling with a modern web experience to highlight their culinary offerings, chef expertise, and event catering services. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🍛 Catering Services Showcase – Dedicated sections for Wedding, Party, and On-Demand catering with service highlights and visual storytelling</li>
        <li>👨‍🍳 Chef Profiles – Meet-the-chefs module spotlighting industry veterans like Mr. Malkit and team</li>
        <li>📺 Multimedia Integration – Engaging video embeds and image carousels to bring the kitchen to life</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>📍 Location & Contact Integration – Google Maps and quick-contact setup for local customers</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Integrated Swiper.js for dynamic visual carousels in service and chef sections</li>
        <li>Customized Payload CMS to enable effortless content updates across menus, staff, and videos</li>
        <li>Developed elegant, reusable UI components using shadcn and Tailwind CSS</li>
        <li>Optimized form submissions using React Hook Form for user inquiries and event bookings</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend – Designed Payload CMS architecture with collections for services, chefs, and media</li>
        <li>🎨 Frontend – Crafted responsive, culturally inspired UI with Tailwind and shadcn</li>
        <li>🔄 State Management – Managed CMS data flow and hydration using Next.js capabilities</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>📹 Media Embeds – Integrated promotional videos and carousels to enhance user engagement</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: './projects/images/MSC-1.png',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: ['./projects/images/MSC-1.png', './projects/images/MSC-2.png'],
    },
    {
        title: 'Apple Clone',
        slug: 'apple-clone',
        techStack: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Responsive Design',
            'Modern UI/UX',
        ],
        thumbnail: './projects/images/apple-clone.png',
        longThumbnail: './projects/images/apple-clone.png',
        images: ['./projects/images/apple-clone.png'],
        liveUrl: 'https://poojan-2099.github.io/Apple_clone/',
        year: 2024,
        description: `A pixel-perfect clone of Apple's official website showcasing modern web development skills and attention to detail. This project demonstrates the ability to recreate complex, high-quality user interfaces with precision and modern web technologies.<br/> <br/>Key Features:<br/>
        <ul>
            <li>🍎 <strong>Pixel-Perfect Design</strong> – Faithfully recreates Apple's signature minimalist design language and visual aesthetics</li>
            <li>📱 <strong>Fully Responsive</strong> – Optimized for all device sizes including desktop, tablet, and mobile</li>
            <li>🎨 <strong>Modern UI/UX</strong> – Implements Apple's sophisticated design patterns and user experience principles</li>
            <li>⚡ <strong>Performance Optimized</strong> – Fast loading times and smooth interactions</li>
            <li>🔧 <strong>Clean Code</strong> – Well-structured, maintainable code following best practices</li>
        </ul><br/>
        Technical Highlights:
        <ul>
            <li>Built with semantic HTML5 for accessibility and SEO</li>
            <li>Advanced CSS3 techniques including Flexbox and Grid for responsive layouts</li>
            <li>Vanilla JavaScript for interactive elements and smooth animations</li>
            <li>Mobile-first responsive design approach</li>
            <li>Optimized images and assets for fast loading</li>
        </ul>`,
        role: `Full-Stack Developer<br/>
        - ✅ <strong>Design Implementation</strong> – Meticulously recreated Apple's design system and visual elements<br/>
        - 🎨 <strong>Frontend Development</strong> – Built responsive layouts using modern CSS techniques<br/>
        - 🔧 <strong>JavaScript Functionality</strong> – Implemented interactive elements and smooth animations<br/>
        - 📱 <strong>Responsive Design</strong> – Ensured perfect display across all device sizes<br/>
        - 🚀 <strong>Performance Optimization</strong> – Optimized for fast loading and smooth user experience`,
    },
    {
        title: 'Real Estate Portfolio',
        slug: 'Sarbreal',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'React Hook Form',
            'Api Integration',
        ],
        thumbnail: './projects/images/SarbrealShort.png',
        longThumbnail: './projects/images/SarbrealLong.png',
        images: [
            './projects/images/SarbrealShort.png',
            './projects/images/Sarbreal1.png',
        ],
        liveUrl: 'https://sarbreal.com/',
        year: 2024,
        description: `A clean, modern real estate platform developed for Sarb Real Estate, a property services firm focused on delivering personalized buying, selling, and investment experiences. The site positions the brand as a trustworthy local expert with a sleek, intuitive interface and robust content management capabilities.,<br/> <br/>Key Features:<br/>
        <ul>
            <li>🏠 Property Listing System – Dynamically generated pages for featured properties with images and contact CTAs</li>
            <li>🧑‍💼 Agent Profiles – Highlighted real estate professionals with bios and contact links to build trust</li>
            <li>🎥 Home Page Carousel – Engaging visual slider to showcase premium listings and services</li>
            <li>🧭 Location-Based Navigation – Clean sectioning for exploring properties and services</li>
            <li>📱 Mobile Optimization – Fully responsive design for mobile-first browsing</li>
        </ul><br/>
        Technical Highlights:
            <ul>
                <li>Engineered property carousel using Swiper.js with smooth transitions and content overlays</li>
                <li>Customized Payload CMS to manage listings, agent bios, testimonials, and media assets</li>
                <li>Built fully modular UI components using shadcn and Tailwind CSS for brand consistency</li>
                <li>Leveraged React Hook Form for seamless lead capture through property inquiry forms</li>
            </ul>           
            
            `,
        role: `Led design and implementation of the full stack: <br/>
        - ✅ Backend – Created CMS architecture for property listings, agent profiles, and testimonials<br/>
        - 🎨 Frontend – Developed responsive layout with clean UX to guide users through available services<br/>
        - 🔄 Data Management – Set up CMS-to-frontend data pipelines for listings and agent content<br/>
        - 🖥️ CMS Customization – Designed user-friendly admin dashboards for real estate staff
`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Developer',
        company: 'Golden Five LLC',
        location: 'Simi Valley, CA',
        duration: 'Dec 2023 - Present',
        description: [
            'Developed and maintained responsive front-end components using HTML5, CSS3, and JavaScript, ensuring consistent performance across devices and platforms.',
            'Integrated front-end solutions with M365 and Azure AD for seamless authentication and user management, enhancing security and user experience.',
            'Manage Office 365 technology stack, including Exchange Online, security, compliance, Teams, and user licenses.',
            'Collaborated with cross-functional teams in an Agile environment, utilizing Git/GitHub for version control and timely deployments.',
            'Designed and deployed a custom Power Apps-based timesheet solution integrated with Dynamics 365, enabling employees to log hours, request approvals, and generate real-time reports. Implemented role-based access controls and automated workflows using Power Automate, reducing administrative overhead and improving data accuracy.',
            'Built a user management and self-service portal using Power Apps and Dynamics 365, allowing administrators to create and modify user accounts, assign security roles, and manage licenses. Leveraged Power Automate to streamline access requests and notifications, enhancing user onboarding efficiency and improving compliance with organizational policies.',
        ],
    },
    {
        title: 'Front-End Developer',
        company: 'CSUN',
        location: 'Northridge, CA',
        duration: 'Oct 2021 - May 2023',
        description: [
            'Developed a PowerShell automation script to install a customized version of Windows across all classroom systems at CSU-Northridge. Additionally, set up registry rules to enhance OS security, ensuring a more secure and efficient computing environment for students and faculty.',
            'Collaborate with cross-functional teams, including network administrators, system administrators, and security teams, to escalate and resolve complex technical issues involving IT services and technologies such as Azure DevOps, and endpoint security solutions.',
            'Incorporated RESTful APIs and integrated model-driven apps with front-end code, ensuring dynamic data updates and seamless user interactions.',
            'Implemented workflow automation using Microsoft Power Automate, reducing ticket processing time by 30% and enhancing overall system efficiency.',
            'Collaborated with UX/UI designers to create interactive mockups in JustInMind, translating user requirements into intuitive interfaces for various internal applications. Incorporated Liquid templates for dynamic content rendering and ensured consistency across all digital touchpoints.',
        ],
    },
    {
        title: 'Software Developer',
        company: 'Raging Developer',
        location: 'Ahmedabad, India',
        duration: 'Feb 2019 - May 2021',
        description: [
            "Implemented dynamic content sections in Shopify using Liquid to automatically feature new or seasonal products, sales promotions, and recommended items. Leveraged Shopify's built-in APIs to synchronize inventory, pricing, and order data, ensuring accurate, real-time product displays.",
            'Conducted front-end performance audits and applied best practices in caching, image optimization, and code minification to improve site load times and overall user experience. Reduced page bloat, leading to improved conversion rates and enhanced mobile accessibility.',
            'Applied third-party payment integration and used AWS services like S3, SQS, and lambda functions to serve real-time notifications and send invoices which brought more trust and authenticity to the company.',
        ],
    },
];
