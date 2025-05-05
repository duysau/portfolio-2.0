import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'duynk2308@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Duy, I am reaching out to you because...',

    oldPortfolio: 'https://duynk-portfolio.vercel.app/',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/duysau' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/duynkdeveloper/' },
    { name: 'facebook', url: 'https://www.facebook.com/n.khanhduy99/' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'DMS',
        slug: 'fis-dms',
        // liveUrl: 'https://mti-electronics.vercel.app/',
        year: 2020,
        description: `
      A comprehensive Document Management System (DMS) developed for FIS, designed to streamline document workflows and enhance organizational efficiency. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>📱 Modern UI Framework: Utilizing CoreUI and Ant Design for modern, responsive, and user-friendly interface</li>
        <li>🗺️ Maps & Location: Integration with Google Maps and HERE Maps featuring geocoding and marker clustering capabilities</li>
        <li>🌐 Multi-language Support: Internationalization with i18next and language management tools</li>
        <li>📊 Data Visualization: Chart and reporting system with Chart.js, supporting various chart types</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built robust real-time communication system using SignalR for instant updates and notifications</li>
        <li>Implemented comprehensive internationalization (i18n) system with automatic language extraction and merging capabilities</li>
        <li>Designed efficient state management architecture using ReactN and RxJS for reactive data flow</li>
        <li>Optimized application performance with code splitting, lazy loading, and advanced memoization techniques</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Key responsibilities and achievements:
      <ul>
        <li>🎨 UI Development: Built responsive UI components using Ant Design, Bootstrap, and custom CSS styling</li>
        <li>🔄 State Management: Implemented efficient client-side data fetching and caching</li>
        <li>📱 Responsive Design: Ensured optimal display across all device sizes</li>
        <li>⚡ Performance: Optimized components and assets for fast page loads</li>
      </ul>
      `,
        techStack: ['ReactJS', 'Bootstrap', 'React i18n', 'TypeScript'],
        thumbnail:
            'https://cdn-img.upanhlaylink.com/img/image_202505051de3feb13102d72c8001af93e42d5415.jpg',
        longThumbnail:
            'https://cdn-img.upanhlaylink.com/img/image_202505051de3feb13102d72c8001af93e42d5415.jpg',
        images: [
            'https://cdn-img.upanhlaylink.com/img/image_2025050554ffad15888316566f7812e5c0c5c389.jpg',
            'https://cdn-img.upanhlaylink.com/img/image_202505056131f1eae999c35b5a036ac4e65bcea2.jpg',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Front-end developer',
        company: 'FIS',
        duration: 'April 2023 - Present',
    },
    {
        title: 'Front-end Developer',
        company: 'Technixo',
        duration: 'May 2022 - Mar 2023',
    },
    {
        title: 'Front-end Developer',
        company: 'CMC Global',
        duration: 'Sep 2021 - May 202',
    },
];
