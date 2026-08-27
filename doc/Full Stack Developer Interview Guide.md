# Techzu — Full Stack Developer Interview Guide

**Company:** Techzu (Singapore-based, Bangladesh office) — SME der jonno custom software, ERP/CRM, e-commerce, and Agentic AI solutions banay. Tomar XeTriva-r kaj (SaaS, ERP, AI products) er sathe overlap onek — eta interview e strong point hisebe use korte parba.

**JD theke core stack:** JavaScript/HTML/CSS → React → Node.js/Express.js → MySQL/PostgreSQL → Git/Agile → (nice to have) Cloud/Deployment.

Ei level ta mid-level full stack role mone hocche — khub deep CS theory na, but practical hands-on knowledge + "why" bujha lagbe. Tumi already Next.js/TS e strong, tai niche mostly practical + concept-check questions rakhlam jegula company generally full-stack round e jiggesh kore.

---

## 1. JavaScript Core (sob theke beshi weight)

| Topic | Likely Question | Short Answer |
|---|---|---|
| Closures | Closure ki, example dao | Function tar outer scope er variable access rakhte pare, even outer function return hoye gele o. Data privacy/counter banate use hoy. |
| Hoisting | var vs let/const hoisting difference | var hoist hoy with `undefined`; let/const hoist hoy but "temporal dead zone" e thake, access korle ReferenceError. |
| Event Loop | JS single-threaded hoyeo async kivabe kaj kore | Call stack, Web APIs, callback queue, microtask queue (promises) — event loop stack empty hole queue theke task tuley. |
| Promises/Async-Await | Promise vs async/await | Promise .then/.catch chain; async/await hocche syntactic sugar, synchronous style e likha jay, try/catch diye error handle hoy. |
| this keyword | Arrow function e `this` kivabe kaj kore | Arrow function nijer `this` bind kore na — lexical scope theke `this` nay. Normal function er `this` call-site depend kore. |
| Debounce/Throttle | Kobe use korba | Debounce: search input (typing thamle call), Throttle: scroll/resize event (fixed interval e call). |
| Array methods | map/filter/reduce difference | map → new array (transform), filter → new array (condition match), reduce → single accumulated value. |
| == vs === | Difference | == type coercion kore compare kore, === strict, type + value dutai match lagbe. |
| Spread/Rest | Use case | Spread: array/object copy ba merge; Rest: function argument gulo ke array te collect kora. |

**Extra prep:** Prototype/prototypal inheritance, `let/const/var` scope difference, deep vs shallow copy — eigulao ekbar revise kore rekho.

---

## 2. HTML/CSS

| Topic | Likely Question | Short Answer |
|---|---|---|
| Semantic HTML | Ki ebong keno lage | `<header>`, `<nav>`, `<main>`, `<footer>` er moto tag jegula meaning bohon kore — SEO + accessibility er jonno important. |
| Box model | Explain koro | content → padding → border → margin, ei layer e element size calculate hoy. |
| Flexbox vs Grid | Kobe kon ta use korba | Flexbox: 1-dimensional layout (row/column align), Grid: 2-dimensional (row+column ekshathe control). |
| Responsive design | Kivabe kora hoy | Media queries, relative units (%, rem, vw/vh), mobile-first approach, flexible grid/flex layout. |
| CSS specificity | Explain koro | Inline > ID > class/attribute > element — specificity score onujayi kon rule apply hobe seta decide hoy. |
| position property | relative vs absolute vs fixed | relative: nijer normal position theke shift; absolute: nearest positioned ancestor er relative; fixed: viewport er relative, scroll e move kore na. |

---

## 3. React

