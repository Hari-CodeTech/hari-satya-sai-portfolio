/**
 * ====================================================================
 * HARI SATYA SAI PUVVALA — INTERACTIVE DEV FEATURES
 * 1. Spring Boot 3-Tier Enterprise Architecture Explorer
 * 2. Java JVM Code Challenge & Interview Output Predictor
 * ====================================================================
 */

(function () {
    'use strict';

    // ====================================================================
    // PART 1: SPRING BOOT ARCHITECTURE DATA & ENGINE
    // ====================================================================
    const SCENARIOS = {
        'jobtrack': {
            name: 'JobTrack – Candidate Application Pipeline',
            endpoint: 'POST /api/v1/applications',
            payload: '{\n  "candidateId": 1042,\n  "jobPostingId": 88,\n  "currentStage": "TECHNICAL_ROUND"\n}',
            layers: {
                client: {
                    title: 'REST Client / Frontend',
                    badge: 'HTTP POST / DTO',
                    icon: '🌐',
                    desc: 'Sends JSON application payload with authentication token and candidate identifier to the Spring Boot REST endpoint.',
                    code: `// HTTP Request Dispatched by Client
POST /api/v1/applications HTTP/1.1
Host: api.jobtrack.internal
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1Ni...

{
  "candidateId": 1042,
  "jobPostingId": 88,
  "currentStage": "TECHNICAL_ROUND"
}`
                },
                controller: {
                    title: 'Controller Layer (@RestController)',
                    badge: 'Web Endpoints',
                    icon: '🎮',
                    desc: 'Validates DTO payload using Bean Validation (@Valid), ensures authorization headers, and delegates execution to JobApplicationService.',
                    code: `@RestController
@RequestMapping("/api/v1/applications")
@CrossOrigin(origins = "https://jobtrack.internal")
public class ApplicationController {

    private final JobApplicationService applicationService;

    // Constructor Injection (Spring Best Practice)
    public ApplicationController(JobApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PostMapping
    public ResponseEntity<ApplicationResponseDTO> submitApplication(
            @Valid @RequestBody ApplicationRequestDTO dto) {
        ApplicationResponseDTO response = applicationService.processApplication(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}`
                },
                service: {
                    title: 'Service Layer (@Service)',
                    badge: 'Business Logic & Rules',
                    icon: '⚙️',
                    desc: 'Enforces business constraints (preventing duplicate submissions, verifying active job status, logging stage transitions), wrapped in declarative transactions.',
                    code: `@Service
public class JobApplicationService {

    private final ApplicationRepository applicationRepo;
    private final CandidateRepository candidateRepo;

    @Transactional
    public ApplicationResponseDTO processApplication(ApplicationRequestDTO dto) {
        // Business Rule: Ensure candidate has not already applied for this job
        boolean exists = applicationRepo.existsByCandidateIdAndJobId(
            dto.getCandidateId(), dto.getJobPostingId()
        );
        if (exists) {
            throw new DuplicateApplicationException("Candidate already has active application.");
        }

        Candidate candidate = candidateRepo.findById(dto.getCandidateId())
            .orElseThrow(() -> new ResourceNotFoundException("Candidate not found"));

        Application app = new Application(candidate, dto.getJobPostingId(), ApplicationStatus.APPLIED);
        Application saved = applicationRepo.save(app);

        return new ApplicationResponseDTO(saved.getId(), "APPLICATION_SUBMITTED", LocalDateTime.now());
    }
}`
                },
                repository: {
                    title: 'Repository Layer (@Repository)',
                    badge: 'Spring Data JPA / Hibernate',
                    icon: '📦',
                    desc: 'Uses Spring Data JPA & Hibernate ORM to translate Java Entity objects into optimized SQL statements without boilerplate JDBC code.',
                    code: `@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {

    // Derived Query Method with Composite Index Optimization
    boolean existsByCandidateIdAndJobId(Long candidateId, Long jobId);

    // Custom JPQL Query for Recruitment Analytics
    @Query("SELECT a FROM Application a WHERE a.jobId = :jobId AND a.status = :status ORDER BY a.appliedAt DESC")
    List<Application> findRecentApplicants(@Param("jobId") Long jobId, @Param("status") ApplicationStatus status);
}`
                },
                database: {
                    title: 'Database Layer (MySQL Relational DB)',
                    badge: '3NF Schema & B-Tree Indexes',
                    icon: '🐬',
                    desc: 'Executes transactional INSERT/SELECT operations with Foreign Key constraints (ON DELETE CASCADE) and composite indexes on candidate_id and job_id.',
                    code: `-- MySQL Normalized Relational Execution
START TRANSACTION;

-- Check existence using composite index (candidate_id, job_id)
SELECT COUNT(*) FROM applications 
WHERE candidate_id = 1042 AND job_id = 88;

-- Insert application entity
INSERT INTO applications (candidate_id, job_id, stage, status, applied_at)
VALUES (1042, 88, 'TECHNICAL_ROUND', 'APPLIED', NOW());

COMMIT;`
                }
            }
        },
        'govtscheme': {
            name: 'Government Scheme – Centralized Eligibility Engine',
            endpoint: 'GET /api/v1/schemes/filter?category=FARMER&age=32',
            payload: 'Params: category=FARMER, age=32, state=ANDHRA_PRADESH',
            layers: {
                client: {
                    title: 'Citizen Portal / Search Client',
                    badge: 'HTTP GET / Query Params',
                    icon: '🌐',
                    desc: 'Citizens enter state, age, and occupational category to query eligible welfare programs.',
                    code: `GET /api/v1/schemes/filter?category=FARMER&age=32&state=AP HTTP/1.1
Host: schemes.gov.internal
Accept: application/json`
                },
                controller: {
                    title: 'Controller Layer (@RestController)',
                    badge: 'Eligibility Request Dispatch',
                    icon: '🎮',
                    desc: 'Parses criteria query parameters, validates ranges, and calls SchemeEligibilityService.',
                    code: `@RestController
@RequestMapping("/api/v1/schemes")
public class SchemeController {

    private final SchemeEligibilityService schemeService;

    public SchemeController(SchemeEligibilityService schemeService) {
        this.schemeService = schemeService;
    }

    @GetMapping("/filter")
    public ResponseEntity<List<SchemeDTO>> getEligibleSchemes(
            @RequestParam SchemeCategory category,
            @RequestParam int age,
            @RequestParam String state) {
        return ResponseEntity.ok(schemeService.findMatchingSchemes(category, age, state));
    }
}`
                },
                service: {
                    title: 'Service Layer (@Service)',
                    badge: 'Criteria Evaluation Engine',
                    icon: '⚙️',
                    desc: 'Evaluates applicant criteria against federal and state entitlement thresholds and returns matching schemes.',
                    code: `@Service
@Transactional(readOnly = true)
public class SchemeEligibilityService {

    private final SchemeRepository schemeRepo;

    public List<SchemeDTO> findMatchingSchemes(SchemeCategory category, int age, String state) {
        List<Scheme> allSchemes = schemeRepo.findByCategoryAndState(category, state);

        return allSchemes.stream()
            .filter(s -> age >= s.getMinAge() && age <= s.getMaxAge())
            .map(SchemeDTO::fromEntity)
            .collect(Collectors.toList());
    }
}`
                },
                repository: {
                    title: 'Repository Layer (@Repository)',
                    badge: 'Spring Data JPA Specification',
                    icon: '📦',
                    desc: 'Leverages indexed JPA queries to rapidly filter scheme catalogs by category and state jurisdiction.',
                    code: `@Repository
public interface SchemeRepository extends JpaRepository<Scheme, Long> {

    @Query("SELECT s FROM Scheme s WHERE s.category = :category AND (s.state = :state OR s.state IS NULL)")
    List<Scheme> findByCategoryAndState(@Param("category") SchemeCategory category, @Param("state") String state);
}`
                },
                database: {
                    title: 'Database Layer (MySQL Relational DB)',
                    badge: 'Welfare Catalog Index',
                    icon: '🐬',
                    desc: 'Performs indexed retrieval from schemes and criteria tables.',
                    code: `SELECT s.id, s.title, s.benefits, s.min_age, s.max_age 
FROM government_schemes s 
WHERE s.category = 'FARMER' AND (s.state = 'AP' OR s.is_national = 1);`
                }
            }
        }
    };

    let currentScenarioKey = 'jobtrack';
    let currentLayerKey = 'controller';
    let isSimulating = false;

    // ====================================================================
    // PART 2: JAVA JVM CODE CHALLENGE DATA
    // ====================================================================
    const QUIZ_QUESTIONS = [
        {
            title: '1. String Constant Pool & Reference Identity',
            code: `String s1 = "Hari";
String s2 = new String("Hari");
String s3 = s2.intern();

System.out.println((s1 == s2) + " " + (s1 == s3));`,
            options: [
                'true true',
                'false true',
                'false false',
                'true false'
            ],
            correct: 1, // 'false true'
            explanation: 'The literal "Hari" is stored in the JVM String Constant Pool. Calling `new String("Hari")` allocates a new instance on the heap, so `s1 == s2` evaluates to false. However, `s2.intern()` explicitly returns the reference from the String Constant Pool, which points to the same object as `s1`, making `s1 == s3` true.'
        },
        {
            title: '2. Try-Catch-Finally Execution Order & Return Values',
            code: `public static int evaluateJVM() {
    try {
        return 10;
    } finally {
        return 20;
    }
}
System.out.println(evaluateJVM());`,
            options: [
                '10',
                '20',
                'Compilation Error',
                '0'
            ],
            correct: 1, // '20'
            explanation: 'In Java bytecode, a `finally` block is guaranteed to execute before the enclosing method returns. If the `finally` block contains an explicit return statement, it supersedes and discards any previous return value or pending unhandled exception from the `try` block, returning 20.'
        },
        {
            title: '3. Polymorphism & Static Method Hiding',
            code: `class Parent {
    static void display() { System.out.print("P "); }
}
class Child extends Parent {
    static void display() { System.out.print("C "); }
}

Parent ref = new Child();
ref.display();`,
            options: [
                'C ',
                'P ',
                'P C ',
                'Runtime Exception'
            ],
            correct: 1, // 'P '
            explanation: 'Static methods belong to the class, not the instance. Static methods cannot be overridden dynamically (polymorphically); they are hidden. Resolution of static method calls occurs at compile time based strictly on the declared reference type (`Parent`), printing "P ".'
        },
        {
            title: '4. Autoboxing & The Integer Cache Range (-128 to 127)',
            code: `Integer a = 100;
Integer b = 100;
Integer c = 200;
Integer d = 200;

System.out.println((a == b) + " " + (c == d));`,
            options: [
                'true true',
                'false false',
                'true false',
                'false true'
            ],
            correct: 2, // 'true false'
            explanation: 'Java caches `Integer` instances for primitive values between -128 and 127 via `Integer.valueOf()`. Since 100 falls inside this range, `a` and `b` reference the identical cached object (true). Since 200 is outside the cache, distinct objects are instantiated on the heap, making `c == d` false.'
        }
    ];

    let currentQuestionIdx = 0;
    let quizScore = 0;
    let hasAnsweredCurrent = false;

    // ====================================================================
    // PART 3: DOM CREATION & EVENT WIRING
    // ====================================================================
    function initDevFeatures() {
        createArchitectureModalMarkup();
        createQuizModalMarkup();
        bindFeatureEvents();
    }

    function createArchitectureModalMarkup() {
        const modal = document.createElement('div');
        modal.className = 'dev-feature-modal';
        modal.id = 'archModal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Spring Boot 3-Tier Enterprise Architecture Explorer');

        modal.innerHTML = `
            <div class="dev-modal-container">
                <div class="dev-modal-header">
                    <div class="dev-modal-title-group">
                        <span class="dev-modal-badge">Interactive Architecture Explorer</span>
                        <h3 class="dev-modal-title">Spring Boot 3-Tier Enterprise Pipeline</h3>
                    </div>
                    <button type="button" class="dev-modal-close" id="archCloseBtn" aria-label="Close Architecture Explorer">&times;</button>
                </div>
                <div class="dev-modal-body">
                    <div class="arch-toolbar">
                        <div class="arch-scenario-select">
                            <span>Project Workflow:</span>
                            <div class="arch-btn-group">
                                <button type="button" class="arch-btn active" data-scenario="jobtrack">JobTrack Application</button>
                                <button type="button" class="arch-btn" data-scenario="govtscheme">Govt Scheme Filter</button>
                            </div>
                        </div>
                        <button type="button" class="arch-simulate-btn" id="archSimulateBtn">
                            <span>▶</span> Simulate Request Flow
                        </button>
                    </div>

                    <!-- Flow Diagram -->
                    <div class="arch-diagram-flow" id="archDiagramFlow">
                        <div class="arch-layer-card" data-layer="client">
                            <span class="arch-layer-icon">🌐</span>
                            <div class="arch-layer-name">Client</div>
                            <div class="arch-layer-tag">REST Request</div>
                        </div>
                        <div class="arch-layer-card active" data-layer="controller">
                            <span class="arch-layer-icon">🎮</span>
                            <div class="arch-layer-name">Controller</div>
                            <div class="arch-layer-tag">@RestController</div>
                        </div>
                        <div class="arch-layer-card" data-layer="service">
                            <span class="arch-layer-icon">⚙️</span>
                            <div class="arch-layer-name">Service</div>
                            <div class="arch-layer-tag">@Service Logic</div>
                        </div>
                        <div class="arch-layer-card" data-layer="repository">
                            <span class="arch-layer-icon">📦</span>
                            <div class="arch-layer-name">Repository</div>
                            <div class="arch-layer-tag">@Repository JPA</div>
                        </div>
                        <div class="arch-layer-card" data-layer="database">
                            <span class="arch-layer-icon">🐬</span>
                            <div class="arch-layer-name">Database</div>
                            <div class="arch-layer-tag">MySQL Relational</div>
                        </div>
                    </div>

                    <!-- Layer Detail Pane -->
                    <div class="arch-inspector" id="archInspector">
                        <div class="arch-inspector-header">
                            <div class="arch-inspector-title">
                                <span id="archInspectorIcon">🎮</span>
                                <span id="archInspectorTitle">Controller Layer (@RestController)</span>
                            </div>
                            <span class="arch-role-badge" id="archRoleBadge">Web Endpoints</span>
                        </div>
                        <p class="arch-inspector-desc" id="archInspectorDesc"></p>
                        <div class="arch-code-box" id="archCodeBox"></div>
                    </div>

                    <div class="arch-packet-status" id="archPacketStatus">
                        <span>⚡</span> <span id="archPacketText">Click any layer card above or click "Simulate Request Flow" to observe packet propagation.</span>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    function createQuizModalMarkup() {
        const modal = document.createElement('div');
        modal.className = 'dev-feature-modal';
        modal.id = 'quizModal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Java JVM Code Challenge');

        modal.innerHTML = `
            <div class="dev-modal-container" style="max-width: 780px;">
                <div class="dev-modal-header">
                    <div class="dev-modal-title-group">
                        <span class="dev-modal-badge">Interactive Technical Challenge</span>
                        <h3 class="dev-modal-title">Java JVM Code Output Predictor</h3>
                    </div>
                    <button type="button" class="dev-modal-close" id="quizCloseBtn" aria-label="Close Quiz">&times;</button>
                </div>
                <div class="dev-modal-body">
                    <div class="quiz-header-bar">
                        <span class="quiz-progress-text" id="quizProgress">Question 1 of 4</span>
                        <span class="quiz-score-badge" id="quizScore">Score: 0 / 4</span>
                    </div>

                    <h4 class="quiz-question-title" id="quizTitle"></h4>
                    <div class="quiz-code-block" id="quizCode"></div>

                    <div class="quiz-options-grid" id="quizOptions"></div>

                    <div class="quiz-explanation-card" id="quizExplanation">
                        <div class="quiz-explanation-title">
                            <span id="quizResultIcon"></span>
                            <span id="quizResultTitle">Technical Explanation:</span>
                        </div>
                        <p class="quiz-explanation-text" id="quizExplanationText"></p>
                    </div>

                    <div class="quiz-footer-actions">
                        <button type="button" class="quiz-next-btn" id="quizNextBtn" style="display: none;">Next Question →</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    function bindFeatureEvents() {
        // Architecture Modal Close
        const archClose = document.getElementById('archCloseBtn');
        const archModal = document.getElementById('archModal');
        if (archClose) archClose.addEventListener('click', closeArchitectureExplorer);
        if (archModal) {
            archModal.addEventListener('click', function (e) {
                if (e.target === archModal) closeArchitectureExplorer();
            });
        }

        // Quiz Modal Close
        const quizClose = document.getElementById('quizCloseBtn');
        const quizModal = document.getElementById('quizModal');
        if (quizClose) quizClose.addEventListener('click', closeJavaQuiz);
        if (quizModal) {
            quizModal.addEventListener('click', function (e) {
                if (e.target === quizModal) closeJavaQuiz();
            });
        }

        // Scenario Selector
        document.querySelectorAll('.arch-btn[data-scenario]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                document.querySelectorAll('.arch-btn[data-scenario]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentScenarioKey = btn.getAttribute('data-scenario');
                updateLayerInspector(currentLayerKey);
            });
        });

        // Layer Card Click
        document.querySelectorAll('.arch-layer-card').forEach(function (card) {
            card.addEventListener('click', function () {
                if (isSimulating) return;
                const layer = card.getAttribute('data-layer');
                document.querySelectorAll('.arch-layer-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                currentLayerKey = layer;
                updateLayerInspector(layer);
            });
        });

        // Simulate Request Flow
        const simulateBtn = document.getElementById('archSimulateBtn');
        if (simulateBtn) {
            simulateBtn.addEventListener('click', startSimulation);
        }

        // Next Quiz Question
        const quizNextBtn = document.getElementById('quizNextBtn');
        if (quizNextBtn) {
            quizNextBtn.addEventListener('click', advanceQuizQuestion);
        }
    }

    // ====================================================================
    // ARCHITECTURE CONTROLS & ANIMATION
    // ====================================================================
    function openArchitectureExplorer() {
        const modal = document.getElementById('archModal');
        if (!modal) return;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateLayerInspector(currentLayerKey);
    }

    function closeArchitectureExplorer() {
        const modal = document.getElementById('archModal');
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLayerInspector(layerKey) {
        const scenario = SCENARIOS[currentScenarioKey];
        const layer = scenario.layers[layerKey];
        if (!layer) return;

        document.getElementById('archInspectorIcon').textContent = layer.icon;
        document.getElementById('archInspectorTitle').textContent = layer.title;
        document.getElementById('archRoleBadge').textContent = layer.badge;
        document.getElementById('archInspectorDesc').textContent = layer.desc;
        document.getElementById('archCodeBox').textContent = layer.code;
    }

    function startSimulation() {
        if (isSimulating) return;
        isSimulating = true;

        const simulateBtn = document.getElementById('archSimulateBtn');
        simulateBtn.disabled = true;
        simulateBtn.style.opacity = '0.6';

        const layers = ['client', 'controller', 'service', 'repository', 'database'];
        let idx = 0;

        const statusText = document.getElementById('archPacketText');

        const stepInterval = setInterval(function () {
            if (idx >= layers.length) {
                clearInterval(stepInterval);
                finishSimulation();
                return;
            }

            const layerKey = layers[idx];
            document.querySelectorAll('.arch-layer-card').forEach(function (card) {
                if (card.getAttribute('data-layer') === layerKey) {
                    card.classList.add('active', 'packet-pulse');
                    setTimeout(() => card.classList.remove('packet-pulse'), 600);
                } else {
                    card.classList.remove('active');
                }
            });

            currentLayerKey = layerKey;
            updateLayerInspector(layerKey);

            if (layerKey === 'client') {
                statusText.innerHTML = `[1/5] Dispatching HTTP ${SCENARIOS[currentScenarioKey].endpoint}...`;
            } else if (layerKey === 'controller') {
                statusText.innerHTML = `[2/5] Controller mapping request, validating @Valid DTO payload...`;
            } else if (layerKey === 'service') {
                statusText.innerHTML = `[3/5] Service layer executing @Transactional business logic constraints...`;
            } else if (layerKey === 'repository') {
                statusText.innerHTML = `[4/5] Repository generating Hibernate ORM query with composite indexes...`;
            } else if (layerKey === 'database') {
                statusText.innerHTML = `[5/5] MySQL executing transactional commit. Response status 201 CREATED.`;
            }

            idx++;
        }, 900);

        function finishSimulation() {
            setTimeout(function () {
                isSimulating = false;
                simulateBtn.disabled = false;
                simulateBtn.style.opacity = '1';
                statusText.innerHTML = `✅ Simulation complete: 200 OK Response returned to client in 42ms.`;
            }, 600);
        }
    }

    // ====================================================================
    // JAVA QUIZ ENGINE
    // ====================================================================
    function openJavaQuiz() {
        const modal = document.getElementById('quizModal');
        if (!modal) return;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        currentQuestionIdx = 0;
        quizScore = 0;
        renderQuestion(currentQuestionIdx);
    }

    function closeJavaQuiz() {
        const modal = document.getElementById('quizModal');
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function renderQuestion(idx) {
        hasAnsweredCurrent = false;
        const q = QUIZ_QUESTIONS[idx];

        document.getElementById('quizProgress').textContent = `Question ${idx + 1} of ${QUIZ_QUESTIONS.length}`;
        document.getElementById('quizScore').textContent = `Score: ${quizScore} / ${QUIZ_QUESTIONS.length}`;
        document.getElementById('quizTitle').textContent = q.title;
        document.getElementById('quizCode').textContent = q.code;

        const optionsContainer = document.getElementById('quizOptions');
        optionsContainer.innerHTML = '';

        const letters = ['A', 'B', 'C', 'D'];
        q.options.forEach(function (optText, oIdx) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'quiz-opt-btn';
            btn.innerHTML = `
                <span class="quiz-opt-letter">${letters[oIdx]}</span>
                <span>${optText}</span>
            `;
            btn.addEventListener('click', function () {
                handleOptionClick(oIdx, btn);
            });
            optionsContainer.appendChild(btn);
        });

        const explCard = document.getElementById('quizExplanation');
        explCard.style.display = 'none';

        const nextBtn = document.getElementById('quizNextBtn');
        nextBtn.style.display = 'none';
        nextBtn.textContent = idx === QUIZ_QUESTIONS.length - 1 ? 'View Final Results 🏆' : 'Next Question →';
    }

    function handleOptionClick(selectedIdx, clickedBtn) {
        if (hasAnsweredCurrent) return;
        hasAnsweredCurrent = true;

        const q = QUIZ_QUESTIONS[currentQuestionIdx];
        const isCorrect = selectedIdx === q.correct;

        const allButtons = document.querySelectorAll('.quiz-opt-btn');
        allButtons.forEach(function (btn, bIdx) {
            btn.disabled = true;
            if (bIdx === q.correct) {
                btn.classList.add('correct');
            } else if (bIdx === selectedIdx && !isCorrect) {
                btn.classList.add('wrong');
            }
        });

        if (isCorrect) {
            quizScore++;
            document.getElementById('quizScore').textContent = `Score: ${quizScore} / ${QUIZ_QUESTIONS.length}`;
        }

        const explCard = document.getElementById('quizExplanation');
        const iconEl = document.getElementById('quizResultIcon');
        const titleEl = document.getElementById('quizResultTitle');
        const textEl = document.getElementById('quizExplanationText');

        if (isCorrect) {
            iconEl.textContent = '✅';
            titleEl.textContent = 'Correct! JVM Execution Analysis:';
            titleEl.style.color = '#4ade80';
        } else {
            iconEl.textContent = '❌';
            titleEl.textContent = 'Incorrect. JVM Execution Analysis:';
            titleEl.style.color = '#f87171';
        }

        textEl.textContent = q.explanation;
        explCard.style.display = 'block';

        const nextBtn = document.getElementById('quizNextBtn');
        nextBtn.style.display = 'inline-flex';
    }

    function advanceQuizQuestion() {
        if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
            currentQuestionIdx++;
            renderQuestion(currentQuestionIdx);
        } else {
            // Show Completion Summary
            document.getElementById('quizTitle').textContent = '🎉 Challenge Completed!';
            document.getElementById('quizCode').textContent = `Your Final Score: ${quizScore} out of ${QUIZ_QUESTIONS.length} (${Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%)

Technical Proficiency Rating:
${quizScore >= 3 ? '★ Core Java Backend Mastery — Outstanding grasp of String pooling, JVM exception handling, classloading, and caching!' : '★ Solid Java Foundation — Good working knowledge of Java enterprise concepts.'}`;

            document.getElementById('quizOptions').innerHTML = '';
            document.getElementById('quizExplanation').style.display = 'none';

            const nextBtn = document.getElementById('quizNextBtn');
            nextBtn.textContent = 'Try Again 🔄';
            nextBtn.onclick = function () {
                nextBtn.onclick = advanceQuizQuestion;
                currentQuestionIdx = 0;
                quizScore = 0;
                renderQuestion(0);
            };
        }
    }

    // Expose open methods globally
    window.openArchitectureExplorer = openArchitectureExplorer;
    window.openJavaQuiz = openJavaQuiz;

    // Initialize when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDevFeatures);
    } else {
        initDevFeatures();
    }

})();
