import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Tv, 
  CheckCircle2, 
  Lock, 
  AlertTriangle, 
  Play, 
  Pause, 
  RotateCcw, 
  MessageSquare, 
  Send, 
  Terminal, 
  ExternalLink, 
  ShieldAlert, 
  ListChecks, 
  Flame, 
  X, 
  Layers, 
  Cpu, 
  Database, 
  RefreshCw,
  Search,
  BookMarked,
  Clock,
  Code,
  Bug,
  HelpCircle,
  Sparkles,
  Award,
  Trash2,
  Copy,
  ChevronDown,
  ChevronUp,
  Check,
  Star,
  CheckSquare,
  Sun,
  Moon,
  AlertCircle
} from 'lucide-react';
import { CURRICULUM_DATA, MASTER_PROJECTS, PHASES } from './data/curriculum';
import { QUESTIONS_DB, InterviewQuestion } from './data/questionsDb';
import { DSA_CHAPTERS } from './data/dsaSheet';
import { SUBTOPIC_DOCS } from './data/subtopicDocs';
import { CurriculumTopic, EnrichedCurriculumTopic, ProjectDef, UserProgress, ChatMessage, DailyPlanner } from './types';

const getTierBadgeStyle = (tier: 'S' | 'A' | 'B' | 'C') => {
  switch (tier) {
    case 'S':
      return 'bg-rose-950/40 text-rose-450 border-rose-800/30 font-bold';
    case 'A':
      return 'bg-emerald-950/40 text-emerald-450 border-emerald-800/30 font-semibold';
    case 'B':
      return 'bg-cyan-950/40 text-cyan-455 border-cyan-800/30';
    case 'C':
      return 'bg-zinc-900 text-zinc-400 border-zinc-800';
    default:
      return 'bg-zinc-900 text-zinc-400 border-zinc-800';
  }
};

const getTierLabel = (tier: 'S' | 'A' | 'B' | 'C') => {
  switch (tier) {
    case 'S': return 'Tier S: Essential Core';
    case 'A': return 'Tier A: Highly Important';
    case 'B': return 'Tier B: Secondary Focus';
    case 'C': return 'Tier C: Elective Concept';
    default: return 'Tier A';
  }
};

const generateMentorResponseLocally = (userText: string, topic: EnrichedCurriculumTopic, project: ProjectDef): string => {
  const query = userText.toLowerCase();
  
  if (query.includes('skip') || query.includes('avoid') || query.includes('noise')) {
    return `Sai, for **${topic.title}**, do NOT waste time on:
    
    ⚠️ **"${topic.whatToSkip}"**
    
    Keep your depth capped at **${topic.exactDepth}** and stop there. Focus on the core implementation.`;
  }
  
  if (query.includes('mistake') || query.includes('error') || query.includes('pitfall') || query.includes('bug')) {
    return `Common engineering pitfalls in **${topic.title}** that you must identify and avoid:
    
    ${topic.commonMistakes.map((m, idx) => `${idx + 1}. **${m}**`).join('\n')}
    
    Make sure you handle these runtime exceptions and build proper validation guards.`;
  }
  
  if (query.includes('resource') || query.includes('book') || query.includes('read') || query.includes('docs')) {
    return `Here is your single learning resource path for **${topic.title}**:
    
    📚 **Resource**: ${topic.bestResource.title} (Chapters: ${topic.bestResource.chapters})
    🔗 **Official Docs**: [${topic.bestDocs.title}](${topic.bestDocs.url})
    
    Read this to hit your stop-depth: **"${topic.stopDepth}"**. Skip any video tutorial playlists.`;
  }
  
  if (query.includes('exercise') || query.includes('practice') || query.includes('code') || query.includes('write')) {
    return `Get hands-on immediately. Implement this exercise for **${topic.title}**:
    
    💻 **Exercise**: ${topic.implementationExercise.title}
    *Description*: ${topic.implementationExercise.description}
    *Expected Behavior*: ${topic.implementationExercise.expectedBehavior || "Correct runtime state"}
    
    ${topic.implementationExercise.verificationCmd ? `Run verification check:\n\`${topic.implementationExercise.verificationCmd}\`` : ""}`;
  }
  
  if (query.includes('project') || query.includes('stack') || query.includes('portfolio')) {
    return `Let's align with **${project.title}** (${project.difficulty} difficulty):
    
    - **Stack**: ${project.stack.join(', ')}
    - **Architecture**: ${project.architecture}
    - **Redis Strategy**: ${project.redisUsage}
    - **Scaling Bottleneck**: ${project.scalingConcerns}
    
    Focus strictly on resolving the checkpoint checklist inside the dashboard.`;
  }

  if (query.includes('hello') || query.includes('hi ') || query.includes('hey')) {
    return `Sai. Focus. Let's analyze your preparation for **${topic.title}**. What specific implementation tradeoffs are we reviewing? (Ask me about resources, exercises, things to skip, or mistakes).`;
  }
  
  return `Focus on **${topic.title}** internals.
  
  - **Target Depth**: ${topic.exactDepth}
  - **Stop Depth**: ${topic.stopDepth}
  - **Resource**: ${topic.bestResource.title} (Chapters: ${topic.bestResource.chapters})
  
  Write code, test for edge cases, and run benchmarks. Avoid consuming tutorials passively. Ask me what to skip or about common mistakes if you want direct parameters.`;
};

const TOPIC_ID_MIGRATIONS: Record<string, string> = {
  'python-fundamentals': 'python-core',
  'python-oop': 'python-core',
  'intermediate-python': 'python-advanced',
  'python-practices': 'python-advanced',
  'python-tools': 'python-advanced',
  'backend-apis': 'fastapi-core',
  'fastapi-stack': 'fastapi-core',
  'security-fundamentals': 'fastapi-security',
  'database-fundamentals': 'sql-databases',
  'sql-querying': 'sql-databases',
  'postgres-tuning': 'postgres-vector',
  'orm-sqlalchemy': 'postgres-vector',
  'redis-caching': 'redis-caching',
  'background-jobs': 'celery-workers',
  'message-brokers': 'realtime-messaging',
  'realtime-systems': 'realtime-messaging',
  'async-distributed-workflows': 'celery-workers',
  'docker-devops': 'docker-devops',
  'cloud-deployment': 'cloud-deploy',
  'version-control-git': 'cloud-deploy',
  'llm-fundamentals': 'llm-foundations',
  'llm-apis': 'llm-foundations',
  'embeddings': 'vector-rag',
  'rag-retrieval': 'vector-rag',
  'vector-databases': 'vector-rag',
  'ai-workflows': 'agentic-workflows',
  'ai-frameworks': 'agentic-workflows',
  'streaming-systems': 'ai-streaming',
  'ai-evaluation': 'ai-eval',
  'ai-observability': 'ai-eval',
  'cost-latency-optimization': 'ai-caching-serving',
  'model-serving': 'ai-caching-serving',
  'fine-tuning': 'fine-tuning-cuda',
  'multimodal-ai': 'multimodal-ai',
  'advanced-ai-systems': 'fine-tuning-cuda',
  'computer-science-fundamentals': 'cs-career',
  'system-design-fundamentals': 'cs-career',
  'dsa-advanced': 'cs-career',
  'projects-mastery': 'portfolio-projects',
  'interview-prep-mastery': 'cs-career'
};