| Topic | Likely Question | Short Answer |
|---|---|---|
| Virtual DOM | Ki ebong keno fast | JS object hisebe DOM er lightweight copy — real DOM update korar age virtual DOM e diff (reconciliation) kore, minimum change e real DOM update hoy. |
| useState vs useRef | Difference | useState re-render trigger kore, useRef kore na — mutable value hold korte use hoy (DOM reference, timer id etc). |
| useEffect | Dependency array er kaj ki | Kokhon effect run hobe seta control kore — empty `[]` = mount e ekbar, kono value dile shei value change hole re-run, na dile every render e run. |
| Controlled vs Uncontrolled component | Difference | Controlled: form value React state diye control hoy; Uncontrolled: DOM nijei value hold kore (ref diye access). |
| Prop drilling & solution | Ki, kivabe solve korba | Deep nested component e props pass korte korte problem hoy — Context API ba state management (Redux/Zustand) diye solve kora hoy. |
| React.memo / useMemo / useCallback | Kobe use korba | Unnecessary re-render/re-computation avoid korte — memo: component memoize, useMemo: value memoize, useCallback: function reference memoize. |
| Key prop in lists | Keno lagbe | React re-render e kon item change/add/remove hoyeche efficiently track korte — index use na kore unique id use kora best practice. |

**Extra prep:** React lifecycle (class vs hooks equivalent), custom hooks banano, code-splitting (React.lazy), SSR vs CSR (tomar Next.js experience theke eta strong point — mention korte paro).

---

## 4. Node.js / Express.js (Backend)

| Topic | Likely Question | Short Answer |
|---|---|---|
| Node.js event-driven model | Node single-threaded hoyeo scalable kivabe | Non-blocking I/O + event loop — heavy I/O task (DB, file, network) background e (libuv thread pool) handle hoy, main thread block hoy na. |
| Middleware | Express e middleware ki | Request-response cycle er majhe function chain — auth check, logging, error handling, body parsing er jonno use hoy (`app.use()`). |
| REST API design | RESTful API er principle ki | Resource-based URL, proper HTTP methods (GET/POST/PUT/DELETE), stateless, status codes shothik use kora. |
| Error handling | Express e centralized error handling kivabe | Custom error-handling middleware `(err, req, res, next)` diye — try/catch theke `next(err)` call kore forward kora. |
| Authentication | JWT kivabe kaj kore | Login e server token generate kore (signed), client token store kore (cookie/localStorage), protected route e header e token pathay, server verify kore. |
| Environment variables | Keno use korba | Secrets/config (DB url, API key) code theke alada rakha, `.env` file + `dotenv` package diye load kora — security + environment-wise config er jonno. |
| Rate limiting/Security | Common backend security practice | Input validation/sanitization, helmet.js (headers), rate limiting, CORS proper config, SQL injection prevent (parameterized query), password hashing (bcrypt). |

---

## 5. Database — MySQL / PostgreSQL

| Topic | Likely Question | Short Answer |
|---|---|---|
| SQL vs NoSQL | Kokhon SQL choose korba | Structured, relational data with strong consistency lagle SQL; flexible schema/high write scale lagle NoSQL. |
| JOIN types | INNER vs LEFT vs RIGHT JOIN | INNER: match kora rows dutai table theke; LEFT: left table er shob + matching right; RIGHT: opposite. |
| Normalization | Ki ebong keno | Data redundancy kombano r data integrity barano — table gulo ke logically organize kora (1NF, 2NF, 3NF). |
| Indexing | Ki ebong tradeoff | Query speed up kore (specially WHERE/JOIN e) kintu write (insert/update) speed kome, extra storage lage. |
| Transactions | ACID ki | Atomicity, Consistency, Isolation, Durability — multiple query ekshathe ekta unit hisebe execute hoy, sob success na hole rollback hoy. |
| N+1 query problem | Ki ebong solution | Loop e ekta query prottekbar call hole onek query hoy — solution: JOIN use kora ba ORM e eager loading (include/populate). |
| PostgreSQL vs MySQL | Difference janle plus point | Postgres: more advanced data types (JSON, arrays), stronger standard compliance, better for complex queries; MySQL: simpler, widely used, fast for read-heavy simple apps. |

---

## 6. Git & Agile

| Topic | Likely Question | Short Answer |
|---|---|---|
| Git workflow | Feature branch workflow explain koro | `main`/`develop` branch theke feature branch create kora, kaj kore commit, PR/MR create kore review er por merge kora. |
| Merge conflict | Kivabe resolve korba | Conflict marker (`<<<<`, `====`, `>>>>`) দেখে manually decide kora kon change rakhba, tarpor `git add` + commit/continue. |
| Git rebase vs merge | Difference | Merge: history preserve kore ekta merge commit banay; Rebase: commit history ke linear kore, base branch er upor replay kore. |
| Agile/Scrum basics | Sprint, standup, retro ki | Sprint: fixed time-box (1-2 weeks) kaj; daily standup: progress/blocker share; retro: sprint sesh e process improve korar discussion. |
| Story points/estimation | Ki | Task er complexity/effort measure korar relative unit (time na, effort/complexity based). |

