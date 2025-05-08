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
        {
            name: 'Ant Design',
            icon: '/logo/ant-design.svg',
        },
        {
            name: 'Material UI',
            icon: '/logo/material-ui.svg',
        },
        {
            name: 'Chakra UI',
            icon: '/logo/chakra-ui.svg',
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
        techStack: [
            'ReactJS',
            'Ant Design',
            'Bootstrap',
            'React i18n',
            'TypeScript',
            'RxJS',
            'Axios',
            'Jest',
        ],
        thumbnail:
            'https://cdn-img.upanhlaylink.com/img/image_202505051de3feb13102d72c8001af93e42d5415.jpg',
        longThumbnail:
            'https://cdn-img.upanhlaylink.com/img/image_202505051de3feb13102d72c8001af93e42d5415.jpg',
        images: [
            'https://cdn-img.upanhlaylink.com/img/image_2025050554ffad15888316566f7812e5c0c5c389.jpg',
            'https://cdn-img.upanhlaylink.com/img/image_202505056131f1eae999c35b5a036ac4e65bcea2.jpg',
        ],
    },
    {
        title: 'CRM',
        slug: 'fis-crm',
        // liveUrl: 'https://mti-electronics.vercel.app/',
        year: 2020,
        description: `
        A robust Customer Relationship Management (CRM) system developed for FIS to centralize customer data, streamline workflows, and enhance user engagement. <br/><br/>

    Key Features:<br/>
    <ul>
        <li>📋 Centralized Customer Data: Manage customer profiles, opportunity , interactions, and activity history in a unified platform</li>
        <li>📍 Maps & Location Services: Integrated Google Maps and HERE Maps for real-time location tracking and visualization</li>
        <li>🌍 Multi-language Support: Internationalization implemented with i18next for global user accessibility</li>
        <li>📊 Reports & Dashboards: Interactive visualizations using Chart.js for customer insights and analytics</li>
    </ul><br/>

    Technical Highlights:<br/>
    <ul>
        <li>Enabled real-time updates and notifications through SignalR integration</li>
        <li>Developed scalable internationalization system with automatic language file extraction and merging</li>
        <li>Applied efficient state management using ReactN and RxJS for reactive data flow</li>
        <li>Enhanced performance via lazy loading, code splitting, and advanced memoization techniques</li>
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
        techStack: [
            'ReactJS',
            'Ant Design',
            'Bootstrap',
            'React i18n',
            'TypeScript',
            'RxJS',
            'Axios',
            'Jest',
        ],
        thumbnail:
            'https://cdn-img.upanhlaylink.com/img/image_20250508f2a4f8823a95ee40b2a818061dd857dc.jpg',
        longThumbnail:
            'https://cdn-img.upanhlaylink.com/img/image_202505087735b286e845266a8168e63ae3f209f3.jpg',
        images: [
            'https://cdn-img.upanhlaylink.com/img/image_202505087735b286e845266a8168e63ae3f209f3.jpg',
            'https://cdn-img.upanhlaylink.com/img/image_20250508b52a3d16b221b56ad48fd946719c4930.jpg',
        ],
    },
    {
        title: 'PPF - Procurement Process Flow',
        slug: 'fis-ppf',
        year: 2022,
        // liveUrl: 'https://mti-electronics.vercel.app/',
        description: `
    A comprehensive Procurement Process Flow (PPF) system developed for FIS to streamline purchasing operations, enhance supplier management, and improve procurement efficiency.<br/><br/>

    <strong>Key Features:</strong><br/>
    <ul>
      <li>📦 <strong>Workflow Automation:</strong> Digitized end-to-end purchasing from request to approval</li>
      <li>🤝 <strong>Vendor Management:</strong> Centralized supplier data, contracts, and performance tracking</li>
      <li>📑 <strong>Document Handling:</strong> Integrated flows for POs, delivery notes, and invoices</li>
      <li>📊 <strong>Analytics:</strong> Real-time insights with interactive dashboards</li>
    </ul><br/>

    <strong>Technical Highlights:</strong><br/>
    <ul>
      <li>🔔 Real-time updates via SignalR</li>
      <li>🌍 Internationalization using i18next</li>
      <li>⚙️ State management Redux</li>
      <li>🚀 Performance boosts via lazy loading and memoization</li>
    </ul>
  `,
        role: `
    Frontend Developer<br/>
    <strong>Key responsibilities and achievements:</strong>
    <ul>
      <li>🎨 Built responsive UI with Ant Design, Bootstrap, and custom CSS</li>
      <li>🔄 Implemented client-side state management and caching</li>
      <li>📱 Ensured mobile-friendly layout across devices</li>
      <li>⚡ Optimized performance for fast loading and smooth interaction</li>
    </ul>
  `,
        techStack: [
            'ReactJS',
            'Ant Design',
            'Bootstrap',
            'React i18n',
            'TypeScript',
            'RxJS',
            'Axios',
            'Jest',
        ],
        thumbnail:
            'https://cdn-img.upanhlaylink.com/img/image_202505088b4e59d6d5a70f5faf3c1cfb96ab4ea7.jpg',
        longThumbnail:
            'https://cdn-img.upanhlaylink.com/img/image_202505088b4e59d6d5a70f5faf3c1cfb96ab4ea7.jpg',
        images: [
            'https://cdn-img.upanhlaylink.com/img/image_20250508a916a030fa9261a51c36a043f27d2db2.jpg',
            'https://cdn-img.upanhlaylink.com/img/image_20250508e333ac234ef14aa7e0adcdf0f7cdd74a.jpg',
        ],
    },
    {
        title: 'Future Contract Trading',
        slug: 'technixo-future',
        year: 2022,
        // liveUrl: 'https://mti-electronics.vercel.app/',
        description: `
          Perpetuals (Perps) are futures contracts with no expiration, allowing users to trade assets on margin. 
          This platform enables long and short positions on various assets using borrowed funds—essential during volatile market conditions.<br/><br/>
      
          <strong>Key Features:</strong><br/>
          <ul>
            <li>📈 <strong>Perpetual Futures Trading:</strong> Support long/short contracts with no expiration date</li>
            <li>💰 <strong>Leverage Trading:</strong> Trade with margin to amplify gains while managing risk</li>
            <li>📊 <strong>Real-time Market Data:</strong> Live updates for prices, positions, and funding rates</li>
            <li>🔐 <strong>Risk Management:</strong> Tools for stop-loss, take-profit, and liquidation alerts</li>
            <li>📱 <strong>Responsive Design:</strong> Optimized interface for desktop and mobile trading</li>
          </ul><br/>
      
          <strong>Technical Highlights:</strong><br/>
          <ul>
            <li>⚡ Real-time WebSocket integration for live market feeds and order updates</li>
            <li>🧠 Reactive state management using Redux for dynamic data flows</li>
            <li>🌍 Multi-language support powered by i18next</li>
            <li>🚀 Optimized performance through code splitting, lazy loading, and memoization</li>
            <li>🧪 Unit testing with Jest for core calculations and component integrity</li>
          </ul>
        `,
        role: `
          Frontend Developer<br/>
          <strong>Key responsibilities and achievements:</strong>
          <ul>
            <li>🧩 Built responsive UI components for the trading interface using ReactJS, NextJS, MUI</li>
            <li>🔄 Integrated WebSocket APIs and managed trading data streams with RxJS</li>
            <li>📱 Ensured responsive design for all devices and resolutions</li>
            <li>🚀 Optimized component rendering and asset loading for fast performance</li>
            <li>🧪 Implemented unit tests for price calculation and margin logic using Jest</li>
          </ul>
        `,
        techStack: [
            'ReactJS',
            'NextJS',
            'Chakra UI',
            'Ethers.js',
            'Web3',
            'React i18n',
            'TypeScript',
            'Wagmi',
            'Jest',
        ],
        thumbnail:
            'https://cdn-img.upanhlaylink.com/img/image_20250508c4a23387eccefed4d6f9aaeb9aa642cb.jpg',
        longThumbnail:
            'https://cdn-img.upanhlaylink.com/img/image_20250508c4a23387eccefed4d6f9aaeb9aa642cb.jpg',
        images: [
            'https://cdn-img.upanhlaylink.com/img/image_202505089f5d9fabdb53a0815efe8fca7cb46251.jpg',
            'https://cdn-img.upanhlaylink.com/img/image_20250508e891bbb34b6f506006c9f91a1c8f8f1f.jpg',
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
