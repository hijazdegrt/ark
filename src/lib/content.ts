import {
  Compass,
  Layers,
  Workflow,
  Network,
  RefreshCcw,
  Target,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  problem: string;
  value: string;
  challenge: string;
  involves: string[];
  benefits: string[];
  considerations: string;
  cta: string;
  interest: string;
};

export const services: Service[] = [
  {
    slug: "technology-consulting",
    icon: Compass,
    title: "Technology Consulting",
    short:
      "An independent view of your current technology, where it falls short and which improvements matter most.",
    problem: "Unclear which technology changes are worth making.",
    value: "A prioritised, business-led view of what to fix, keep or replace.",
    challenge:
      "Over time most businesses accumulate tools, subscriptions and workarounds. It becomes hard to say what is working, what overlaps and what is quietly holding teams back.",
    involves: [
      "Reviewing the tools, data flows and integrations you rely on today",
      "Identifying gaps, duplication and avoidable risk",
      "Relating each finding to a business objective rather than a technical preference",
      "Recommending a practical order of priority",
    ],
    benefits: [
      "A shared, plain-language picture of the current environment",
      "Technology spend directed at the problems that matter",
      "Fewer decisions made on vendor claims alone",
    ],
    considerations:
      "Often a short, fixed-scope assessment. The depth depends on how many teams, systems and processes are involved.",
    cta: "Discuss a technology review",
    interest: "Technology consulting",
  },
  {
    slug: "saas-solutions-and-implementation",
    icon: Layers,
    title: "SaaS Solutions and Implementation",
    short:
      "Selecting, configuring and rolling out the right software so that your teams actually use it.",
    problem: "Software that does not fit how the business operates.",
    value: "Tools chosen for fit, set up around your workflows and adopted by your teams.",
    challenge:
      "SaaS platforms promise a lot, but value only appears when the right product is configured around real workflows and people are supported through the change.",
    involves: [
      "Software selection: defining requirements and comparing suitable options objectively",
      "Configuration: setting the chosen platform up around your processes",
      "Implementation: planning the rollout, data migration and team onboarding",
      "Integration: connecting the platform to the systems it needs to work with",
      "Ongoing optimisation: reviewing usage and refining the set-up over time",
    ],
    benefits: [
      "Better collaboration and shared visibility across teams",
      "Higher adoption because the tool reflects how people work",
      "Less time lost to duplicated entry and inconsistent data",
    ],
    considerations:
      "Recommendations are based on fit with your requirements, not on any particular vendor. Scope can cover selection only, or selection through to rollout support.",
    cta: "Talk about a software project",
    interest: "SaaS implementation",
  },
  {
    slug: "process-automation",
    icon: Workflow,
    title: "Process Automation",
    short:
      "Finding the repetitive steps and manual handoffs worth automating, and designing how to do it well.",
    problem: "Repetitive manual work and hand-offs between people and systems.",
    value: "Less routine effort and more consistent, traceable execution.",
    challenge:
      "Skilled people spend hours re-keying data, chasing approvals and moving information between systems. Not every task should be automated, but many are good candidates.",
    involves: [
      "Mapping the process and measuring where time and errors accumulate",
      "Deciding which steps to simplify, which to automate and which to leave alone",
      "Designing workflow automation and system integrations using suitable platforms",
      "Defining how exceptions and failures are handled",
    ],
    benefits: [
      "Reduced manual effort on routine tasks",
      "More consistent outputs and fewer avoidable errors",
      "Staff time redirected to work that needs judgement",
    ],
    considerations:
      "Process design usually comes before tooling. Simplifying a process first often makes the eventual automation smaller and more robust.",
    cta: "Explore process automation",
    interest: "Process automation",
  },
  {
    slug: "business-systems-and-workflow-improvement",
    icon: Network,
    title: "Business Systems and Workflow Improvement",
    short:
      "Clear workflows and connected tools so that teams work consistently and can see what is happening.",
    problem: "Unstructured workflows and limited visibility across the business.",
    value: "Consistent ways of working supported by systems that connect.",
    challenge:
      "When work lives in inboxes, spreadsheets and individual habits, outcomes depend on who is doing it. Visibility is poor and growth multiplies the friction.",
    involves: [
      "Documenting how work actually flows between roles and teams",
      "Defining ownership, stages, approvals and handover points",
      "Aligning tools and data so everyone works from one version of the truth",
      "Setting up reporting that supports day-to-day decisions",
    ],
    benefits: [
      "Clearer accountability and fewer dropped hand-offs",
      "Better visibility into progress and performance",
      "A foundation that scales without adding complexity",
    ],
    considerations:
      "Works best with input from the people who run the process daily. Change is introduced in stages so operations are not disrupted.",
    cta: "Discuss workflow improvement",
    interest: "Workflow improvement",
  },
  {
    slug: "digital-transformation",
    icon: RefreshCcw,
    title: "Digital Transformation",
    short:
      "Modernising how the business operates through a considered mix of technology, process and change management.",
    problem: "Established operations that no longer match today's expectations.",
    value: "A staged path to modernise without losing what already works.",
    challenge:
      "Transformation programmes fail more often from people and process issues than from technology. A staged, business-led plan reduces that risk.",
    involves: [
      "Defining what modernisation should achieve for the business",
      "Sequencing initiatives so that each stage delivers value on its own",
      "Planning change management, communication and training",
      "Establishing how progress will be reviewed",
    ],
    benefits: [
      "A realistic roadmap rather than a single large-scale leap",
      "Reduced disruption during change",
      "Technology that supports the way the business wants to operate",
    ],
    considerations:
      "Typically a longer engagement, scoped in phases. We recommend starting with a focused assessment before committing to a wider programme.",
    cta: "Plan a transformation roadmap",
    interest: "Digital transformation",
  },
  {
    slug: "business-and-technology-strategy",
    icon: Target,
    title: "Business and Technology Strategy",
    short:
      "Aligning technology priorities with business goals, available resources and growth plans.",
    problem: "Technology investment that is disconnected from business goals.",
    value: "Clear priorities, sensible sequencing and defensible investment decisions.",
    challenge:
      "Without a clear link between objectives and technology decisions, investment tends to follow urgency or enthusiasm rather than business value.",
    involves: [
      "Clarifying business goals and the operational capabilities they depend on",
      "Assessing resources, constraints and risks",
      "Defining technology priorities and a phased investment view",
      "Supporting leadership in making and communicating decisions",
    ],
    benefits: [
      "Technology decisions that leadership can explain and defend",
      "Investment sequenced to growth plans",
      "A common reference point for teams and vendors",
    ],
    considerations:
      "Suited to leadership teams planning the next phase of growth. Outputs are typically a written strategy and roadmap.",
    cta: "Discuss technology strategy",
    interest: "Technology consulting",
  },
];

