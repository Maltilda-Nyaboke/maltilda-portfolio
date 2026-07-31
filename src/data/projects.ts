export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  architecture: string;
  challenges: string;
  lessons: string;
  githubUrl: string;
  liveUrl?: string;
  accent: "blue" | "mint" | "violet";
  team?: boolean;
};

export const projects: Project[] = [
  {
    slug: "picwise",
    title: "Picwise",
    tagline: "An Instagram-inspired social photo-sharing app",
    category: "Full-Stack · Django",
    year: "2022",
    summary:
      "A social networking application modeled on Instagram, built with Django and PostgreSQL, with Cloudinary-backed image uploads.",
    problem:
      "Learning full-stack development requires practicing the hardest parts of a real product at once: authentication, persistent media storage, and social interaction between users. A todo-list app doesn't exercise any of that.",
    solution:
      "I built a Django application that replicates the core mechanics of a photo-sharing social network: users register and log in, upload photos, like and comment on posts, search for other users, and manage their own profile.",
    technologies: ["HTML", "CSS", "Bootstrap", "Python", "Django", "PostgreSQL", "Cloudinary"],
    features: [
      "User authentication (register, login, logout)",
      "Profile management and profile updates",
      "Photo uploads stored via Cloudinary",
      "Likes and comments on posts",
      "Search for users by profile",
      "Responsive Bootstrap layout",
    ],
    architecture:
      "Django MVT architecture with PostgreSQL as the primary database. Media uploads are offloaded to Cloudinary rather than local disk, since local file storage doesn't persist across deploys on platforms like Heroku. Front-end templates are styled with Bootstrap.",
    challenges:
      "Wiring up Cloudinary as the image backend was the biggest hurdle — getting environment-based credentials (CLOUD_NAME, API_KEY, API_SECRET) working consistently between local development and deployment. Modeling likes and comments as related tables that stay fast to query was the other core challenge.",
    lessons:
      "This project was where the Django ORM's relational modeling really clicked for me — likes, comments, and profiles as separate related models rather than one bloated table. It was also my first real exposure to offloading media storage to a third-party service instead of the filesystem.",
    githubUrl: "https://github.com/Maltilda-Nyaboke/picwise",
    accent: "blue",
  },
  {
    slug: "ujamaa",
    title: "Ujamaa",
    tagline: "A neighborhood community platform",
    category: "Full-Stack · Django",
    year: "2022",
    summary:
      "A Django platform where residents join a specific neighborhood to share posts and discover local businesses, named after the Swahili word for community and shared responsibility.",
    problem:
      "Neighbors often have no shared digital space scoped to where they actually live — local business recommendations and community updates get lost in general social feeds or word of mouth.",
    solution:
      "Ujamaa lets a user join a specific neighborhood, and once inside, view and create posts and local business listings scoped only to that neighborhood. Users can leave a neighborhood and join a different one at any time.",
    technologies: ["HTML", "CSS", "Bootstrap", "Python", "Django", "PostgreSQL", "Cloudinary"],
    features: [
      "Join and leave neighborhoods",
      "Neighborhood-scoped local business directory",
      "Community posts visible only to members of that neighborhood",
      "User authentication and profiles",
    ],
    architecture:
      "Django MVT with PostgreSQL and Cloudinary for image uploads. Business listings and posts are modeled with a foreign key to a Neighborhood, so querysets are filtered by the requesting user's current neighborhood membership.",
    challenges:
      "The trickiest part was correctly scoping every query to the user's active neighborhood, and cleanly handling the state transition when a user leaves one neighborhood and joins another without leaving orphaned data or letting content leak across neighborhoods.",
    lessons:
      "Reinforced how to model many-to-one community membership in Django and how important queryset scoping is once an app has more than one 'tenant' of data sharing the same tables.",
    githubUrl: "https://github.com/Maltilda-Nyaboke/Ujamaa",
    accent: "mint",
  },
  {
    slug: "rewardds",
    title: "Rewardds",
    tagline: "A project showcase and rating platform (iReview)",
    category: "Full-Stack · Django",
    year: "2022",
    summary:
      "A Django application where users publish projects they've built, share the live URL, and rate each other's work — internally named iReview.",
    problem:
      "Developers finishing a project often have nowhere lightweight to show it off, get a link out to it, and get feedback from peers in the form of a simple rating.",
    solution:
      "Rewardds lets an authenticated user post a project with a description and URL, browse everyone else's submissions, and rate the ones they find interesting.",
    technologies: ["HTML", "CSS", "Bootstrap", "Python", "Django", "PostgreSQL", "Cloudinary"],
    features: [
      "Post a project with description and live URL",
      "Browse and view submitted projects",
      "Rate other users' projects",
      "User authentication",
    ],
    architecture:
      "Django MVT backed by PostgreSQL, with Cloudinary handling project image uploads. Deployed to Heroku with a Procfile and environment-based configuration for database and media credentials.",
    challenges:
      "Designing a rating system that aggregates fairly across many raters, and getting the Heroku deployment pipeline (Procfile, environment variables, Postgres add-on) working end to end for the first time.",
    lessons:
      "My first experience taking a Django app all the way to a live deployment rather than stopping at localhost — dealing with production settings, environment variables, and a managed Postgres database.",
    githubUrl: "https://github.com/Maltilda-Nyaboke/Rewardds",
    liveUrl: "https://rewardds.herokuapp.com/",
    accent: "violet",
  },
  {
    slug: "mjenzi",
    title: "Mjenzi",
    tagline: "A professional directory for the construction industry",
    category: "Full-Stack · Django",
    year: "2022",
    summary:
      "A Django platform — 'mjenzi' is Swahili for 'builder' — where construction professionals create a profile with their expertise and location so clients can find and contact them.",
    problem:
      "Skilled construction workers and contractors often rely entirely on word of mouth to find clients, with no shared, searchable place to list their expertise, location, and contact details.",
    solution:
      "Mjenzi gives each professional a profile — name, area of expertise, description, location, and contact — that others can browse, alongside registration, login, posts, and about/contact pages.",
    technologies: ["HTML", "CSS", "Python", "Django", "PostgreSQL", "django-crispy-forms"],
    features: [
      "User registration, login, and logout",
      "Professional profile creation and updates (expertise, location, contact, photo)",
      "Browse professional profiles",
      "Posts, about, and contact pages",
    ],
    architecture:
      "Django MVT with a PostgreSQL database and django-crispy-forms for cleaner form rendering. Deployed with django-heroku and Whitenoise for static file serving in production.",
    challenges:
      "Modeling a one-to-one Profile tied to Django's built-in User model while keeping optional fields (expertise, location, contact) flexible enough for a professional who is still filling out their listing.",
    lessons:
      "Solidified working with Django's auth system as a foundation to extend with a custom Profile model, plus first exposure to django-crispy-forms and preparing a Django app for a Heroku deployment target.",
    githubUrl: "https://github.com/Maltilda-Nyaboke/Mjenzi",
    accent: "blue",
  },
  {
    slug: "photo-booth",
    title: "Photo Booth",
    tagline: "A categorized image gallery platform",
    category: "Full-Stack · Django",
    year: "2022",
    summary:
      "A Django-powered image gallery where visitors browse photos grouped by category and location, and search for a specific image by name.",
    problem:
      "A collection of images taken across different categories and locations becomes hard to navigate as a flat, unsorted list — visitors need a way to browse and search it meaningfully.",
    solution:
      "Photo Booth organizes uploaded images into categories and locations, and gives visitors a search box to find an image directly by name instead of scrolling through everything.",
    technologies: ["HTML", "CSS", "Bootstrap", "Python", "Django", "PostgreSQL", "Cloudinary"],
    features: [
      "Browse images grouped by category",
      "Filter images by location",
      "Search for an image by name",
      "Cloudinary-backed image storage",
    ],
    architecture:
      "Django MVT with PostgreSQL for category and image metadata, and Cloudinary for the actual image files, styled with Bootstrap.",
    challenges:
      "Structuring the category/location data model so filtering and search stayed fast and simple, without over-engineering a gallery app that's meant to stay lightweight.",
    lessons:
      "Practiced building read-heavy, browse-and-search features in Django, as a contrast to the write-heavy, form-driven features in my other projects.",
    githubUrl: "https://github.com/Maltilda-Nyaboke/Photo-booth",
    accent: "mint",
  },
  {
    slug: "insurance-website",
    title: "Insurance Website",
    tagline: "An informational site for an insurance company",
    category: "Front-End · HTML/CSS",
    year: "2022",
    summary:
      "A static, multi-section website built for an insurance company to explain its policies, membership plans, and pricing to prospective clients.",
    problem:
      "Prospective clients need a clear, self-serve way to understand what an insurance company offers — its policies, what membership costs, and how to get in touch — before ever speaking to an agent.",
    solution:
      "A clean, static site with a left-side navigation panel giving quick access to company information, policy details, membership plans, pricing, and a contact section.",
    technologies: ["HTML", "CSS"],
    features: [
      "Left-aside navigation bar",
      "Company information section",
      "Insurance policy breakdowns",
      "Membership plans and pricing",
      "Contact section",
    ],
    architecture:
      "Pure HTML and hand-written CSS with no framework or build step — semantic sectioning of content with a persistent aside navigation pattern.",
    challenges:
      "Getting a clean, consistent left-aside navigation layout using only plain CSS (no framework), while keeping every section's spacing and typography consistent by hand.",
    lessons:
      "Foundational practice in semantic HTML structure and CSS layout — the building blocks everything else in this portfolio is built on top of.",
    githubUrl: "https://github.com/Maltilda-Nyaboke/Week-2",
    accent: "violet",
  },
  {
    slug: "kikwetu-treats",
    title: "Kikwetu Treats",
    tagline: "A pizza restaurant ordering website",
    category: "Front-End · HTML/CSS/JS",
    year: "2022",
    summary:
      "A responsive front-end website for a pizza restaurant, letting visitors view the menu and place an order.",
    problem:
      "A small restaurant needs a simple, mobile-friendly way for customers to see what's on offer and place an order online instead of only by phone or in person.",
    solution:
      "A responsive Bootstrap site showing the restaurant's offerings, with a JavaScript-driven ordering form that lets a visitor pick items and submit an order.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Menu display",
      "JavaScript-driven ordering flow",
      "Responsive layout with Bootstrap",
      "Restaurant information and contact details",
    ],
    architecture:
      "Static front-end with vanilla JavaScript handling interactive behavior (including generating order dates on the form) and Bootstrap providing the responsive grid and components.",
    challenges:
      "Building an interactive ordering flow — including dynamic date generation in the order form — using only vanilla JavaScript, with no back end to fall back on.",
    lessons:
      "Practical front-end interactivity: DOM manipulation, form handling, and using Bootstrap's component system to ship a responsive layout quickly.",
    githubUrl: "https://github.com/Maltilda-Nyaboke/Kikwetu-Treats",
    accent: "blue",
  },
  {
    slug: "password-locker",
    title: "Password Locker",
    tagline: "A terminal-based credential manager",
    category: "Python · OOP",
    year: "2022",
    summary:
      "A terminal application, built with Python object-oriented programming, that creates accounts, generates and stores passwords, and manages saved credentials.",
    problem:
      "Managing separate credentials for many sites gets error-prone fast without at least a basic tool to store, retrieve, and generate strong passwords.",
    solution:
      "A command-line tool where a user creates an account, then creates, views, finds, and deletes credentials for individual sites — with the option to generate a random password instead of typing one.",
    technologies: ["Python"],
    features: [
      "Create a user account and log in",
      "Store credentials per site (site name, username, password)",
      "Generate a random password of a given length",
      "View all saved credentials",
      "Find and delete a credential by site name",
    ],
    architecture:
      "Plain Python, no framework or database — two core classes (User and Credentials) hold application state in memory for the session, driven by a text-menu loop in the entry-point script. Includes a unit test suite.",
    challenges:
      "Structuring the class design so credentials and users stayed cleanly separated while still being able to verify a login against the right user before exposing that user's saved credentials.",
    lessons:
      "This project is where object-oriented Python — classes, class-level state, class methods — moved from a classroom concept to something I used to build a working tool, along with writing accompanying unit tests.",
    githubUrl: "https://github.com/Maltilda-Nyaboke/password_Locker",
    accent: "mint",
  },
  {
    slug: "recipe-hub",
    title: "Recipe Hub",
    tagline: "A recipe-sharing platform, co-built with a fellow student",
    category: "Team Project · Angular + Django",
    year: "2022",
    summary:
      "A recipe-sharing platform built as a two-person team project, where users browse recipes with full ingredient and serving-size details and share their own with the community.",
    problem:
      "Home cooks often bounce between scattered blogs and video sites just to find a simple, trustworthy recipe with clear ingredients and serving sizes — and have no easy way to share their own back.",
    solution:
      "Working alongside a fellow Moringa School student, we built a platform combining an Angular front end with a Django backend, where anyone can browse shared recipes and registered users can comment, bookmark, and rate them.",
    technologies: ["Angular", "TypeScript", "Python", "Django"],
    features: [
      "Browse and post recipes with ingredients, procedure, and servings",
      "Registered-user comments on recipes",
      "Bookmark recipes to revisit later",
      "Rate recipes shared by other users",
    ],
    architecture:
      "Angular handled the front end, talking to a Django backend that modeled recipes, comments, bookmarks, and ratings. My teammate, Charles Okunzo, owned the repository and deployment; I worked alongside him on the application itself as part of our shared coursework.",
    challenges:
      "Coordinating a two-person build across an Angular front end and a Django API — agreeing on the data contract between them, and dividing feature work without stepping on each other's changes.",
    lessons:
      "My first real experience pairing on a full-stack project with someone else's codebase and conventions, and connecting a separate front-end framework (Angular) to a Django API instead of relying on Django templates for everything.",
    githubUrl: "https://github.com/charles-okunzo/recipe-hub",
    accent: "violet",
    team: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
