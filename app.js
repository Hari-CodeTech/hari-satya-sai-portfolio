/**
 * ====================================================================
 * HARI SATYA SAI PUVVALA — PORTFOLIO INTERACTION ENGINE
 * Cinematic & Futuristic Interactive Systems
 * ====================================================================
 */

(function () {
    'use strict';

    // ====================================================================
    // 1. DATA: PROJECT CASE STUDIES (GENUINE CONTENT ONLY)
    // ====================================================================
    const PROJECT_DATA = {
        'swift-ride': {
            number: '01',
            title: 'Swift Ride – Ride Booking System',
            category: 'Core Java Backend',
            status: 'Completed',
            date: 'Jun 2026 – Jul 2026',
            summary: 'A console-based ride-booking architecture supporting Bike, Auto, and Cab rides with dynamic fare calculation, rider/driver management, payment processing, custom exception handling, and safety/SOS functionality.',
            problem: 'Urban transit systems demand deterministic fare engines, rapid nearest-driver assignment under concurrency, and zero tolerance for uncaught runtime exceptions during driver cancelations or ride disputes.',
            solution: 'Engineered a modular object-oriented Java backend with polymorphic fare calculators, stateful rider/driver pools, custom business exceptions (DriverUnavailableException, InsufficientBalanceException), and an integrated emergency SOS dispatch protocol.',
            architecture: 'Hierarchical OOP domain models (User -> Rider, Driver; Vehicle -> Bike, Auto, Cab). Collections Framework (PriorityQueue, ConcurrentHashMap) for state tracking and dispatch algorithms. Robust multi-layer exception handling and simulated payment gateway.',
            tech: ['Core Java', 'OOP Principles', 'Collections Framework', 'Exception Handling', 'Fare Engine', 'Modular Architecture'],
            github: 'https://github.com/Hari-CodeTech/SwiftRide-Java-Project',
            live: null,
            badge: '☕ Java Engine'
        },
        'trend-pulse': {
            number: '02',
            title: 'TrendPulse – Real-Time News Aggregation Platform',
            category: 'Web Application',
            status: 'Live on Vercel',
            date: 'Jan 2026 – Mar 2026',
            summary: 'A responsive React news platform featuring category filtering, keyword search, bookmarks, and redirection to official sources with dark mode and breaking-news ticker.',
            problem: 'Information fragmentation and slow aggregation interfaces overwhelm users with disorganized feeds, duplicate reporting, and clunky navigation on mobile devices.',
            solution: 'Developed a high-performance single-page application integrating the News API with asynchronous data pipelines, cached queries, dynamic topic categorization, localStorage bookmark persistence, and a live breaking-news ticker.',
            architecture: 'Component-driven React architecture utilizing functional hooks (useState, useEffect, useMemo, useCallback). Client-side debounced search, responsive CSS Grid/Flexbox layouts, and theme switching via CSS custom properties.',
            tech: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'News API', 'Vercel Deployment'],
            github: 'https://github.com/Hari-CodeTech/TrendPulse-A-Real-Time-News-Website',
            live: null,
            badge: '⚡ React SPA'
        },
        'job-track': {
            number: '03',
            title: 'JobTrack – Application & Recruitment Management System',
            category: 'Database Management',
            status: 'Completed',
            date: 'Sep 2026 – Oct 2026',
            summary: 'A normalized relational MySQL database to manage job applications, candidates, companies, and job postings with optimized schemas and indexing.',
            problem: 'Recruitment pipelines often break down due to data redundancy, orphaned candidate records, and query bottlenecks during high-volume applicant screening.',
            solution: 'Designed a 3NF normalized relational schema encompassing Candidates, Companies, Job Postings, Applications, and Interview Stages. Implemented foreign key constraints, composite indexes for rapid filtering, and analytical queries for recruitment metrics.',
            architecture: 'Third Normal Form (3NF) relational architecture. Primary/Foreign Key relational integrity with ON DELETE CASCADE. B-Tree composite indexing on candidate email, application status, and posting date. Complex multi-table JOIN views.',
            tech: ['MySQL', 'SQL', 'DBMS', 'RDBMS', 'Schema Normalization (3NF)', 'Indexing & Optimization'],
            github: 'https://github.com/Hari-CodeTech/JobTrack-SQL_Project',
            live: null,
            badge: 'DB Relational DB'
        },
        'govt-scheme': {
            number: '04',
            title: 'Government Scheme Information System',
            category: 'Full Stack Java',
            status: 'In Progress',
            date: '2026',
            summary: 'A full-stack web application to search and filter government welfare schemes based on state, category, and eligibility criteria with Spring Boot REST APIs and MySQL backend.',
            problem: 'Citizens, especially in rural areas, struggle to identify welfare schemes they qualify for due to dispersed government portals and convoluted eligibility rules.',
            solution: 'Creating a centralized eligibility filtering engine where citizens enter basic criteria (age, state, occupation, income) and receive matching central and state welfare initiatives. RESTful APIs manage scheme catalogs, eligibility rules, and application endpoints.',
            architecture: 'Layered Spring Boot enterprise architecture (Controller -> Service -> Repository -> MySQL). DTO abstraction, JPA/Hibernate ORM mappings, RESTful API conventions, and frontend search/filter UI.',
            tech: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Hibernate', 'HTML/CSS', 'JavaScript'],
            github: null,
            live: null,
            badge: '🌱 Spring Boot'
        },
        'portfolio-site': {
            number: '05',
            title: 'Portfolio Website (Creative Redesign)',
            category: 'Portfolio / Creative Engineering',
            status: 'Live on Vercel',
            date: 'Oct 2026',
            summary: 'Personal creative developer portfolio showcasing technical expertise, real-world projects, and verified credentials through interactive canvas animations, 3D particle constellation, and futuristic UI systems.',
            problem: 'Traditional developer portfolios are static and fail to convey technical craftsmanship, creative passion, and attention to detail required in competitive software roles.',
            solution: 'Engineered a cinematic, responsive portfolio featuring an interactive HTML5 canvas particle network, a signature animated Hire Me button with orbital light paths, custom cursor dynamics, 3D card tilt physics, and an accessible contact modal.',
            architecture: 'Modern semantic HTML5, zero-dependency performant Vanilla JS systems, custom CSS3 animation variables, and responsive modular architecture optimized for sub-second FCP on Vercel.',
            tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'HTML5 Canvas', 'IntersectionObserver', 'Vercel'],
            github: 'https://github.com/Hari-CodeTech/hari-satya-sai-portfolio',
            live: 'https://hari-satya-sai-portfolio-website.vercel.app/',
            badge: '✨ Interactive UI'
        },
        'borrowed-money-tracker': {
            number: '06',
            title: 'Personal Borrowed Money Tracker',
            category: 'Financial Tracker',
            status: 'Live on Vercel',
            date: 'Oct 2026',
            summary: 'A personal financial tracking application to organize records by people and categories, manage transactions, calculate balances, and track repayments through an intuitive responsive dashboard.',
            problem: 'Tracking informal peer-to-peer loans, split expenses, and partial repayments without a dedicated system leads to confusion, missed repayments, and lost financial records.',
            solution: 'Built a single-page React dashboard powered by Vite that enables users to record lend/borrow transactions, track running person-by-person balances, categorize entries, and visualize payment statuses in real time.',
            architecture: 'Modern React SPA built with Vite. Stateful ledger computation, local persistence, responsive flex/grid data tables, and dynamic balance aggregators.',
            tech: ['React', 'JavaScript', 'Vite', 'CSS3', 'Vercel Deployment'],
            github: 'https://github.com/Hari-CodeTech/personal-borrowed-money-tracker',
            live: 'https://personal-borrowed-money-tracker-chi.vercel.app/',
            badge: '💸 Finance SPA'
        }
    };

    // ====================================================================
    // 1.5 THEME TOGGLE (DARK MODE / LIGHT MODE)
    // ====================================================================
    function initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');

        function updateToggleAccessibility(theme) {
            if (!themeToggle) return;
            const isLight = theme === 'light';
            const nextMode = isLight ? 'dark' : 'light';
            themeToggle.setAttribute('aria-label', `Switch to ${nextMode} mode`);
            themeToggle.setAttribute('title', `Switch to ${nextMode} mode`);
        }

        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        updateToggleAccessibility(currentTheme);

        if (themeToggle) {
            themeToggle.addEventListener('click', function () {
                const current = document.documentElement.getAttribute('data-theme') || 'dark';
                const next = current === 'dark' ? 'light' : 'dark';

                // Smooth theme transition
                document.documentElement.classList.add('theme-transition');
                document.documentElement.setAttribute('data-theme', next);

                try {
                    localStorage.setItem('theme', next);
                } catch (e) {
                    console.warn('Unable to persist theme to localStorage', e);
                }

                if (metaThemeColor) {
                    metaThemeColor.setAttribute('content', next === 'light' ? '#f8fafc' : '#070b17');
                }

                updateToggleAccessibility(next);

                setTimeout(function () {
                    document.documentElement.classList.remove('theme-transition');
                }, 350);
            });
        }

        // Listen for OS scheme changes if user has not set a manual preference
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
                if (!localStorage.getItem('theme')) {
                    const osTheme = e.matches ? 'dark' : 'light';
                    document.documentElement.setAttribute('data-theme', osTheme);
                    if (metaThemeColor) {
                        metaThemeColor.setAttribute('content', osTheme === 'light' ? '#f8fafc' : '#070b17');
                    }
                    updateToggleAccessibility(osTheme);
                }
            });
        }
    }

    // ====================================================================
    // 2. HERO PARTICLE CONSTELLATION (HTML5 CANVAS)
    // ====================================================================
    function initHeroParticles() {
        const canvas = document.getElementById('hero-particles');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationFrameId = null;
        let isVisible = true;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        // Mouse interaction state
        const mouse = {
            x: -1000,
            y: -1000,
            targetX: -1000,
            targetY: -1000,
            radius: 140,
            active: false
        };

        function resize() {
            const rect = canvas.parentElement.getBoundingClientRect();
            width = rect.width;
            height = rect.height;

            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);

            initParticles();
        }

        let particles = [];
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 35 : 75;
        const maxConnectDistance = isMobile ? 85 : 125;

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.45,
                    vy: (Math.random() - 0.5) * 0.45,
                    size: Math.random() * 1.8 + 0.8,
                    baseAlpha: Math.random() * 0.45 + 0.25,
                    alpha: 0.3,
                    colorType: Math.random() > 0.4 ? 'cyan' : 'purple',
                    z: Math.random() * 0.8 + 0.6 // depth factor
                });
            }
        }

        window.addEventListener('resize', resize);
        resize();

        // Parallax and mouse tracking
        window.addEventListener('mousemove', function (e) {
            const rect = canvas.getBoundingClientRect();
            if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
                mouse.targetX = e.clientX - rect.left;
                mouse.targetY = e.clientY - rect.top;
                mouse.active = true;
            } else {
                mouse.active = false;
            }
        }, { passive: true });

        window.addEventListener('mouseleave', function () {
            mouse.active = false;
            mouse.targetX = -1000;
            mouse.targetY = -1000;
        });

        // Pause when out of view for performance
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                isVisible = entry.isIntersecting;
                if (isVisible && !animationFrameId) {
                    lastTime = performance.now();
                    animate(lastTime);
                }
            });
        }, { threshold: 0.1 });
        observer.observe(canvas);

        let lastTime = performance.now();

        function animate(now) {
            if (!isVisible) {
                animationFrameId = null;
                return;
            }

            const dt = Math.min((now - lastTime) / 1000, 0.1);
            lastTime = now;

            // Smooth mouse interpolation
            if (mouse.active) {
                mouse.x += (mouse.targetX - mouse.x) * 0.1;
                mouse.y += (mouse.targetY - mouse.y) * 0.1;
            } else {
                mouse.x = -1000;
                mouse.y = -1000;
            }

            ctx.clearRect(0, 0, width, height);

            // Update & Draw Particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                p.x += p.vx * p.z * (dt * 60);
                p.y += p.vy * p.z * (dt * 60);

                // Wrap boundaries
                if (p.x < -10) p.x = width + 10;
                else if (p.x > width + 10) p.x = -10;
                if (p.y < -10) p.y = height + 10;
                else if (p.y > height + 10) p.y = -10;

                // Mouse interaction (gentle repulsion)
                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius && dist > 0) {
                        const force = (1 - dist / mouse.radius) * 1.5;
                        p.x += (dx / dist) * force;
                        p.y += (dy / dist) * force;
                    }
                }

                // Render particle dot
                const isLight = document.documentElement.getAttribute('data-theme') === 'light';
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                if (p.colorType === 'cyan') {
                    ctx.fillStyle = isLight ? `rgba(2, 132, 199, ${Math.min(1, p.baseAlpha * 1.3)})` : `rgba(34, 211, 238, ${p.baseAlpha})`;
                    ctx.shadowColor = isLight ? 'rgba(2, 132, 199, 0.35)' : 'rgba(34, 211, 238, 0.6)';
                } else {
                    ctx.fillStyle = isLight ? `rgba(124, 58, 237, ${Math.min(1, p.baseAlpha * 1.3)})` : `rgba(155, 92, 255, ${p.baseAlpha})`;
                    ctx.shadowColor = isLight ? 'rgba(124, 58, 237, 0.35)' : 'rgba(155, 92, 255, 0.6)';
                }
                ctx.shadowBlur = 6;
                ctx.fill();
                ctx.shadowBlur = 0;

                // Connect nearby particles with thin lines
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxConnectDistance) {
                        const alpha = (1 - dist / maxConnectDistance) * (isLight ? 0.22 : 0.18);
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = isLight ? `rgba(100, 116, 139, ${alpha})` : `rgba(148, 163, 184, ${alpha})`;
                        ctx.lineWidth = 0.75;
                        ctx.stroke();
                    }
                }

                // Connect to mouse if close
                if (mouse.active) {
                    const mdx = p.x - mouse.x;
                    const mdy = p.y - mouse.y;
                    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                    if (mdist < mouse.radius) {
                        const malpha = (1 - mdist / mouse.radius) * 0.28;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = isLight ? `rgba(2, 132, 199, ${malpha})` : `rgba(34, 211, 238, ${malpha})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    // ====================================================================
    // 3. SIGNATURE INTERACTIVE HIRE ME BUTTON (CANVAS RECREATION OF REFERENCE)
    // ====================================================================
    function initHireMeButton() {
        const containers = document.querySelectorAll('.hire-me-interactive');
        if (!containers.length) return;

        containers.forEach(function (container) {
            const canvas = container.querySelector('canvas');
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            let width = 240;
            let height = 76;
            let dpr = Math.min(window.devicePixelRatio || 1, 2);

            function updateSize() {
                const rect = container.getBoundingClientRect();
                width = Math.round(rect.width) || 240;
                height = Math.round(rect.height) || 76;

                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = width + 'px';
                canvas.style.height = height + 'px';
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.scale(dpr, dpr);
            }
            updateSize();
            window.addEventListener('resize', updateSize);

            // Hover state
            let isHovered = false;
            let hoverProgress = 0; // 0 to 1

            container.addEventListener('mouseenter', function () {
                isHovered = true;
            });
            container.addEventListener('mouseleave', function () {
                isHovered = false;
            });

            // Path Nodes layout (matching the reference image geometry)
            // A pill shape with curved left & right caps and flat top/bottom
            // Orbiting red-orange ring traverses a complex interconnected track
            let t = 0; // parameter for motion
            let speed = 0.007;

            // Sparks floating beneath and around the button
            const sparks = [];
            for (let i = 0; i < 9; i++) {
                sparks.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.3 - 0.1,
                    radius: Math.random() * 1.5 + 0.6,
                    alpha: Math.random() * 0.5 + 0.3
                });
            }

            function drawHireButton() {
                ctx.clearRect(0, 0, width, height);

                // Update hover animation state
                if (isHovered && hoverProgress < 1) {
                    hoverProgress = Math.min(1, hoverProgress + 0.08);
                } else if (!isHovered && hoverProgress > 0) {
                    hoverProgress = Math.max(0, hoverProgress - 0.05);
                }

                const currentSpeed = speed * (1 + hoverProgress * 1.4);
                t = (t + currentSpeed) % 1;

                const padX = 14;
                const padY = 12;
                const pillW = width - padX * 2;
                const pillH = height - padY * 2;
                const radius = pillH / 2;

                const leftCenter = padX + radius;
                const rightCenter = padX + pillW - radius;
                const topY = padY;
                const bottomY = padY + pillH;
                const centerY = padY + radius;

                // 1. Draw outer glowing pill track
                ctx.save();
                ctx.beginPath();
                ctx.arc(leftCenter, centerY, radius, Math.PI * 0.5, Math.PI * 1.5);
                ctx.lineTo(rightCenter, topY);
                ctx.arc(rightCenter, centerY, radius, -Math.PI * 0.5, Math.PI * 0.5);
                ctx.lineTo(leftCenter, bottomY);
                ctx.closePath();

                // Subtle inner glow
                ctx.fillStyle = isHovered ? 'rgba(15, 23, 42, 0.95)' : 'rgba(10, 15, 29, 0.85)';
                ctx.fill();

                // Border stroke
                ctx.strokeStyle = `rgba(148, 163, 184, ${0.45 + hoverProgress * 0.35})`;
                ctx.lineWidth = 1.6;
                ctx.shadowColor = 'rgba(255, 255, 255, 0.35)';
                ctx.shadowBlur = isHovered ? 12 : 5;
                ctx.stroke();
                ctx.restore();

                // 2. Internal wire tracks & network curves (recreating reference image)
                ctx.save();
                ctx.lineWidth = 1.2;
                ctx.strokeStyle = `rgba(100, 116, 139, ${0.4 + hoverProgress * 0.25})`;

                // Track A: upper arc across
                ctx.beginPath();
                ctx.moveTo(leftCenter - 8, centerY - 6);
                ctx.bezierCurveTo(leftCenter + 25, topY + 2, rightCenter - 30, topY + 16, rightCenter + 6, centerY - 4);
                ctx.stroke();

                // Track B: lower sweep loop
                ctx.beginPath();
                ctx.moveTo(leftCenter - 10, centerY + 8);
                ctx.bezierCurveTo(leftCenter + 40, bottomY - 6, rightCenter - 25, bottomY - 14, rightCenter + 8, centerY + 6);
                ctx.stroke();

                // Track C: crossing diagonal path
                ctx.beginPath();
                ctx.moveTo(leftCenter, topY + 2);
                ctx.bezierCurveTo(leftCenter + 35, centerY + 18, rightCenter - 45, centerY - 14, rightCenter, bottomY - 2);
                ctx.stroke();

                // Track D: loop in left curve (where red-orange ring orbits)
                ctx.beginPath();
                ctx.ellipse(leftCenter - 4, centerY + 4, radius * 0.72, radius * 0.72, 0, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(71, 85, 105, 0.35)';
                ctx.stroke();
                ctx.restore();

                // 3. Fixed node points (dots) along contour and interior
                const nodes = [
                    // Top contour nodes
                    { x: leftCenter + 12, y: topY },
                    { x: (leftCenter + rightCenter) / 2, y: topY },
                    { x: rightCenter - 14, y: topY },
                    // Bottom contour nodes
                    { x: leftCenter + 15, y: bottomY },
                    { x: (leftCenter + rightCenter) / 2, y: bottomY },
                    { x: rightCenter - 15, y: bottomY },
                    // Left cap nodes
                    { x: padX, y: centerY },
                    { x: leftCenter - radius * 0.7, y: centerY - radius * 0.7 },
                    { x: leftCenter - radius * 0.7, y: centerY + radius * 0.7 },
                    // Right cap nodes
                    { x: padX + pillW, y: centerY },
                    { x: rightCenter + radius * 0.7, y: centerY - radius * 0.7 },
                    { x: rightCenter + radius * 0.7, y: centerY + radius * 0.7 },
                    // Interior junction nodes
                    { x: leftCenter + 32, y: centerY + 10 },
                    { x: rightCenter - 28, y: centerY - 6 }
                ];

                ctx.save();
                for (let i = 0; i < nodes.length; i++) {
                    const n = nodes[i];
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = '#ffffff';
                    ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
                    ctx.shadowBlur = 6;
                    ctx.fill();
                }
                ctx.restore();

                // 4. Sparks drifting around
                ctx.save();
                for (let i = 0; i < sparks.length; i++) {
                    const sp = sparks[i];
                    sp.x += sp.vx;
                    sp.y += sp.vy;

                    if (sp.y < 0) sp.y = height;
                    if (sp.x < 0) sp.x = width;
                    if (sp.x > width) sp.x = 0;

                    ctx.beginPath();
                    ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${sp.alpha * (0.6 + hoverProgress * 0.4)})`;
                    ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
                    ctx.shadowBlur = 4;
                    ctx.fill();
                }
                ctx.restore();

                // 5. SIGNATURE RED-ORANGE NEON GLOWING CIRCULAR ELEMENT (from reference image)
                // The ring travels along a smooth closed loop path over the left hub and into the button
                // Path definition: parametric curve
                const ringPathRadius = radius * 0.58;
                // An organic orbital loop around leftCenter, dipping into lower interior and returning
                const angle = t * Math.PI * 2;
                const ringX = leftCenter - 6 + Math.cos(angle) * (ringPathRadius + Math.sin(angle * 2) * 5);
                const ringY = centerY + 3 + Math.sin(angle) * (ringPathRadius * 0.95);
                const ringRadius = 14 + hoverProgress * 2;

                ctx.save();
                // Outer diffuse red-orange aura
                const auraGradient = ctx.createRadialGradient(ringX, ringY, 4, ringX, ringY, ringRadius * 2.2);
                auraGradient.addColorStop(0, 'rgba(255, 77, 38, 0.55)');
                auraGradient.addColorStop(0.5, 'rgba(255, 87, 34, 0.25)');
                auraGradient.addColorStop(1, 'rgba(255, 87, 34, 0)');
                ctx.beginPath();
                ctx.arc(ringX, ringY, ringRadius * 2.2, 0, Math.PI * 2);
                ctx.fillStyle = auraGradient;
                ctx.fill();

                // The crisp red-orange circular ring
                ctx.beginPath();
                ctx.arc(ringX, ringY, ringRadius, 0, Math.PI * 2);
                ctx.strokeStyle = '#ff4d26';
                ctx.lineWidth = 2.8;
                ctx.shadowColor = '#ff3b14';
                ctx.shadowBlur = isHovered ? 18 : 10;
                ctx.stroke();

                // Inner accent ring & tick marks
                ctx.beginPath();
                ctx.arc(ringX, ringY, ringRadius * 0.65, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255, 120, 80, 0.55)';
                ctx.lineWidth = 1;
                ctx.stroke();

                // Core white micro-light on the ring edge
                const dotAngle = angle * 2;
                const dotX = ringX + Math.cos(dotAngle) * ringRadius;
                const dotY = ringY + Math.sin(dotAngle) * ringRadius;
                ctx.beginPath();
                ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.shadowColor = '#ffffff';
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.restore();

                // 6. Typography "Hire Me"
                ctx.save();
                ctx.font = '700 17px "Outfit", "Inter", sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                // Slight offset to the right because ring is prominent on left
                const textX = (leftCenter + rightCenter) / 2 + 10;
                const textY = centerY;

                // Subtle text glow
                ctx.shadowColor = isHovered ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.45)';
                ctx.shadowBlur = isHovered ? 14 : 6;
                ctx.fillStyle = '#ffffff';
                ctx.fillText('Hire Me', textX, textY);
                ctx.restore();

                requestAnimationFrame(drawHireButton);
            }

            requestAnimationFrame(drawHireButton);

            // Click listener: Open Contact Modal
            container.addEventListener('click', function (e) {
                e.preventDefault();
                openContactModal();
            });
        });
    }

    // ====================================================================
    // 4. CUSTOM CURSOR SYSTEM
    // ====================================================================
    function initCustomCursor() {
        // Disable on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const cursorDot = document.querySelector('.cursor-dot');
        const cursorRing = document.querySelector('.cursor-ring');
        if (!cursorDot || !cursorRing) return;

        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;

        window.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }, { passive: true });

        function updateCursorRing() {
            // Smooth lerp trailing
            ringX += (mouseX - ringX) * 0.16;
            ringY += (mouseY - ringY) * 0.16;

            cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            requestAnimationFrame(updateCursorRing);
        }
        requestAnimationFrame(updateCursorRing);

        // Hover expansions
        const interactives = document.querySelectorAll('a, button, .project-card, .hire-me-interactive, input, textarea, .filter-tab');
        interactives.forEach(function (el) {
            el.addEventListener('mouseenter', function () {
                document.body.classList.add('cursor-hover');
                if (el.classList.contains('hire-me-interactive')) {
                    document.body.classList.add('cursor-hire-hover');
                }
            });
            el.addEventListener('mouseleave', function () {
                document.body.classList.remove('cursor-hover');
                document.body.classList.remove('cursor-hire-hover');
            });
        });
    }

    // ====================================================================
    // 5. CONTACT MODAL & CLIPBOARD SYSTEM
    // ====================================================================
    let contactModal = null;

    function initContactModal() {
        contactModal = document.getElementById('contact-modal');
        if (!contactModal) return;

        const closeBtn = contactModal.querySelector('.modal-close-btn');
        const backdrop = contactModal.querySelector('.modal-backdrop');

        if (closeBtn) closeBtn.addEventListener('click', closeContactModal);
        if (backdrop) backdrop.addEventListener('click', closeContactModal);

        window.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && contactModal.classList.contains('active')) {
                closeContactModal();
            }
        });

        // Copy Phone button
        const copyPhoneBtn = document.getElementById('copy-phone-btn');
        if (copyPhoneBtn) {
            copyPhoneBtn.addEventListener('click', function () {
                copyToClipboard('7989856745', copyPhoneBtn, 'Phone Copied!');
            });
        }

        // Copy Email button
        const copyEmailBtn = document.getElementById('copy-email-btn');
        if (copyEmailBtn) {
            copyEmailBtn.addEventListener('click', function () {
                copyToClipboard('haripuvvala7924@gmail.com', copyEmailBtn, 'Email Copied!');
            });
        }

        // Wire any other hire me triggers
        document.querySelectorAll('[data-open-contact]').forEach(function (el) {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                openContactModal();
            });
        });
    }

    function openContactModal() {
        if (!contactModal) return;
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus close button for keyboard accessibility
        const closeBtn = contactModal.querySelector('.modal-close-btn');
        if (closeBtn) setTimeout(() => closeBtn.focus(), 150);
    }

    function closeContactModal() {
        if (!contactModal) return;
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function copyToClipboard(text, buttonEl, successText) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
                showCopySuccess(buttonEl, successText);
            }).catch(function () {
                fallbackCopy(text, buttonEl, successText);
            });
        } else {
            fallbackCopy(text, buttonEl, successText);
        }
    }

    function fallbackCopy(text, buttonEl, successText) {
        const input = document.createElement('input');
        input.value = text;
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        try {
            document.execCommand('copy');
            showCopySuccess(buttonEl, successText);
        } catch (err) {
            console.warn('Copy command failed', err);
        }
        document.body.removeChild(input);
    }

    function showCopySuccess(buttonEl, successText) {
        const originalText = buttonEl.getAttribute('data-original-text') || buttonEl.innerHTML;
        buttonEl.setAttribute('data-original-text', originalText);

        buttonEl.classList.add('copied');
        buttonEl.innerHTML = `<span class="copy-check">✓</span> ${successText}`;

        setTimeout(function () {
            buttonEl.classList.remove('copied');
            buttonEl.innerHTML = originalText;
        }, 2200);
    }

    // ====================================================================
    // 6. PROJECT SHOWCASE: FILTERS & 3D CARD TILT
    // ====================================================================
    function initProjectShowcase() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const projectCards = document.querySelectorAll('.project-card');

        // Filter functionality
        filterTabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const filter = tab.getAttribute('data-filter');

                projectCards.forEach(function (card) {
                    const category = card.getAttribute('data-category') || '';
                    if (filter === 'all' || category.includes(filter)) {
                        card.style.display = '';
                        setTimeout(() => card.classList.remove('card-hidden'), 10);
                    } else {
                        card.classList.add('card-hidden');
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });

        // 3D Tilt & Specular Shine
        projectCards.forEach(function (card) {
            card.addEventListener('mousemove', function (e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -6.5;
                const rotateY = ((x - centerX) / centerX) * 6.5;

                card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

                // Update specular shine position
                const shine = card.querySelector('.card-shine');
                if (shine) {
                    shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(34, 211, 238, 0.18), transparent 70%)`;
                }
            });

            card.addEventListener('mouseleave', function () {
                card.style.transform = '';
                const shine = card.querySelector('.card-shine');
                if (shine) shine.style.background = '';
            });

            // Click on project details trigger
            const detailsBtn = card.querySelector('.project-details-btn');
            if (detailsBtn) {
                detailsBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    const projectId = card.getAttribute('data-project-id');
                    if (projectId && PROJECT_DATA[projectId]) {
                        openProjectModal(PROJECT_DATA[projectId]);
                    }
                });
            }
        });
    }

    // ====================================================================
    // 7. PROJECT CASE STUDY MODAL
    // ====================================================================
    let projectModal = null;

    function initProjectModal() {
        projectModal = document.getElementById('project-modal');
        if (!projectModal) return;

        const closeBtn = projectModal.querySelector('.modal-close-btn');
        const backdrop = projectModal.querySelector('.modal-backdrop');

        if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
        if (backdrop) backdrop.addEventListener('click', closeProjectModal);

        window.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                closeProjectModal();
            }
        });
    }

    function openProjectModal(data) {
        if (!projectModal) return;

        document.getElementById('pm-number').textContent = data.number;
        document.getElementById('pm-category').textContent = data.category;
        document.getElementById('pm-title').textContent = data.title;
        document.getElementById('pm-date').textContent = data.date;
        document.getElementById('pm-summary').textContent = data.summary;
        document.getElementById('pm-problem').textContent = data.problem;
        document.getElementById('pm-solution').textContent = data.solution;
        document.getElementById('pm-architecture').textContent = data.architecture;

        // Tags
        const tagsContainer = document.getElementById('pm-tech');
        tagsContainer.innerHTML = '';
        data.tech.forEach(function (tech) {
            const span = document.createElement('span');
            span.textContent = tech;
            tagsContainer.appendChild(span);
        });

        // Actions
        const githubBtn = document.getElementById('pm-github');
        if (data.github) {
            githubBtn.href = data.github;
            githubBtn.style.display = 'inline-flex';
        } else {
            githubBtn.style.display = 'none';
        }

        const liveBtn = document.getElementById('pm-live');
        if (data.live) {
            liveBtn.href = data.live;
            liveBtn.style.display = 'inline-flex';
        } else {
            liveBtn.style.display = 'none';
        }

        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        const closeBtn = projectModal.querySelector('.modal-close-btn');
        if (closeBtn) setTimeout(() => closeBtn.focus(), 150);
    }

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ====================================================================
    // 8. SCROLL PROGRESS & NAVIGATION
    // ====================================================================
    function initNavigation() {
        const progressBar = document.getElementById('scroll-progress');
        const header = document.querySelector('.site-header');
        const navLinks = document.getElementById('navLinks');
        const navMenuBtn = document.getElementById('navMenuBtn');
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.nav-links .nav-link');

        // Scroll progress bar
        window.addEventListener('scroll', function () {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / (docHeight || 1)) * 100;

            if (progressBar) progressBar.style.width = progress + '%';

            // Navbar backdrop blur intensity
            if (header) {
                if (scrollTop > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }

            // Active section highlighting
            let current = '';
            sections.forEach(function (section) {
                const sectionTop = section.offsetTop - 150;
                if (scrollTop >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(function (item) {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        }, { passive: true });

        // Mobile Menu Drawer
        if (navMenuBtn && navLinks) {
            navMenuBtn.addEventListener('click', function () {
                const isOpen = navLinks.classList.toggle('nav-open');
                navMenuBtn.classList.toggle('active');
                navMenuBtn.setAttribute('aria-expanded', isOpen);
                document.body.style.overflow = isOpen ? 'hidden' : '';
            });

            navLinks.querySelectorAll('a').forEach(function (link) {
                link.addEventListener('click', function () {
                    navLinks.classList.remove('nav-open');
                    navMenuBtn.classList.remove('active');
                    navMenuBtn.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                });
            });

            window.addEventListener('resize', function () {
                if (window.innerWidth > 1450 && navLinks.classList.contains('nav-open')) {
                    navLinks.classList.remove('nav-open');
                    navMenuBtn.classList.remove('active');
                    navMenuBtn.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            });
        }
    }

    // ====================================================================
    // 9. SCROLL REVEAL OBSERVER
    // ====================================================================
    function initScrollReveals() {
        const reveals = document.querySelectorAll('.reveal');
        if (!reveals.length) return;

        // Reveal elements currently in viewport immediately
        reveals.forEach(function (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 1.15) {
                el.classList.add('revealed');
            }
        });

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' });

        reveals.forEach(function (el) {
            if (!el.classList.contains('revealed')) {
                observer.observe(el);
            }
        });
    }

    // ====================================================================
    // 10. CONTACT FORM CLIENT-SIDE VALIDATION
    // ====================================================================
    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const statusEl = document.getElementById('form-status');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = form.querySelector('[name="name"]').value.trim();
            const email = form.querySelector('[name="email"]').value.trim();
            const subject = form.querySelector('[name="subject"]').value.trim();
            const message = form.querySelector('[name="message"]').value.trim();

            if (!name || !email || !message) {
                showFormStatus('Please fill in your name, email, and message.', 'error');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormStatus('Please provide a valid email address.', 'error');
                return;
            }

            // Create mailto prefill for reliable direct client sending
            const mailtoUrl = `mailto:haripuvvala7924@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

            showFormStatus('Opening your email client to send message directly...', 'success');
            setTimeout(function () {
                window.location.href = mailtoUrl;
                form.reset();
            }, 800);
        });

        function showFormStatus(msg, type) {
            if (!statusEl) return;
            statusEl.textContent = msg;
            statusEl.className = `form-status status-${type}`;
            statusEl.style.display = 'block';
        }
    }

    // ====================================================================
    // 11. FAQ SYSTEM (DUAL COLUMN INTERACTIVE VIEWER)
    // ====================================================================
    const FAQ_DATA = {
        '1': {
            question: 'Who are you?',
            answer: `<p>I am <strong>Hari Satya Sai Puvvala</strong>, a Computer Science and Engineering graduate focused on Full Stack Java Development. I enjoy building web applications, solving programming problems, and continuously improving my technical skills.</p>`
        },
        '2': {
            question: 'Why should we hire you?',
            answer: `<p>As a fresher, I bring a strong foundation in Java, Full Stack Development, and database management, along with hands-on experience building projects.</p>
            <p>I focus on solving problems, writing clean code, and learning new technologies. I am adaptable, open to feedback, and ready to contribute to real-world projects while growing with your team.</p>
            <p>Give me an opportunity, and I will bring dedication, curiosity, and a problem-solving mindset to the role.</p>`
        },
        '3': {
            question: 'What technologies are you proficient in?',
            answer: `<p>I am skilled in a wide range of technologies, including:</p>
            <div class="faq-category-block">
                <div class="faq-category-title">Frontend:</div>
                <div class="faq-category-list">• HTML, CSS, JavaScript, React.js, Bootstrap.</div>
            </div>
            <div class="faq-category-block">
                <div class="faq-category-title">Backend:</div>
                <div class="faq-category-list">• Java, JDBC, Hibernate, Spring Boot.</div>
            </div>
            <div class="faq-category-block">
                <div class="faq-category-title">Database:</div>
                <div class="faq-category-list">• MySQL, SQL, DBMS.</div>
            </div>
            <div class="faq-category-block">
                <div class="faq-category-title">Tools:</div>
                <div class="faq-category-list">• Git, GitHub, VS Code, Eclipse, Postman.</div>
            </div>`
        },
        '4': {
            question: 'What is your experience with frontend and backend development?',
            answer: `<p>As a fresher, I have gained practical experience by developing projects using frontend and backend technologies.</p>
            <p>I have worked with HTML, CSS, JavaScript, and React.js for frontend development, along with Java, Spring Boot, and MySQL for backend development and database management.</p>`
        },
        '5': {
            question: 'Do you have experience working in teams?',
            answer: `<p>I am comfortable collaborating with others, sharing ideas, and learning from feedback.</p>
            <p>My technical training and project work have helped me develop communication, problem-solving, and teamwork skills.</p>`
        },
        '6': {
            question: 'How can I contact you for a project?',
            answer: `<p>You can reach me through email, LinkedIn, or GitHub to discuss projects, internships, or professional opportunities.</p>
            <p style="margin-top: 12px;"><strong>Email:</strong> <a href="mailto:haripuvvala7924@gmail.com" class="faq-link">haripuvvala7924@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+917989856745" class="faq-link">+91 7989856745</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hari-satya-sai-puvvala-07b007341/" target="_blank" rel="noopener noreferrer" class="faq-link">linkedin.com/in/hari-satya-sai-puvvala-07b007341 ↗</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Hari-CodeTech" target="_blank" rel="noopener noreferrer" class="faq-link">github.com/Hari-CodeTech ↗</a></p>`
        },
        '7': {
            question: 'Are you available for hire, and what kind of roles are you interested in?',
            answer: `<p>Yes, I am actively seeking entry-level opportunities in <strong>Java Development</strong>, <strong>Full Stack Development</strong>, and <strong>Software Engineering</strong>.</p>
            <p>I am eager to apply my skills, contribute to real-world projects, and grow as a developer.</p>`
        },
        '8': {
            question: "My question isn't listed here!",
            answer: `<p>Feel free to contact me through email or LinkedIn. I would be happy to discuss my projects, technical skills, career goals, or potential opportunities.</p>
            <p style="margin-top: 20px;">
                <a href="#contact" class="btn btn-primary" style="font-size: 0.85rem; padding: 10px 22px;">Reach Out Via Contact Section ↗</a>
            </p>`
        }
    };

    function initFAQSystem() {
        const buttons = document.querySelectorAll('.faq-btn');
        const answerContent = document.getElementById('faqAnswerContent');
        if (!buttons.length || !answerContent) return;

        function setFAQ(faqId) {
            const data = FAQ_DATA[faqId];
            if (!data) return;

            buttons.forEach(btn => {
                const isActive = btn.getAttribute('data-faq') === faqId;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            answerContent.innerHTML = data.answer;
            answerContent.style.animation = 'none';
            void answerContent.offsetWidth;
            answerContent.style.animation = 'faqFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        }

        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                const faqId = this.getAttribute('data-faq');
                setFAQ(faqId);
            });
        });

        // Set initial active state (Question 1)
        setFAQ('1');
    }

    // ====================================================================
    // 11.5 INTRO LOADING SCREEN ANIMATION ENGINE (HARI-Developer LIQUID FILL)
    // ====================================================================
    function initIntroLoader() {
        const loader = document.getElementById('intro-loader');
        if (!loader) return;

        const frontWavePath = document.getElementById('front-wave-path');
        const backWavePath = document.getElementById('back-wave-path');
        const percentText = document.getElementById('loader-percent');

        // URL parameters for testing specific frames or skipping
        const urlParams = new URLSearchParams(window.location.search);
        const fixedPercentParam = urlParams.get('loaderPercent');
        const skipLoader = urlParams.get('skipLoader') === 'true';

        if (skipLoader) {
            loader.style.display = 'none';
            document.body.style.overflow = '';
            return;
        }

        // Prevent page scrolling while loading screen is active
        document.body.style.overflow = 'hidden';

        // Liquid wave calibration within SVG viewBox 0 0 1000 220
        // Text bounding box: y spans from ~32px (caps) to ~150px (baseline) and ~180px (descender)
        function calculateBaseY(clamped) {
            if (clamped <= 0) return 182;
            if (clamped >= 1) return 22;
            return 180 - Math.pow(clamped, 0.70) * 158;
        }

        function buildWavePath(baseY, amplitude, frequency, phase) {
            let d = `M 0 ${baseY.toFixed(1)}`;
            const step = 20;
            for (let x = 0; x <= 1000; x += step) {
                const y = baseY + Math.sin(x * frequency + phase) * amplitude;
                d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
            }
            d += ` L 1000 220 L 0 220 Z`;
            return d;
        }

        let animationFrameId = null;
        let startTime = null;
        const DURATION = 2400; // 2.4s smooth cinematic fill
        let phase = 1.2;

        function updateFrame(progress) {
            const clamped = Math.max(0, Math.min(1, progress));
            const currentPercent = Math.round(clamped * 100);

            if (percentText) {
                percentText.textContent = `${currentPercent} %`;
            }
            loader.setAttribute('aria-valuenow', currentPercent);

            const baseY = calculateBaseY(clamped);

            // Soften wave amplitude gently near 100% so text is completely filled
            const ampFactor = clamped > 0.90 ? 1 - ((clamped - 0.90) / 0.10) * 0.45 : 1;
            const frontAmp = 7.5 * ampFactor;
            const backAmp = 9.5 * ampFactor;

            phase += 0.045;

            // 1. Front wave (main vibrant red-orange fill)
            const frontD = buildWavePath(baseY, frontAmp, 0.0135, phase);
            if (frontWavePath) {
                frontWavePath.setAttribute('d', frontD);
            }

            // 2. Back wave (darker burnt-orange crest layer peaking slightly higher)
            const backBaseY = baseY - 5.5;
            const backPhase = phase * 0.82 + 2.1;
            const backD = buildWavePath(backBaseY, backAmp, 0.0118, backPhase);
            if (backWavePath) {
                backWavePath.setAttribute('d', backD);
            }
        }

        // Test mode: if a fixed percentage is requested via URL parameter
        if (fixedPercentParam !== null) {
            const targetVal = parseFloat(fixedPercentParam) / 100;
            function testLoop() {
                updateFrame(targetVal);
                animationFrameId = requestAnimationFrame(testLoop);
            }
            testLoop();
            return;
        }

        // Smooth cubic ease-in-out curve
        function easeProgress(t) {
            return t < 0.5 
                ? 4 * t * t * t 
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const rawProgress = Math.min(1, elapsed / DURATION);
            const easedProgress = easeProgress(rawProgress);

            updateFrame(easedProgress);

            if (rawProgress < 1) {
                animationFrameId = requestAnimationFrame(step);
            } else {
                // Hold at 100% for 300ms for visual payoff before fade-out
                setTimeout(() => {
                    completeLoader();
                }, 300);
            }
        }

        function completeLoader() {
            loader.classList.add('loader-finished');
            document.body.style.overflow = '';

            // Clean up loader after fade transition completes (750ms)
            setTimeout(() => {
                loader.style.display = 'none';
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
            }, 800);
        }

        // Start animation loop
        animationFrameId = requestAnimationFrame(step);

        // Global helper for replaying anytime (e.g. from developer console)
        window.replayIntroLoader = function () {
            loader.style.display = 'flex';
            loader.classList.remove('loader-finished');
            document.body.style.overflow = 'hidden';
            startTime = null;
            phase = 1.2;
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(step);
        };
    }

    // ====================================================================
    // 12. INITIALIZATION ON DOM READY
    // ====================================================================
    document.addEventListener('DOMContentLoaded', function () {
        initTheme();
        initIntroLoader();
        initHeroParticles();
        initHireMeButton();
        initCustomCursor();
        initContactModal();
        initProjectShowcase();
        initProjectModal();
        initNavigation();
        initScrollReveals();
        initContactForm();
        initFAQSystem();

        // Query param hook for automated modal testing & section scroll
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('modal') === 'contact') {
            openContactModal();
        } else if (urlParams.get('modal') === 'project') {
            const pId = urlParams.get('id') || 'swift-ride';
            openProjectModal(PROJECT_DATA[pId]);
        }

        const scrollTarget = urlParams.get('scroll');
        if (scrollTarget) {
            const targetEl = document.getElementById(scrollTarget);
            if (targetEl) {
                document.documentElement.style.scrollBehavior = 'auto';
                window.scrollTo(0, targetEl.offsetTop);
                document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
            }
        }
    });

})();
