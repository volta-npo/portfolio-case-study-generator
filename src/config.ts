export const config = {
  "number": 45,
  "slug": "portfolio-case-study-generator",
  "title": "Portfolio Case Study Generator",
  "category": "Student Agency Operations",
  "tagline": "Turn completed client work into ethical, polished student portfolio case studies.",
  "persona": "Students building resumes, college apps, and career portfolios.",
  "gap": "Students ship real work but often fail to document it professionally or protect client privacy.",
  "niche": "Portfolio generation for service-learning and student agencies.",
  "metric": "approved case studies produced per project",
  "modules": [
    "Case study outline",
    "Consent and privacy guides",
    "Before/after proof fields",
    "Reflection questions"
  ],
  "theme": {
    "accent": "#f97316",
    "accent2": "#fdba74",
    "emoji": "\ud83c\udf93",
    "metricLabel": "Operating readiness",
    "workflow": [
      "Set roles and artifacts",
      "Run rubric review",
      "Resolve blockers",
      "Export operating packet"
    ],
    "privacy": "Separate internal student notes from client-facing exports. Never store passwords."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "case-study-outline",
      "label": "Case study outline",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify case study outline with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "consent-and-privacy-guides",
      "label": "Consent and privacy guides",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify consent and privacy guides with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "before-after-proof-fields",
      "label": "Before/after proof fields",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify before/after proof fields with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "reflection-questions",
      "label": "Reflection questions",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify reflection questions with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Portfolio Case Study Generator and capture baseline evidence.",
      "Complete the case study outline workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Volta Cyprus Chapter",
    "chapter": "Cyprus",
    "studentLead": "Volta Student Lead",
    "notes": "Internal chapter operations project for student-led delivery excellence. Portfolio Case Study Generator sample.",
    "evidencePrefix": "Portfolio Case Study Generator",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