export const challenges = [
  {
    title: "Too many disconnected tools",
    text: "Information is split across applications that do not talk to each other, so teams re-enter data and reconcile it by hand.",
  },
  {
    title: "Repetitive manual processes",
    text: "Routine tasks and approvals consume time that skilled people could spend on higher-value work.",
  },
  {
    title: "Software that does not fit",
    text: "Tools were chosen for features, not for how the business operates, so workarounds become the real process.",
  },
  {
    title: "Limited visibility",
    text: "Leaders cannot easily see performance, bottlenecks or workload without asking several people.",
  },
  {
    title: "Unstructured workflows",
    text: "Work depends on individual habits rather than clear stages, owners and hand-offs.",
  },
  {
    title: "Difficulty scaling",
    text: "Processes that worked for ten people become a drag at fifty, and growth adds friction instead of capacity.",
  },
  {
    title: "Technology that underdelivers",
    text: "Investments are made but adoption stalls and the intended value is never fully realised.",
  },
];

export const valueSteps = [
  { n: "01", title: "Understand the business", text: "Goals, operations, people and constraints come first." },
  { n: "02", title: "Identify opportunities", text: "Where friction, cost and risk accumulate, and what is worth changing." },
  { n: "03", title: "Design the solution", text: "A practical design that fits workflows and available resources." },
  { n: "04", title: "Implement the right systems", text: "Deploy only what the design calls for, with teams supported." },
  { n: "05", title: "Measure and improve", text: "Review outcomes against the original goals and refine." },
];

export const principles = [
  {
    title: "Business-first thinking",
    text: "We start with the commercial problem. Technology is a means to improve operations, not an objective in itself.",
  },
  {
    title: "Practical technology decisions",
    text: "Recommendations favour what is proportionate and maintainable for your business over what is fashionable.",
  },
  {
    title: "Systems designed around workflows",
    text: "Tools are configured to support how work flows between people, not the other way around.",
  },
  {
    title: "A focus on operational improvement",
    text: "Each recommendation is tied to a clear operational outcome that can be reviewed afterwards.",
  },
  {
    title: "Solutions selected for relevance",
    text: "We evaluate options against your requirements, and we are open about trade-offs.",
  },
  {
    title: "Scalability and continuous improvement",
    text: "Good systems should keep working as the business grows, and be reviewed as needs change.",
  },
];

