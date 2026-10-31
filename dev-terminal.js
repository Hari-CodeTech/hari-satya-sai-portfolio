/**
 * ====================================================================
 * HARI SATYA SAI PUVVALA — INTERACTIVE DEVELOPER TERMINAL
 * Fully Verified Information, Safe Formatting & Keyboard Navigation
 * ====================================================================
 */

(function () {
    'use strict';

    // 1. CONFIRMED & VERIFIED PROFILE DATA (Direct from portfolio codebase)
    const PROFILE = {
        name: 'Hari Satya Sai Puvvala',
        role: 'Full Stack Java Developer',
        degree: 'Bachelor of Technology in Computer Science and Technology',
        period: '2022 — 2026',
        college: 'Swarnandhra College of Engineering and Technology (SCET)',
        location: 'West Godavari, Andhra Pradesh, India (Open to Relocation across India)',
        cgpa: '8.25 / 10.0',
        email: 'haripuvvala7924@gmail.com',
        phone: '+91 7989856745',
        github: 'https://github.com/Hari-CodeTech',
        linkedin: 'https://www.linkedin.com/in/hari-satya-sai-puvvala-07b007341/',
        summary: 'Full Stack Java Developer specializing in Core Java, Spring Boot, MySQL, REST APIs, and Hibernate. Experienced in developing 3NF relational schemas, scalable REST endpoints, and responsive web applications through full-stack training at Codegnan IT Solutions and enterprise internship experience at EVONSYS INDIA.'
    };

    // 2. VERIFIED SKILLS (Structured into the 5 requested categories)
    const SKILLS = {
        'Core Java and Backend': [
            'Core Java (OOP, Collections Framework, Multithreading, Exception Handling, Streams)',
            'Advanced Java (JDBC, Servlets, JSP)',
            'Spring Framework & Spring Boot (RESTful Web Services, Dependency Injection, Spring Data JPA)',
            'Hibernate ORM & Clean Backend Architecture'
        ],
        'Database Technologies': [
            'MySQL (Relational Database Management - RDBMS)',
            'Schema Normalization (3NF)',
            'B-Tree Indexing & Query Optimization',
            'Complex Multi-Table JOINs & Foreign Key Integrity'
        ],
        'Frontend Technologies': [
            'HTML5 & Semantic Markup',
            'CSS3 & Modern Responsive Design',
            'JavaScript (ES6+)',
            'React.js',
            'Bootstrap'
        ],
        'Developer Tools': [
            'Git & GitHub (Version Control)',
            'Eclipse IDE',
            'Visual Studio Code',
            'Postman (REST API Testing)',
            'MySQL Workbench'
        ],
        'AI and Emerging Technologies': [
            'AI-Powered Digital Transformation',
            'Natural Language Processing (NLP) Fundamentals',
            'Prompt Engineering',
            'SDLC & Automated Testing Fundamentals'
        ]
    };

    // 3. VERIFIED EXPERIENCE & TRAINING (Direct from index.html)
    const EXPERIENCES = [
        {
            role: 'Java Full Stack Trainee',
            company: 'Codegnan IT Solutions',
            period: 'Jun 2026 – Present',
            bullets: [
                'Undergoing hands-on training in Java Full Stack Development, focusing on Core Java, Advanced Java, Spring Boot, and Hibernate.',
                'Gaining practical experience in HTML, CSS, JavaScript, React/Angular, MySQL, and real-world project development.',
                'Participating in code reviews, technical assessments, and software architecture workshops for scalable backend services.'
            ],
            tags: ['Core Java', 'Advanced Java', 'Spring Boot', 'Hibernate', 'MySQL', 'React.js', 'REST APIs']
        },
        {
            role: 'Java Intern',
            company: 'EVONSYS INDIA Pvt. Ltd.',
            period: 'Jan 2026 – May 2026',
            bullets: [
                'Completed an internship at EvonSys, gaining exposure to Core Java, Pega, Business Process Automation (BPA), and low-code application development in an enterprise environment.',
                'Developed an understanding of AI-powered digital transformation, professional communication, SDLC, debugging, and version control using Git/GitHub.'
            ],
            tags: ['Core Java', 'Pega', 'Business Process Automation (BPA)', 'Low-code Development', 'Git/GitHub', 'SDLC']
        }
    ];

    const CERTIFICATIONS = [
        { title: 'ServiceNow Certified Application Developer (CAD)', issuer: 'ServiceNow', date: 'Nov 2025' },
        { title: 'Java Full Stack Development Virtual Internship', issuer: 'AICTE and Edu Skills', date: '2024' },
        { title: 'AWS Data Engineering Virtual Internship', issuer: 'AICTE and Edu Skills', date: '2024' }
    ];

    // 4. VERIFIED PROJECTS (From existing portfolio)
    const PROJECTS = [
        {
            name: 'JobTrack – Application & Recruitment Management System',
            stack: 'MySQL, SQL, Relational Schema (3NF), Composite Indexing',
            desc: 'Normalized relational database tracking candidates, companies, job postings, and interview stages with composite indexes and analytical recruitment metrics.',
            github: 'https://github.com/Hari-CodeTech/JobTrack-SQL_Project'
        },
        {
            name: 'TrendPulse – Real-Time News Intelligence Platform',
            stack: 'React, JavaScript (ES6+), News API, CSS3, Vercel',
            desc: 'Real-time responsive news web application with category filtering, search capabilities, and instant API aggregation.',
            github: 'https://github.com/Hari-CodeTech/TrendPulse-A-Real-Time-News-Website'
        },
        {
            name: 'Government Scheme Information System',
            stack: 'Java, Spring Boot, MySQL, REST APIs, Hibernate',
            desc: 'Enterprise full-stack web application to search and filter central and state welfare initiatives based on citizen eligibility criteria.',
            github: null
        },
        {
            name: 'Personal Borrowed Money Tracker',
            stack: 'React, JavaScript, Vite, CSS3, Local Persistence',
            desc: 'Single-page financial ledger application tracking peer-to-peer loans, categorized records, and repayment statuses.',
            github: 'https://github.com/Hari-CodeTech/personal-borrowed-money-tracker'
        },
        {
            name: 'Personal Portfolio (Current Site)',
            stack: 'HTML5, CSS3 Variables, JavaScript (ES6+), Canvas Physics, Dark/Light Mode',
            desc: 'Cinematic developer portfolio with interactive canvas constellation, 3D technology orbit, and accessibility-first dark/light modes.',
            github: 'https://github.com/Hari-CodeTech/hari-satya-sai-portfolio'
        },
        {
            name: 'SwiftRide – Ride Booking & Fleet Management System',
            stack: 'Core Java, OOP, Collections, Exception Handling, File I/O',
            desc: 'Core Java backend system simulating on-demand ride dispatch, dynamic fare calculation, and driver-rider state machines.',
            github: 'https://github.com/Hari-CodeTech/SwiftRide-Java-Project'
        }
    ];

    const COMMANDS = {
        'help': 'Display list of all available commands',
        'about': 'View Hari\'s verified academic degree, college, CGPA, and summary',
        'skills': 'Display categorized technical skill set (Java, DB, Frontend, Tools, AI)',
        'exp': 'View confirmed internship experience at Codegnan & EvonSys',
        'projects': 'List genuine software projects with descriptions & GitHub links',
        'arch': 'Launch the Spring Boot 3-Tier Enterprise Architecture Explorer',
        'quiz': 'Launch the Java JVM Code Output Challenge',
        'contact': 'Display confirmed email, phone number, LinkedIn, and GitHub links',
        'resume': 'Download Hari\'s official Java Developer resume',
        'theme': 'Toggle between Dark Mode and Light Mode',
        'clear': 'Clear the terminal output history',
        'sudo': 'Developer Easter Egg command (e.g., sudo hire hari)',
        'matrix': 'Trigger optional 3.5-second cinematic code animation (press ESC to stop)',
        'exit': 'Close the terminal window'
    };

    // 5. DOM ELEMENTS & STATE
    let overlay = null;
    let terminalBody = null;
    let inputEl = null;
    let triggerBtn = null;
    let history = [];
    let historyIndex = -1;
    let matrixTimer = null;
    let isMatrixRunning = false;

    // 6. INITIALIZATION
    function initTerminal() {
        createTerminalMarkup();
        bindEvents();
    }

    function createTerminalMarkup() {
        // Floating Robot Mascot Trigger Button
        triggerBtn = document.createElement('button');
        triggerBtn.className = 'dev-terminal-trigger';
        triggerBtn.id = 'devTerminalTrigger';
        triggerBtn.type = 'button';
        triggerBtn.setAttribute('aria-label', 'Open Interactive Developer Terminal (Ctrl + ~)');
        triggerBtn.innerHTML = `
            <div class="robot-mascot-wrapper" aria-hidden="true">
                <svg class="robot-svg" viewBox="0 0 100 110" width="62" height="68" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- 3D White Ceramic Body Shading -->
                        <linearGradient id="robotBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#ffffff"/>
                            <stop offset="45%" stop-color="#f1f5f9"/>
                            <stop offset="85%" stop-color="#cbd5e1"/>
                            <stop offset="100%" stop-color="#94a3b8"/>
                        </linearGradient>

                        <!-- Metallic Joint Shading -->
                        <linearGradient id="robotMetalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#e2e8f0"/>
                            <stop offset="100%" stop-color="#64748b"/>
                        </linearGradient>

                        <!-- Visor Dark Gloss -->
                        <linearGradient id="robotVisorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#0a1020"/>
                            <stop offset="100%" stop-color="#020617"/>
                        </linearGradient>

                        <!-- Visor Glass Curved Specular Sheen -->
                        <linearGradient id="robotGlassSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.55"/>
                            <stop offset="45%" stop-color="#38bdf8" stop-opacity="0.2"/>
                            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
                        </linearGradient>

                        <!-- Glowing Cyan Accents -->
                        <linearGradient id="robotCyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#67e8f9"/>
                            <stop offset="100%" stop-color="#06b6d4"/>
                        </linearGradient>

                        <!-- Cyan Eye Radial -->
                        <radialGradient id="robotEyeGlow" cx="40%" cy="40%" r="60%">
                            <stop offset="0%" stop-color="#a5f3fc"/>
                            <stop offset="55%" stop-color="#22d3ee"/>
                            <stop offset="100%" stop-color="#0891b2"/>
                        </radialGradient>

                        <!-- Soft Ground Shadow -->
                        <radialGradient id="robotShadowGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stop-color="#000000" stop-opacity="0.45"/>
                            <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
                        </radialGradient>
                    </defs>

                    <!-- Ground Levitation Shadow -->
                    <ellipse class="robot-ground-shadow" cx="50" cy="102" rx="22" ry="4" fill="url(#robotShadowGrad)"/>

                    <!-- Floating Robot Group -->
                    <g class="robot-character">
                        <!-- Levitation Thruster / Energy Glow -->
                        <ellipse cx="50" cy="85" rx="14" ry="4" fill="#22d3ee" class="robot-thruster-aura"/>
                        <ellipse cx="50" cy="84" rx="8" ry="2.5" fill="#a5f3fc" class="robot-thruster-core"/>

                        <!-- Left Arm -->
                        <g class="robot-arm robot-arm-left">
                            <rect x="17" y="56" width="9" height="18" rx="4.5" fill="url(#robotBodyGrad)" transform="rotate(16 21 65)"/>
                            <circle cx="18" cy="72" r="3" fill="#22d3ee" opacity="0.9"/>
                        </g>

                        <!-- Right Arm -->
                        <g class="robot-arm robot-arm-right">
                            <rect x="74" y="56" width="9" height="18" rx="4.5" fill="url(#robotBodyGrad)" transform="rotate(-18 78 65)"/>
                            <circle cx="82" cy="72" r="3" fill="#22d3ee" opacity="0.9"/>
                        </g>

                        <!-- Body / Torso -->
                        <rect x="29" y="52" width="42" height="32" rx="16" fill="url(#robotBodyGrad)" stroke="rgba(255,255,255,0.6)" stroke-width="0.8"/>
                        <!-- Torso 3D Bottom Shade -->
                        <path d="M 32 72 Q 50 86 68 72 A 16 16 0 0 1 32 72 Z" fill="#94a3b8" opacity="0.35"/>

                        <!-- Chest Terminal Emblem / Power Core -->
                        <circle cx="50" cy="67" r="8.5" fill="#090e1a" stroke="#22d3ee" stroke-width="1.2" class="robot-chest-ring"/>
                        <circle cx="50" cy="67" r="6" fill="#0f172a"/>
                        <!-- Glowing Terminal Prompt ">_" on Chest -->
                        <path d="M 46.5 64.5 L 49.5 67 L 46.5 69.5" fill="none" stroke="#22d3ee" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="51.5" y1="69.5" x2="54" y2="69.5" stroke="#22d3ee" stroke-width="1.2" stroke-linecap="round"/>

                        <!-- Neck Joint -->
                        <rect x="44" y="47" width="12" height="6" rx="2" fill="url(#robotMetalGrad)"/>

                        <!-- Antenna Stem -->
                        <line x1="50" y1="12" x2="50" y2="20" stroke="url(#robotMetalGrad)" stroke-width="2.5" stroke-linecap="round"/>
                        <!-- Glowing Antenna Orb -->
                        <circle cx="50" cy="10" r="4.5" fill="url(#robotCyanGlow)" class="robot-antenna-orb"/>
                        <circle cx="49" cy="8.5" r="1.5" fill="#ffffff" opacity="0.8"/>

                        <!-- Side Sensor Ears -->
                        <rect x="19" y="27" width="6" height="12" rx="3" fill="url(#robotMetalGrad)"/>
                        <circle cx="21" cy="33" r="2.5" fill="#22d3ee" class="robot-ear-light"/>
                        
                        <rect x="75" y="27" width="6" height="12" rx="3" fill="url(#robotMetalGrad)"/>
                        <circle cx="79" cy="33" r="2.5" fill="#22d3ee" class="robot-ear-light"/>

                        <!-- Head Dome -->
                        <rect x="23" y="18" width="54" height="33" rx="16.5" fill="url(#robotBodyGrad)" stroke="rgba(255,255,255,0.7)" stroke-width="0.8"/>
                        <!-- Head 3D Specular Highlight -->
                        <ellipse cx="44" cy="22" rx="16" ry="3.5" fill="#ffffff" opacity="0.75"/>

                        <!-- Visor / Faceplate -->
                        <rect x="28" y="24" width="44" height="21" rx="10.5" fill="url(#robotVisorGrad)" stroke="#1e293b" stroke-width="1"/>
                        
                        <!-- Curved Glass Specular Highlight on Visor -->
                        <path d="M 31 28 Q 50 25 67 30 Q 64 26 50 25 Q 36 25 31 28 Z" fill="url(#robotGlassSheen)"/>

                        <!-- Expressive Glowing Cyan Visor Eyes -->
                        <g class="robot-eyes">
                            <ellipse class="robot-eye robot-eye-left" cx="42" cy="34" rx="4.5" ry="5.5" fill="url(#robotEyeGlow)"/>
                            <ellipse cx="40.5" cy="32" rx="1.5" ry="1.8" fill="#ffffff" opacity="0.9"/>
                            
                            <ellipse class="robot-eye robot-eye-right" cx="58" cy="34" rx="4.5" ry="5.5" fill="url(#robotEyeGlow)"/>
                            <ellipse cx="56.5" cy="32" rx="1.5" ry="1.8" fill="#ffffff" opacity="0.9"/>
                        </g>

                        <!-- Cute Cheeks -->
                        <circle cx="34" cy="39" r="2" fill="#22d3ee" opacity="0.45"/>
                        <circle cx="66" cy="39" r="2" fill="#22d3ee" opacity="0.45"/>
                    </g>
                </svg>
            </div>
            <span class="robot-tooltip" role="tooltip">
                <span class="robot-tooltip-text">Open Developer Terminal</span>
                <span class="robot-tooltip-kbd">Ctrl + ~</span>
            </span>
        `;
        document.body.appendChild(triggerBtn);

        // Terminal Modal Overlay
        overlay = document.createElement('div');
        overlay.className = 'terminal-modal-overlay';
        overlay.id = 'terminalModalOverlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Developer Terminal CLI');

        overlay.innerHTML = `
            <div class="terminal-window">
                <div class="terminal-titlebar">
                    <div class="terminal-controls">
                        <span class="terminal-dot dot-close" id="termDotClose" title="Close Terminal"></span>
                        <span class="terminal-dot dot-min" title="Minimize"></span>
                        <span class="terminal-dot dot-max" title="Maximize"></span>
                    </div>
                    <div class="terminal-title">
                        <span>⚡ hari@portfolio: ~ (bash)</span>
                    </div>
                    <button type="button" class="terminal-close-btn" id="termCloseBtn" aria-label="Close Terminal">&times;</button>
                </div>
                <div class="terminal-body" id="termBody">
                    <div class="term-banner">
┌────────────────────────────────────────────────────────┐
│  HARI SATYA SAI PUVVALA — Interactive Developer CLI   │
│  Full Stack Java Developer • Spring Boot • MySQL • AI   │
└────────────────────────────────────────────────────────┘</div>
                    <div class="term-welcome">
                        Welcome! Type <span class="term-cyan">help</span> to view all commands.<br>
                        Quick explore: <span class="term-cyan">about</span>, <span class="term-cyan">skills</span>, <span class="term-cyan">exp</span>, <span class="term-cyan">projects</span>, <span class="term-cyan">contact</span>, <span class="term-cyan">arch</span>, <span class="term-cyan">quiz</span>
                    </div>
                    <div id="termOutput"></div>
                    <div class="terminal-input-row" id="termInputRow">
                        <span class="term-prompt">hari@portfolio:~$</span>
                        <input type="text" class="terminal-input" id="termInput" autocomplete="off" spellcheck="false" aria-label="Terminal command prompt">
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        terminalBody = document.getElementById('termBody');
        inputEl = document.getElementById('termInput');
    }

    function bindEvents() {
        triggerBtn.addEventListener('click', openTerminal);

        const closeBtn = document.getElementById('termCloseBtn');
        const dotClose = document.getElementById('termDotClose');
        if (closeBtn) closeBtn.addEventListener('click', closeTerminal);
        if (dotClose) dotClose.addEventListener('click', closeTerminal);

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                closeTerminal();
            }
        });

        // Global Keyboard Shortcut: Ctrl + ~ or Ctrl + ` or Escape
        window.addEventListener('keydown', function (e) {
            if (e.ctrlKey && (e.key === '`' || e.key === '~')) {
                e.preventDefault();
                toggleTerminal();
            } else if (e.key === 'Escape') {
                if (isMatrixRunning) {
                    stopMatrixAnimation();
                } else if (overlay.classList.contains('active')) {
                    closeTerminal();
                }
            }
        });

        // Terminal input keyboard handling
        inputEl.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const rawCmd = inputEl.value;
                inputEl.value = '';
                if (rawCmd.trim().length > 0) {
                    history.push(rawCmd.trim());
                    historyIndex = history.length;
                }
                executeCommand(rawCmd.trim());
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (history.length > 0 && historyIndex > 0) {
                    historyIndex--;
                    inputEl.value = history[historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < history.length - 1) {
                    historyIndex++;
                    inputEl.value = history[historyIndex];
                } else {
                    historyIndex = history.length;
                    inputEl.value = '';
                }
            } else if (e.key === 'Tab') {
                e.preventDefault();
                autoCompleteCommand(inputEl.value);
            }
        });

        terminalBody.addEventListener('click', function () {
            if (!isMatrixRunning) {
                inputEl.focus();
            }
        });
    }

    function openTerminal() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(function () {
            inputEl.focus();
        }, 100);
    }

    function closeTerminal() {
        if (isMatrixRunning) {
            stopMatrixAnimation();
        }
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        triggerBtn.focus();
    }

    function toggleTerminal() {
        if (overlay.classList.contains('active')) {
            closeTerminal();
        } else {
            openTerminal();
        }
    }

    // 7. COMMAND EXECUTION ENGINE (Strictly Safe & Verified)
    function executeCommand(rawInput) {
        const outputDiv = document.getElementById('termOutput');
        if (!outputDiv) return;

        // Clean & sanitize input echo
        const sanitizedInput = escapeHtml(rawInput);
        const echoRow = document.createElement('div');
        echoRow.className = 'term-command-row';
        echoRow.innerHTML = `<span class="term-prompt">hari@portfolio:~$</span> <span class="term-cmd-text">${sanitizedInput}</span>`;
        outputDiv.appendChild(echoRow);

        const trimmed = rawInput.trim();
        const parts = trimmed.split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1).join(' ').toLowerCase();

        let responseHtml = '';

        switch (cmd) {
            case '':
                break;

            case 'help':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">Available Portfolio Commands:</span></div>
                    <div class="term-table">
                        ${Object.keys(COMMANDS).map(c => `
                            <div class="term-table-cmd">${c}</div>
                            <div class="term-table-desc">${COMMANDS[c]}</div>
                        `).join('')}
                    </div>
                    <div class="term-line term-muted">Tips: Tab for auto-complete • Arrow Up/Down for command history • ESC to close.</div>
                `;
                break;

            case 'about':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">👤 ${PROFILE.name}</span> — <span class="term-purple">${PROFILE.role}</span></div>
                    <div class="term-line"><span class="term-muted">🎓 Degree:</span> ${PROFILE.degree} (${PROFILE.period})</div>
                    <div class="term-line"><span class="term-muted">🏛️ College:</span> ${PROFILE.college}</div>
                    <div class="term-line"><span class="term-muted">📊 CGPA:</span> <span class="term-green">${PROFILE.cgpa}</span></div>
                    <div class="term-line"><span class="term-muted">📍 Location:</span> ${PROFILE.location}</div>
                    <div class="term-line" style="margin-top: 8px; line-height: 1.6;">${PROFILE.summary}</div>
                `;
                break;

            case 'skills':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">⚡ Verified Technical Skills:</span></div>
                    ${Object.keys(SKILLS).map(cat => `
                        <div class="term-line" style="margin-top: 8px;">
                            <span class="term-yellow">${cat}:</span><br>
                            ${SKILLS[cat].map(s => `&nbsp;&nbsp;• ${s}`).join('<br>')}
                        </div>
                    `).join('')}
                `;
                break;

            case 'exp':
            case 'experience':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">💼 Confirmed Professional Experience & Training:</span></div>
                    ${EXPERIENCES.map((exp, idx) => `
                        <div class="term-line" style="margin-top: 10px;">
                            <span class="term-green">${idx + 1}. ${exp.role}</span> — <span class="term-purple">${exp.company}</span> <span class="term-muted">(${exp.period})</span><br>
                            ${exp.bullets.map(b => `&nbsp;&nbsp;• ${b}`).join('<br>')}<br>
                            &nbsp;&nbsp;<span class="term-muted">Technologies:</span> <span class="term-cyan">${exp.tags.join(' • ')}</span>
                        </div>
                    `).join('')}
                    <div class="term-line" style="margin-top: 14px;"><span class="term-cyan">📜 Certifications & Virtual Internships:</span></div>
                    ${CERTIFICATIONS.map(c => `
                        <div class="term-line" style="margin-top: 4px;">
                            &nbsp;&nbsp;• <span class="term-yellow">${c.title}</span> — <span class="term-muted">${c.issuer} (${c.date})</span>
                        </div>
                    `).join('')}
                `;
                break;

            case 'projects':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">📂 Real-World Portfolio Projects:</span></div>
                    ${PROJECTS.map((p, idx) => `
                        <div class="term-line" style="margin-top: 8px;">
                            <span class="term-green">${idx + 1}. ${p.name}</span><br>
                            &nbsp;&nbsp;<span class="term-muted">Tech Stack:</span> ${p.stack}<br>
                            &nbsp;&nbsp;<span class="term-muted">Summary:</span> ${p.desc}
                            ${p.github ? `<br>&nbsp;&nbsp;<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="term-link">View GitHub Repository ↗</a>` : ''}
                        </div>
                    `).join('')}
                `;
                break;

            case 'contact':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">📬 Direct Contact Information:</span></div>
                    <div class="term-line">• Email: <a href="mailto:${PROFILE.email}" class="term-link">${PROFILE.email}</a></div>
                    <div class="term-line">• Mobile Phone: <a href="tel:${PROFILE.phone}" style="color: #4ade80; text-decoration: none;">${PROFILE.phone}</a></div>
                    <div class="term-line">• LinkedIn Profile: <a href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer" class="term-link">linkedin.com/in/hari-satya-sai-puvvala-07b007341/ ↗</a></div>
                    <div class="term-line">• GitHub Profile: <a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" class="term-link">github.com/Hari-CodeTech ↗</a></div>
                    <div class="term-line">• Location Preference: <span class="term-green">${PROFILE.location}</span></div>
                `;
                break;

            case 'sudo':
                if (args === 'hire hari' || args === 'hire' || args === 'hire hari!') {
                    responseHtml = `
                        <div class="term-line term-green">[SUCCESS] Developer Easter Egg Unlocked!</div>
                        <div class="term-line">You've discovered Hari's hiring command.</div>
                        <div class="term-line" style="margin-top: 4px;">
                            ☕ <span class="term-cyan">Java</span> + <span class="term-purple">Spring Boot</span> + <span class="term-yellow">MySQL</span> + a passion for building useful software.
                        </div>
                        <div class="term-line" style="margin-top: 6px;">Think we could build something together?</div>
                        <div class="term-line">Contact: <a href="mailto:${PROFILE.email}" class="term-link">${PROFILE.email}</a> | <a href="tel:${PROFILE.phone}" style="color: #4ade80;">${PROFILE.phone}</a></div>
                    `;
                } else {
                    responseHtml = `<div class="term-line term-yellow">sudo: ${escapeHtml(args || 'command')} not found. Try: <span class="term-cyan">sudo hire hari</span></div>`;
                }
                break;

            case 'matrix':
                responseHtml = `
                    <div class="term-matrix-status">⚡ Running Matrix cascade (duration: 3.5s • press ESC to stop early)...</div>
                `;
                triggerMatrixEffect();
                break;

            case 'arch':
            case 'architecture':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">🏛️ Opening Spring Boot 3-Tier Enterprise Architecture Explorer...</span></div>
                `;
                setTimeout(function () {
                    if (window.openArchitectureExplorer) {
                        closeTerminal();
                        window.openArchitectureExplorer();
                    }
                }, 350);
                break;

            case 'quiz':
            case 'challenge':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">☕ Launching Java JVM Code Output Challenge...</span></div>
                `;
                setTimeout(function () {
                    if (window.openJavaQuiz) {
                        closeTerminal();
                        window.openJavaQuiz();
                    }
                }, 350);
                break;

            case 'resume':
                responseHtml = `<div class="term-line term-green">Downloading Hari_Java_Resume_compressed.pdf...</div>`;
                const dlLink = document.createElement('a');
                dlLink.href = 'assets/Hari_Java_Resume_compressed.pdf';
                dlLink.download = 'Hari_Java_Resume_compressed.pdf';
                document.body.appendChild(dlLink);
                dlLink.click();
                document.body.removeChild(dlLink);
                break;

            case 'theme':
                const themeBtn = document.getElementById('themeToggle');
                if (themeBtn) {
                    themeBtn.click();
                    const newTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                    responseHtml = `<div class="term-line term-green">Theme switched to <span class="term-cyan">${newTheme.toUpperCase()}</span> mode.</div>`;
                } else {
                    responseHtml = `<div class="term-line term-muted">Theme toggle button not available.</div>`;
                }
                break;

            case 'clear':
            case 'cls':
                if (isMatrixRunning) {
                    stopMatrixAnimation();
                }
                outputDiv.innerHTML = '';
                return;

            case 'exit':
            case 'close':
            case 'quit':
                closeTerminal();
                return;

            default:
                responseHtml = `<div class="term-line" style="color: #f87171;">command not found: ${escapeHtml(cmd)}. Type <span class="term-cyan">help</span> to see available commands.</div>`;
                break;
        }

        if (responseHtml) {
            const resEl = document.createElement('div');
            resEl.className = 'term-response';
            resEl.innerHTML = responseHtml;
            outputDiv.appendChild(resEl);
        }

        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function autoCompleteCommand(currentText) {
        const text = currentText.trim().toLowerCase();
        if (!text) return;

        const cmdList = Object.keys(COMMANDS);
        const match = cmdList.find(c => c.startsWith(text));
        if (match) {
            inputEl.value = match;
        }
    }

    // 8. CONTROLLED MATRIX ANIMATION (3.5 Seconds, Limited DOM, Clean Shutdown)
    function triggerMatrixEffect() {
        if (isMatrixRunning) return;
        isMatrixRunning = true;

        const outputDiv = document.getElementById('termOutput');
        if (!outputDiv) return;

        const inputRow = document.getElementById('termInputRow');
        if (inputRow) inputRow.style.opacity = '0.5';

        const matrixContainer = document.createElement('div');
        matrixContainer.id = 'termMatrixContainer';
        matrixContainer.style.margin = '4px 0 10px';
        outputDiv.appendChild(matrixContainer);

        const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*+-=<>{}[]';
        let lineCount = 0;
        const maxLines = 18; // strictly bounded
        const intervalDuration = 180; // 180ms * 18 = 3.24 seconds total

        matrixTimer = setInterval(function () {
            if (lineCount >= maxLines || !isMatrixRunning) {
                stopMatrixAnimation();
                return;
            }

            let line = '';
            const lineLen = Math.min(38, Math.floor(terminalBody.clientWidth / 14));
            for (let i = 0; i < lineLen; i++) {
                line += chars.charAt(Math.floor(Math.random() * chars.length));
            }

            const lineEl = document.createElement('div');
            lineEl.className = 'term-line';
            lineEl.style.color = lineCount % 2 === 0 ? '#4ade80' : '#22c55e';
            lineEl.style.fontFamily = 'monospace';
            lineEl.style.fontSize = '0.82rem';
            lineEl.style.letterSpacing = '1px';
            lineEl.textContent = line;
            matrixContainer.appendChild(lineEl);

            terminalBody.scrollTop = terminalBody.scrollHeight;
            lineCount++;
        }, intervalDuration);
    }

    function stopMatrixAnimation() {
        if (matrixTimer) {
            clearInterval(matrixTimer);
            matrixTimer = null;
        }
        isMatrixRunning = false;

        const inputRow = document.getElementById('termInputRow');
        if (inputRow) inputRow.style.opacity = '1';

        const outputDiv = document.getElementById('termOutput');
        if (outputDiv) {
            const endNote = document.createElement('div');
            endNote.className = 'term-line term-muted';
            endNote.style.marginTop = '4px';
            endNote.textContent = '[Matrix sequence terminated. Ready for next command.]';
            outputDiv.appendChild(endNote);
        }

        if (inputEl) {
            inputEl.focus();
        }
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Expose openTerminal globally
    window.openDevTerminal = openTerminal;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTerminal);
    } else {
        initTerminal();
    }

})();
