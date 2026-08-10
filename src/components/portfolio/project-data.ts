// Add the public repository URL here to enable the GitHub button.
// Leave as null until a real URL is available (no placeholder links).
export const githubRepoUrl: string | null = null;

// Add a real deployed URL here to show a "Live Demo" button. Leave null otherwise.
export const liveDemoUrl: string | null = null;

export const problem =
  "Managing customers, vehicles, washers, orders and payments requires centralized application management.";

export const solution =
  "A full-stack web application that centralizes car-wash operations through an Angular frontend and ASP.NET Core Web API backend.";

export const architecture = [
  { label: "Angular Frontend", detail: "SPA · TypeScript · HTML/CSS" },
  { label: "ASP.NET Core Web API", detail: "REST controllers · JWT auth" },
  { label: "Business Logic / Services", detail: "C# · role-based rules" },
  { label: "Entity Framework Core", detail: "LINQ · migrations" },
  { label: "MySQL", detail: "Relational data store" },
];


export const stack = {
  Backend: ["ASP.NET Core Web API", "C#", "Entity Framework Core", "MySQL"],
  Frontend: ["Angular", "TypeScript", "HTML", "CSS"],
  Security: ["JWT Authentication", "Role-Based Authorization"],
  Additional: ["Swagger", "Postman", "MailKit"],
};


export const features = [
  "User authentication",
  "JWT authorization",
  "Role-based access",
  "Customer management",
  "Vehicle management",
  "Car wash order management",
  "Payment management",
  "Washer management",
  "RESTful API architecture",
  "Database integration",
  "Email functionality",
  "Angular SPA frontend",
];