export const audiences = [
  {
    slug: "inefficient-operations",
    title: "Businesses experiencing operational inefficiencies",
    challenge:
      "Work takes longer than it should, the same questions get asked repeatedly and errors creep in.",
    why: "Processes grow organically. Steps that made sense once stay in place long after the business has changed around them.",
    help: "A clear view of where time is lost, followed by targeted simplification and, where appropriate, automation.",
    explore:
      "A short review of one or two core processes to find the highest-impact improvements.",
  },
  {
    slug: "growing-companies",
    title: "Growing companies that need more structured processes",
    challenge:
      "What worked informally for a small team is starting to strain as people, customers and volumes increase.",
    why: "Informal knowledge, spreadsheets and personal habits do not scale. Hand-offs become unclear and quality varies.",
    help: "Defining ownership, stages and standard workflows, supported by tools that grow with the business.",
    explore:
      "Documenting the key workflows and agreeing which should be formalised first.",
  },
  {
    slug: "saas-adoption",
    title: "Organisations introducing or replacing SaaS tools",
    challenge:
      "A new platform is being considered, or an existing one is not delivering what was expected.",
    why: "Tool choices are often driven by features or familiarity, and implementation is underestimated.",
    help: "Objective selection against real requirements, careful configuration and a structured rollout.",
    explore:
      "Clarifying requirements and evaluating whether to replace, reconfigure or retain what you have.",
  },
  {
    slug: "disconnected-systems",
    title: "Companies working across disconnected systems",
    challenge:
      "Data is duplicated across applications and reports require manual consolidation.",
    why: "Each tool was added to solve a local need, with no shared view of how data should move between them.",
    help: "Mapping the data flows, then connecting systems through integration or consolidating where it makes sense.",
    explore:
      "A map of current systems and data movement, with candidates for integration or consolidation.",
  },
  {
    slug: "workflow-visibility",
    title: "Teams looking to improve workflow visibility",
    challenge:
      "Managers cannot easily see status, workload or bottlenecks without chasing updates.",
    why: "Progress is tracked in separate places, so there is no consistent view of work in flight.",
    help: "Consistent workflow stages and reporting so that status is visible without extra effort.",
    explore:
      "Defining the questions leaders need answered and what data would answer them.",
  },
  {
    slug: "technology-led-improvement",
    title: "Businesses planning technology-led operational improvement",
    challenge:
      "There is an appetite to invest, but no agreed view on priorities, sequence or scope.",
    why: "Without a roadmap, projects compete for attention and some deliver less than expected.",
    help: "Turning ambitions into a phased, business-led roadmap with clear priorities.",
    explore:
      "A scoping conversation and a focused assessment to shape the roadmap.",
  },
];

export const processStages = [
  { n: "01", title: "Discover", short: "Understand the business, existing processes and pain points." },
  { n: "02", title: "Diagnose", short: "Identify gaps, inefficiencies and opportunities." },
  { n: "03", title: "Design", short: "Recommend a practical improvement roadmap." },
  { n: "04", title: "Deliver", short: "Support deployment of the agreed technology and systems." },
  { n: "05", title: "Improve", short: "Review outcomes and identify further opportunities." },
];

export const approachDetail = [
  {
    n: "01",
    title: "Discover",
    purpose:
      "Build a shared understanding of the business, its goals and where it feels friction.",
    activities: [
      "Stakeholder conversations across relevant teams",
      "Walkthroughs of how work is currently done",
      "Review of existing tools, documentation and data",
    ],
    outputs: ["Current-state process review", "Summary of goals, constraints and pain points"],
  },
  {
    n: "02",
    title: "Diagnose",
    purpose:
      "Find the root causes of inefficiency and the opportunities that are worth pursuing.",
    activities: [
      "Analysing process steps, hand-offs and delays",
      "Comparing the current technology environment with business needs",
      "Assessing risks, dependencies and change readiness",
    ],
    outputs: ["Technology gap assessment", "Prioritised list of opportunities"],
  },
  {
    n: "03",
    title: "Design",
    purpose:
      "Define a practical solution and the route to reach it, grounded in the business's needs.",
    activities: [
      "Designing target workflows and responsibilities",
      "Evaluating software options against agreed requirements",
      "Estimating effort, sequencing and resourcing",
    ],
    outputs: [
      "Workflow documentation",
      "SaaS evaluation",
      "Solution recommendations",
      "Implementation roadmap",
    ],
  },
  {
    n: "04",
    title: "Deliver",
    purpose:
      "Put the agreed changes into practice and help teams adopt them with confidence.",
    activities: [
      "Configuring and integrating selected systems",
      "Planning migration, testing and go-live",
      "Training and communication for affected teams",
    ],
    outputs: ["Configured systems and integrations", "Process improvement recommendations in practice"],
  },
  {
    n: "05",
    title: "Improve",
    purpose:
      "Check whether the changes delivered what was intended and decide what to do next.",
    activities: [
      "Reviewing adoption and operational outcomes",
      "Gathering feedback from users",
      "Identifying further refinements or next priorities",
    ],
    outputs: ["Post-implementation review", "Recommendations for continued improvement"],
  },
];

export const interests = [
  "Technology consulting",
  "SaaS implementation",
  "Process automation",
  "Workflow improvement",
  "Digital transformation",
  "Other",
];
