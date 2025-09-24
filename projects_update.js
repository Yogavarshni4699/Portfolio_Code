// Updated Projects Section with Simple Cards
const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    
    const projects = [
        {
            id: 1,
            title: "AI-Powered Website Generator",
            subtitle: "AI-Generated Model for multi-page website creation using natural language",
            description: "Creating modern, responsive websites is a recurring challenge for early-stage B2B SaaS startups due to limited resources and time constraints. This project introduces an AI-powered website generator that leverages Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) to automate website creation from a single user prompt.",
            category: "AI & Machine Learning",
            date: "May 11, 2025",
            status: "Done",
            tools: ["B2B", "SaaS", "Python", "React", "FastAPI", "MongoDB", "AWS", "GPT-4", "Claude", "Gemini"],
            icon: "🤖",
            cover: "AI Generator",
            notionUrl: "https://www.notion.so/AI-Powered-Website-Generator-16a5280b487b80f9990beec63f60217e",
            githubUrl: "https://github.com/Yogavarshni4699/AI-Powered-Website-Generator",
            hasDetailedView: true,
            team: {
                department: "Applied Data Science Department",
                advisor: "Dr. Simon Shim"
            },
            introduction: `Creating modern, responsive websites is a recurring challenge for early-stage B2B SaaS startups due to limited resources and time constraints. Traditional web development requires manual effort in design, content creation, and coding - often delaying MVP launches. This project introduces an AI-powered website generator that leverages Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) to automate website creation from a single user prompt. The solution delivers tailored, industry-relevant SaaS landing pages in under 30 seconds.`,
            dataProcess: [
                "Scraped 500+ B2B SaaS websites using JavaScript-based automation tools",
                "Raw HTML/CSS data was stored in Google Drive",
                "ETL pipeline was built using AWS to extract, transform, and load structured HTML/CSS components",
                "Cleaned and reusable templates were pushed back to Google Drive, organized by industry and layout type"
            ],
            problemStatement: {
                main: "High cost of traditional web development services and technical barriers for freelancers, startups, and small-scale businesses.",
                challenges: [
                    "Web development costs hinder small companies",
                    "Difficulty in creating multi-page websites without developer expertise",
                    "The increasing importance of online presence for business growth and customer engagement",
                    "Growing need for efficient, low-resource solutions for establishing a web presence"
                ]
            },
            solution: {
                overview: "AI-generated model for multi-page website creation using GPT-4, LLaMA 2, PaLM, and Gemini to automate web development without requiring developers.",
                features: [
                    "Generates fully customizable websites",
                    "Industry-specific template matching",
                    "Multi-page website support",
                    "Automated content generation"
                ]
            },
            requirements: {
                functional: [
                    "User Input Interface",
                    "Content Update System",
                    "Template and Theme Customization",
                    "Performance Measurement"
                ],
                aiPowered: [
                    "AI-Based Content Generation using GPT-4",
                    "AI for Code and Structure Generation using Claude and Gemini (clean HTML, CSS, and JavaScript)",
                    "AI for Personalization - layouts and user experience enhancements",
                    "AI for Performance Optimization - Lighthouse score improvement",
                    "AI for Dynamic Updates"
                ],
                data: [
                    "Website data for training and templates",
                    "User input data for personalization"
                ]
            },
            challenges: [
                {
                    title: "Data Accuracy & JSON Consistency",
                    description: "Ensuring the scraped data is accurate and that all JSON elements are correctly structured for consistent processing"
                },
                {
                    title: "Placeholder Misalignment", 
                    description: "LLMs may miss or incorrectly fill placeholders (e.g., {{feature1.title}}), leading to broken layouts or empty sections"
                },
                {
                    title: "Layout-Content Mismatch",
                    description: "Generated content may not align with the design — either too verbose or too sparse — impacting visual balance and readability"
                },
                {
                    title: "Content Repetition",
                    description: "LLMs might generate repetitive or generic copy across sections or websites, reducing uniqueness and SEO value"
                },
                {
                    title: "Performance & Cost Overhead",
                    description: "Large HTML generations with context-rich prompts increase token consumption, latency, and OpenAI API costs"
                },
                {
                    title: "Image Generation Limitations",
                    description: "Current models lack precision in generating specific, brand-aligned images — requiring better integration or fallback assets"
                }
            ],
            metrics: {
                perplexity: {
                    description: "Perplexity is a metric used to measure how well a language model predicts a sample of text. It reflects the model's confidence in its predictions.",
                    findings: [
                        "Lower Perplexity = Better performance (more confident predictions)",
                        "Higher Perplexity = Worse performance (less confident, more 'surprised' by the data)",
                        "Claude Sonnet achieved the lowest perplexity score, indicating the most confident predictions and highest language understanding",
                        "Gemini followed with solid performance, outperforming Claude Haiku and OpenAI GPT",
                        "Claude Haiku showed moderate perplexity, indicating reasonable but not exceptional performance",
                        "OpenAI GPT showed the highest perplexity, reflecting more uncertainty in predictions"
                    ]
                },
                tokenEfficiency: {
                    findings: [
                        "Gemini 1.5 Pro used the most tokens (~650), suggesting a more verbose or detailed style of response",
                        "Claude 3 Haiku and Claude 3 Sonnet used a moderate number of tokens (~550), indicating a balanced approach",
                        "OpenAI GPT-4 used the fewest tokens (~450), suggesting more concise responses, possibly due to optimized tokenization or more efficient phrasing",
                        "Claude models are more token-heavy per word — their tokenization is more expensive (3 tokens per word)",
                        "OpenAI and Gemini are more efficient in terms of token usage per word (~1.4 tokens/word)",
                        "This matters if you're billed per token — Claude outputs are costlier per word"
                    ]
                }
            },
            humanEvaluations: {
                naturalness: {
                    "Claude 3 Haiku": "36.8%",
                    "Gemini": "26.3%", 
                    "Claude Sonnet": "21.1%",
                    "OpenAI": "15.8%"
                },
                findings: [
                    "Claude 3 Haiku stood out as the top choice, preferred by over one-third of participants",
                    "Gemini followed closely, indicating solid performance in generating natural, relevant content",
                    "Claude Sonnet, despite strong technical metrics, ranked lower in terms of visual appeal, suggesting a disconnect between technical performance and user preference"
                ]
            },
            conclusion: {
                summary: "The AI-powered website generator successfully enables non-developers to create industry-specific, multi-page websites using simple natural language input.",
                achievements: [
                    "Effective Use of LLMs: Leveraged GPT-4, Claude Sonnet, Claude, and Gemini for high-quality, context-aware content generation via template conditioning",
                    "System Efficiency: Combined structured templates and real-time API pipelines to streamline web development and reduce cost/time barriers"
                ],
                futureScope: [
                    "Introduce user feedback loops and editable design previews to refine generated websites dynamically",
                    "Expand to multilingual generation, multi-page, accessible design, and broader industry templates to empower global digital adoption"
                ],
                impact: "Expand to multilingual generation, multi-page, accessible design, and broader industry templates to empower global digital adoption"
            },
            mediaAssets: {
                images: [
                    { 
                        src: "Images/P1.png",
                        title: "ETL Pipeline", 
                        description: "Data extraction, transformation, and loading process for website templates",
                        type: "ETL"
                    },
                    { 
                        src: "Images/P2.png",
                        title: "System Flow", 
                        description: "End-to-end system workflow from user prompt to generated website",
                        type: "System Flow"
                    },
                    { 
                        src: "Images/P3.png",
                        title: "Prompt Engineering", 
                        description: "LLM prompt optimization and implementation approach",
                        type: "Prompt"
                    },
                    { 
                        src: "Images/P4.png",
                        title: "Generated Website", 
                        description: "AI-generated SaaS landing page showcasing platform capabilities",
                        type: "Generated Website"
                    },
                    { 
                        src: "Images/P5.png",
                        title: "Perplexity Score Analysis", 
                        description: "Model confidence comparison across GPT-4, Claude, and Gemini",
                        type: "Analysis Metrics"
                    },
                    { 
                        src: "Images/P6.png",
                        title: "Token Usage Analysis", 
                        description: "Token efficiency and cost comparison between LLM models",
                        type: "Analysis Metrics"
                    },
                    { 
                        src: "Images/P7.png",
                        title: "Human Feedback Results", 
                        description: "User preference evaluation and quality assessment metrics",
                        type: "Analysis Metrics"
                    },
                    { 
                        src: "Images/P8.png",
                        title: "Poster Board", 
                        description: "Academic research poster presentation summarizing key findings",
                        type: "Poster Board"
                    }
                ]
            }
        },
        {
            id: 2,
            title: "RAG LLM with Langchain",
            subtitle: "Retrieval-Augmented Generation system for PDF document analysis",
            description: "A comprehensive RAG (Retrieval-Augmented Generation) LLM system that consumes PDF documents and allows users to prompt questions based on uploaded PDF content. Built with LangChain, ChromaDB, and local LLMs for enhanced privacy and performance.",
            category: "AI & Machine Learning",
            date: "December 5, 2024",
            status: "Done",
            tools: ["Python", "LangChain", "ChromaDB", "Llama3.2", "Ollama", "PyMuPDF", "ROUGE"],
            icon: "📚",
            cover: "RAG System",
            notionUrl: "https://www.notion.so/RAG-LLM-with-Langchain-24c658ee4bf0434892de704c59e0f2d3",
            githubUrl: "https://github.com/Yogavarshni4699/RAG-LLM/tree/main",
            hasDetailedView: false,
            keyFeatures: [
                "PDF Document Processing with PyMuPDFLoader",
                "Text Chunking with RecursiveCharacterTextSplitter (1000 chars, 200 overlap)",
                "Vector Embeddings using nomic-embed-text by Ollama",
                "ChromaDB Vector Database for similarity search",
                "Local LLM (llama3.2) for privacy-focused processing",
                "MultiQueryRetriever for enhanced question matching",
                "ROUGE Score evaluation for accuracy measurement"
            ],
            technicalStack: {
                llm: "llama3.2 (Local language model)",
                vectorDB: "ChromaDB",
                embeddings: "nomic-embed-text by Ollama",
                pdfLoader: "PyMuPDFLoader",
                textSplitting: "RecursiveCharacterTextSplitter",
                pipeline: "LangChain",
                metrics: "ROUGE Score for accuracy"
            },
            experiments: [
                "Experiment 1: OpenAI with Local Embeddings",
                "Experiment 2: Ollama with Local Embeddings"
            ],
            designProcess: [
                "Data Ingestion: PDF text extraction using PyMuPDFLoader",
                "Text Splitting: 1000-character chunks with 200-character overlap",
                "Embedding Generation: nomic-embed-text model via Ollama",
                "Vector Database: ChromaDB for similarity-based search",
                "Language Model: llama3.2 integrated via ChatOllama",
                "Prompt Engineering: Custom templates for accurate responses",
                "Evaluation: ROUGE-1, ROUGE-2, and ROUGE-L metrics"
            ],
            improvements: [
                "Fluency Fine-Tuning for more consistent response styling",
                "Prompt Optimization for better structure alignment",
                "Enhanced context preservation across document boundaries"
            ]
        }
    ];
    
    const openProject = (project) => {
        if (project.hasDetailedView) {
            setSelectedProject(project);
            setActiveTab('overview');
            document.body.style.overflow = 'hidden';
        }
    };
    
    const closeProject = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };
    
    return (
        <section id="projects" className="section-padding">
            <div className="section-divider"></div>
            <div className="container mx-auto px-8">
                <h2 className="text-5xl font-black text-center mb-20 gradient-text">FEATURED PROJECTS</h2>
                
                {/* Project Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={project.id} className="project-card glass-card overflow-hidden">
                            <div className="notion-project-cover">
                                <div className="notion-cover-pattern"></div>
                                <div className="notion-cover-content">
                                    <div className="notion-cover-icon">{project.icon}</div>
                                    <div className="notion-cover-label">{project.cover}</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
                                <p className="text-gray-300 text-xs mb-4 leading-relaxed">{project.description}</p>
                                
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.tools.slice(0, 4).map((tech, techIndex) => (
                                        <span key={techIndex} className="notion-tech-badge">{tech}</span>
                                    ))}
                                    {project.tools.length > 4 && (
                                        <span className="notion-tech-badge">+{project.tools.length - 4}</span>
                                    )}
                                </div>
                                
                                {/* Project Info */}
                                <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                                    <span>{project.category}</span>
                                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full">{project.status}</span>
                                </div>
                                
                                {/* Key Features for RAG Project */}
                                {project.id === 2 && (
                                    <div className="mb-4">
                                        <h4 className="text-sm font-bold text-white mb-2">Key Features:</h4>
                                        <ul className="text-xs text-gray-400 space-y-1">
                                            {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-blue-400 mr-1 mt-1">•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <a href={project.notionUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-4 py-2">
                                        Notion
                                    </a>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs px-4 py-2">
                                        GitHub
                                    </a>
                                    {project.hasDetailedView && (
                                        <button 
                                            onClick={() => openProject(project)}
                                            className="btn-secondary text-xs px-4 py-2"
                                        >
                                            Details
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Detailed Modal for AI Website Generator only */}
            {selectedProject && selectedProject.hasDetailedView && (
                <div className="notion-modal-overlay" onClick={closeProject}>
                    <div className="notion-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="absolute top-6 right-6 text-gray-400 hover:text-white text-3xl z-20 bg-black/50 w-12 h-12 rounded-full flex items-center justify-center" onClick={closeProject}>×</button>
                        
                        <div className="p-8">
                            {/* Header */}
                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-5xl">🤖</div>
                                    <div>
                                        <h2 className="text-4xl font-black text-white mb-2">{selectedProject.title}</h2>
                                        <p className="text-xl text-gray-300">{selectedProject.subtitle}</p>
                                    </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-400">{selectedProject.status}</span>
                                    <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400">{selectedProject.date}</span>
                                    <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400">{selectedProject.category}</span>
                                </div>
                                
                                <div className="bg-gray-800/30 rounded-lg p-4 mb-6">
                                    <div className="text-lg font-bold text-white mb-2">{selectedProject.team.department}</div>
                                    <div className="text-gray-400">Project Advisor: <span className="text-white">{selectedProject.team.advisor}</span></div>
                                </div>
                                
                                <div className="notion-tabs">
                                    {[
                                        { id: 'overview', label: '📋 Project Overview' },
                                        { id: 'methodology', label: '🔬 Methodology' },
                                        { id: 'results', label: '📊 Analysis Metrics' },
                                        { id: 'images', label: `🖼️ ETL, System Flow, Prompt, Website (${selectedProject.mediaAssets.images.length})` }
                                    ].map(tab => (
                                        <button
                                            key={tab.id}
                                            className={`notion-tab-button ${activeTab === tab.id ? 'active' : ''}`}
                                            onClick={() => setActiveTab(tab.id)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Tab Content */}
                            <div className="min-h-96">
                                {/* Overview Tab */}
                                {activeTab === 'overview' && (
                                    <div>
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold text-white mb-4 gradient-text">Introduction</h3>
                                            <p className="text-gray-300 leading-relaxed">{selectedProject.introduction}</p>
                                        </div>
                                        
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold text-white mb-4 gradient-text">Data Pipeline Process</h3>
                                            <p className="text-gray-300 mb-4">As part of the data pipeline:</p>
                                            <ul className="space-y-2">
                                                {selectedProject.dataProcess.map((step, index) => (
                                                    <li key={index} className="text-gray-300 flex items-start">
                                                        <span className="text-blue-400 mr-3 mt-1">•</span>
                                                        {step}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="grid lg:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">Problem Statement</h3>
                                                <p className="text-gray-300 mb-4">{selectedProject.problemStatement.main}</p>
                                                <h4 className="text-lg font-bold text-white mb-3">Current Market Challenges:</h4>
                                                <ul className="space-y-2">
                                                    {selectedProject.problemStatement.challenges.map((challenge, index) => (
                                                        <li key={index} className="text-gray-300 flex items-start">
                                                            <span className="text-red-400 mr-3 mt-1">⚠</span>
                                                            {challenge}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">Solution Overview</h3>
                                                <p className="text-gray-300 mb-4">{selectedProject.solution.overview}</p>
                                                <h4 className="text-lg font-bold text-white mb-3">Key Features:</h4>
                                                <ul className="space-y-2">
                                                    {selectedProject.solution.features.map((feature, index) => (
                                                        <li key={index} className="text-gray-300 flex items-start">
                                                            <span className="text-green-400 mr-3 mt-1">✓</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-8">
                                            <h3 className="text-2xl font-bold text-white mb-4 gradient-text">Technologies Used</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tools.map((tool, index) => (
                                                    <span key={index} className="notion-tech-badge">{tool}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Other tabs remain the same... */}
                                
                                {/* Images Tab */}
                                {activeTab === 'images' && (
                                    <div className="notion-media-grid">
                                        {selectedProject.mediaAssets.images.map((image, index) => (
                                            <div key={index} className="notion-media-item">
                                                <div className="notion-image-container">
                                                    <img 
                                                        src={image.src}
                                                        alt={image.title}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                    <div className="w-full h-full bg-gray-800 rounded-lg hidden items-center justify-center text-4xl">🖼️</div>
                                                </div>
                                                <div className="text-lg font-bold text-white mb-2">{image.title}</div>
                                                <div className="text-gray-300 text-sm mb-3">{image.description}</div>
                                                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">{image.type}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            {/* Action Buttons - Only Notion and GitHub */}
                            <div className="flex gap-4 pt-6 mt-8 border-t border-gray-700">
                                <a href={selectedProject.notionUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    Notion
                                </a>
                                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    GitHub
                                </a>
                                <button onClick={closeProject} className="btn-secondary">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
