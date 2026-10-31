/**
 * ====================================================================
 * ANIMATED TECHNOLOGY ORBIT SYSTEM
 * Recreating 3D Geodesic Wireframe, Glowing Nodes & 3D Floating Labels
 * Inspired by Reference Video & Screenshots
 * Scoped, High-Performance, Accessible & Responsive
 * ====================================================================
 */

(function () {
    'use strict';

    // 1. TECHNOLOGY LABELS DATA (Genuine User Technologies)
    const TECH_ITEMS = [
        // Primary Technologies (8)
        { id: 'java', name: 'Java', category: 'primary', icon: '☕', badgeClass: 'core-badge', badgeText: 'Java' },
        { id: 'js', name: 'JavaScript (ES6+)', category: 'primary', icon: '⚡', badgeClass: 'core-badge', badgeText: 'ES6+' },
        { id: 'react', name: 'React.js', category: 'primary', icon: '⚛', badgeClass: 'core-badge', badgeText: 'UI' },
        { id: 'spring', name: 'Spring Boot', category: 'primary', icon: '🌱', badgeClass: 'core-badge', badgeText: 'API' },
        { id: 'hibernate', name: 'Hibernate', category: 'primary', icon: '🍃', badgeClass: 'core-badge', badgeText: 'ORM' },
        { id: 'jdbc', name: 'JDBC', category: 'primary', icon: '🔌', badgeClass: 'core-badge', badgeText: 'DB' },
        { id: 'mysql', name: 'MySQL', category: 'primary', icon: '🐬', badgeClass: 'core-badge', badgeText: 'SQL' },
        { id: 'rest', name: 'REST APIs', category: 'primary', icon: '🌐', badgeClass: 'core-badge', badgeText: 'REST' },

        // AI Technologies (5)
        { id: 'ai', name: 'Artificial Intelligence', category: 'ai', icon: '✦', badgeClass: 'ai-badge', badgeText: 'AI' },
        { id: 'nlp', name: 'NLP', category: 'ai', icon: '✓', badgeClass: 'orbit-label-badge', badgeText: '✓', isVerified: true },
        { id: 'prompt', name: 'Prompt Engineering', category: 'ai', icon: '✦', badgeClass: 'ai-badge', badgeText: 'LLM' },
        { id: 'deep-learning', name: 'Deep Learning', category: 'ai', icon: '🧠', badgeClass: 'ai-badge', badgeText: 'DL' },
        { id: 'ml', name: 'Machine Learning', category: 'ai', icon: '📊', badgeClass: 'ai-badge', badgeText: 'ML' }
    ];

    // 2. GEODESIC ICOSAHEDRON MESH GENERATOR
    function createGeodesicMesh() {
        const phi = (1 + Math.sqrt(5)) / 2;
        // 12 base vertices of icosahedron
        const rawVertices = [
            [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
            [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
            [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
        ];

        // Normalize helper
        function norm(v) {
            const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            return [v[0] / len, v[1] / len, v[2] / len];
        }

        const vertices = rawVertices.map(norm);

        // Find initial edges (distance between adjacent icosahedron vertices)
        const edges = [];
        const edgeMap = new Set();

        function addEdge(i, j) {
            const key = i < j ? `${i}_${j}` : `${j}_${i}`;
            if (!edgeMap.has(key)) {
                edgeMap.add(key);
                edges.push([i, j]);
            }
        }

        const edgeDistThreshold = 1.15;
        for (let i = 0; i < vertices.length; i++) {
            for (let j = i + 1; j < vertices.length; j++) {
                const dx = vertices[i][0] - vertices[j][0];
                const dy = vertices[i][1] - vertices[j][1];
                const dz = vertices[i][2] - vertices[j][2];
                const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (d < edgeDistThreshold) {
                    addEdge(i, j);
                }
            }
        }

        // Subdivide: Add normalized midpoints of edges for higher fidelity geodesic cage (matches reference)
        const midpointIndices = new Map();
        const subdividedEdges = [];
        const subdividedEdgeMap = new Set();

        function addSubEdge(a, b) {
            const key = a < b ? `${a}_${b}` : `${b}_${a}`;
            if (!subdividedEdgeMap.has(key)) {
                subdividedEdgeMap.add(key);
                subdividedEdges.push([a, b]);
            }
        }

        edges.forEach(([i, j]) => {
            const mid = norm([
                (vertices[i][0] + vertices[j][0]) * 0.5,
                (vertices[i][1] + vertices[j][1]) * 0.5,
                (vertices[i][2] + vertices[j][2]) * 0.5
            ]);
            const newIndex = vertices.length;
            vertices.push(mid);
            midpointIndices.set(`${i}_${j}`, newIndex);
            midpointIndices.set(`${j}_${i}`, newIndex);

            addSubEdge(i, newIndex);
            addSubEdge(newIndex, j);
        });

        // Also connect adjacent midpoints for triangular geodesic facets
        for (let i = 12; i < vertices.length; i++) {
            for (let j = i + 1; j < vertices.length; j++) {
                const dx = vertices[i][0] - vertices[j][0];
                const dy = vertices[i][1] - vertices[j][1];
                const dz = vertices[i][2] - vertices[j][2];
                const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (d < 0.65) {
                    addSubEdge(i, j);
                }
            }
        }

        return { vertices, edges: subdividedEdges };
    }

    // 3. MAIN CONTROLLER
    function initTechOrbit() {
        const stage = document.getElementById('tech-orbit-stage');
        const canvas = document.getElementById('tech-orbit-canvas');
        const labelsContainer = document.getElementById('tech-orbit-labels');
        const section = document.getElementById('tech-orbit');

        if (!stage || !canvas || !labelsContainer || !section) return;

        const ctx = canvas.getContext('2d');
        const mesh = createGeodesicMesh();

        // 3D Particles Field (floating ambient stars)
        const particles = [];
        const PARTICLE_COUNT = 32;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const dist = 1.1 + Math.random() * 0.65;
            particles.push({
                x: Math.sin(phi) * Math.cos(theta) * dist,
                y: Math.cos(phi) * dist,
                z: Math.sin(phi) * Math.sin(theta) * dist,
                radius: 1.0 + Math.random() * 1.8,
                colorType: Math.random() > 0.4 ? 'cyan' : 'purple',
                phase: Math.random() * Math.PI * 2,
                speed: 0.02 + Math.random() * 0.03
            });
        }

        // Initialize Technology Label DOM Elements
        const labelElements = [];
        const labelCount = TECH_ITEMS.length;

        // Distribute labels on balanced 3D spherical orbital bands
        TECH_ITEMS.forEach((tech, idx) => {
            const el = document.createElement('div');
            el.className = 'orbit-label';
            el.dataset.id = tech.id;
            el.dataset.category = tech.category;

            // Generate pill content matching reference screenshot style
            if (tech.isVerified) {
                el.innerHTML = `<span>${tech.name}</span><span class="orbit-label-badge" title="Verified Skill">✓</span>`;
            } else if (tech.category === 'ai') {
                el.innerHTML = `<span>${tech.name}</span><span class="orbit-label-badge ai-badge" title="AI Skill">✦</span>`;
            } else {
                el.innerHTML = `<span>${tech.name}</span>`;
            }

            labelsContainer.appendChild(el);

            // Calculate spherical distribution coordinates for orbital placement
            // Golden spiral distribution on sphere for balanced visual dispersion
            const yNorm = 1 - (idx / (labelCount - 1)) * 2; // -1 to 1
            const radAtY = Math.sqrt(Math.max(0, 1 - yNorm * yNorm));
            const goldenAngle = Math.PI * (3 - Math.sqrt(5));
            const theta = idx * goldenAngle;

            // Varied orbital radius so labels form a multi-depth cloud (matches reference)
            const orbitDist = 1.35 + (idx % 3) * 0.16;

            labelElements.push({
                el,
                tech,
                baseX: Math.cos(theta) * radAtY * orbitDist,
                baseY: yNorm * orbitDist * 0.85,
                baseZ: Math.sin(theta) * radAtY * orbitDist,
                orbitSpeed: 0.0008 * (idx % 2 === 0 ? 1 : 1.15),
                currentAngle: theta
            });
        });

        // Responsive Sizing & Dimensions
        let width = 0;
        let height = 0;
        let dpr = 1;
        let cageRadius = 200;
        let fov = 620;

        function updateDimensions() {
            const rect = stage.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            // Responsive cage radius based on stage width
            if (width < 480) {
                cageRadius = 125;
                fov = 480;
            } else if (width < 768) {
                cageRadius = 160;
                fov = 550;
            } else {
                cageRadius = 205;
                fov = 650;
            }
        }

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        // Rotation & Physics State
        let rotX = 0.22;
        let rotY = 0.0;
        let targetRotX = 0.22;
        let targetRotY = 0.0;
        let autoSpeedY = 0.0035;
        let autoSpeedX = 0.0012;
        let isDragging = false;
        let lastPointerX = 0;
        let lastPointerY = 0;
        let isHovering = false;
        let activeFilter = 'all';

        // Check reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            autoSpeedY = 0.0005;
            autoSpeedX = 0.0;
        }

        // Pointer / Mouse / Touch Interactivity
        stage.addEventListener('pointerdown', (e) => {
            isDragging = true;
            lastPointerX = e.clientX;
            lastPointerY = e.clientY;
            stage.setPointerCapture(e.pointerId);
        });

        stage.addEventListener('pointermove', (e) => {
            if (isDragging) {
                const dx = e.clientX - lastPointerX;
                const dy = e.clientY - lastPointerY;
                targetRotY += dx * 0.006;
                targetRotX += dy * 0.006;
                lastPointerX = e.clientX;
                lastPointerY = e.clientY;
            } else {
                // Subtle cursor parallax
                const rect = stage.getBoundingClientRect();
                const normX = (e.clientX - rect.left) / rect.width - 0.5;
                const normY = (e.clientY - rect.top) / rect.height - 0.5;
                targetRotX = 0.22 + normY * 0.35;
                targetRotY += normX * 0.004;
            }
        });

        const stopDrag = (e) => {
            if (isDragging) {
                isDragging = false;
                try {
                    stage.releasePointerCapture(e.pointerId);
                } catch (err) {}
            }
        };

        stage.addEventListener('pointerup', stopDrag);
        stage.addEventListener('pointercancel', stopDrag);

        stage.addEventListener('mouseenter', () => { isHovering = true; });
        stage.addEventListener('mouseleave', () => { isHovering = false; });

        // Filter Buttons Integration
        const filterBtns = section.querySelectorAll('.orbit-filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeFilter = btn.dataset.filter;
                applyFilter();
            });
        });

        function applyFilter() {
            labelElements.forEach(item => {
                if (activeFilter === 'all') {
                    item.el.classList.remove('is-dimmed');
                    item.el.classList.remove('is-highlighted');
                } else if (item.tech.category === activeFilter) {
                    item.el.classList.remove('is-dimmed');
                    item.el.classList.add('is-highlighted');
                } else {
                    item.el.classList.add('is-dimmed');
                    item.el.classList.remove('is-highlighted');
                }
            });
        }

        // 3D Math: Rotation around X and Y axes
        function rotate3D(x, y, z, rx, ry) {
            // Yaw (Y axis)
            const cosY = Math.cos(ry);
            const sinY = Math.sin(ry);
            const x1 = x * cosY - z * sinY;
            const z1 = x * sinY + z * cosY;

            // Pitch (X axis)
            const cosX = Math.cos(rx);
            const sinX = Math.sin(rx);
            const y2 = y * cosX - z1 * sinX;
            const z2 = y * sinX + z1 * cosX;

            return [x1, y2, z2];
        }

        // Perspective Projector
        function project(x, y, z, cx, cy, fovVal) {
            const scale = fovVal / (fovVal + z);
            return {
                x: cx + x * scale,
                y: cy + y * scale,
                scale,
                depth: z
            };
        }

        // Animation Loop & Visibility Control
        let isVisible = false;
        let animationFrameId = null;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
                if (isVisible && !animationFrameId) {
                    animationFrameId = requestAnimationFrame(tick);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(section);

        // Frame Update
        function tick() {
            if (!isVisible) {
                animationFrameId = null;
                return;
            }

            // Smooth rotation damping
            if (!isDragging && !prefersReducedMotion) {
                targetRotY += autoSpeedY;
                targetRotX += Math.sin(targetRotY * 0.5) * autoSpeedX * 0.4;
            }

            rotX += (targetRotX - rotX) * 0.08;
            rotY += (targetRotY - rotY) * 0.08;

            const cx = width / 2;
            const cy = height / 2;

            ctx.clearRect(0, 0, width, height);

            // A. RENDER PARTICLES (floating ambient field)
            particles.forEach(p => {
                p.phase += p.speed;
                const wobbleY = p.y + Math.sin(p.phase) * 0.08;
                const [rx, ry, rz] = rotate3D(p.x * cageRadius, wobbleY * cageRadius, p.z * cageRadius, rotX, rotY);
                const proj = project(rx, ry, rz, cx, cy, fov);

                if (proj.scale > 0) {
                    const alpha = Math.max(0.1, Math.min(0.7, (proj.depth + cageRadius) / (cageRadius * 2)));
                    ctx.beginPath();
                    ctx.arc(proj.x, proj.y, p.radius * proj.scale, 0, Math.PI * 2);
                    ctx.fillStyle = p.colorType === 'cyan' 
                        ? `rgba(34, 211, 238, ${alpha})` 
                        : `rgba(155, 92, 255, ${alpha})`;
                    ctx.fill();
                }
            });

            // B. TRANSFORM & PROJECT GEODESIC VERTICES
            const projectedVertices = mesh.vertices.map(v => {
                const [rx, ry, rz] = rotate3D(v[0] * cageRadius, v[1] * cageRadius, v[2] * cageRadius, rotX, rotY);
                return project(rx, ry, rz, cx, cy, fov);
            });

            // C. RENDER WIREFRAME EDGES (Subtle purple-to-cyan gradient matching reference)
            mesh.edges.forEach(([i, j]) => {
                const p1 = projectedVertices[i];
                const p2 = projectedVertices[j];

                if (!p1 || !p2 || p1.scale <= 0 || p2.scale <= 0) return;

                const avgZ = (p1.depth + p2.depth) * 0.5;
                const isForeground = avgZ > -20;

                // Opacity & line width depth cues matching reference screenshots
                let alpha;
                let lineWidth;
                if (isForeground) {
                    alpha = 0.45 + (avgZ / cageRadius) * 0.45; // 0.45 to 0.90
                    lineWidth = 1.35 * Math.max(p1.scale, p2.scale);
                } else {
                    alpha = 0.12 + Math.max(0, (avgZ + cageRadius) / cageRadius) * 0.22; // 0.12 to 0.34
                    lineWidth = 0.85 * Math.min(p1.scale, p2.scale);
                }

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);

                // Create linear gradient along the line from violet to cyan
                const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                // Color bias based on X coordinate (violet on left, cyan on right like reference)
                const normX1 = (p1.x - cx) / (cageRadius * 1.2);
                const normX2 = (p2.x - cx) / (cageRadius * 1.2);

                const color1 = normX1 < 0 ? `rgba(155, 92, 255, ${alpha})` : `rgba(34, 211, 238, ${alpha})`;
                const color2 = normX2 < 0 ? `rgba(155, 92, 255, ${alpha})` : `rgba(34, 211, 238, ${alpha})`;

                grad.addColorStop(0, color1);
                grad.addColorStop(1, color2);

                ctx.strokeStyle = grad;
                ctx.lineWidth = lineWidth;
                ctx.stroke();
            });

            // D. RENDER GLOWING VERTEX NODES
            projectedVertices.forEach(p => {
                if (p.scale <= 0) return;

                const isFront = p.depth > 0;
                const nodeRadius = (isFront ? 3.0 : 1.8) * p.scale;
                const alpha = isFront 
                    ? 0.7 + (p.depth / cageRadius) * 0.3 
                    : 0.2 + (p.depth + cageRadius) / (cageRadius * 2) * 0.35;

                // Node color: violet on left, cyan on right
                const isCyan = p.x >= cx;
                const baseColor = isCyan ? '34, 211, 238' : '155, 92, 255';

                // Outer soft halo glow for front nodes
                if (isFront) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, nodeRadius * 2.2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${baseColor}, ${alpha * 0.35})`;
                    ctx.fill();
                }

                // Core solid node
                ctx.beginPath();
                ctx.arc(p.x, p.y, nodeRadius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${baseColor}, ${alpha})`;
                ctx.fill();
            });

            // E. POSITION 3D FLOATING LABELS
            labelElements.forEach((item, idx) => {
                // Rotate label position with the global orbit
                const [rx, ry, rz] = rotate3D(
                    item.baseX * cageRadius,
                    item.baseY * cageRadius,
                    item.baseZ * cageRadius,
                    rotX,
                    rotY
                );

                const proj = project(rx, ry, rz, cx, cy, fov);
                const scale = Math.max(0.65, Math.min(1.15, proj.scale));
                const depthNorm = Math.max(-1, Math.min(1, proj.depth / cageRadius));

                // Foreground vs Background state
                const isBack = proj.depth < -15;

                if (isBack) {
                    item.el.classList.add('is-background');
                    item.el.style.opacity = (0.35 + (depthNorm + 1) * 0.25).toFixed(2);
                    item.el.style.zIndex = Math.round(5 + depthNorm * 3);
                } else {
                    item.el.classList.remove('is-background');
                    item.el.style.opacity = (0.85 + depthNorm * 0.15).toFixed(2);
                    // Elevated z-index so foreground labels pass in front of central photo (z-index: 10)
                    item.el.style.zIndex = Math.round(20 + depthNorm * 10);
                }

                // Apply transform
                item.el.style.transform = `translate3d(calc(-50% + ${(proj.x - cx).toFixed(1)}px), calc(-50% + ${(proj.y - cy).toFixed(1)}px), 0) scale(${scale.toFixed(3)})`;
            });

            animationFrameId = requestAnimationFrame(tick);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTechOrbit);
    } else {
        initTechOrbit();
    }

})();