---

## 7. API Integration, Performance, Security, Scalability (JD e specifically mention kora)

- **API integration:** REST call kora (axios/fetch), error handling, retry logic, third-party API (payment, SMS, email gateway) integrate kora experience thakle bolo — tomar XeTriva projects theke real example dite paro.
- **Performance:** Lazy loading, code splitting, image optimization, caching (browser + server-side, Redis), DB query optimization, pagination.
- **Security:** Input validation, XSS/CSRF prevention, HTTPS, proper auth/authorization, environment secrets protect kora, dependency vulnerability check.
- **Scalability:** Horizontal vs vertical scaling, load balancer, caching layer, DB indexing + read replicas, microservices vs monolith tradeoff (basic idea thakle enough).

---

## 8. Cloud & Deployment (Nice to have — but bolle strong impression pabe)

- Kono ekta cloud platform (AWS/Vercel/DigitalOcean/Railway) e deploy korar experience mention koro — tumi already Vercel e projects deploy koro (BD news pipeline, etc.) — eta direct relevant.
- CI/CD basic concept: GitHub Actions diye auto build/test/deploy.
- Docker basic idea (containerization ki, keno use hoy) — jodi na o use kore thako, concept ta explain korte parle valo.
- Environment-wise deployment (staging vs production), domain/DNS/SSL basic.

---

## 9. Practical/Coding Round — Ki Expect Korte Paro

- Live coding: ekta small feature banate bolte pare (e.g., API theke data fetch kore list dekhano, form validation, CRUD API banano).
- Debugging round: existing buggy code diye fix korte bolte pare.
- System design (light version): "Ekta simple e-commerce/booking system er DB schema design koro" type question — ei ta tumi khub strong (CarPro, ecommerce variant platform er experience directly use korte parba).

---

## 10. Company/Behavioral Questions

| Question | Short Answer Direction |
|---|---|
| Techzu shomporke ki jano? | SME der jonno custom software/website, ERP/CRM system, r Agentic AI solutions (sales, HR, finance, customer support agent) banay, Singapore-based, Bangladesh office ache. |
| Amader ei role e keno apply korle? | Tomar XeTriva-e already custom SaaS/ERP/AI product build korar experience ache — Techzu-r kaj er sathe direct match, real client-facing full-stack experience relate koro. |
| Nijer sobcheye challenging project ta bolo | Ekta specific project (CarPro/QRGen/ecommerce platform) niye STAR format e (Situation-Task-Action-Result) short kore bolo. |
| Team e kaj korar experience, disagreement handle korecho kokhono? | Real short example dao — specific keep koro, blame na kore process-focused answer dao. |
| Freelance/own consultancy theke job e ashte chao keno? | Honest answer — stability, team collaboration, learning, structured growth — jeta tomar actual reason. |

---

## 11. Tumi Jeta Jiggesh Korba (Interviewer ke)

- Team structure ta kemon — koyjon developer, kon stack e kaj hoy day-to-day?
- Kon type-er product e beshi kaj hobe — ERP/CRM na AI agent side?
- Code review/deployment process ta kemon (Agile sprint length, tools)?
- Growth path/learning support (courses, mentorship) ache ki?

---

### Quick Focus Priority (jodi shomoy kom thake)

1. JavaScript core (closures, async/await, array methods) — **highest weight**
2. React hooks (useState, useEffect, memoization)
3. Express middleware + REST API + JWT auth
4. SQL joins + basic query writing (hands-on practice koro, live likhte bolte pare)
5. Git workflow + Agile terms
6. Nijer projects (XeTriva) theke 2-3 ta strong story ready rakho — CarPro (schema+backend), QRGen (SaaS+payment), ecommerce variant platform — eigula direct relevant proof
