export interface SubTopic {
  name: string;
  depth: string;
}

export type TopicDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface Exercise {
  title: string;
  description: string;
  verificationCmd?: string;
  codeSnippet?: string;
  expectedBehavior?: string;
}

export interface InterviewQA {
  question: string;
  answer: string;
  focusType: 'Startup Focus' | 'Product Focus' | 'Debugging' | 'Architecture/Internals';
}

export interface CurriculumTopic {
  id: string;
  category: 'Python & OOP' | 'Core Backend & APIs' | 'SQL & Databases' | 'Redis & Messaging' | 'DevOps & DevOps Basics' | 'Applied AI & RAG' | 'System Design & DSA';
  title: string;
  description: string;
  subtopics: string[];
  exactDepth: string;
  whatToSkip: string;
  bestResource: {
    title: string;
    chapters: string;
    url?: string;
  };
  bestDocs: {
    title: string;
    url: string;
  };
  youtubeUsage: string;
  interviewImportance: number; // 1-10
  projectRelevance: number; // 1-10
  estHours: number;
  stopDepth: string;
  commonMistakes: string[];
  productionRelevance: string;
  implementationExercise: Exercise;
  debuggingExercise: Exercise;
  deploymentExercise?: Exercise;
  interviewQAs: InterviewQA[];
  importanceTier?: 'S' | 'A' | 'B' | 'C'; // S: Critical, A: High, B: Medium, C: Low
  alternativeDocs?: { title: string; url: string };
  alternativeVideo?: { title: string; url: string };
}

export interface EnrichedCurriculumTopic extends CurriculumTopic {
  importanceTier: 'S' | 'A' | 'B' | 'C';
  importanceScore: number;
  importanceDescription: string;
  alternativeDocs: { title: string; url: string };
  alternativeVideo: { title: string; url: string };
  phase: number;
  phaseTitle: string;
}

export interface ProjectDef {
  id: string;
  title: string;
  difficulty: TopicDifficulty;
  stack: string[];
  architecture: string;
  apis: string[];
  scalingConcerns: string;
  observability: string;
  redisUsage: string;
  asyncUsage: string;
  productionConcerns: string;
  checkpointChecklist: string[];
}

export interface UserProgress {
  completedTopicIds: string[];
  activeTopicId: string | null;
  completedProjectIds: string[];
  openResourceClicksCount: number; // For anti-overload warnings
  tutorialHopCount: number; // Trigger warning if multiple topics switched rapidly without completion
  consecutiveNoCompletionStreak: number;
  lastProgressUpdate: string; // ISO Date
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'mentor';
  text: string;
  timestamp: string;
}

export interface DailyPlanner {
  date: string;
  deepLearningTimeMs: number; // Target 90 min
  codingTimeMs: number; // Target 60 min
  revisionTimeMs: number; // Target 30 min
  customTopicId: string | null;
  tasksCompleted: string[]; // List of task sub-types
}