export default function App() {
  // ---- PERSISTED LOCAL STORAGE STATE ----
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('color-scheme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('color-scheme', theme);
  }, [theme]);

  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('sai_engine_progress');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved); 
        // Migrate activeTopicId
        if (parsed.activeTopicId && TOPIC_ID_MIGRATIONS[parsed.activeTopicId]) {
          parsed.activeTopicId = TOPIC_ID_MIGRATIONS[parsed.activeTopicId];
        }
        // Migrate completedTopicIds
        if (parsed.completedTopicIds) {
          parsed.completedTopicIds = parsed.completedTopicIds.map((id: string) => TOPIC_ID_MIGRATIONS[id] || id);
          parsed.completedTopicIds = Array.from(new Set(parsed.completedTopicIds));
        }
        return parsed;
      } catch (e) {}
    }
    return {
      completedTopicIds: [],
      activeTopicId: 'python-core',
      completedProjectIds: [],
      openResourceClicksCount: 0,
      tutorialHopCount: 0,
      consecutiveNoCompletionStreak: 0,
      lastProgressUpdate: new Date().toISOString()
    };
  });

  const [dailyPlanner, setDailyPlanner] = useState<DailyPlanner>(() => {
    const saved = localStorage.getItem('sai_engine_planner');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        if (parsed.customTopicId && TOPIC_ID_MIGRATIONS[parsed.customTopicId]) {
          parsed.customTopicId = TOPIC_ID_MIGRATIONS[parsed.customTopicId];
        }
        return parsed; 
      } catch (e) {}
    }
    return {
      date: new Date().toISOString().split('T')[0],
      deepLearningTimeMs: 90 * 60 * 1000,
      codingTimeMs: 60 * 60 * 1000,
      revisionTimeMs: 30 * 60 * 1000,
      customTopicId: 'python-core',
      tasksCompleted: []
    };
  });

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('sai_engine_chat');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      {
        id: 'init-0',
        sender: 'mentor',
        text: "Welcome. You have 3 hours of focused learning targets today. Select a curriculum topic, explore topic-specific focus links, write complete solutions, and let's compile high-quality code.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });

  // ---- UI WORKFLOW STATES ----
  const [activeTab, setActiveTab] = useState<'curriculum' | 'projects' | 'dsa' | 'interview'>('curriculum');
  const [viewingTopic, setViewingTopic] = useState<EnrichedCurriculumTopic>(() => {
    return CURRICULUM_DATA.find(t => t.id === progress.activeTopicId) || CURRICULUM_DATA[0];
  });
  
  const [expandedPhases, setExpandedPhases] = useState<Record<number, boolean>>(() => {
    const init: Record<number, boolean> = {};
    for (let i = 1; i <= 10; i++) {
      init[i] = i === 1; // Default expand Phase 1
    }
    return init;
  });
  
  // ---- DSA TRACKER STATES ----
  const [completedDsaIds, setCompletedDsaIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('sai_engine_dsa_completed');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  });

  const [starredDsaIds, setStarredDsaIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('sai_engine_dsa_starred');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  });

  const [dsaSearch, setDsaSearch] = useState<string>('');
  const [dsaDifficulty, setDsaDifficulty] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');
  const [dsaStatus, setDsaStatus] = useState<'All' | 'Pending' | 'Completed' | 'Starred'>('All');
  const [expandedChaps, setExpandedChaps] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    DSA_CHAPTERS.forEach(ch => {
      init[ch.id] = true;
    });
    return init;
  });
  const [expandedReactQIds, setExpandedReactQIds] = useState<Record<number, boolean>>({});
  const [reactQSearch, setReactQSearch] = useState<string>('');
  const [starredReactQIds, setStarredReactQIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('interview_starred_qids');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  });
  const [masteredReactQIds, setMasteredReactQIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('interview_mastered_qids');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  });
  const [reactQSectionFilter, setReactQSectionFilter] = useState<string>('all');
  const [reactQTier1Filter, setReactQTier1Filter] = useState<boolean>(false);
  const [reactQStarredOnlyFilter, setReactQStarredOnlyFilter] = useState<boolean>(false);
  const [randomRecallQ, setRandomRecallQ] = useState<InterviewQuestion | null>(null);
  const [recallAnswerVisible, setRecallAnswerVisible] = useState<boolean>(false);
  const [streakCount, setStreakCount] = useState<number>(() => {
    const saved = localStorage.getItem('sai_engine_study_streak');
    return saved ? parseInt(saved, 10) : 0;
  });

  // --- Flashcard Mode States ---
  const [flashcardMode, setFlashcardMode] = useState<boolean>(false);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState<number>(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState<boolean>(false);

  // --- Mock Interview States ---
  const [mockInterviewMode, setMockInterviewMode] = useState<boolean>(false);
  const [mockQuestions, setMockQuestions] = useState<InterviewQuestion[]>([]);
  const [currentMockIndex, setCurrentMockIndex] = useState<number>(0);
  const [mockAnswers, setMockAnswers] = useState<Record<number, string>>({});
  const [mockScores, setMockScores] = useState<Record<number, number>>({});
  const [mockAnswersVisible, setMockAnswersVisible] = useState<Record<number, boolean>>({});
  const [mockTimeLeft, setMockTimeLeft] = useState<number>(900);
  const [mockTimerActive, setMockTimerActive] = useState<boolean>(false);
  const [mockReport, setMockReport] = useState<any | null>(null);
  const [mockHistory, setMockHistory] = useState<any[]>(() => {
    const saved = localStorage.getItem('sai_engine_mock_history');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  });

  const [topicSubTab, setTopicSubTab] = useState<'study' | 'practice' | 'qa' | 'simulator'>('study');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<ProjectDef>(MASTER_PROJECTS[0]);

  // ---- MOCK INTERVIEW SIMULATOR STATE ----
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [activeTip, setActiveTip] = useState<string | null>(null);
  const [showTip, setShowTip] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [interviewLoading, setInterviewLoading] = useState<boolean>(false);
  const [interviewError, setInterviewError] = useState<string | null>(null);
  const [evaluationResult, setEvaluationResult] = useState<{
    score: number;
    critique: string;
    exemplar: string;
    pointsToLearn: string[];
    isFallback: boolean;
  } | null>(null);
  const [interviewHistory, setInterviewHistory] = useState<Array<{
    topicId: string;
    topicTitle: string;
    question: string;
    userAnswer: string;
    score: number;
    critique: string;
    exemplar: string;
    timestamp: string;
  }>>(() => {
    const saved = localStorage.getItem('sai_engine_interview_history');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  });

  // Collapsible accordion tracker for QA list
  const [expandedQaIndex, setExpandedQaIndex] = useState<number | null>(null);

  // Copy-to-clipboard feedback state
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const [chatInput, setChatInput] = useState<string>('');
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [serverHealth, setServerHealth] = useState<string>('Local Offline Fallback Enabled');

  // ---- WEEKLY REVIEW STATE ----
  const [showWeeklyReport, setShowWeeklyReport] = useState<boolean>(false);

  // References
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Filter Categories
  const categories = [
    'All',
    'Python & OOP',
    'Core Backend & APIs',
    'SQL & Databases',
    'Redis & Messaging',
    'DevOps & DevOps Basics',
    'Applied AI & RAG',
    'System Design & DSA'
  ];

  // ---- SYNC EFFECTS ----
  useEffect(() => {
    localStorage.setItem('sai_engine_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('sai_engine_planner', JSON.stringify(dailyPlanner));
  }, [dailyPlanner]);

  useEffect(() => {
    localStorage.setItem('sai_engine_chat', JSON.stringify(chatMessages));
  }, [chatMessages]);

  useEffect(() => {
    localStorage.setItem('sai_engine_interview_history', JSON.stringify(interviewHistory));
  }, [interviewHistory]);

  useEffect(() => {
    localStorage.setItem('sai_engine_dsa_completed', JSON.stringify(completedDsaIds));
  }, [completedDsaIds]);

  useEffect(() => {
    localStorage.setItem('sai_engine_dsa_starred', JSON.stringify(starredDsaIds));
  }, [starredDsaIds]);

  useEffect(() => {
    setActiveQuestion(null);
    setActiveTip(null);
    setShowTip(false);
    setUserAnswer('');
    setEvaluationResult(null);
    setInterviewError(null);
  }, [viewingTopic]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Ping backend server health metrics
  useEffect(() => {
    setServerHealth('Self-Guided Offline Coach');
  }, []);

  // --- INTERVIEW PREP SYNC EFFECTS ---
  useEffect(() => {
    localStorage.setItem('interview_starred_qids', JSON.stringify(starredReactQIds));
  }, [starredReactQIds]);

  useEffect(() => {
    localStorage.setItem('interview_mastered_qids', JSON.stringify(masteredReactQIds));
  }, [masteredReactQIds]);

  useEffect(() => {
    localStorage.setItem('sai_engine_mock_history', JSON.stringify(mockHistory));
  }, [mockHistory]);

  // Countdown timer for Mock Interview
  useEffect(() => {
    let interval: any = null;
    if (mockTimerActive && mockTimeLeft > 0) {
      interval = setInterval(() => {
        setMockTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (mockTimeLeft === 0 && mockTimerActive) {
      setMockTimerActive(false);
      // Auto-submit mock interview
      handleFinishMock();
    }
    return () => clearInterval(interval);
  }, [mockTimerActive, mockTimeLeft]);

  // Streak update on mount
  useEffect(() => {
    const todayStr = new Date().toDateString();
    const lastDate = localStorage.getItem('sai_engine_last_active_date');
    const savedStreak = localStorage.getItem('sai_engine_study_streak');
    let currentStreak = savedStreak ? parseInt(savedStreak, 10) : 0;

    if (!lastDate) {
      currentStreak = 1;
      localStorage.setItem('sai_engine_last_active_date', todayStr);
      localStorage.setItem('sai_engine_study_streak', '1');
      setStreakCount(1);
    } else if (lastDate !== todayStr) {
      const lastActive = new Date(lastDate);
      const today = new Date(todayStr);
      const diffTime = Math.abs(today.getTime() - lastActive.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        currentStreak += 1;
      } else if (diffDays > 1) {
        currentStreak = 1;
      }
      localStorage.setItem('sai_engine_last_active_date', todayStr);
      localStorage.setItem('sai_engine_study_streak', currentStreak.toString());
      setStreakCount(currentStreak);
    }
  }, []);

  // Initial random recall question on tab enter
  useEffect(() => {
    if (activeTab === 'interview' && !randomRecallQ && QUESTIONS_DB.length > 0) {
      const randomQ = QUESTIONS_DB[Math.floor(Math.random() * QUESTIONS_DB.length)];
      setRandomRecallQ(randomQ);
      setRecallAnswerVisible(false);
    }
  }, [activeTab, randomRecallQ]);

  // ---- HELPER ACTIONS ----
  const totalDsaCount = DSA_CHAPTERS.reduce((sum, ch) => sum + ch.problems.length, 0);
  const completedDsaCount = completedDsaIds.length;

  const getLeetCodeUrl = (lc: string | null, name: string) => {
    if (lc) return `https://leetcode.com/problems/${lc}/`;
    return `https://www.google.com/search?q=${encodeURIComponent(name + ' leetcode')}`;
  };

  const getGfgUrl = (gfg: string | null, name: string) => {
    if (gfg) return gfg;
    return `https://www.google.com/search?q=${encodeURIComponent(name + ' geeksforgeeks')}`;
  };

  const getYoutubeUrl = (yt: string | null, name: string) => {
    if (yt) return yt;
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(name + ' dsa tutorial')}`;
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleOpenDocs = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // ---- MOCK INTERVIEW SIMULATOR ACTIONS ----
  const handleStartMock = () => {
    const selected: InterviewQuestion[] = [];
    for (let sec = 1; sec <= 5; sec++) {
      const secQList = QUESTIONS_DB.filter(q => q.section === sec);
      if (secQList.length > 0) {
        const randomQ = secQList[Math.floor(Math.random() * secQList.length)];
        selected.push(randomQ);
      }
    }
    
    if (selected.length < 5) {
      const remainingCount = 5 - selected.length;
      const allOthers = QUESTIONS_DB.filter(q => !selected.includes(q));
      for (let i = 0; i < remainingCount; i++) {
        if (allOthers.length > 0) {
          const idx = Math.floor(Math.random() * allOthers.length);
          selected.push(allOthers[idx]);
          allOthers.splice(idx, 1);
        }
      }
    }

    setMockQuestions(selected);
    setCurrentMockIndex(0);
    setMockAnswers({});
    setMockScores({});
    setMockAnswersVisible({});
    setMockTimeLeft(900); // 15 mins
    setMockTimerActive(true);
    setMockReport(null);
    setMockInterviewMode(true);
  };

  const handleFinishMock = () => {
    setMockTimerActive(false);
    const totalQuestions = mockQuestions.length;
    let scoreSum = 0;
    mockQuestions.forEach(q => {
      scoreSum += mockScores[q.id] || 0;
    });
    
    const maxPossible = totalQuestions * 5;
    const finalPct = maxPossible > 0 ? Math.round((scoreSum / maxPossible) * 100) : 0;
    
    let gradeLabel = 'Needs Revision';
    if (finalPct >= 90) gradeLabel = 'Distinguished Engineer (S)';
    else if (finalPct >= 80) gradeLabel = 'Lead Engineer (A)';
    else if (finalPct >= 70) gradeLabel = 'Senior Backend Engineer (B)';
    else if (finalPct >= 50) gradeLabel = 'Software Engineer II (C)';

    const report = {
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      score: finalPct,
      grade: gradeLabel,
      questions: mockQuestions.map(q => ({
        id: q.id,
        section: q.section,
        q: q.q,
        ans: q.ans,
        userOutline: mockAnswers[q.id] || '',
        score: mockScores[q.id] || 0
      }))
    };

    setMockReport(report);
    setMockHistory(prev => [report, ...prev]);
  };

  const handleRateMockQuestion = (qid: number, score: number) => {
    setMockScores(prev => ({ ...prev, [qid]: score }));
  };

  const handleResetMock = () => {
    setMockInterviewMode(false);
    setMockQuestions([]);
    setMockReport(null);
    setMockTimerActive(false);
  };

  const formatMockTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // ---- MOCK INTERVIEW ACTIONS ----
  const handleGenerateQuestion = () => {
    setInterviewLoading(true);
    setUserAnswer('');
    setEvaluationResult(null);
    setShowTip(false);
    setInterviewError(null);
    
    // Simulate thinking delay for UI feedback
    setTimeout(() => {
      const qas = viewingTopic.interviewQAs || [];
      if (qas.length > 0) {
        const randomIndex = Math.floor(Math.random() * qas.length);
        const selected = qas[randomIndex];
        setActiveQuestion(selected.question);
        setActiveTip(`Focus: ${selected.focusType}. Consider technical tradeoffs and execution bottlenecks.`);
      } else {
        setActiveQuestion(`Explain key exception classes, concurrency metrics, and memory boundaries of ${viewingTopic.title}.`);
        setActiveTip("Mention specific runtime traps and how you profile resource limits.");
      }
      setInterviewLoading(false);
    }, 400);
  };

  const handleSubmitResponse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeQuestion || !userAnswer.trim() || interviewLoading) return;

    setInterviewLoading(true);
    setInterviewError(null);

    // Simulate analysis delay
    setTimeout(() => {
      const cleanAns = userAnswer.trim().toLowerCase();
      const len = cleanAns.length;
      
      const matchingQa = (viewingTopic.interviewQAs || []).find((qa: any) => 
        qa.question.toLowerCase().includes(activeQuestion.toLowerCase()) || 
        activeQuestion.toLowerCase().includes(qa.question.toLowerCase())
      );

      const exemplar = matchingQa ? matchingQa.answer : `To implement this effectively in a production system:
1. Define deep validation rules using strict schemas or assertions.
2. Build relational structures with correct constraints, indexing, and transactional boundaries.
3. Decouple non-critical routes with message queues or background worker threads.
4. Set up structured logging and observability to trace execution footprints.`;

      const pointsToLearn = viewingTopic.commonMistakes.slice(0, 3);
      while (pointsToLearn.length < 3) {
        pointsToLearn.push("Understand production scaling tradeoffs");
        pointsToLearn.push("Study official documentation guidelines");
        pointsToLearn.push("Practice hands-on implementation details");
      }

      let score = 5;
      let critique = "";

      if (len < 30) {
        score = 3;
        critique = `Your response is too brief (${len} characters). In a technical backend/AI interview, a short answer suggests a lack of depth. You should elaborate on implementation details, runtime trade-offs, database indexing strategies, exception handling, or memory management. Aim for at least 2-3 detailed paragraphs to demonstrate competence.`;
      } else if (len < 100) {
        score = 5;
        critique = `You've provided a basic answer, but it lacks specific engineering depth. To score higher, explain the exact mechanisms (e.g., concurrency models, specific database index types, or API security policies) and discuss operational trade-offs like latency versus memory footprint.`;
      } else {
        const keywords = [...(viewingTopic.subtopics || []), "index", "async", "latency", "concurrency", "scaling", "cache", "thread", "database", "api", "memory", "error", "exception"];
        let matchCount = 0;
        keywords.forEach(kw => {
          if (cleanAns.includes(kw.toLowerCase())) {
            matchCount++;
          }
        });

        if (matchCount >= 4) {
          score = 9;
          critique = `Excellent response! You demonstrated strong technical literacy by referencing key architectural concepts (${matchCount} core terms matched). Your explanation covers operational context, design decisions, and system constraints. Study the exemplar answer below to refine your phrasing even further.`;
        } else if (matchCount >= 2) {
          score = 7;
          critique = `Solid effort. You included some correct conceptual terms, but the explanation could be more concrete. Try to explicitly link your design to performance metrics (like I/O bottlenecking, thread blocks, or database locking) to satisfy a strict interviewer.`;
        } else {
          score = 6;
          critique = `Your response is reasonably detailed, but it reads somewhat generically. You should use more specific terminology directly related to ${viewingTopic.title} and reference real-world execution safeguards (e.g. Pydantic validators, Redis keyspaces, or pgvector HNSW parameters) to establish technical credibility.`;
        }
      }

      setEvaluationResult({
        score,
        critique,
        exemplar,
        pointsToLearn,
        isFallback: false
      });

      setInterviewHistory(prev => [
        {
          topicId: viewingTopic.id,
          topicTitle: viewingTopic.title,
          question: activeQuestion,
          userAnswer: userAnswer,
          score,
          critique,
          exemplar,
          timestamp: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        ...prev
      ]);
      setInterviewLoading(false);
    }, 600);
  };

  const handleClearHistory = () => {
    setInterviewHistory([]);
  };

  const handleSelectTopic = (topic: EnrichedCurriculumTopic) => {
    setViewingTopic(topic);
    setTopicSubTab('study');
    setExpandedQaIndex(null);
    if (topic.phase) {
      setExpandedPhases(prev => ({ ...prev, [topic.phase]: true }));
    }
  };

  const handleLockTarget = (topicId: string) => {
    setProgress(p => ({
      ...p,
      activeTopicId: p.activeTopicId === topicId ? null : topicId
    }));
  };

  const toggleTopicMastery = (topicId: string) => {
    setProgress(p => {
      const isDone = p.completedTopicIds.includes(topicId);
      const updated = isDone 
        ? p.completedTopicIds.filter(id => id !== topicId)
        : [...p.completedTopicIds, topicId];
      return {
        ...p,
        completedTopicIds: updated,
        activeTopicId: p.activeTopicId === topicId ? null : p.activeTopicId
      };
    });
  };

  const toggleProjectMastery = (projectId: string) => {
    setProgress(p => {
      const isDone = p.completedProjectIds.includes(projectId);
      const updated = isDone
        ? p.completedProjectIds.filter(id => id !== projectId)
        : [...p.completedProjectIds, projectId];
      return { ...p, completedProjectIds: updated };
    });
  };

  const handleDailyTaskToggle = (taskKey: string) => {
    setDailyPlanner(d => {
      const isDone = d.tasksCompleted.includes(taskKey);
      const updated = isDone
        ? d.tasksCompleted.filter(t => t !== taskKey)
        : [...d.tasksCompleted, taskKey];
      return { ...d, tasksCompleted: updated };
    });
  };

  const resetTodayPlanner = () => {
    setDailyPlanner(d => ({
      ...d,
      tasksCompleted: []
    }));
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatInput(''); // Clear input immediately

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    setAiLoading(true);

    // Simulate mentor offline thinking delay
    setTimeout(() => {
      const mentorText = generateMentorResponseLocally(userText, viewingTopic, activeProject);
      setChatMessages(prev => [...prev, {
        id: Math.random().toString(),
        sender: 'mentor',
        text: mentorText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setAiLoading(false);
    }, 450);
  };

  // Predefined prompts shortcut triggers
  const handlePredefinedPrompt = (promptText: string) => {
    sendMessagePredefined(promptText);
  };

  const sendMessagePredefined = (text: string) => {
    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    setAiLoading(true);

    setTimeout(() => {
      const mentorText = generateMentorResponseLocally(text, viewingTopic, activeProject);
      setChatMessages(prev => [...prev, {
        id: Math.random().toString(),
        sender: 'mentor',
        text: mentorText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setAiLoading(false);
    }, 400);
  };

  // Clear chat logs (Resolves "mentors message was not going out to clear")
  const clearChatHistory = () => {
    setChatMessages([
      {
        id: 'init-cleared',
        sender: 'mentor',
        text: "Clean log slate initialized. Stethoscopes and terminal screens reset. What execution tradeoffs are we analyzing now?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  // Filter Syllabus lists based on Category and Search queries
  const filteredTopics = CURRICULUM_DATA.filter(t => {
    const isCat = categoryFilter === 'All' || t.category === categoryFilter;
    const isSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                     t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                     t.subtopics.some(st => st.toLowerCase().includes(searchQuery.toLowerCase()));
    return isCat && isSearch;
  });

  const totalSyllabusCount = CURRICULUM_DATA.length;
  const completedSyllabusCount = progress.completedTopicIds.length;
  const percentageSyllabus = Math.round((completedSyllabusCount / totalSyllabusCount) * 100);

  const lockedQueryTopic = CURRICULUM_DATA.find(t => t.id === progress.activeTopicId);

  // Filter DSA Chapters based on search, difficulty, and status
  const filteredDsaChapters = DSA_CHAPTERS.map(ch => {
    const problems = ch.problems.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(dsaSearch.toLowerCase());
      const matchesDiff = dsaDifficulty === 'All' || p.diff === dsaDifficulty;
      
      const isCompleted = completedDsaIds.includes(p.id);
      const isStarred = starredDsaIds.includes(p.id);
      const matchesStatus = 
        dsaStatus === 'All' ||
        (dsaStatus === 'Completed' && isCompleted) ||
        (dsaStatus === 'Pending' && !isCompleted) ||
        (dsaStatus === 'Starred' && isStarred);
        
      return matchesSearch && matchesDiff && matchesStatus;
    });
    return { ...ch, problems };
  }).filter(ch => ch.problems.length > 0);

  return (
    <div id="mentor_app_core" className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 font-sans flex flex-col antialiased transition-colors duration-200">
      
      {/* HEADER SECTION --- MINIMAL & HUMBLE */}
      <header className="border-b border-zinc-200 dark:border-zinc-900 bg-white/60 dark:bg-zinc-900/60 backdrop-blur px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-bold tracking-wider uppercase font-mono text-zinc-800 dark:text-zinc-200">Applied AI & Backend Engineering Syllabus</h1>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">High-ROI curriculum tracking core software engineering, Redis queues, pgvector, and LLM orchestration.</p>
        </div>

        {/* COMPACT HUD STRAP */}
        <div className="flex items-center gap-6 text-xs font-mono">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-450 dark:text-zinc-500 uppercase font-semibold">Roadmap Progress</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-bold">{completedSyllabusCount} / {totalSyllabusCount} Chapters ({percentageSyllabus}%)</span>
          </div>
          <div className="flex flex-col border-l border-zinc-200 dark:border-zinc-800 pl-4 font-mono">
            <span className="text-[10px] text-zinc-450 dark:text-zinc-500 uppercase font-semibold">Workspace Integration</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{serverHealth}</span>
          </div>
          {/* THEME TOGGLE SWITCH */}
          <div className="flex items-center border-l border-zinc-200 dark:border-zinc-800 pl-4">
            <button
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              className="p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-650 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>
      {/* CORE WORKSPACE SPLIT GRID */}
      <div className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-0 overflow-hidden">
        
        {/* LEFT COLUMN: SYLLABUS LISTING & CORE SPECIFICATIONS (Takes 8 spaces) */}
        <section className="xl:col-span-8 flex flex-col md:flex-row border-r border-zinc-200 dark:border-zinc-900 overflow-y-auto">
          
          {/* SYLLABUS DIRECTORY SIDEBAR (LEFT INSIDE THE MAIN LEFT COLUMN) */}
          <div className="w-full md:w-80 border-r border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 flex flex-col shrink-0 transition-colors duration-200">
            
            {/* Search and locked focus indicators */}
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-900 space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-zinc-450 dark:text-zinc-500 uppercase font-mono block">Curriculum Roadmap</span>
              
              {lockedQueryTopic ? (
                <div className="bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded p-2 text-xs flex items-center justify-between font-mono transition-colors duration-200">
                  <div className="truncate pr-1">
                    <div className="text-[9px] text-emerald-600 dark:text-emerald-400 uppercase font-semibold">Active Lock Target</div>
                    <div className="text-zinc-850 dark:text-zinc-200 font-bold truncate">{lockedQueryTopic.title}</div>
                  </div>
                  <button 
                    onClick={() => handleSelectTopic(lockedQueryTopic)}
                    className="text-[9px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white underline font-mono shrink-0 font-semibold ml-1 cursor-pointer"
                  >
                    SELECT
                  </button>
                </div>
              ) : (
                <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 rounded p-2 text-[10px] text-zinc-400 dark:text-zinc-500 font-mono transition-colors duration-200">
                  No active focus target locked.
                </div>
              )}

              <div className="relative">
                <input 
                  type="text"
                  placeholder="Filter curriculum..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-100 dark:bg-zinc-900 text-xs text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 rounded px-2.5 py-1.5 pl-7 focus:outline-none focus:border-zinc-300 dark:focus:border-zinc-700 font-mono placeholder:text-zinc-400 dark:placeholder:text-zinc-650 transition-colors duration-200"
                />
                <Search className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 absolute left-2.5 top-2" />
              </div>

              {/* Minimal category chips */}
              <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto pr-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`text-[9px] px-2 py-0.5 rounded font-mono border transition-all cursor-pointer ${
                      categoryFilter === cat 
                        ? 'bg-zinc-200 dark:bg-zinc-850 text-zinc-900 dark:text-emerald-400 border-zinc-300 dark:border-zinc-750' 
                        : 'bg-zinc-100 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400 border-transparent hover:text-zinc-200'
                    }`}
                  >
                    {cat.replace(' & ', '/').replace(' Basics', '')}
                  </button>
                ))}
              </div>
            </div>
            {/* List entries (Phase-wise Accordion) */}
            <div className="flex-1 overflow-y-auto max-h-[350px] md:max-h-[calc(100vh-270px)] p-2 space-y-2">
              {PHASES.map((phase) => {
                const phaseTopics = filteredTopics.filter(t => t.phase === phase.id);
                if (phaseTopics.length === 0 && searchQuery !== '') return null;
                
                const isExpanded = !!expandedPhases[phase.id];
                const completedInPhase = phaseTopics.filter(t => progress.completedTopicIds.includes(t.id)).length;
                const totalInPhase = phaseTopics.length;
                const isPhaseFullyCompleted = totalInPhase > 0 && completedInPhase === totalInPhase;

                return (
                  <div key={phase.id} className="border border-zinc-200 dark:border-zinc-900 rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-all duration-200">
                    <button
                      onClick={() => setExpandedPhases(prev => ({ ...prev, [phase.id]: !prev[phase.id] }))}
                      className="w-full flex items-center justify-between p-3 text-left font-sans bg-zinc-100 dark:bg-zinc-900/40 hover:bg-zinc-200 dark:hover:bg-zinc-900/80 transition-all duration-200 cursor-pointer"
                    >
                      <div className="space-y-0.5 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-bold font-mono tracking-wider text-emerald-600 dark:text-emerald-450 uppercase">
                            Phase {phase.id}
                          </span>
                          <span className="text-[8px] font-mono text-zinc-500 dark:text-zinc-600">~{phase.estHours}h</span>
                        </div>
                        <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200 tracking-tight block truncate w-36" title={phase.title}>
                          {phase.title.replace(`Phase ${phase.id}: `, '')}
                        </span>
                        {/* mini progress bar */}
                        <div className="w-32 h-0.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden mt-1">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${totalInPhase > 0 ? Math.round((completedInPhase / totalInPhase) * 100) : 0}%`,
                              background: isPhaseFullyCompleted ? '#34d399' : completedInPhase > 0 ? '#60a5fa' : '#52525b'
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border ${
                          isPhaseFullyCompleted 
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/40' 
                            : completedInPhase > 0
                            ? 'bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/30'
                            : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800'
                        }`}>
                          {totalInPhase > 0 ? Math.round((completedInPhase / totalInPhase) * 100) : 0}%
                        </span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-zinc-500" /> : <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />}
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="p-1.5 bg-white dark:bg-zinc-950/20 space-y-1 border-t border-zinc-200 dark:border-zinc-900">
                        {phaseTopics.length === 0 ? (
                          <div className="p-3 text-center text-[10px] text-zinc-450 dark:text-zinc-655 font-mono">No matching chapters.</div>
                        ) : (
                          phaseTopics.map((topic) => {
                            const isLocked = progress.activeTopicId === topic.id;
                            const isDone = progress.completedTopicIds.includes(topic.id);
                            const isViewing = viewingTopic.id === topic.id;

                            return (
                              <button
                                key={topic.id}
                                onClick={() => handleSelectTopic(topic)}
                                className={`w-full text-left p-2.5 rounded border block relative transition-all duration-200 cursor-pointer ${
                                  isViewing 
                                    ? 'bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-850 text-zinc-900 dark:text-zinc-100 shadow-sm' 
                                    : 'bg-transparent border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900/20'
                                }`}
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="text-[8px] text-zinc-400 dark:text-zinc-550 font-mono uppercase tracking-wider truncate w-32">{topic.category}</div>
                                  {isDone ? (
                                    <CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400 shrink-0" />
                                  ) : isLocked ? (
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 animate-pulse shrink-0" title="Locked Active Focus" />
                                  ) : null}
                                </div>

                                <div className={`text-[11px] font-semibold mt-0.5 tracking-tight pr-4 transition-colors duration-200 ${isViewing ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-700 dark:text-zinc-300'}`}>
                                  {topic.title}
                                </div>

                                <div className="mt-1.5 text-[9px] text-zinc-450 dark:text-zinc-550 font-mono flex items-center justify-between gap-1 transition-colors duration-200">
                                  <span>{topic.estHours}h</span>
                                  <span className={`px-1 py-0.2 rounded border text-[8px] font-bold ${
                                    topic.importanceScore >= 9 ? 'text-rose-600 dark:text-rose-450 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/40' :
                                    topic.importanceScore >= 7 ? 'text-emerald-600 dark:text-emerald-405 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/40' :
                                    topic.importanceScore >= 5 ? 'text-cyan-600 dark:text-cyan-455 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-900/40' :
                                    'text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
                                  }`}>
                                    Rating: {topic.importanceScore}/10
                                  </span>
                                  <span>ROI: {topic.interviewImportance}/10</span>
                                </div>
                              </button>
                            );
                          })
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* Quick clean reset */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 text-xs font-mono flex items-center justify-between text-zinc-450 dark:text-zinc-500 transition-colors duration-200">
              <span>IIT VIT-AP Roadmap</span>
              <span className="bg-zinc-200 dark:bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-650 dark:text-zinc-300 text-[10px]">v1.2</span>
            </div>

          </div>

          {/* MAIN FOCUS DESK & EXERCISES PANEL */}
          <div className="flex-1 bg-white dark:bg-zinc-950 flex flex-col h-full min-w-0 transition-colors duration-200">
            
            <div className="border-b border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 px-6 py-4 transition-colors duration-200">
              <nav className="flex gap-2">
                <button
                  onClick={() => setActiveTab('curriculum')}
                  className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-wide border transition-all cursor-pointer relative ${
                    activeTab === 'curriculum' 
                      ? 'bg-zinc-150 dark:bg-zinc-900 border-zinc-350 dark:border-zinc-850 text-emerald-600 dark:text-emerald-400 shadow-sm' 
                      : 'bg-transparent border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    CURRICULUM SPECIFICATIONS
                  </div>
                  {parseInt(localStorage.getItem('sai_completed_phases_count') || '0', 10) > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center shadow-[0_0_6px_rgba(16,185,129,0.5)]">
                      {parseInt(localStorage.getItem('sai_completed_phases_count') || '0', 10)}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => {
                    setActiveTab('projects');
                    // Pick relevant project based on current syllabus category representation
                    const autoPrj = MASTER_PROJECTS.find(p => p.stack.some(st => viewingTopic.category.toLowerCase().includes(st.toLowerCase())));
                    if (autoPrj) setActiveProject(autoPrj);
                  }}
                  className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-wide border transition-all cursor-pointer ${
                    activeTab === 'projects' 
                      ? 'bg-zinc-150 dark:bg-zinc-900 border-zinc-350 dark:border-zinc-850 text-emerald-600 dark:text-emerald-400 shadow-sm' 
                      : 'bg-transparent border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    PORTFOLIO DESIGNS ({progress.completedProjectIds.length}/6)
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('dsa')}
                  className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-wide border transition-all cursor-pointer ${
                    activeTab === 'dsa' 
                      ? 'bg-zinc-150 dark:bg-zinc-900 border-zinc-350 dark:border-zinc-850 text-emerald-600 dark:text-emerald-400 shadow-sm' 
                      : 'bg-transparent border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <CheckSquare className="w-3.5 h-3.5" />
                    DSA TRACKER ({completedDsaCount}/{totalDsaCount})
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('interview')}
                  className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-wide border transition-all cursor-pointer ${
                    activeTab === 'interview' 
                      ? 'bg-zinc-150 dark:bg-zinc-900 border-zinc-350 dark:border-zinc-850 text-emerald-600 dark:text-emerald-400 shadow-sm' 
                      : 'bg-transparent border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    INTERVIEW PREP
                  </div>
                </button>
                <button
                  onClick={() => setShowWeeklyReport(v => !v)}
                  className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-wide border transition-all cursor-pointer ml-auto ${
                    showWeeklyReport
                      ? 'bg-amber-950/40 border-amber-500/30 text-amber-400'
                      : 'bg-transparent border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">📊</span>
                    WEEKLY REVIEW
                  </div>
                </button>
              </nav>
            </div>

            {/* ── WEEKLY REVIEW PANEL ── */}
            {showWeeklyReport && (() => {
              // Get week start (last Sunday midnight)
              const now = new Date();
              const dayOfWeek = now.getDay();
              const weekStart = new Date(now);
              weekStart.setDate(now.getDate() - dayOfWeek);
              weekStart.setHours(0,0,0,0);

              // What was saved as "baseline" (start of week snapshot)?
              let baseline: { topicIds: string[]; dsaIds: number[] } = { topicIds: [], dsaIds: [] };
              try {
                const saved = localStorage.getItem('sai_weekly_baseline');
                if (saved) {
                  const parsed = JSON.parse(saved);
                  // If saved this week, use it; else reset
                  if (parsed.weekStart === weekStart.toISOString()) {
                    baseline = parsed;
                  } else {
                    // New week – save current state as baseline
                    const newBase = { topicIds: [...progress.completedTopicIds], dsaIds: [...completedDsaIds], weekStart: weekStart.toISOString() };
                    localStorage.setItem('sai_weekly_baseline', JSON.stringify(newBase));
                  }
                } else {
                  const newBase = { topicIds: [...progress.completedTopicIds], dsaIds: [...completedDsaIds], weekStart: weekStart.toISOString() };
                  localStorage.setItem('sai_weekly_baseline', JSON.stringify(newBase));
                }
              } catch {}

              const newTopicsThisWeek = progress.completedTopicIds.filter(id => !baseline.topicIds.includes(id));
              const newDsaThisWeek    = completedDsaIds.filter(id => !baseline.dsaIds.includes(id));
              const overallPct = CURRICULUM_DATA.length > 0 ? Math.round((progress.completedTopicIds.length / CURRICULUM_DATA.length) * 100) : 0;
              const dsaPct     = totalDsaCount > 0 ? Math.round((completedDsaIds.length / totalDsaCount) * 100) : 0;
              const completedPhases = PHASES.filter(ph => {
                const phTopics = CURRICULUM_DATA.filter(t => t.phase === ph.id);
                return phTopics.length > 0 && phTopics.every(t => progress.completedTopicIds.includes(t.id));
              });

              const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
              const dayLabel = days[dayOfWeek];

              return (
                <div className="mx-4 mb-0 mt-0 border border-amber-500/20 bg-amber-950/10 rounded-lg p-4 space-y-3 animate-in slide-in-from-top-1 duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold font-mono tracking-widest text-amber-400 uppercase">📊 Weekly Review — {dayLabel}</span>
                    </div>
                    <button onClick={() => setShowWeeklyReport(false)} className="text-zinc-500 hover:text-zinc-300 text-xs">✕</button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-zinc-950/60 border border-zinc-900 rounded p-3 text-center">
                      <div className="text-xl font-bold font-mono text-emerald-400">{newTopicsThisWeek.length}</div>
                      <div className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5">Topics This Week</div>
                    </div>
                    <div className="bg-zinc-950/60 border border-zinc-900 rounded p-3 text-center">
                      <div className="text-xl font-bold font-mono text-blue-400">{newDsaThisWeek.length}</div>
                      <div className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5">DSA This Week</div>
                    </div>
                    <div className="bg-zinc-950/60 border border-zinc-900 rounded p-3 text-center">
                      <div className="text-xl font-bold font-mono text-amber-400">{completedPhases.length}/10</div>
                      <div className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5">Phases Done</div>
                    </div>
                    <div className="bg-zinc-950/60 border border-zinc-900 rounded p-3 text-center">
                      <div className="text-xl font-bold font-mono text-violet-400">{overallPct}%</div>
                      <div className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5">Curriculum %</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {/* Curriculum progress bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[9px] font-mono text-zinc-500">
                        <span>Curriculum</span><span className="text-emerald-400">{progress.completedTopicIds.length}/{CURRICULUM_DATA.length}</span>
                      </div>
                      <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${overallPct}%` }} />
                      </div>
                    </div>
                    {/* DSA progress bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[9px] font-mono text-zinc-500">
                        <span>DSA Sheet</span><span className="text-blue-400">{completedDsaIds.length}/{totalDsaCount}</span>
                      </div>
                      <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${dsaPct}%` }} />
                      </div>
                    </div>
                  </div>
                  {newTopicsThisWeek.length > 0 && (
                    <div className="text-[9px] font-mono text-zinc-500">
                      <span className="text-zinc-400 font-bold">This week: </span>
                      {newTopicsThisWeek.slice(0,5).map(id => {
                        const t = CURRICULUM_DATA.find(x => x.id === id);
                        return t ? t.title : id;
                      }).join(' · ')}{newTopicsThisWeek.length > 5 ? ` +${newTopicsThisWeek.length - 5} more` : ''}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* TAB PANELS */}
            <div className="p-6 flex-1 space-y-6">
              
              {/* 1. CURRICULUM WORKCASE */}
              {activeTab === 'curriculum' && (
                <div className="space-y-6">
                  
                  {/* --- SVG ROADMAP PROGRESS VISUALIZER --- */}
                  <div className="bg-white dark:bg-zinc-900/35 border border-zinc-200 dark:border-zinc-900 rounded-lg p-4 space-y-3 transition-colors duration-200 overflow-hidden shadow-sm">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-500 dark:text-zinc-405 uppercase font-bold tracking-wider">Roadmap Phase Mind-Map</span>
                      <span className="text-zinc-450 dark:text-zinc-600">Click node to navigate phases</span>
                    </div>

                    <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-900">
                      <div className="min-w-[960px] h-[95px] relative">
                        <svg className="w-full h-full" viewBox="0 0 960 95">
                          <defs>
                            <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="2" result="blur" />
                              <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                          </defs>

                          {/* 1. DRAW CONNECTING SEGMENTS */}
                          {PHASES.slice(0, 9).map((phase, idx) => {
                            const x1 = 50 + idx * 95;
                            const x2 = 50 + (idx + 1) * 95;
                            const y = 40;

                            const phaseTopics = CURRICULUM_DATA.filter(t => t.phase === phase.id);
                            const completedInPhase = phaseTopics.filter(t => progress.completedTopicIds.includes(t.id)).length;
                            const isCompleted = phaseTopics.length > 0 && completedInPhase === phaseTopics.length;

                            return (
                              <g key={`line-${phase.id}`}>
                                <line
                                  x1={x1}
                                  y1={y}
                                  x2={x2}
                                  y2={y}
                                  stroke="rgba(63, 63, 70, 0.3)"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                />
                                {isCompleted && (
                                  <line
                                    x1={x1}
                                    y1={y}
                                    x2={x2}
                                    y2={y}
                                    stroke="#10B981"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    filter="url(#glow-emerald)"
                                  />
                                )}
                              </g>
                            );
                          })}

                          {/* 2. DRAW PHASE NODES */}
                          {PHASES.map((phase, idx) => {
                            const x = 50 + idx * 95;
                            const y = 40;
                            const r = 18;
                            const c = 2 * Math.PI * r;

                            const phaseTopics = CURRICULUM_DATA.filter(t => t.phase === phase.id);
                            const completedInPhase = phaseTopics.filter(t => progress.completedTopicIds.includes(t.id)).length;
                            const pct = phaseTopics.length > 0 ? Math.round((completedInPhase / phaseTopics.length) * 100) : 0;
                            const strokeOffset = c - (pct / 100) * c;

                            const isViewingPhase = viewingTopic.phase === phase.id;
                            const isFullyCompleted = pct === 100;
                            const hasActiveLock = phaseTopics.some(t => progress.activeTopicId === t.id);

                            return (
                              <g
                                key={`node-${phase.id}`}
                                className="cursor-pointer group"
                                onClick={() => {
                                  setExpandedPhases(prev => ({ ...prev, [phase.id]: true }));
                                  if (phaseTopics.length > 0) {
                                    handleSelectTopic(phaseTopics[0]);
                                  }
                                }}
                              >
                                {(isViewingPhase || hasActiveLock) && (
                                  <circle
                                    cx={x}
                                    cy={y}
                                    r={r + 4}
                                    fill="none"
                                    stroke={hasActiveLock ? '#FBBF24' : '#10B981'}
                                    strokeWidth="1.5"
                                    strokeDasharray="4 4"
                                    className="animate-pulse"
                                  />
                                )}

                                <circle
                                  cx={x}
                                  cy={y}
                                  r={r}
                                  fill={
                                    isFullyCompleted ? 'rgba(16, 185, 129, 0.15)' :
                                    isViewingPhase ? 'rgba(30, 41, 59, 0.8)' :
                                    '#090d16'
                                  }
                                  stroke={isViewingPhase ? '#10B981' : 'rgba(63, 63, 70, 0.4)'}
                                  strokeWidth="2"
                                  className="group-hover:stroke-zinc-400 transition-colors"
                                />

                                {pct > 0 && !isFullyCompleted && (
                                  <circle
                                    cx={x}
                                    cy={y}
                                    r={r}
                                    fill="none"
                                    stroke="#10B981"
                                    strokeWidth="2"
                                    strokeDasharray={c}
                                    strokeDashoffset={strokeOffset}
                                    transform={`rotate(-90 ${x} ${y})`}
                                  />
                                )}
                                {isFullyCompleted && (
                                  <circle
                                    cx={x}
                                    cy={y}
                                    r={r}
                                    fill="none"
                                    stroke="#10B981"
                                    strokeWidth="2"
                                  />
                                )}

                                <text
                                  x={x}
                                  y={y + 4}
                                  textAnchor="middle"
                                  className="font-mono text-[9px] font-bold fill-current transition-colors"
                                  style={{
                                    fill: isFullyCompleted ? '#34D399' :
                                          isViewingPhase ? '#10B981' :
                                          '#71717A'
                                  }}
                                >
                                  {isFullyCompleted ? '✓' : `P${phase.id}`}
                                </text>

                                <text
                                  x={x}
                                  y={y + 30}
                                  textAnchor="middle"
                                  className={`font-sans text-[8.5px] transition-all tracking-tight ${
                                    isViewingPhase 
                                      ? 'fill-zinc-800 dark:fill-white font-bold' 
                                      : 'fill-zinc-450 dark:fill-zinc-500 font-medium group-hover:fill-zinc-300'
                                  }`}
                                >
                                  {phase.title.replace(`Phase ${phase.id}: `, '').split(' ')[0]}
                                </text>
                              </g>
                            );
                          })}
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Topic focus header */}
                  <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 rounded-lg p-5 space-y-4 transition-colors duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[9px] bg-zinc-200 dark:bg-zinc-800 text-zinc-750 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700 px-2.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider transition-colors duration-200">
                            {viewingTopic.category}
                          </span>
                          <span className={`text-[9px] border px-2.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider transition-colors duration-200 ${
                            viewingTopic.importanceScore >= 9 ? 'text-rose-650 dark:text-rose-455 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/30 font-bold' :
                            viewingTopic.importanceScore >= 7 ? 'text-emerald-650 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/30 font-semibold' :
                            viewingTopic.importanceScore >= 5 ? 'text-cyan-650 dark:text-cyan-455 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/30' :
                            'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800'
                          }`} title={viewingTopic.importanceScore >= 9 ? 'Essential Core (10/10)' : viewingTopic.importanceScore >= 7 ? 'Highly Required (8/10)' : viewingTopic.importanceScore >= 5 ? 'Secondary Focus (6/10)' : 'Elective Concept (4/10)'}>
                            Rating: {viewingTopic.importanceScore}/10
                          </span>
                          {progress.completedTopicIds.includes(viewingTopic.id) && (
                            <span className="text-[9px] bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 px-2 py-0.5 rounded font-mono font-bold uppercase transition-colors duration-200">
                              ✓ Concept Mastered
                            </span>
                          )}
                          {progress.activeTopicId === viewingTopic.id && (
                            <span className="text-[9px] bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-500 border border-amber-200 dark:border-amber-500/20 px-2 py-0.5 rounded font-mono font-bold uppercase animate-pulsing transition-colors duration-200">
                              ● Locked Active Subject
                            </span>
                          )}
                        </div>
                        <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white font-sans transition-colors duration-200">{viewingTopic.title}</h2>
                        <p className="text-xs text-zinc-650 dark:text-zinc-300 max-w-2xl leading-relaxed transition-colors duration-200">{viewingTopic.description}</p>
                        
                        {/* Clear Description of Importance */}
                        <div className="mt-2.5 flex items-start gap-2 text-xs bg-white dark:bg-zinc-950/60 p-3 rounded border border-zinc-200 dark:border-zinc-900 transition-colors duration-200 shadow-sm">
                          <AlertCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-zinc-800 dark:text-zinc-200">Importance Context: </span>
                            <span className="text-zinc-600 dark:text-zinc-400 font-mono text-[11px] leading-relaxed">{viewingTopic.importanceDescription}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action controllers */}
                      <div className="flex gap-2 font-mono text-[11px]">
                        <button
                          onClick={() => handleLockTarget(viewingTopic.id)}
                          className={`p-2 px-3.5 border rounded font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                            progress.activeTopicId === viewingTopic.id
                              ? 'bg-amber-500 text-zinc-950 border-amber-400 hover:bg-amber-450'
                              : 'bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-850 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900'
                          }`}
                        >
                          <Lock className="w-3.5 h-3.5" />
                          {progress.activeTopicId === viewingTopic.id ? 'RELEASE HOVER LOCK' : 'COMMIT & LOCK TARGET'}
                        </button>

                        <button
                          onClick={() => toggleTopicMastery(viewingTopic.id)}
                          className={`p-2 px-3.5 border rounded font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                            progress.completedTopicIds.includes(viewingTopic.id)
                              ? 'bg-zinc-150 dark:bg-zinc-900 text-zinc-550 dark:text-zinc-400 border-zinc-200 dark:border-zinc-805 hover:text-zinc-800 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800'
                              : 'bg-emerald-500 text-zinc-950 border-emerald-400 hover:bg-emerald-455'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {progress.completedTopicIds.includes(viewingTopic.id) ? 'REVOKE COMPLETION' : 'MARK COMPLETED'}
                        </button>
                      </div>
                    </div>

                    {/* Metadata indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3.5 border-t border-zinc-200 dark:border-zinc-900/60 text-[11px] font-mono transition-colors duration-200">
                      <div className="bg-white dark:bg-zinc-950/40 p-2 rounded border border-zinc-200 dark:border-zinc-900">
                        <div className="text-zinc-400 dark:text-zinc-500 uppercase text-[9px]">Interview Value</div>
                        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{viewingTopic.interviewImportance} <span className="text-[9px] text-zinc-450 dark:text-zinc-650">/ 10 Rating</span></span>
                      </div>
                      <div className="bg-white dark:bg-zinc-950/40 p-2 rounded border border-zinc-200 dark:border-zinc-900">
                        <div className="text-zinc-400 dark:text-zinc-500 uppercase text-[9px]">Project Context</div>
                        <span className="text-sm font-bold text-teal-600 dark:text-teal-405">{viewingTopic.projectRelevance} <span className="text-[9px] text-zinc-450 dark:text-zinc-650">/ 10 Relevance</span></span>
                      </div>
                      <div className="bg-white dark:bg-zinc-950/40 p-2 rounded border border-zinc-200 dark:border-zinc-900">
                        <div className="text-zinc-400 dark:text-zinc-500 uppercase text-[9px]">Target Stop Scope</div>
                        <span className="text-zinc-700 dark:text-zinc-350 font-bold truncate block" title={viewingTopic.stopDepth}>{viewingTopic.stopDepth}</span>
                      </div>
                      <div className="bg-white dark:bg-zinc-950/40 p-2 rounded border border-zinc-200 dark:border-zinc-900">
                        <div className="text-amber-600 dark:text-amber-500 uppercase text-[9px] font-semibold">Muted Noise (Skip)</div>
                        <span className="text-zinc-600 dark:text-zinc-405 truncate block" title={viewingTopic.whatToSkip}>{viewingTopic.whatToSkip}</span>
                      </div>
                    </div>
                  </div>

                  {/* Focus Sub-tab bar */}
                  <div className="border-b border-zinc-900 flex gap-4">
                    <button
                      onClick={() => setTopicSubTab('study')}
                      className={`py-2 px-1 text-xs font-mono font-bold relative ${
                        topicSubTab === 'study' ? 'text-emerald-400 border-b-2 border-emerald-500' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        1. STUDY RESOURCES
                      </div>
                    </button>

                    <button
                      onClick={() => setTopicSubTab('practice')}
                      className={`py-2 px-1 text-xs font-mono font-bold relative ${
                        topicSubTab === 'practice' ? 'text-emerald-400 border-b-2 border-emerald-500' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5" />
                        2. PRACTICE EXERCISE
                      </div>
                    </button>

                    <button
                      onClick={() => setTopicSubTab('qa')}
                      className={`py-2 px-1 text-xs font-mono font-bold relative ${
                        topicSubTab === 'qa' ? 'text-emerald-400 border-b-2 border-emerald-500' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5" />
                        3. INTERVIEW CHECKPOINTS
                      </div>
                    </button>

                    <button
                      onClick={() => setTopicSubTab('simulator')}
                      className={`py-2 px-1 text-xs font-mono font-bold relative ${
                        topicSubTab === 'simulator' ? 'text-emerald-400 border-b-2 border-emerald-500' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        4. INTERVIEW SIMULATOR
                      </div>
                    </button>
                  </div>

                  {/* STUDY SUB PANEL CONTENT */}
                  {topicSubTab === 'study' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="bg-zinc-900/20 border border-zinc-900 p-4 rounded-lg space-y-2 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono font-bold block mb-1">Recommended Primary Textbook</span>
                            <span className="text-zinc-200 text-xs font-bold block">{viewingTopic.bestResource.title}</span>
                          </div>
                          <p className="text-xs text-zinc-400 font-mono font-medium mt-auto">Focus Area: <span className="text-emerald-400">{viewingTopic.bestResource.chapters}</span></p>
                        </div>

                        {/* ALTERNATIVE RESOURCES (1 DOC, 1 VIDEO) */}
                        <div className="bg-zinc-900/20 border border-zinc-900 p-4 rounded-lg space-y-3 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-amber-500 font-mono font-bold block mb-1">Alternative Study Paths</span>
                            <span className="text-zinc-400 text-[10px] font-mono block mb-2 leading-relaxed">External curriculum checkpoints for comprehensive concept mapping:</span>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="bg-zinc-950 p-2 border border-zinc-900 rounded hover:border-zinc-850 transition-all flex items-center justify-between">
                              <div className="flex flex-col truncate mr-2">
                                <span className="text-[9px] text-zinc-500 uppercase font-mono">1. Vetted Documentation</span>
                                <span className="text-xs text-zinc-200 font-bold truncate block" title={viewingTopic.alternativeDocs.title}>{viewingTopic.alternativeDocs.title}</span>
                              </div>
                              <button
                                onClick={() => handleOpenDocs(viewingTopic.alternativeDocs.url)}
                                className="text-[10px] bg-zinc-900 hover:bg-zinc-800 hover:text-white text-zinc-350 p-1 px-2 rounded font-mono flex items-center gap-1 border border-zinc-800 shrink-0 cursor-pointer active:scale-95 transition-all"
                              >
                                Docs <ExternalLink className="w-2.5 h-2.5 inline" />
                              </button>
                            </div>

                            <div className="bg-zinc-950 p-2 border border-zinc-900 rounded hover:border-zinc-850 transition-all flex items-center justify-between">
                              <div className="flex flex-col truncate mr-2">
                                <span className="text-[9px] text-zinc-500 uppercase font-mono">2. Video Walkthrough</span>
                                <span className="text-xs text-zinc-200 font-bold truncate block" title={viewingTopic.alternativeVideo.title}>{viewingTopic.alternativeVideo.title}</span>
                              </div>
                              <button
                                onClick={() => handleOpenDocs(viewingTopic.alternativeVideo.url)}
                                className="text-[10px] bg-zinc-900 hover:bg-zinc-800 hover:text-white text-zinc-355 p-1 px-2 rounded font-mono flex items-center gap-1 border border-zinc-800 shrink-0 cursor-pointer active:scale-95 transition-all"
                              >
                                Play <Tv className="w-2.5 h-2.5 text-rose-500 inline" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* TOPIC-WISE FOCUS LINKS */}
                        <div className="bg-zinc-900/20 border border-zinc-900 p-4 rounded-lg space-y-2.5">
                          <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-mono font-bold block">
                            Subtopic Focus Documentation Links
                          </span>
                          <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                            {viewingTopic.subtopics.map((st, sidx) => {
                              const cleanKey = st.trim();
                              const url = SUBTOPIC_DOCS[cleanKey] || viewingTopic.bestDocs.url;
                              return (
                                <div key={sidx} className="flex justify-between items-center bg-zinc-950 p-[5px] px-2.5 border border-zinc-900 rounded hover:border-zinc-850 transition-all">
                                  <span className="text-[11px] text-zinc-300 font-mono truncate mr-2" title={st}>
                                    {st}
                                  </span>
                                  <button
                                    onClick={() => handleOpenDocs(url)}
                                    className="text-[10px] bg-zinc-900 hover:bg-zinc-800 hover:text-white text-zinc-405 p-1 px-2 rounded font-mono flex items-center gap-1 border border-zinc-800 shrink-0 active:bg-zinc-800 cursor-pointer"
                                  >
                                    Docs <ExternalLink className="w-2.5 h-2.5 text-zinc-550 inline" />
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Depth rules and skipping points */}
                      <div className="bg-zinc-950 border border-zinc-900 p-5 rounded-lg space-y-3">
                        <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase font-mono block">Depth Target Standard</span>
                        <p className="text-xs text-zinc-300 leading-relaxed font-mono">{viewingTopic.exactDepth}</p>
                      </div>
                    </div>
                  )}

                  {/* PRACTICE MODULE PANEL */}
                  {topicSubTab === 'practice' && (
                    <div className="space-y-5">
                      
                      {/* Code Implementation Box */}
                      <div className="border border-zinc-900 rounded-lg overflow-hidden bg-zinc-900/10">
                        <div className="bg-zinc-900/30 px-4 py-2 flex items-center justify-between border-b border-zinc-900">
                          <div className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs text-zinc-300 font-mono font-bold">Write Complete Solution Boilerplate</span>
                          </div>
                          {viewingTopic.implementationExercise.codeSnippet && (
                            <button
                              onClick={() => copyToClipboard(viewingTopic.implementationExercise.codeSnippet || '', 'impl')}
                              className="text-[10px] text-zinc-400 hover:text-white flex items-center gap-1 font-mono bg-zinc-900 p-1 px-2 rounded border border-zinc-800"
                            >
                              {copiedText === 'impl' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                              {copiedText === 'impl' ? 'Copied!' : 'Copy Code'}
                            </button>
                          )}
                        </div>

                        <div className="p-4 space-y-3">
                          <h4 className="text-xs font-bold text-zinc-200">{viewingTopic.implementationExercise.title}</h4>
                          <p className="text-xs text-zinc-455 leading-relaxed">{viewingTopic.implementationExercise.description}</p>
                          
                          {viewingTopic.implementationExercise.codeSnippet && (
                            <div className="bg-zinc-950 border border-zinc-900 rounded-md p-3.5 overflow-x-auto relative mt-2">
                              <pre className="text-xs text-emerald-700 dark:text-emerald-400 font-mono whitespace-pre">{viewingTopic.implementationExercise.codeSnippet}</pre>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Debugging failure case module */}
                      <div className="border border-zinc-900 rounded-lg overflow-hidden bg-zinc-900/10">
                        <div className="bg-zinc-900/30 px-4 py-2 flex items-center justify-between border-b border-zinc-900">
                          <div className="flex items-center gap-2">
                            <Bug className="w-4 h-4 text-rose-400" />
                            <span className="text-xs text-zinc-300 font-mono font-bold">Trace Common Execution Exception</span>
                          </div>
                          {viewingTopic.debuggingExercise.codeSnippet && (
                            <button
                              onClick={() => copyToClipboard(viewingTopic.debuggingExercise.codeSnippet || '', 'debug')}
                              className="text-[10px] text-zinc-400 hover:text-white flex items-center gap-1 font-mono bg-zinc-900 p-1 px-2 rounded border border-zinc-800"
                            >
                              {copiedText === 'debug' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                              {copiedText === 'debug' ? 'Copied!' : 'Copy Code'}
                            </button>
                          )}
                        </div>

                        <div className="p-4 space-y-3">
                          <h4 className="text-xs font-bold text-zinc-200">{viewingTopic.debuggingExercise.title}</h4>
                          <p className="text-xs text-zinc-455 leading-relaxed">{viewingTopic.debuggingExercise.description}</p>

                          {viewingTopic.debuggingExercise.codeSnippet && (
                            <div className="bg-zinc-950 border border-zinc-900 rounded-md p-3.5 overflow-x-auto relative mt-2">
                              <pre className="text-xs text-rose-700 dark:text-rose-400 font-mono whitespace-pre">{viewingTopic.debuggingExercise.codeSnippet}</pre>
                            </div>
                          )}

                          <div className="pt-2">
                            <span className="text-[10px] font-bold text-rose-300 uppercase font-mono block">Production Debugging Impact</span>
                            <p className="text-xs text-zinc-400 font-mono leading-relaxed">{viewingTopic.productionRelevance}</p>
                          </div>
                        </div>
                      </div>

                      {/* Anti-Patterns checklist */}
                      <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-850">
                        <span className="text-[10px] text-zinc-400 font-bold uppercase font-mono tracking-widest block mb-2">COMMON BEGINNER ERRORS TO AVOID</span>
                        <ul className="text-xs text-zinc-350 list-none font-mono space-y-2">
                          {viewingTopic.commonMistakes.map((mistake, mi) => (
                            <li key={mi} className="flex gap-2.5 items-start">
                              <span className="text-zinc-650 font-bold shrink-0">#{mi+1}</span>
                              <span className="leading-relaxed">{mistake}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  )}

                  {/* MOCK INTERVIEW SIMULATOR */}
                  {topicSubTab === 'simulator' && (
                    <div className="space-y-6">
                      
                      {/* Interactive Console Workspace */}
                      <div className="border border-zinc-900 rounded-lg overflow-hidden bg-zinc-950">
                        {/* Header Banner */}
                        <div className="bg-zinc-900/30 px-5 py-3.5 flex items-center justify-between border-b border-zinc-900">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs text-zinc-300 font-mono font-bold tracking-wide uppercase">AI INTERVIEW SIMULATOR CONSOLE</span>
                          </div>
                          <span className="text-[9px] bg-zinc-800 text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded font-mono font-bold uppercase">
                            {viewingTopic.category}
                          </span>
                        </div>

                        {/* Loading State or Initial Setup Screen */}
                        {!activeQuestion && !interviewLoading && (
                          <div className="p-6 text-center space-y-4">
                            <div className="max-w-md mx-auto space-y-2">
                              <Award className="w-8 h-8 text-emerald-500 mx-auto animate-pulse" />
                              <h3 className="text-sm font-bold text-zinc-200">Test Your Production Readiness</h3>
                              <p className="text-xs text-zinc-405 leading-relaxed font-mono">
                                Let your virtual technical lead ask you a randomized technical question based on <strong className="text-emerald-400">{viewingTopic.title}</strong> depth parameters.
                              </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-lg mx-auto text-[10px] font-mono text-zinc-400">
                              <div className="bg-zinc-900/40 p-2.5 border border-zinc-900 rounded">
                                <span className="text-zinc-550 block text-[9px]">Syllabus Priority</span>
                                <span className="text-zinc-300 font-bold text-xs">{viewingTopic.interviewImportance} / 10 Rating</span>
                              </div>
                              <div className="bg-zinc-900/40 p-2.5 border border-zinc-900 rounded">
                                <span className="text-zinc-550 block text-[9px]">Core Focus</span>
                                <span className="text-zinc-300 font-bold text-xs truncate block" title={viewingTopic.stopDepth}>{viewingTopic.stopDepth}</span>
                              </div>
                              <div className="bg-zinc-900/40 p-2.5 border border-zinc-900 rounded">
                                <span className="text-zinc-550 block text-[9px]">Target Standard</span>
                                <span className="text-zinc-305 font-bold text-xs">Direct Core Logic</span>
                              </div>
                            </div>

                            <div className="pt-3">
                              <button
                                onClick={handleGenerateQuestion}
                                className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs font-bold p-3 px-6 rounded-md shadow-md border border-emerald-400 inline-flex items-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
                              >
                                <Play className="w-4 h-4 text-zinc-950 fill-zinc-950" />
                                SPIN RANDOMIZED TECHNICAL QUESTION
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Spinner Page while loading */}
                        {interviewLoading && (
                          <div className="p-12 text-center space-y-3">
                            <RefreshCw className="w-6 h-6 text-emerald-450 animate-spin mx-auto" />
                            <p className="text-xs text-zinc-400 font-mono">
                              {evaluationResult ? "Principal Backend Lead is grading your response..." : "Formulating an industry-standard technical question..."}
                            </p>
                          </div>
                        )}

                        {/* Current Active Interview Form */}
                        {activeQuestion && !interviewLoading && (
                          <div className="p-5 space-y-4">
                            
                            {/* Question Box */}
                            <div className="bg-zinc-900/20 border border-zinc-850 p-4 rounded-lg space-y-2">
                              <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-mono font-bold block">
                                INTERVIEW QUESTION
                              </span>
                              <p className="text-xs text-zinc-200 leading-relaxed font-sans font-semibold">
                                {activeQuestion}
                              </p>
                            </div>

                            {/* Hidden/Revealing tips section */}
                            {activeTip && (
                              <div className="font-mono text-[11px]">
                                <button
                                  type="button"
                                  onClick={() => setShowTip(!showTip)}
                                  className="text-zinc-400 hover:text-emerald-450 font-semibold underline flex items-center gap-1 cursor-pointer"
                                >
                                  {showTip ? "Hide Interviewer Focus Hint" : "Reveal Interviewer Focus Hint"}
                                </button>
                                {showTip && (
                                  <div className="mt-2 p-2.5 bg-zinc-900/50 border border-zinc-900/80 rounded text-zinc-400 text-[10px]">
                                    <span className="text-[9px] text-zinc-550 uppercase font-bold block mb-1">Focus expectations:</span>
                                    {activeTip}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* User Response Textbox */}
                            <form onSubmit={handleSubmitResponse} className="space-y-4">
                              <div className="space-y-1">
                                <label className="text-[9px] text-zinc-500 font-bold uppercase font-mono block">YOUR TECHNICAL EXPLANATION</label>
                                <textarea
                                  value={userAnswer}
                                  onChange={(e) => setUserAnswer(e.target.value)}
                                  placeholder="Provide your professional solution... Mention system tradeoffs, exception hierarchies, database locking, caching strategies, or performance metrics to score high."
                                  className="w-full bg-zinc-950 border border-zinc-850 focus:border-emerald-500/40 rounded-lg p-3 text-xs text-zinc-200 font-mono placeholder-zinc-700 h-32 focus:outline-none"
                                  disabled={evaluationResult !== null}
                                />
                              </div>

                              {interviewError && (
                                <div className="p-3 bg-rose-95/20 border border-rose-900/40 rounded text-xs text-rose-400 font-mono animate-fade-in">
                                  {interviewError}
                                </div>
                              )}

                              {!evaluationResult && (
                                <div className="flex justify-between items-center bg-zinc-950/40 pt-1">
                                  <button
                                    type="button"
                                    onClick={handleGenerateQuestion}
                                    className="text-[10px] text-zinc-550 hover:text-zinc-350 font-mono underline cursor-pointer"
                                  >
                                    Draw a different question
                                  </button>
                                  <button
                                    type="submit"
                                    disabled={!userAnswer.trim()}
                                    className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs font-bold p-2 px-4 rounded border border-emerald-400 flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                                  >
                                    <Send className="w-3 h-3 text-zinc-950" />
                                    SUBMIT EXPLANATION
                                  </button>
                                </div>
                              )}
                            </form>

                            {/* Evaluation Report Display */}
                            {evaluationResult && (
                              <div className="border-t border-zinc-900 pt-5 space-y-4 animate-fade-in">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] text-zinc-400 font-mono font-bold uppercase">TECHNICAL EVALUATION REPORT</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-zinc-550 font-mono">Score:</span>
                                    <span className={`text-sm font-bold font-mono px-2 py-0.5 rounded border ${
                                      evaluationResult.score >= 8 
                                        ? "bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-505/20" 
                                        : evaluationResult.score >= 6 
                                          ? "bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-505 border-amber-200 dark:border-amber-505/20" 
                                          : "bg-rose-100 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-505/20"
                                    }`}>
                                      {evaluationResult.score} / 10
                                    </span>
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {/* Critique */}
                                  <div className="bg-zinc-900/20 border border-zinc-900 rounded-lg p-4 space-y-2">
                                    <span className="text-[9px] uppercase tracking-wider text-rose-400 font-mono font-bold block">
                                      CRITIQUE & MISSING POINTS
                                    </span>
                                    <p className="text-xs text-zinc-350 leading-relaxed font-sans whitespace-pre-line">
                                      {evaluationResult.critique}
                                    </p>
                                  </div>

                                  {/* Action concepts */}
                                  <div className="space-y-4">
                                    <div className="bg-zinc-900/20 border border-zinc-900 rounded-lg p-4 space-y-2.5">
                                      <span className="text-[9px] uppercase tracking-wider text-teal-400 font-mono font-bold block">
                                        TOP CONCEPT TAKEAWAYS
                                      </span>
                                      <div className="space-y-1.5">
                                        {evaluationResult.pointsToLearn.map((term, ti) => (
                                          <div key={ti} className="flex gap-2 items-center text-xs font-mono text-zinc-305">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                                            <span>{term}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Action items */}
                                    <div className="flex gap-2">
                                      <button
                                        onClick={handleGenerateQuestion}
                                        className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white font-mono text-xs font-bold p-2.5 rounded-md flex justify-center items-center gap-1.5 transition-all text-center cursor-pointer"
                                      >
                                        <Play className="w-3.5 h-3.5" />
                                        NEXT QUESTION
                                      </button>
                                      
                                      {!progress.completedTopicIds.includes(viewingTopic.id) && (
                                        <button
                                          onClick={() => toggleTopicMastery(viewingTopic.id)}
                                          className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs font-bold p-2.5 rounded-md flex justify-center items-center gap-1.5 transition-all text-center cursor-pointer"
                                        >
                                          <CheckCircle2 className="w-3.5 h-3.5" />
                                          MASTER TOPIC
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Ideal Model Solution */}
                                <div className="border border-zinc-900 rounded-lg overflow-hidden bg-zinc-905">
                                  <div className="bg-zinc-900/20 px-4 py-2 border-b border-zinc-900 flex items-center justify-between">
                                    <span className="text-[10px] text-zinc-400 font-mono font-bold uppercase">MODEL DISCIPLINE EXEMPLAR (READ & LEARN)</span>
                                    <button
                                      type="button"
                                      onClick={() => copyToClipboard(evaluationResult.exemplar, 'exemplar')}
                                      className="text-[10px] text-zinc-500 hover:text-zinc-350 flex items-center gap-1 font-mono cursor-pointer"
                                    >
                                      {copiedText === 'exemplar' ? <Check className="w-3 h-3 text-emerald-405" /> : <Copy className="w-3 h-3" />}
                                      {copiedText === 'exemplar' ? 'Copied!' : 'Copy Exemplar'}
                                    </button>
                                  </div>
                                  <div className="p-4 bg-zinc-950 font-mono text-xs text-zinc-400 leading-relaxed whitespace-pre-line max-h-52 overflow-y-auto">
                                    {evaluationResult.exemplar}
                                  </div>
                                </div>

                              </div>
                            )}

                          </div>
                        )}
                      </div>

                      {/* Cumulative Interview Performance Log */}
                      <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-5 space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase font-mono">YOUR CUMULATIVE INTERVIEW RECORD</span>
                            <p className="text-xs text-zinc-455">Chronology of completed practice questions and peer lead scores.</p>
                          </div>
                          {interviewHistory.length > 0 && (
                            <button
                              onClick={handleClearHistory}
                              className="text-[10px] text-rose-505 hover:text-rose-400 font-mono flex items-center gap-1 underline bg-zinc-950 p-1 px-2 rounded border border-zinc-900 cursor-pointer text-rose-500"
                            >
                              <Trash2 className="w-3 h-3" />
                              Wipe Record
                            </button>
                          )}
                        </div>

                        {interviewHistory.length === 0 ? (
                          <div className="text-center p-8 bg-zinc-950 border border-zinc-900/80 rounded-md">
                            <span className="text-xs text-zinc-500 font-mono">No simulation evaluations generated yet. Spin questions to start building statistics.</span>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {interviewHistory.map((run, hidx) => (
                              <div key={hidx} className="bg-zinc-950 border border-zinc-900 rounded-md p-4 space-y-2.5 font-mono text-xs">
                                <div className="flex items-start justify-between gap-4 border-b border-zinc-900 pb-2">
                                  <div className="space-y-0.5">
                                    <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">{run.topicTitle}</span>
                                    <p className="text-zinc-200 font-bold leading-relaxed">{run.question}</p>
                                  </div>
                                  <div className="text-right shrink-0">
                                    <span className={`inline-block text-xs font-bold py-0.5 px-2 rounded border ${
                                      run.score >= 8 
                                        ? "bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-505/20" 
                                        : run.score >= 6 
                                          ? "bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-505 border-amber-200 dark:border-amber-505/20" 
                                          : "bg-rose-100 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-505/20"
                                    }`}>
                                      {run.score} / 10
                                    </span>
                                    <span className="block text-[8px] text-zinc-550 mt-1">{run.timestamp}</span>
                                  </div>
                                </div>
                                
                                <div className="text-[11px] text-zinc-400">
                                  <span className="text-[9px] text-zinc-500 uppercase block mb-0.5">Your answer:</span>
                                  <p className="italic font-sans text-zinc-305 leading-relaxed max-h-16 overflow-y-auto bg-zinc-900/10 p-2 rounded">{run.userAnswer}</p>
                                </div>

                                <div className="text-[11px] text-zinc-400 bg-zinc-900/10 p-2.5 border border-zinc-900 rounded-md space-y-1">
                                  <span className="text-[9px] text-rose-450 uppercase font-bold block">Interviewer Feedback:</span>
                                  <p className="whitespace-pre-line text-zinc-350 font-sans leading-relaxed">{run.critique}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                    </div>
                  )}
                  
                  {/* INTERVIEW checkpoint ACCORDIONS */}
                  {topicSubTab === 'qa' && (
                    <div className="space-y-3">
                      <span className="text-[10px] text-zinc-500 font-bold font-mono uppercase tracking-widest block mb-1">MOCK INTERVIEW RUNS</span>
                      
                      {viewingTopic.interviewQAs.map((qa, qi) => {
                        const isExpanded = expandedQaIndex === qi;
                        return (
                          <div key={qi} className="border border-zinc-900 rounded-lg overflow-hidden bg-zinc-950">
                            <button
                              onClick={() => setExpandedQaIndex(isExpanded ? null : qi)}
                              className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-4 font-sans text-xs font-bold text-zinc-250 bg-zinc-900/20 hover:bg-zinc-900/45 transition-all"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-[9px] bg-zinc-800 text-teal-400 border border-zinc-700 px-1.5 py-0.5 rounded font-mono font-bold uppercase">
                                  {qa.focusType}
                                </span>
                                <span>{qa.question}</span>
                              </div>
                              {isExpanded ? <ChevronUp className="w-4 h-4 text-zinc-505" /> : <ChevronDown className="w-4 h-4 text-zinc-505" />}
                            </button>

                            {isExpanded && (
                              <div className="px-5 py-4 border-t border-zinc-900 bg-zinc-950/70 text-xs font-mono text-zinc-400 leading-relaxed whitespace-pre-line">
                                {qa.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>
              )}

              {/* 2. PORTFOLIO WORKCASE */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  
                  {/* Selector tab for master portfolio contracts */}
                  <div className="flex flex-wrap gap-1.5 border-b border-zinc-900 pb-3">
                    {MASTER_PROJECTS.map(prj => {
                      const isCompleted = progress.completedProjectIds.includes(prj.id);
                      const isActive = activeProject.id === prj.id;
                      return (
                        <button
                          key={prj.id}
                          onClick={() => setActiveProject(prj)}
                          className={`text-xs px-3.5 py-1.5 rounded-md font-mono font-bold border transition-all ${
                            isActive 
                              ? 'bg-zinc-900 text-emerald-400 border-zinc-750' 
                              : 'bg-zinc-950 hover:bg-zinc-900 text-zinc-400 border-transparent hover:text-zinc-200'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? 'bg-emerald-500' : 'bg-zinc-600'}`} />
                            {prj.title}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active project core details */}
                  <div className="bg-zinc-900/30 border border-zinc-900 rounded-lg p-5 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold border ${
                            activeProject.difficulty === 'Hard'
                              ? 'bg-rose-950/40 text-rose-400 border-rose-500/20'
                              : activeProject.difficulty === 'Medium'
                              ? 'bg-amber-950/40 text-amber-400 border-amber-500/20'
                              : 'bg-emerald-950/40 text-emerald-400 border-emerald-500/20'
                          }`}>
                            DIFFICULTY: {activeProject.difficulty.toUpperCase()}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-mono">Stack: {activeProject.stack.join(", ")}</span>
                        </div>
                        <h3 className="text-base font-bold text-zinc-150">{activeProject.title}</h3>
                        <p className="text-xs text-zinc-400 font-mono leading-relaxed">{activeProject.architecture}</p>
                      </div>

                      <button
                        onClick={() => toggleProjectMastery(activeProject.id)}
                        className={`text-xs p-2 px-3.5 border rounded font-mono font-bold tracking-wide transition-all ${
                          progress.completedProjectIds.includes(activeProject.id)
                            ? 'bg-zinc-950 text-zinc-450 border-zinc-850 hover:text-white'
                            : 'bg-emerald-500 text-zinc-950 border-emerald-400 hover:bg-emerald-400'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1 inline-block" />
                        {progress.completedProjectIds.includes(activeProject.id) ? 'REVOKE PROJECT COMPLETION' : 'COMPLETE PORTFOLIO PROJECT'}
                      </button>
                    </div>

                    {/* Extended layout constraints */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-4 border-t border-zinc-900">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-zinc-500 block uppercase">Redis Messaging Strategy</span>
                        <p className="text-zinc-300 leading-relaxed text-[11px] bg-zinc-950/40 p-2.5 rounded border border-zinc-900">{activeProject.redisUsage}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-zinc-500 block uppercase">Asynchronous Processing Setup</span>
                        <p className="text-zinc-300 leading-relaxed text-[11px] bg-zinc-950/40 p-2.5 rounded border border-zinc-900">{activeProject.asyncUsage}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-zinc-500 block uppercase">Scaling Concerns</span>
                        <p className="text-zinc-300 leading-relaxed text-[11px] bg-zinc-950/40 p-2.5 rounded border border-zinc-900">{activeProject.scalingConcerns}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-zinc-500 block uppercase">Observability</span>
                        <p className="text-zinc-300 leading-relaxed text-[11px] bg-zinc-950/40 p-2.5 rounded border border-zinc-900">{activeProject.observability}</p>
                      </div>
                    </div>

                    {/* Endpoint specifications */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase font-mono block">API CONTRACT ENDPOINTS</span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {activeProject.apis.map((endpoint, ei) => (
                          <div key={ei} className="bg-zinc-950 p-2 border border-zinc-900 rounded font-mono text-[11px] text-zinc-300">
                            {endpoint}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Checkout checklist items */}
                    <div className="space-y-2 border-t border-zinc-900 pt-3">
                      <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase font-mono block">STEP-BY-STEP DEV CHECKS</span>
                      <div className="space-y-1.5 font-mono text-[11px] text-zinc-350">
                        {activeProject.checkpointChecklist.map((ch, ci) => (
                          <div key={ci} className="flex gap-2 bg-zinc-950/30 p-2 border border-zinc-900/60 rounded">
                            <span className="text-zinc-600">0{ci+1}.</span>
                            <span>{ch}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-zinc-955 p-3.5 border border-zinc-900 rounded-lg text-xs leading-relaxed text-zinc-400 font-mono">
                      <span className="font-bold uppercase text-[9px] text-amber-500 block mb-1">PROD STACK CONCERN</span>
                      {activeProject.productionConcerns}
                    </div>

                  </div>

                </div>
              )}

              {/* 3. DSA PROBLEM TRACKER */}
              {activeTab === 'dsa' && (
                <div className="space-y-6">
                    {/* Summary Dashboard Card */}
                    <div className="bg-zinc-900/40 border border-zinc-900 rounded-lg p-5 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-1">
                          <h2 className="text-lg font-bold tracking-tight text-white font-sans">DSA Preparation Tracker</h2>
                          <p className="text-xs text-zinc-400 font-mono">
                            Track and master 350 essential coding interview problems categorized across 20 topics.
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <span className="text-xs text-zinc-550 font-mono block">Progress</span>
                            <span className="text-sm font-bold text-emerald-400 font-mono">
                              {completedDsaIds.length} / {totalDsaCount} Problems ({totalDsaCount > 0 ? Math.round((completedDsaIds.length / totalDsaCount) * 100) : 0}%)
                            </span>
                          </div>
                          <div className="h-8 w-px bg-zinc-800" />
                          <div className="text-right">
                            <span className="text-xs text-zinc-550 font-mono block">Bookmarks</span>
                            <span className="text-sm font-bold text-amber-450 font-mono flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {starredDsaIds.length} Starred
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-zinc-950 rounded-full h-2 border border-zinc-900 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full transition-all duration-500" 
                          style={{ width: `${totalDsaCount > 0 ? (completedDsaIds.length / totalDsaCount) * 100 : 0}%` }}
                        />
                      </div>

                      {/* ── DSA DIFFICULTY DONUT CHART ── */}
                      {(() => {
                        const allProbs = DSA_CHAPTERS.flatMap(ch => ch.problems);
                        const easy   = allProbs.filter(p => p.diff === 'Easy');
                        const medium = allProbs.filter(p => p.diff === 'Medium');
                        const hard   = allProbs.filter(p => p.diff === 'Hard');
                        const doneEasy   = easy.filter(p => completedDsaIds.includes(p.id)).length;
                        const doneMedium = medium.filter(p => completedDsaIds.includes(p.id)).length;
                        const doneHard   = hard.filter(p => completedDsaIds.includes(p.id)).length;
                        const total = allProbs.length || 1;
                        // SVG donut: cx=50,cy=50,r=36; circumference=2π*36≈226.2
                        const C = 226.2;
                        const eArc  = (easy.length   / total) * C;
                        const mArc  = (medium.length / total) * C;
                        const hArc  = (hard.length   / total) * C;
                        const doneEArc  = easy.length   > 0 ? (doneEasy   / easy.length)   * eArc  : 0;
                        const doneMaArc = medium.length > 0 ? (doneMedium / medium.length)  * mArc  : 0;
                        const doneHArc  = hard.length   > 0 ? (doneHard   / hard.length)    * hArc  : 0;
                        let offset = 0;
                        const eOff = offset; offset += eArc;
                        const mOff = offset; offset += mArc;
                        const hOff = offset;
                        return (
                          <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-zinc-900">
                            {/* Donut */}
                            <svg width="100" height="100" viewBox="0 0 100 100" className="shrink-0">
                              {/* background track rings */}
                              <circle cx="50" cy="50" r="36" fill="none" stroke="#27272a" strokeWidth="10" />
                              {/* Easy bg arc */}
                              <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(52,211,153,0.18)" strokeWidth="10"
                                strokeDasharray={`${eArc} ${C - eArc}`} strokeDashoffset={-(eOff)} strokeLinecap="butt" transform="rotate(-90 50 50)" />
                              {/* Medium bg arc */}
                              <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(251,191,36,0.18)" strokeWidth="10"
                                strokeDasharray={`${mArc} ${C - mArc}`} strokeDashoffset={-(mOff)} strokeLinecap="butt" transform="rotate(-90 50 50)" />
                              {/* Hard bg arc */}
                              <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(251,113,133,0.18)" strokeWidth="10"
                                strokeDasharray={`${hArc} ${C - hArc}`} strokeDashoffset={-(hOff)} strokeLinecap="butt" transform="rotate(-90 50 50)" />
                              {/* Easy done arc */}
                              <circle cx="50" cy="50" r="36" fill="none" stroke="#34d399" strokeWidth="10"
                                strokeDasharray={`${doneEArc} ${C - doneEArc}`} strokeDashoffset={-(eOff)} strokeLinecap="butt" transform="rotate(-90 50 50)" />
                              {/* Medium done arc */}
                              <circle cx="50" cy="50" r="36" fill="none" stroke="#fbbf24" strokeWidth="10"
                                strokeDasharray={`${doneMaArc} ${C - doneMaArc}`} strokeDashoffset={-(mOff)} strokeLinecap="butt" transform="rotate(-90 50 50)" />
                              {/* Hard done arc */}
                              <circle cx="50" cy="50" r="36" fill="none" stroke="#fb7185" strokeWidth="10"
                                strokeDasharray={`${doneHArc} ${C - doneHArc}`} strokeDashoffset={-(hOff)} strokeLinecap="butt" transform="rotate(-90 50 50)" />
                              {/* center text */}
                              <text x="50" y="46" textAnchor="middle" fill="#e4e4e7" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono,monospace">
                                {completedDsaIds.length}
                              </text>
                              <text x="50" y="58" textAnchor="middle" fill="#71717a" fontSize="7" fontFamily="JetBrains Mono,monospace">solved</text>
                            </svg>
                            {/* Legend */}
                            <div className="flex flex-col gap-2 font-mono text-[11px]">
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                                <span className="text-zinc-400">Easy</span>
                                <span className="ml-auto text-emerald-400 font-bold">{doneEasy}<span className="text-zinc-600">/{easy.length}</span></span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                                <span className="text-zinc-400">Medium</span>
                                <span className="ml-auto text-amber-400 font-bold">{doneMedium}<span className="text-zinc-600">/{medium.length}</span></span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shrink-0" />
                                <span className="text-zinc-400">Hard</span>
                                <span className="ml-auto text-rose-400 font-bold">{doneHard}<span className="text-zinc-600">/{hard.length}</span></span>
                              </div>
                              <div className="flex items-center gap-2 border-t border-zinc-800 pt-1 mt-0.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 shrink-0" />
                                <span className="text-zinc-400">Total</span>
                                <span className="ml-auto text-zinc-200 font-bold">{completedDsaIds.length}<span className="text-zinc-600">/{total}</span></span>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>

                    {/* Filters Toolbar */}
                    <div className="flex flex-wrap gap-4 items-center justify-between bg-zinc-900/20 border border-zinc-900 p-4 rounded-lg">
                      <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[280px]">
                        {/* Search */}
                        <div className="relative flex-1 max-w-sm">
                          <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-zinc-500" />
                          <input
                            type="text"
                            placeholder="Search problems by name..."
                            value={dsaSearch}
                            onChange={(e) => setDsaSearch(e.target.value)}
                            className="w-full bg-zinc-955 border border-zinc-900 rounded pl-9 pr-8 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-zinc-700 font-mono placeholder:text-zinc-605"
                          />
                          {dsaSearch && (
                            <button 
                              onClick={() => setDsaSearch('')} 
                              className="absolute right-3 top-2 text-zinc-500 hover:text-zinc-300"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}
                        </div>

                        {/* Difficulty filter buttons */}
                        <div className="flex items-center bg-zinc-950 p-1 border border-zinc-900 rounded gap-1">
                          <span className="text-[9px] text-zinc-505 font-mono px-2 uppercase font-bold">Diff:</span>
                          {(['All', 'Easy', 'Medium', 'Hard'] as const).map((d) => (
                            <button
                              key={d}
                              onClick={() => setDsaDifficulty(d)}
                              className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold transition-all ${
                                dsaDifficulty === d
                                  ? 'bg-zinc-800 text-zinc-200'
                                  : 'text-zinc-500 hover:text-zinc-305'
                              }`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>

                        {/* Status filter buttons */}
                        <div className="flex items-center bg-zinc-950 p-1 border border-zinc-900 rounded gap-1">
                          <span className="text-[9px] text-zinc-550 font-mono px-2 uppercase font-bold">Status:</span>
                          {(['All', 'Pending', 'Completed', 'Starred'] as const).map((s) => (
                            <button
                              key={s}
                              onClick={() => setDsaStatus(s)}
                              className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold transition-all ${
                                dsaStatus === s
                                  ? 'bg-zinc-800 text-zinc-200'
                                  : 'text-zinc-500 hover:text-zinc-305'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          if (confirm("Are you sure you want to reset all DSA completion progress and starred items?")) {
                            setCompletedDsaIds([]);
                            setStarredDsaIds([]);
                          }
                        }}
                        className="text-[9px] bg-zinc-950 hover:bg-rose-950 hover:text-rose-455 text-zinc-500 p-1.5 px-3 rounded font-mono border border-zinc-900 hover:border-rose-900/60 cursor-pointer active:scale-95 transition-all flex items-center gap-1"
                      >
                        <RotateCcw className="w-3 h-3" /> RESET DSA
                      </button>
                    </div>
                      {filteredDsaChapters.length === 0 ? (
                        <div className="bg-zinc-900/10 border border-zinc-900 p-10 rounded-lg text-center space-y-2">
                          <HelpCircle className="w-8 h-8 text-zinc-700 mx-auto" />
                          <p className="text-xs font-mono text-zinc-400 font-medium">No matching DSA problems found.</p>
                        </div>
                      ) : (
                        filteredDsaChapters.map(ch => {
                          const isExpanded = !!expandedChaps[ch.id];
                          const chapCompletedCount = ch.problems.filter(p => completedDsaIds.includes(p.id)).length;
                          const chapTotalCount = ch.problems.length;
                          const pctCompleted = chapTotalCount > 0 ? Math.round((chapCompletedCount / chapTotalCount) * 100) : 0;
                          
                          return (
                            <div key={ch.id} className="border border-zinc-900 bg-zinc-950/40 rounded-lg overflow-hidden transition-all">
                              {/* Chapter Header */}
                              <div 
                                onClick={() => setExpandedChaps(prev => ({ ...prev, [ch.id]: !isExpanded }))}
                                className="flex items-center justify-between p-3.5 bg-zinc-900/20 hover:bg-zinc-900/40 cursor-pointer select-none border-b border-zinc-900"
                              >
                                <div className="flex items-center gap-2 flex-1 min-w-0 mr-4">
                                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-550 px-2 py-0.5 rounded font-mono font-bold">
                                    CH {ch.num}
                                  </span>
                                  <h3 className="text-xs font-bold text-zinc-200 truncate font-mono">{ch.title}</h3>
                                  <div className="hidden sm:flex items-center gap-2 flex-1 max-w-[150px] min-w-[80px] ml-4">
                                    <div className="w-full bg-zinc-900 rounded-full h-1 overflow-hidden">
                                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${pctCompleted}%` }} />
                                    </div>
                                    <span className="text-[9px] text-zinc-550 font-mono shrink-0">{pctCompleted}%</span>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                  <span className="text-[11px] font-mono font-bold text-zinc-400">
                                    {chapCompletedCount} / {chapTotalCount}
                                  </span>
                                  {isExpanded ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                                </div>
                              </div>

                              {/* Chapter Problems List */}
                              {isExpanded && (
                                <div className="divide-y divide-zinc-900 overflow-x-auto">
                                  <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                      <tr className="bg-zinc-950/60 text-[9px] uppercase font-mono font-bold tracking-widest text-zinc-500 border-b border-zinc-900">
                                        <th className="py-2 px-3 w-10 text-center">Done</th>
                                        <th className="py-2 px-2 w-10 text-center">Star</th>
                                        <th className="py-2 px-3">Problem Name</th>
                                        <th className="py-2 px-3 w-20">Diff</th>
                                        <th className="py-2 px-3 w-64 text-right">Practice Platform Links</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-900/60 bg-zinc-950/10">
                                      {ch.problems.map(problem => {
                                        const isCompleted = completedDsaIds.includes(problem.id);
                                        const isStarred = starredDsaIds.includes(problem.id);
                                        
                                        return (
                                          <tr 
                                            key={problem.id} 
                                            className={`hover:bg-zinc-900/10 transition-colors ${
                                              isCompleted ? 'bg-zinc-950/20 text-zinc-550' : 'text-zinc-300'
                                            }`}
                                          >
                                            {/* Done Checkbox */}
                                            <td className="py-2 px-3 text-center">
                                              <button 
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  if (isCompleted) {
                                                    setCompletedDsaIds(prev => prev.filter(id => id !== problem.id));
                                                  } else {
                                                    setCompletedDsaIds(prev => [...prev, problem.id]);
                                                  }
                                                }}
                                                className="focus:outline-none cursor-pointer active:scale-90 transition-all text-zinc-600 hover:text-emerald-400"
                                              >
                                                {isCompleted ? (
                                                  <CheckSquare className="w-3.5 h-3.5 text-emerald-500" />
                                                ) : (
                                                  <div className="w-3.5 h-3.5 rounded border border-zinc-800 bg-zinc-950" />
                                                )}
                                              </button>
                                            </td>

                                            {/* Star Bookmark */}
                                            <td className="py-2 px-2 text-center">
                                              <button
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  if (isStarred) {
                                                    setStarredDsaIds(prev => prev.filter(id => id !== problem.id));
                                                  } else {
                                                    setStarredDsaIds(prev => [...prev, problem.id]);
                                                  }
                                                }}
                                                className="focus:outline-none cursor-pointer active:scale-90 transition-all"
                                              >
                                                <Star 
                                                  className={`w-3.5 h-3.5 ${
                                                    isStarred ? 'text-amber-400 fill-amber-400' : 'text-zinc-800 hover:text-amber-505'
                                                  }`} 
                                                />
                                              </button>
                                            </td>

                                            {/* Title */}
                                            <td className="py-2 px-3">
                                              <span className={`text-xs font-mono tracking-wide ${isCompleted ? 'line-through text-zinc-550' : 'text-zinc-300 font-semibold'}`}>
                                                {problem.name}
                                              </span>
                                            </td>

                                            {/* Difficulty */}
                                            <td className="py-2 px-3">
                                              <span className={`inline-flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${
                                                problem.diff === 'Easy' 
                                                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.04)]' 
                                                  : problem.diff === 'Medium'
                                                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_8px_rgba(245,158,11,0.04)]'
                                                  : 'bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_8px_rgba(244,63,94,0.04)]'
                                              }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${
                                                  problem.diff === 'Easy' 
                                                    ? 'bg-emerald-400 animate-pulse' 
                                                    : problem.diff === 'Medium'
                                                    ? 'bg-amber-400 animate-pulse'
                                                    : 'bg-rose-400 animate-pulse'
                                                }`} />
                                                {problem.diff}
                                              </span>
                                            </td>

                                            {/* Action Links */}
                                            <td className="py-2 px-3 text-right">
                                              <div className="flex gap-2 justify-end font-mono text-[9px] font-semibold">
                                                {problem.lc && (
                                                  <a
                                                    href={getLeetCodeUrl(problem.lc, problem.name)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-amber-500/6 hover:bg-amber-500/15 text-amber-400 hover:text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/15 hover:border-amber-500/40 transition-all duration-200 flex items-center gap-1 hover:scale-105 shrink-0"
                                                  >
                                                    LeetCode <ExternalLink className="w-2.5 h-2.5" />
                                                  </a>
                                                )}

                                                <a
                                                  href={getGfgUrl(problem.gfg, problem.name)}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="bg-emerald-500/6 hover:bg-emerald-500/15 text-emerald-400 hover:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/15 hover:border-emerald-500/40 transition-all duration-200 flex items-center gap-1 hover:scale-105 shrink-0"
                                                >
                                                  GFG <ExternalLink className="w-2.5 h-2.5" />
                                                </a>

                                                <a
                                                  href={getYoutubeUrl(problem.yt, problem.name)}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="bg-rose-500/6 hover:bg-rose-500/15 text-rose-400 hover:text-rose-300 px-2 py-0.5 rounded-full border border-rose-500/15 hover:border-rose-500/40 transition-all duration-200 flex items-center gap-1 hover:scale-105 shrink-0"
                                                >
                                                  Video <Tv className="w-2.5 h-2.5" />
                                                </a>
                                              </div>
                                            </td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  )}
                  {activeTab === 'interview' && (() => {
                    const highlightTextHTML = (htmlContent: string, query: string) => {
                      if (!query) return htmlContent;
                      const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                      const regex = new RegExp(`(${escapedQuery})(?![^<>]*>)`, 'gi');
                      return htmlContent.replace(regex, '<mark style="background:rgba(251,191,36,0.25); color:#FBBF24; padding:0 2px; border-radius:3px;">$1</mark>');
                    };

                    let filteredQList = QUESTIONS_DB;

                    // Filter by section
                    if (reactQSectionFilter !== 'all') {
                      const secVal = parseInt(reactQSectionFilter, 10);
                      filteredQList = filteredQList.filter(q => q.section === secVal);
                    }

                    // Filter by Tier 1
                    if (reactQTier1Filter) {
                      filteredQList = filteredQList.filter(q => q.tier1);
                    }

                    // Filter by Starred
                    if (reactQStarredOnlyFilter) {
                      filteredQList = filteredQList.filter(q => starredReactQIds.includes(q.id));
                    }

                    // Filter by Search Query
                    if (reactQSearch) {
                      const query = reactQSearch.toLowerCase().trim();
                      filteredQList = filteredQList.filter(q => 
                        q.q.toLowerCase().includes(query) || 
                        q.ans.toLowerCase().includes(query)
                      );
                    }

                    const totalQs = QUESTIONS_DB.length;
                    const masteredQs = masteredReactQIds.length;
                    const pctMastered = totalQs > 0 ? Math.round((masteredQs / totalQs) * 100) : 0;

                    // Draw random recall helper
                    const handleNextRecall = () => {
                      const candidates = filteredQList.length > 0 ? filteredQList : QUESTIONS_DB;
                      const randomQ = candidates[Math.floor(Math.random() * candidates.length)];
                      setRandomRecallQ(randomQ);
                      setRecallAnswerVisible(false);
                    };

                    // Star/Master handlers
                    const toggleReactQStar = (qid: number, e: React.MouseEvent) => {
                      e.stopPropagation();
                      if (starredReactQIds.includes(qid)) {
                        setStarredReactQIds(prev => prev.filter(id => id !== qid));
                      } else {
                        setStarredReactQIds(prev => [...prev, qid]);
                      }
                    };

                    const toggleReactQMaster = (qid: number, e: React.MouseEvent) => {
                      e.stopPropagation();
                      if (masteredReactQIds.includes(qid)) {
                        setMasteredReactQIds(prev => prev.filter(id => id !== qid));
                      } else {
                        setMasteredReactQIds(prev => [...prev, qid]);
                      }
                    };

                    // Bulk actions
                    const markAllFilteredAsMastered = () => {
                      const newIds = [...masteredReactQIds];
                      filteredQList.forEach(q => {
                        if (!newIds.includes(q.id)) {
                          newIds.push(q.id);
                        }
                      });
                      setMasteredReactQIds(newIds);
                    };

                    const resetAllFilteredMastery = () => {
                      const idsToKeep = masteredReactQIds.filter(id => !filteredQList.some(q => q.id === id));
                      setMasteredReactQIds(idsToKeep);
                    };

                    const toggleAllAccordions = (expand: boolean) => {
                      const updated: Record<number, boolean> = {};
                      if (expand) {
                        filteredQList.forEach(q => {
                          updated[q.id] = true;
                        });
                      }
                      setExpandedReactQIds(updated);
                    };

                    return (
                      <div className="space-y-6 text-left">
                        {/* 1. MASTERY PROGRESS & STREAK TRACKER */}
                        <div className="bg-zinc-900/40 border border-zinc-900 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center justify-between text-xs font-mono">
                              <span className="text-zinc-300 font-bold">INTERVIEW MASTERY METRIC</span>
                              <span className="text-emerald-400 font-bold">{pctMastered}% ({masteredQs}/{totalQs} Mastered)</span>
                            </div>
                            <div className="w-full bg-zinc-950 border border-zinc-900 rounded-full h-2 overflow-hidden">
                              <div className="bg-emerald-500 h-full rounded-full transition-all duration-350" style={{ width: `${pctMastered}%` }} />
                            </div>
                            <p className="text-[10px] text-zinc-500 font-mono">
                              Track your retention of core concepts. Mark cards as mastered to visually dim them.
                            </p>
                          </div>

                          <div className="bg-zinc-950 border border-zinc-900/60 p-3 rounded-lg flex items-center gap-3 shrink-0 self-start md:self-auto min-w-[140px]">
                            <span className="text-2xl">🔥</span>
                            <div className="font-mono">
                              <div className="text-[10px] text-zinc-550 uppercase font-bold tracking-wider">Daily Streak</div>
                              <div className="text-sm font-bold text-zinc-200">{streakCount} {streakCount === 1 ? 'Day' : 'Days'}</div>
                            </div>
                          </div>
                        </div>

                        {/* 2. MODE SELECTOR BUTTONS */}
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => { setFlashcardMode(false); setMockInterviewMode(false); }}
                            className={`px-3 py-1.5 rounded text-xs font-mono font-bold border transition-all cursor-pointer ${
                              !flashcardMode && !mockInterviewMode
                                ? 'bg-zinc-800 text-zinc-200 border-zinc-700'
                                : 'bg-zinc-950 text-zinc-550 border-zinc-900 hover:text-zinc-250 hover:bg-zinc-900/40'
                            }`}
                          >
                            📁 Questions Register
                          </button>
                          <button
                            onClick={() => { setFlashcardMode(true); setMockInterviewMode(false); setFlashcardFlipped(false); }}
                            className={`px-3 py-1.5 rounded text-xs font-mono font-bold border transition-all cursor-pointer ${
                              flashcardMode
                                ? 'bg-zinc-800 text-zinc-200 border-zinc-700'
                                : 'bg-zinc-950 text-zinc-555 border-zinc-900 hover:text-zinc-250 hover:bg-zinc-900/40'
                            }`}
                          >
                            🃏 Flashcard Mode
                          </button>
                          <button
                            onClick={() => { setMockInterviewMode(true); setFlashcardMode(false); }}
                            className={`px-3 py-1.5 rounded text-xs font-mono font-bold border transition-all cursor-pointer ${
                              mockInterviewMode
                                ? 'bg-zinc-800 text-zinc-200 border-zinc-700'
                                : 'bg-zinc-950 text-zinc-555 border-zinc-900 hover:text-zinc-250 hover:bg-zinc-900/40'
                            }`}
                          >
                            ⏱️ Mock Exam Simulator
                          </button>
                        </div>

                        {/* MOCK INTERVIEW SIMULATOR VIEW */}
                        {mockInterviewMode && (() => {
                          if (mockQuestions.length === 0) {
                            return (
                              <div className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-6 space-y-4">
                                <div className="space-y-1">
                                  <h3 className="text-sm font-mono font-bold text-zinc-200 uppercase tracking-wider">Mock Interview Simulator</h3>
                                  <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                                    Simulate a real technical screening. The coach will compile a custom exam of <strong>5 random questions</strong> (1 from each core engineering area). You will have <strong>15 minutes</strong> to mentally prepare or type outline solutions, and then self-grade your execution.
                                  </p>
                                </div>

                                <div className="bg-zinc-900/20 border border-zinc-900 p-4 rounded-lg flex items-center justify-between text-xs font-mono">
                                  <div className="text-zinc-400">Exam Structure:</div>
                                  <div className="text-zinc-300 text-right space-y-1">
                                    <div>1. Python + Async Engineering</div>
                                    <div>2. Web Frameworks + FastAPI</div>
                                    <div>3. SQL + Databases + Cache</div>
                                    <div>4. Distributed Systems + Celery</div>
                                    <div>5. Applied AI + Vector RAG</div>
                                  </div>
                                </div>

                                <button
                                  onClick={handleStartMock}
                                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-2.5 rounded font-mono text-xs cursor-pointer active:scale-95 transition-all flex items-center justify-center gap-1.5"
                                >
                                  <Play className="w-3.5 h-3.5 fill-current" /> START 15-MINUTE MOCK EXAM
                                </button>

                                {/* HISTORICAL RUNS LOG */}
                                {mockHistory.length > 0 && (
                                  <div className="pt-4 border-t border-zinc-900 space-y-3">
                                    <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">Mock Session Log History</h4>
                                    <div className="divide-y divide-zinc-900 border border-zinc-900 rounded bg-zinc-950/40 overflow-hidden text-xs font-mono">
                                      {mockHistory.map((hist, idx) => (
                                        <div key={hist.id || idx} className="p-3 flex items-center justify-between gap-3 hover:bg-zinc-900/30">
                                          <div className="space-y-0.5">
                                            <div className="text-zinc-300 font-bold">{hist.grade}</div>
                                            <div className="text-[9px] text-zinc-550">{hist.timestamp}</div>
                                          </div>
                                          <div className="text-right shrink-0">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                              hist.score >= 80 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                              hist.score >= 60 ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                              'bg-rose-500/10 text-rose-455 border border-rose-500/20'
                                            }`}>
                                              {hist.score}% Score
                                            </span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                    <button
                                      onClick={() => {
                                        if (confirm("Clear all mock history logs?")) {
                                          setMockHistory([]);
                                          localStorage.setItem('sai_engine_mock_history', '[]');
                                        }
                                      }}
                                      className="text-[9px] text-rose-455 hover:underline font-mono cursor-pointer"
                                    >
                                      Clear Logs
                                    </button>
                                  </div>
                                )}
                              </div>
                            );
                          }

                          // IF REPORT IS ACTIVE
                          if (mockReport) {
                            return (
                              <div className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-5 space-y-5">
                                <div className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-lg text-center space-y-2">
                                  <Award className="w-10 h-10 text-emerald-400 mx-auto" />
                                  <h3 className="text-lg font-bold text-zinc-100 tracking-tight font-sans">Mock Interview Completed!</h3>
                                  <div className="text-2xl font-bold font-mono text-emerald-400">{mockReport.score}% Score</div>
                                  <div className="text-xs font-mono text-zinc-400">Resulting Grade: <span className="text-zinc-200 font-bold">{mockReport.grade}</span></div>
                                </div>

                                <div className="space-y-3">
                                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">Question Performance Review</h4>
                                  <div className="space-y-3">
                                    {mockReport.questions.map((q: any, idx: number) => (
                                      <div key={q.id} className="border border-zinc-900 rounded-lg p-3 bg-zinc-900/10 space-y-2 text-xs font-mono">
                                        <div className="flex items-center justify-between text-[10px] border-b border-zinc-900 pb-1.5">
                                          <span className="text-zinc-400">Q{idx + 1} (Sec {q.section}) · ID #{q.id}</span>
                                          <span className="text-amber-400 font-bold">Self-Grade: ⭐ {q.score}/5</span>
                                        </div>
                                        <div className="text-zinc-200 font-bold">{q.q}</div>
                                        {q.userOutline && (
                                          <div className="p-2.5 bg-zinc-950/60 rounded border border-zinc-900 text-[11px] text-zinc-450">
                                            <strong className="text-zinc-550 block mb-0.5 text-[9px] uppercase font-bold">Your Outline:</strong>
                                            {q.userOutline}
                                          </div>
                                        )}
                                        <div className="p-2.5 bg-zinc-950/40 rounded border border-zinc-900/40 text-[11px] text-zinc-450">
                                          <strong className="text-emerald-500 block mb-0.5 text-[9px] uppercase font-bold">Ideal Model Answer:</strong>
                                          <div dangerouslySetInnerHTML={{ __html: q.ans }} />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="flex gap-2.5">
                                  <button
                                    onClick={handleStartMock}
                                    className="flex-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-805 text-zinc-250 font-bold py-2 rounded font-mono text-xs cursor-pointer active:scale-95 transition-all text-center"
                                  >
                                    Start New Session
                                  </button>
                                  <button
                                    onClick={handleResetMock}
                                    className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-2 rounded font-mono text-xs cursor-pointer active:scale-95 transition-all text-center"
                                  >
                                    Exit to Register
                                  </button>
                                </div>
                              </div>
                            );
                          }

                          // MOCK SESSION RUNNING STATE
                          const activeQ = mockQuestions[currentMockIndex];
                          const hasScore = mockScores[activeQ.id] !== undefined;

                          return (
                            <div className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-5 space-y-4">
                              {/* Session Header */}
                              <div className="flex items-center justify-between border-b border-zinc-900 pb-3 flex-wrap gap-2">
                                <div>
                                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-450 px-2 py-0.5 rounded font-mono font-bold uppercase mr-2">
                                    Q {currentMockIndex + 1} OF 5
                                  </span>
                                  <span className="text-[10px] text-zinc-550 font-mono">
                                    Section {activeQ.section}: {
                                      activeQ.section === 1 ? 'Python & Async' :
                                      activeQ.section === 2 ? 'Web & FastAPI' :
                                      activeQ.section === 3 ? 'SQL & DB' :
                                      activeQ.section === 4 ? 'Dist Systems & Celery' : 'Applied AI & RAG'
                                    }
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 font-mono text-xs text-rose-400 font-bold shrink-0 bg-rose-950/20 border border-rose-900/30 px-2.5 py-1 rounded-full">
                                  <Clock className="w-3.5 h-3.5 animate-pulse" />
                                  <span>{formatMockTime(mockTimeLeft)}</span>
                                </div>
                              </div>

                              {/* Question block */}
                              <div className="p-4 bg-zinc-900/20 border border-zinc-900 rounded-lg">
                                <h4 className="text-sm font-mono font-semibold text-zinc-205 leading-relaxed text-left">
                                  {activeQ.q}
                                </h4>
                              </div>

                              {/* Textarea answer sketchpad */}
                              <div className="space-y-1 text-left">
                                <label className="text-[10px] text-zinc-555 font-mono uppercase font-bold block">Draft your response outline (optional):</label>
                                <textarea
                                  placeholder="Type keywords, architectures, or pseudo-code outline here to structure your answer before revealing the solution..."
                                  value={mockAnswers[activeQ.id] || ''}
                                  onChange={(e) => setMockAnswers(prev => ({ ...prev, [activeQ.id]: e.target.value }))}
                                  className="w-full bg-zinc-950 text-xs text-zinc-300 border border-zinc-900 rounded p-2.5 h-20 focus:outline-none focus:border-zinc-800 font-mono placeholder:text-zinc-700"
                                />
                              </div>

                              {/* Reveal controls */}
                              <div className="space-y-3">
                                {!mockAnswersVisible[activeQ.id] ? (
                                  <button
                                    onClick={() => setMockAnswersVisible(prev => ({ ...prev, [activeQ.id]: true }))}
                                    className="w-full bg-zinc-900 hover:bg-zinc-850 border border-zinc-850 text-zinc-300 py-2 rounded text-xs font-mono font-bold cursor-pointer transition-all"
                                  >
                                    👀 REVEAL IDEAL ANSWER KEY
                                  </button>
                                ) : (
                                  <div className="space-y-3 border-t border-zinc-900 pt-3 text-left">
                                    <div className="p-3 bg-zinc-900/30 border border-zinc-900 rounded text-xs text-zinc-400 font-mono leading-relaxed max-h-60 overflow-y-auto">
                                      <strong className="text-emerald-400 block mb-1 text-[9px] uppercase font-bold">Ideal Model Solution:</strong>
                                      <div dangerouslySetInnerHTML={{ __html: activeQ.ans }} />
                                    </div>

                                    {/* Grader */}
                                    <div className="bg-zinc-950 border border-zinc-900 p-3 rounded-lg space-y-2">
                                      <span className="text-[9.5px] text-zinc-555 font-mono uppercase font-bold block">Rate your answer performance:</span>
                                      <div className="flex justify-between gap-1">
                                        {[1, 2, 3, 4, 5].map(score => (
                                          <button
                                            key={score}
                                            onClick={() => handleRateMockQuestion(activeQ.id, score)}
                                            className={`flex-1 py-1.5 rounded text-[10px] font-mono font-bold border transition-all cursor-pointer ${
                                              mockScores[activeQ.id] === score
                                                ? 'bg-amber-500 text-zinc-950 border-amber-400'
                                                : 'bg-zinc-900 text-zinc-450 border-zinc-850 hover:bg-zinc-800'
                                            }`}
                                          >
                                            {score === 1 ? '1 (Poor)' : score === 5 ? '5 (Perfect)' : score}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Card Navigation Footer */}
                              <div className="flex justify-between items-center pt-2 gap-2 flex-wrap">
                                <button
                                  onClick={handleResetMock}
                                  className="text-[10px] text-rose-455 hover:underline font-mono cursor-pointer"
                                >
                                  Abort Interview
                                </button>

                                <div className="flex gap-2">
                                  <button
                                    disabled={currentMockIndex === 0}
                                    onClick={() => setCurrentMockIndex(prev => prev - 1)}
                                    className="bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 disabled:pointer-events-none border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded text-xs font-mono cursor-pointer"
                                  >
                                    ◀ Previous
                                  </button>

                                  {currentMockIndex < 4 ? (
                                    <button
                                      disabled={!hasScore}
                                      onClick={() => setCurrentMockIndex(prev => prev + 1)}
                                      className="bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 disabled:pointer-events-none border border-zinc-800 text-zinc-200 px-3 py-1.5 rounded text-xs font-mono cursor-pointer"
                                    >
                                      Next Question ▶
                                    </button>
                                  ) : (
                                    <button
                                      disabled={Object.keys(mockScores).length < 5}
                                      onClick={handleFinishMock}
                                      className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:pointer-events-none text-zinc-950 px-4 py-1.5 rounded text-xs font-mono font-bold cursor-pointer"
                                    >
                                      Finish & Grade 🏁
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })()}

                        {/* FLASHCARD MODE VIEW */}
                        {flashcardMode && (() => {
                          if (filteredQList.length === 0) {
                            return (
                              <div className="bg-zinc-900/10 border border-zinc-900 p-10 rounded-lg text-center space-y-2">
                                <HelpCircle className="w-8 h-8 text-zinc-700 mx-auto" />
                                <p className="text-xs font-mono text-zinc-400 font-medium">No matching questions. Adjust filters in the Questions tab to populate card deck.</p>
                              </div>
                            );
                          }

                          if (currentFlashcardIndex >= filteredQList.length) {
                            setCurrentFlashcardIndex(0);
                          }

                          const activeFC = filteredQList[currentFlashcardIndex];
                          const fcStarred = starredReactQIds.includes(activeFC.id);
                          const fcMastered = masteredReactQIds.includes(activeFC.id);

                          return (
                            <div className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-5 space-y-4 max-w-xl mx-auto">
                              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                                <span>CARD {currentFlashcardIndex + 1} OF {filteredQList.length}</span>
                                <span>Section {activeFC.section} · ID #{activeFC.id}</span>
                              </div>

                              {/* The Card Flashing Container */}
                              <div
                                onClick={() => setFlashcardFlipped(!flashcardFlipped)}
                                className={`min-h-[220px] bg-zinc-900/20 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between cursor-pointer select-none hover:bg-zinc-900/30 transition-all duration-300 relative shadow-2xl ${
                                  flashcardFlipped ? 'border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.02)]' : 'border-zinc-800'
                                }`}
                              >
                                <div>
                                  {!flashcardFlipped ? (
                                    <div className="text-center space-y-4 my-auto pt-6">
                                      <HelpCircle className="w-8 h-8 text-zinc-700 mx-auto" />
                                      <h4 className="text-sm font-mono text-zinc-200 leading-relaxed font-semibold">
                                        {activeFC.q}
                                      </h4>
                                    </div>
                                  ) : (
                                    <div className="text-left space-y-3 overflow-y-auto max-h-56 p-1 pr-2 scrollbar-thin scrollbar-thumb-zinc-950">
                                      <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-400 uppercase">Ideal Solution Key</span>
                                      <div 
                                        className="text-xs text-zinc-350 font-mono leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: activeFC.ans }}
                                      />
                                    </div>
                                  )}
                                </div>

                                <div className="text-center text-[9px] font-mono text-zinc-650 mt-4 border-t border-zinc-900 pt-2 block uppercase font-bold tracking-widest">
                                  {flashcardFlipped ? 'Click anywhere on card to view question' : 'Click anywhere on card to flip and check answer'}
                                </div>
                              </div>

                              {/* Card Action Controls */}
                              <div className="flex items-center justify-between gap-3 pt-2">
                                <button
                                  onClick={(e) => toggleReactQMaster(activeFC.id, e)}
                                  className={`flex items-center gap-1.5 text-xs font-mono font-bold border rounded px-3 py-1.5 transition-all cursor-pointer ${
                                    fcMastered 
                                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                      : 'bg-zinc-950 text-zinc-450 border-zinc-900 hover:text-zinc-300'
                                  }`}
                                >
                                  ✅ {fcMastered ? 'Mastered!' : 'Mark Mastered'}
                                </button>

                                <button
                                  onClick={(e) => toggleReactQStar(activeFC.id, e)}
                                  className={`flex items-center gap-1.5 text-xs font-mono font-bold border rounded px-3 py-1.5 transition-all cursor-pointer ${
                                    fcStarred 
                                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
                                      : 'bg-zinc-950 text-zinc-455 border-zinc-900 hover:text-zinc-300'
                                  }`}
                                >
                                  ⭐ {fcStarred ? 'Starred!' : 'Star Card'}
                                </button>
                              </div>

                              {/* Navigation and Deck footer */}
                              <div className="flex justify-between items-center border-t border-zinc-900 pt-3">
                                <button
                                  disabled={currentFlashcardIndex === 0}
                                  onClick={() => { setCurrentFlashcardIndex(prev => prev - 1); setFlashcardFlipped(false); }}
                                  className="bg-zinc-900 hover:bg-zinc-850 disabled:opacity-30 disabled:pointer-events-none border border-zinc-800 text-zinc-450 px-3.5 py-1.5 rounded text-xs font-mono font-bold cursor-pointer"
                                >
                                  ◀ Prev Card
                                </button>

                                <button
                                  disabled={currentFlashcardIndex === filteredQList.length - 1}
                                  onClick={() => { setCurrentFlashcardIndex(prev => prev + 1); setFlashcardFlipped(false); }}
                                  className="bg-zinc-900 hover:bg-zinc-855 disabled:opacity-30 disabled:pointer-events-none border border-zinc-800 text-zinc-250 px-3.5 py-1.5 rounded text-xs font-mono font-bold cursor-pointer"
                                >
                                  Next Card ▶
                                </button>
                              </div>

                              <button
                                onClick={() => setFlashcardMode(false)}
                                className="w-full bg-zinc-950 hover:bg-zinc-900 text-zinc-555 text-center font-mono text-[9px] py-1.5 mt-2 rounded border border-zinc-900 cursor-pointer"
                              >
                                Return to Questions Register
                              </button>
                            </div>
                          );
                        })()}

                        {/* REGISTER NORMAL ACCORDION VIEW */}
                        {!flashcardMode && !mockInterviewMode && (
                          <div className="space-y-6">
                            {/* RANDOM RECALL CHALLENGE WIDGET */}
                            {randomRecallQ && (
                              <div className="bg-zinc-900/30 border border-zinc-900 rounded-lg p-5 space-y-3">
                                <div className="flex items-center justify-between">
                                  <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-400">💡 Random Recall Challenge</h3>
                                  <button
                                    onClick={handleNextRecall}
                                    className="text-[10px] text-amber-500 hover:text-amber-400 font-mono font-bold cursor-pointer"
                                  >
                                    Draw Another 🔁
                                  </button>
                                </div>
                                <div className="text-xs font-mono text-zinc-305 font-semibold leading-relaxed border-l-2 border-amber-500 pl-3">
                                  #{randomRecallQ.id}: {randomRecallQ.q}
                                </div>
                                {recallAnswerVisible ? (
                                  <div className="p-3 bg-zinc-950 border border-zinc-900 rounded text-xs text-zinc-400 font-mono leading-relaxed max-h-48 overflow-y-auto">
                                    <div dangerouslySetInnerHTML={{ __html: randomRecallQ.ans }} />
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => setRecallAnswerVisible(true)}
                                    className="bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/20 text-amber-400 px-3 py-1.5 rounded text-xs font-mono font-bold cursor-pointer"
                                  >
                                    Reveal Answer Key
                                  </button>
                                )}
                              </div>
                            )}

                            {/* FILTER & CONTROL PANEL */}
                            <div className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-5 space-y-4">
                              {/* Horizontal Section Selector tabs */}
                              <div className="space-y-1.5 text-left">
                                <span className="text-[9px] text-zinc-555 font-mono uppercase font-bold block">Filter by Tech Section:</span>
                                <div className="flex flex-wrap gap-1.5">
                                  {[
                                    { id: 'all', label: 'All sections' },
                                    { id: '1', label: 'Python & Async' },
                                    { id: '2', label: 'FastAPI & Web' },
                                    { id: '3', label: 'SQL & DB' },
                                    { id: '4', label: 'Celery & Queues' },
                                    { id: '5', label: 'AI systems & RAG' }
                                  ].map(sec => (
                                    <button
                                      key={sec.id}
                                      onClick={() => setReactQSectionFilter(sec.id)}
                                      className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all border cursor-pointer ${
                                        reactQSectionFilter === sec.id
                                          ? 'bg-zinc-800 text-zinc-200 border-zinc-700'
                                          : 'bg-zinc-950 text-zinc-555 border-zinc-900 hover:text-zinc-350'
                                      }`}
                                    >
                                      {sec.label}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Search & Badges filters */}
                              <div className="flex flex-col md:flex-row gap-3">
                                <input
                                  type="text"
                                  placeholder="Search questions or answers..."
                                  value={reactQSearch}
                                  onChange={(e) => setReactQSearch(e.target.value)}
                                  className="flex-1 bg-zinc-900 text-xs text-zinc-300 border border-zinc-850 rounded px-2.5 py-1.5 focus:outline-none focus:border-zinc-700 font-mono placeholder:text-zinc-650"
                                />

                                <div className="flex gap-2 flex-wrap shrink-0">
                                  <button
                                    onClick={() => setReactQTier1Filter(!reactQTier1Filter)}
                                    className={`px-3 py-1.5 rounded text-[10px] font-mono font-bold border transition-all cursor-pointer ${
                                      reactQTier1Filter
                                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                                        : 'bg-zinc-900 text-zinc-555 border-zinc-850 hover:text-zinc-350'
                                    }`}
                                  >
                                    Tier 1 Only
                                  </button>
                                  <button
                                    onClick={() => setReactQStarredOnlyFilter(!reactQStarredOnlyFilter)}
                                    className={`px-3 py-1.5 rounded text-[10px] font-mono font-bold border transition-all cursor-pointer ${
                                      reactQStarredOnlyFilter
                                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                                        : 'bg-zinc-900 text-zinc-555 border-zinc-850 hover:text-zinc-350'
                                    }`}
                                  >
                                    Starred Only
                                  </button>
                                </div>
                              </div>

                              {/* Bulk actions and print buttons */}
                              <div className="flex justify-between items-center border-t border-zinc-900 pt-3 flex-wrap gap-3">
                                <div className="flex gap-1.5">
                                  <button
                                    onClick={() => toggleAllAccordions(true)}
                                    className="bg-zinc-900 hover:bg-zinc-800 text-zinc-400 px-2 py-1 rounded text-[9px] font-mono border border-zinc-850 cursor-pointer"
                                  >
                                    Expand All
                                  </button>
                                  <button
                                    onClick={() => toggleAllAccordions(false)}
                                    className="bg-zinc-900 hover:bg-zinc-800 text-zinc-400 px-2 py-1 rounded text-[9px] font-mono border border-zinc-850 cursor-pointer"
                                  >
                                    Collapse All
                                  </button>
                                </div>

                                <div className="text-[10px] font-mono text-zinc-555">
                                  {filteredQList.length} of {totalQs} Questions Matching
                                </div>

                                <div className="flex gap-1.5">
                                  <button
                                    onClick={markAllFilteredAsMastered}
                                    className="bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-[9px] font-mono border border-emerald-500/15 cursor-pointer"
                                  >
                                    Master All Filtered
                                  </button>
                                  <button
                                    onClick={resetAllFilteredMastery}
                                    className="bg-rose-500/5 hover:bg-rose-500/10 text-rose-455 px-2 py-1 rounded text-[9px] font-mono border border-rose-500/15 cursor-pointer"
                                  >
                                    Reset All Filtered
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* ACCORDION LIST CONTAINER */}
                            <div className="divide-y divide-zinc-900 border border-zinc-900 rounded bg-zinc-950/20 overflow-hidden">
                              {filteredQList.length === 0 ? (
                                <div className="p-8 text-center text-xs font-mono text-zinc-555">
                                  No questions match active filters. Reset filters to study.
                                </div>
                              ) : (
                                filteredQList.map(q => {
                                  const isExpanded = !!expandedReactQIds[q.id];
                                  const isStarred = starredReactQIds.includes(q.id);
                                  const isMastered = masteredReactQIds.includes(q.id);

                                  return (
                                    <div 
                                      key={q.id} 
                                      className={`transition-all duration-200 ${
                                        isMastered ? 'opacity-50 hover:opacity-90' : ''
                                      }`}
                                    >
                                      {/* Header */}
                                      <div
                                        onClick={() => {
                                          setExpandedReactQIds(prev => ({
                                            ...prev,
                                            [q.id]: !prev[q.id]
                                          }));
                                        }}
                                        className="flex items-center justify-between p-3.5 hover:bg-zinc-900/40 cursor-pointer select-none transition-colors"
                                      >
                                        <div className="flex items-center gap-3 mr-3 min-w-0">
                                          <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-500 px-2 py-0.5 rounded font-mono font-bold shrink-0">
                                            #{q.id}
                                          </span>
                                          <span 
                                            className={`text-xs text-zinc-300 font-mono text-left truncate ${
                                              isMastered ? 'line-through text-zinc-550' : 'text-zinc-200 font-medium'
                                            }`}
                                            dangerouslySetInnerHTML={{ __html: highlightTextHTML(q.q, reactQSearch) }}
                                          />
                                        </div>

                                        <div className="flex items-center gap-3 shrink-0">
                                          <button
                                            onClick={(e) => toggleReactQMaster(q.id, e)}
                                            className="bg-transparent border-none cursor-pointer text-sm active:scale-90 transition-transform"
                                            title="Mark as Mastered"
                                          >
                                            {isMastered ? '✅' : '⬜'}
                                          </button>
                                          <button
                                            onClick={(e) => toggleReactQStar(q.id, e)}
                                            className="bg-transparent border-none cursor-pointer text-sm active:scale-90 transition-transform"
                                            title="Star/Bookmark"
                                          >
                                            {isStarred ? '⭐' : '☆'}
                                          </button>

                                          {q.tier1 && (
                                            <span className="text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-mono font-bold uppercase shrink-0">
                                              Tier 1
                                            </span>
                                          )}
                                          <span className={`text-[10px] text-zinc-550 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                                            ▼
                                          </span>
                                        </div>
                                      </div>

                                      {/* Body Wrapper with smooth max-height transition */}
                                      <div
                                        className="overflow-hidden transition-all duration-300 ease-in-out bg-zinc-950/40 border-l-2 border-emerald-500"
                                        style={{
                                          maxHeight: isExpanded ? '1000px' : '0px',
                                          borderLeftColor: q.tier1 ? '#FBBF24' : '#10B981',
                                          borderTop: isExpanded ? '1px solid rgba(255,255,255,0.06)' : 'none'
                                        }}
                                      >
                                        <div 
                                          className="p-4 text-xs text-zinc-350 font-mono leading-relaxed"
                                          dangerouslySetInnerHTML={{ __html: highlightTextHTML(q.ans, reactQSearch) }}
                                        />
                                      </div>
                                    </div>
                                  );
                                })
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
            </div>
          </div>

        </section>

        {/* RIGHT COLUMN: CHRONOMETER SYSTEM & REAL-TIME COACH DIALOGUE (Takes 4 spaces) */}
        <section className="xl:col-span-4 bg-zinc-950 flex flex-col h-full border-t xl:border-t-0 border-zinc-900">
          
          {/* THE FOCUS CHECKPOINTS REGISTER PANEL */}
          <div className="p-4 border-b border-zinc-900 bg-zinc-900/10 space-y-3 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase font-mono">Daily Target Checkoffs</span>
              <button
                onClick={resetTodayPlanner}
                className="text-[9px] text-zinc-500 hover:text-zinc-300 font-mono underline"
                title="Reset checklist items"
              >
                Reset Tasks
              </button>
            </div>

            {/* Daily Execution Ticks list */}
            <div className="bg-zinc-950/40 border border-zinc-900 p-3.5 rounded-lg space-y-2">
              <div className="space-y-1.5 font-mono text-[10px] text-zinc-400">
                <label className="flex items-center gap-2 cursor-pointer hover:text-zinc-200 select-none">
                  <input
                    type="checkbox"
                    checked={dailyPlanner.tasksCompleted.includes('study_r')}
                    onChange={() => handleDailyTaskToggle('study_r')}
                    className="w-3.5 h-3.5 rounded bg-zinc-900 accent-emerald-500 text-emerald-400 cursor-pointer"
                  />
                  <span className={dailyPlanner.tasksCompleted.includes('study_r') ? 'line-through text-zinc-650' : 'text-zinc-300'}>Read textbook & topic-specific focus docs</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:text-zinc-200 select-none">
                  <input
                    type="checkbox"
                    checked={dailyPlanner.tasksCompleted.includes('impl_c')}
                    onChange={() => handleDailyTaskToggle('impl_c')}
                    className="w-3.5 h-3.5 rounded bg-zinc-900 accent-emerald-500 text-emerald-400 cursor-pointer"
                  />
                  <span className={dailyPlanner.tasksCompleted.includes('impl_c') ? 'line-through text-zinc-650' : 'text-zinc-300'}>Write practice implementation snippet</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:text-zinc-200 select-none">
                  <input
                    type="checkbox"
                    checked={dailyPlanner.tasksCompleted.includes('dbg_f')}
                    onChange={() => handleDailyTaskToggle('dbg_f')}
                    className="w-3.5 h-3.5 rounded bg-zinc-900 accent-emerald-500 text-emerald-400 cursor-pointer"
                  />
                  <span className={dailyPlanner.tasksCompleted.includes('dbg_f') ? 'line-through text-zinc-650' : 'text-zinc-300'}>Debug common errors and exceptions</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:text-zinc-200 select-none">
                  <input
                    type="checkbox"
                    checked={dailyPlanner.tasksCompleted.includes('prep_qa')}
                    onChange={() => handleDailyTaskToggle('prep_qa')}
                    className="w-3.5 h-3.5 rounded bg-zinc-900 accent-emerald-500 text-emerald-400 cursor-pointer"
                  />
                  <span className={dailyPlanner.tasksCompleted.includes('prep_qa') ? 'line-through text-zinc-650' : 'text-zinc-300'}>Answer target interview checkpoints</span>
                </label>
              </div>
            </div>
          </div>

          {/* AI MENTOR DIALOGUE HEADER (WITH CLEAR CHAT HISTORY BUTTON) */}
          <div className="p-3.5 border-b border-zinc-900 bg-zinc-905 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase font-mono">
                MENTOR_CONSOLE_LOG
              </span>
            </div>

            <button 
              onClick={clearChatHistory}
              className="text-[9px] bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-rose-450 hover:text-rose-400 px-2 py-1 rounded font-mono inline-flex items-center gap-1"
              title="Clear entire chat conversation history"
            >
              <Trash2 className="w-3 h-3" />
              Clear Log
            </button>
          </div>

          {/* AI MENTOR THREAD MESSAGE BOX */}
          <div className="flex-1 overflow-y-auto p-4 text-xs space-y-4 font-mono bg-zinc-950/65 scrollbar-thin scrollbar-thumb-zinc-900">
            {chatMessages.map((msg, idx) => {
              const isUser = msg.sender === 'user';
              return (
                <div 
                  key={msg.id || idx} 
                  className={`p-3 rounded-lg border relative leading-relaxed ${
                    isUser 
                      ? 'bg-zinc-900/40 border-zinc-850 text-zinc-200 ml-6' 
                      : 'bg-zinc-950 border-zinc-900 text-zinc-350 mr-6'
                  }`}
                >
                  <span className={`absolute -top-2 left-2 text-[8px] tracking-wider uppercase font-mono px-1 rounded border ${
                    isUser 
                      ? 'bg-zinc-200 dark:bg-zinc-800 text-emerald-700 dark:text-emerald-400 border-zinc-300 dark:border-zinc-700' 
                      : 'bg-zinc-150 dark:bg-zinc-900 text-amber-700 dark:text-amber-505 border-zinc-250 dark:border-zinc-800'
                  }`}>
                    {isUser ? 'Sai (VIT-AP Student)' : 'AI Mentor (Backend Coach)'}
                  </span>

                  <div className="whitespace-pre-line mt-1 font-mono text-[11px] leading-relaxed select-text">
                    {msg.text}
                  </div>
                </div>
              );
            })}

            {aiLoading && (
              <div className="p-3 bg-zinc-950 border border-zinc-900 text-zinc-500 mr-6 font-mono flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                <span>Coach analyzing scaling mechanics...</span>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* QUICK TOPIC MOCK QUESTIONS SHORTCUTS */}
          <div className="p-2 border-t border-zinc-900 bg-zinc-950 shrink-0 space-y-1">
            <span className="text-[9px] text-zinc-500 font-mono block px-1 uppercase font-bold">Ask Mentor Shortcuts:</span>
            <div className="grid grid-cols-2 gap-1.5">
              <button 
                onClick={() => handlePredefinedPrompt(`What should my dynamic implementation goals look like for "${viewingTopic.title}"?`)}
                className="bg-zinc-900 hover:bg-zinc-850 border border-zinc-850 p-1.5 rounded text-[9px] text-zinc-400 text-left hover:text-emerald-400 truncate font-mono"
              >
                🎯 Target study goal?
              </button>
              
              <button 
                onClick={() => handlePredefinedPrompt(`Explain how to debug the common mistakes listed in "${viewingTopic.title}".`)}
                className="bg-zinc-900 hover:bg-zinc-850 border border-zinc-850 p-1.5 rounded text-[9px] text-zinc-400 text-left hover:text-emerald-400 truncate font-mono"
              >
                🐞 Clarify common errors?
              </button>

              <button 
                onClick={() => handlePredefinedPrompt(`Give me a production-level scenario check for "${viewingTopic.title}" to verify my depth.`)}
                className="bg-zinc-900 hover:bg-zinc-850 border border-zinc-850 p-1.5 rounded text-[9px] text-zinc-400 text-left hover:text-emerald-400 truncate font-mono"
              >
                ⚡ Production depth?
              </button>

              <button 
                onClick={() => handlePredefinedPrompt(`Why do startup tech interviewers care about "${viewingTopic.title}" patterns?`)}
                className="bg-zinc-900 hover:bg-zinc-850 border border-zinc-850 p-1.5 rounded text-[9px] text-zinc-400 text-left hover:text-emerald-400 truncate font-mono"
              >
                🎓 Interview relevance?
              </button>
            </div>
          </div>

          {/* CONVERSATIONAL CHAT INPUT FORM */}
          <form onSubmit={handleChatSubmit} className="p-3 border-t border-zinc-900 flex gap-2 bg-zinc-950 shrink-0">
            <input 
              type="text" 
              placeholder="Ask mentor technical tradeoff rules..." 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="flex-1 bg-zinc-900 text-xs text-zinc-200 border border-zinc-800 rounded px-2.5 py-1.5 focus:outline-none focus:border-zinc-700 font-mono placeholder:text-zinc-600"
            />
            <button 
              type="submit" 
              className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 p-2 px-3.5 rounded text-xs font-mono font-bold flex items-center justify-center shrink-0"
              title="Send Prompt and Clear"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </section>

      </div>

    </div>
  );
}
