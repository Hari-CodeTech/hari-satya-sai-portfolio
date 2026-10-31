/**
 * ====================================================================
 * HARI SATYA SAI PUVVALA — INTERACTIVE DEVELOPER TERMINAL
 * Modular CLI Engine with Genuine Project Data & Keyboard Navigation
 * ====================================================================
 */

(function () {
    'use strict';

    // 1. GENUINE PROFILE DATA (From Existing Portfolio)
    const PROFILE = {
        name: 'Hari Satya Sai Puvvala',
        role: 'Full Stack Java Developer',
        location: 'Kakinada, Andhra Pradesh, India (Open to Relocation)',
        email: 'puvvalahari99@gmail.com',
        phone: '+91 9392496294',
        github: 'https://github.com/Hari-CodeTech',
        linkedin: 'https://www.linkedin.com/in/hari-satya-sai-puvvala-8521a0292/',
        education: 'B.Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning) — Aditya College of Engineering & Technology (CGPA: 8.01)',
        summary: 'Full Stack Java Developer skilled in Java, Spring Boot, MySQL, REST APIs, Hibernate, and Modern Web Applications with certified hands-on internship experience at Edunet & Techsaksham.'
    };

    const SKILLS = {
        'Core Backend': ['Java (OOP, Collections, Streams, Exception Handling)', 'Spring Boot (REST APIs, JPA, Dependency Injection)', 'Hibernate ORM', 'JDBC', 'MySQL (3NF Normalization, Indexing)'],
        'Frontend & UI': ['JavaScript (ES6+)', 'React.js', 'HTML5', 'CSS3', 'Responsive Design'],
        'Tools & Systems': ['Git & GitHub', 'VS Code', 'Eclipse', 'MySQL Workbench', 'Postman', 'Vercel Deployment'],
        'AI & Emerging': ['Artificial Intelligence', 'Natural Language Processing (NLP)', 'Prompt Engineering', 'Deep Learning Basics']
    };

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
            stack: 'HTML5, CSS3, JavaScript (ES6+), Canvas Physics, Responsive CSS',
            desc: 'Cinematic developer portfolio with interactive canvas constellation, 3D technology orbit, and accessibility-first dark/light modes.',
            github: 'https://github.com/Hari-CodeTech/hari-satya-sai-portfolio'
        }
    ];

    const COMMANDS = {
        'help': 'Display list of all available commands',
        'about': 'View Hari\'s background, focus, and credentials',
        'skills': 'Display categorized technical skill set',
        'projects': 'List genuine software projects with descriptions & GitHub links',
        'exp': 'View real internship and technical training experience',
        'arch': 'Launch the Spring Boot 3-Tier Enterprise Architecture Explorer',
        'quiz': 'Launch the Java JVM Code Output Challenge',
        'contact': 'Display contact information, LinkedIn, and GitHub links',
        'resume': 'Download Hari\'s official Java Developer resume',
        'theme': 'Toggle between Dark Mode and Light Mode',
        'clear': 'Clear the terminal output history',
        'sudo': 'Execute with administrator privileges (e.g., sudo hire hari)',
        'matrix': 'Trigger terminal cinematic code matrix',
        'exit': 'Close the terminal window'
    };

    // 2. DOM ELEMENTS
    let overlay = null;
    let terminalBody = null;
    let inputEl = null;
    let triggerBtn = null;
    let history = [];
    let historyIndex = -1;

    // 3. INITIALIZE TERMINAL COMPONENT
    function initTerminal() {
        createTerminalMarkup();
        bindEvents();
    }

    function createTerminalMarkup() {
        // Create Floating Trigger Button
        triggerBtn = document.createElement('button');
        triggerBtn.className = 'dev-terminal-trigger';
        triggerBtn.id = 'devTerminalTrigger';
        triggerBtn.type = 'button';
        triggerBtn.setAttribute('aria-label', 'Open Interactive Developer Terminal');
        triggerBtn.innerHTML = `
            <span class="trigger-dot" aria-hidden="true"></span>
            <span class="trigger-icon" aria-hidden="true">&gt;_</span>
            <span>Terminal</span>
            <span class="trigger-shortcut" aria-hidden="true">Ctrl + ~</span>
        `;
        document.body.appendChild(triggerBtn);

        // Create Terminal Modal Overlay
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
                        Welcome to the interactive terminal! Type <span class="term-cyan">help</span> to view commands.<br>
                        Quick actions: <span class="term-cyan">skills</span>, <span class="term-cyan">projects</span>, <span class="term-cyan">arch</span>, <span class="term-cyan">quiz</span>, <span class="term-cyan">contact</span>
                    </div>
                    <div id="termOutput"></div>
                    <div class="terminal-input-row">
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
        // Open trigger click
        triggerBtn.addEventListener('click', openTerminal);

        // Close buttons click
        const closeBtn = document.getElementById('termCloseBtn');
        const dotClose = document.getElementById('termDotClose');
        if (closeBtn) closeBtn.addEventListener('click', closeTerminal);
        if (dotClose) dotClose.addEventListener('click', closeTerminal);

        // Close on clicking backdrop
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
            } else if (e.key === 'Escape' && overlay.classList.contains('active')) {
                closeTerminal();
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

        // Clicking anywhere in the terminal body refocuses input
        terminalBody.addEventListener('click', function () {
            inputEl.focus();
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

    // 4. COMMAND EXECUTION ENGINE
    function executeCommand(rawInput) {
        const outputDiv = document.getElementById('termOutput');
        if (!outputDiv) return;

        // Render prompt echo
        const echoRow = document.createElement('div');
        echoRow.className = 'term-command-row';
        echoRow.innerHTML = `<span class="term-prompt">hari@portfolio:~$</span> <span class="term-cmd-text">${escapeHtml(rawInput)}</span>`;
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
                    <div class="term-line term-muted">Tip: Use Tab for auto-completion and Arrow Up/Down for command history.</div>
                `;
                break;

            case 'about':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">👤 ${PROFILE.name}</span> — <span class="term-purple">${PROFILE.role}</span></div>
                    <div class="term-line"><span class="term-muted">📍 Location:</span> ${PROFILE.location}</div>
                    <div class="term-line"><span class="term-muted">🎓 Education:</span> ${PROFILE.education}</div>
                    <div class="term-line" style="margin-top: 6px;">${PROFILE.summary}</div>
                `;
                break;

            case 'skills':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">⚡ Technical Skills & Core Competencies:</span></div>
                    ${Object.keys(SKILLS).map(cat => `
                        <div class="term-line" style="margin-top: 6px;">
                            <span class="term-yellow">${cat}:</span><br>
                            &nbsp;&nbsp;${SKILLS[cat].join(' • ')}
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
                            &nbsp;&nbsp;<span class="term-muted">Stack:</span> ${p.stack}<br>
                            &nbsp;&nbsp;<span class="term-muted">Overview:</span> ${p.desc}
                            ${p.github ? `<br>&nbsp;&nbsp;<a href="${p.github}" target="_blank" rel="noopener noreferrer" style="color: #22d3ee; text-decoration: underline;">GitHub Repository ↗</a>` : ''}
                        </div>
                    `).join('')}
                `;
                break;

            case 'exp':
            case 'experience':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">💼 Verified Experience & Internships:</span></div>
                    <div class="term-line" style="margin-top: 6px;">
                        <span class="term-green">1. Artificial Intelligence Intern — Edunet Foundation</span> <span class="term-muted">(Jun 2024 – Jul 2024)</span><br>
                        &nbsp;&nbsp;• Developed AI and Computer Vision pipelines utilizing OpenCV, Python, and Deep Learning.<br>
                        &nbsp;&nbsp;• Built an automated eye-blink & drowsiness detection system improving road safety monitoring.
                    </div>
                    <div class="term-line" style="margin-top: 8px;">
                        <span class="term-green">2. AI & Cloud Technologies Intern — Techsaksham (Microsoft & SAP)</span> <span class="term-muted">(Jan 2024 – Apr 2024)</span><br>
                        &nbsp;&nbsp;• Practical engineering in Machine Learning algorithms, predictive analytics, and enterprise cloud solutions.
                    </div>
                `;
                break;

            case 'arch':
            case 'architecture':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">🏛️ Spring Boot 3-Tier Enterprise Architecture Explorer</span></div>
                    <div class="term-line">Opening interactive architecture simulation...</div>
                `;
                setTimeout(function () {
                    if (window.openArchitectureExplorer) {
                        closeTerminal();
                        window.openArchitectureExplorer();
                    }
                }, 400);
                break;

            case 'quiz':
            case 'challenge':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">☕ Java JVM Code Output Challenge</span></div>
                    <div class="term-line">Launching Java technical interview challenge...</div>
                `;
                setTimeout(function () {
                    if (window.openJavaQuiz) {
                        closeTerminal();
                        window.openJavaQuiz();
                    }
                }, 400);
                break;

            case 'contact':
                responseHtml = `
                    <div class="term-line"><span class="term-cyan">📬 Connect with Hari:</span></div>
                    <div class="term-line">• Email: <a href="mailto:${PROFILE.email}" style="color: #22d3ee;">${PROFILE.email}</a></div>
                    <div class="term-line">• Phone: <span class="term-green">${PROFILE.phone}</span></div>
                    <div class="term-line">• LinkedIn: <a href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer" style="color: #22d3ee;">linkedin.com/in/hari-satya-sai-puvvala ↗</a></div>
                    <div class="term-line">• GitHub: <a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" style="color: #22d3ee;">github.com/Hari-CodeTech ↗</a></div>
                `;
                break;

            case 'resume':
                responseHtml = `<div class="term-line term-green">Downloading Hari_Java_Resume_compressed.pdf...</div>`;
                const link = document.createElement('a');
                link.href = 'assets/Hari_Java_Resume_compressed.pdf';
                link.download = 'Hari_Java_Resume_compressed.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'theme':
                const themeBtn = document.getElementById('themeToggle');
                if (themeBtn) {
                    themeBtn.click();
                    const newTheme = document.documentElement.getAttribute('data-theme');
                    responseHtml = `<div class="term-line term-green">Theme switched to <span class="term-cyan">${newTheme.toUpperCase()}</span> mode.</div>`;
                } else {
                    responseHtml = `<div class="term-line term-muted">Theme toggle button not found.</div>`;
                }
                break;

            case 'clear':
            case 'cls':
                outputDiv.innerHTML = '';
                return;

            case 'sudo':
                if (args === 'hire hari' || args === 'hire' || args === 'hire hari!') {
                    responseHtml = `
                        <div class="term-line term-green">
                            [SUCCESS] Authorization Verified: Recruiter / Technical Lead Privileges Detected!<br>
                            ──────────────────────────────────────────────────────────<br>
                            🎉 <strong>Fantastic decision!</strong> Hari brings solid Java backend mechanics, Spring Boot REST architecture, MySQL normalization, and positive team energy.<br>
                            Ready to interview? Email directly at: <a href="mailto:puvvalahari99@gmail.com" style="color: #22d3ee; font-weight: bold;">puvvalahari99@gmail.com</a> or call <span class="term-yellow">+91 9392496294</span>.
                        </div>
                    `;
                } else {
                    responseHtml = `<div class="term-line term-yellow">sudo: ${escapeHtml(args || 'command')} not found or access denied. Try: <span class="term-cyan">sudo hire hari</span></div>`;
                }
                break;

            case 'matrix':
                responseHtml = `<div class="term-line term-green">Wake up, Neo... The Matrix has you. Follow the white rabbit. 🐇</div>`;
                triggerMatrixEffect();
                break;

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

        // Scroll to bottom
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

    function triggerMatrixEffect() {
        const outputDiv = document.getElementById('termOutput');
        if (!outputDiv) return;

        let count = 0;
        const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*';
        const interval = setInterval(function () {
            let line = '';
            for (let i = 0; i < 40; i++) {
                line += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            const el = document.createElement('div');
            el.className = 'term-line';
            el.style.color = '#22c55e';
            el.style.fontFamily = 'monospace';
            el.style.opacity = '0.9';
            el.textContent = line;
            outputDiv.appendChild(el);
            terminalBody.scrollTop = terminalBody.scrollHeight;

            count++;
            if (count > 18) {
                clearInterval(interval);
            }
        }, 60);
    }

    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Expose openTerminal globally so terminal can be invoked from other triggers if needed
    window.openDevTerminal = openTerminal;

    // Initialize when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTerminal);
    } else {
        initTerminal();
    }

})();
