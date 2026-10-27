const quizData = {
            "JS": {
                "Beginner": [
                    { q: "Which keyword is used to declare a constant?", a: ["var", "let", "const", "define"], c: 2 },
                    { q: "What is the correct syntax for an alert?", a: ["alertBox()", "msg()", "alert()", "popup()"], c: 2 },
                    { q: "Which operator checks both value and type?", a: ["==", "=", "===", "!="], c: 2 },
                    { q: "How do you write a comment in JS?", a: ["//", "/*", "#", "--"], c: 0 },
                    { q: "What does 'DOM' stand for?", a: ["Data Object Model", "Document Object Model", "Digital Object Mode", "None"], c: 1 },
                    { q: "Which function converts a string to an integer?", a: ["toInt()", "parseInt()", "Number()", "Both B and C"], c: 3 },
                    { q: "How do you find the length of a string 'x'?", a: ["x.size()", "x.length", "length(x)", "x.len"], c: 1 },
                    { q: "What is the result of 2 + '2'?", a: ["4", "22", "undefined", "Error"], c: 1 },
                    { q: "Which event occurs when a user clicks an element?", a: ["onmouseclick", "onclick", "onchange", "onhover"], c: 1 },
                    { q: "Is JavaScript case-sensitive?", a: ["Yes", "No", "Depends on OS", "Only in strict mode"], c: 0 }
                ],
                "Intermediate": [
                    { q: "What is 'Hoisting' in JavaScript?", a: ["Moving declarations to top", "Lifting an object", "Memory cleanup", "None"], c: 0 },
                    { q: "What is the output of 'typeof []'?", a: ["array", "list", "object", "null"], c: 2 },
                    { q: "Which method adds an element to the end of an array?", a: ["push()", "pop()", "shift()", "unshift()"], c: 0 },
                    { q: "What is a 'Closure'?", a: ["A way to close browser", "Function with its lexical environment", "A private class", "A loop termination"], c: 1 },
                    { q: "Which statement is used to handle errors?", a: ["try...catch", "if...else", "throw()", "select...case"], c: 0 },
                    { q: "What does JSON.stringify() do?", a: ["Parses JSON", "Converts object to string", "Creates an object", "Downloads a file"], c: 1 },
                    { q: "What is 'NaN'?", a: ["Not a Number", "New and Now", "Null and None", "No assigned Number"], c: 0 },
                    { q: "How do you create a function?", a: ["function = x()", "function x()", "create x()", "new Function x()"], c: 1 },
                    { q: "What is the purpose of 'use strict'?", a: ["Enforce coding standards", "Make code faster", "Both", "None"], c: 0 },
                    { q: "Which array method creates a new array by filtering elements?", a: ["map()", "filter()", "reduce()", "find()"], c: 1 }
                ],
                "Advanced": [
                    { q: "What is the Event Loop?", a: ["A loop for events", "Manages async tasks in JS", "A UI feature", "None"], c: 1 },
                    { q: "Difference between 'call' and 'apply'?", a: ["No difference", "Call takes arguments list, Apply takes array", "Apply is faster", "Call is deprecated"], c: 1 },
                    { q: "What is a Promise?", a: ["A callback function", "An object for async completion", "A variable type", "None"], c: 1 },
                    { q: "What is the 'this' keyword in an arrow function?", a: ["Inherits from parent scope", "Refers to the function", "Refers to window", "Null"], c: 0 },
                    { q: "What is the purpose of 'WeakMap'?", a: ["Stores weak data", "Key-value pair where keys are objects and weakly held", "Faster Map", "None"], c: 1 },
                    { q: "What is Prototypal Inheritance?", a: ["Inheriting from classes", "Objects inheriting from other objects", "Copying functions", "None"], c: 1 },
                    { q: "What does 'Object.freeze()' do?", a: ["Stops animation", "Prevents modification of object", "Deletes object", "Makes it read-only"], c: 1 },
                    { q: "Which is a valid way to create a Generator?", a: ["function* x()", "function x()", "gen x()", "new Generator()"], c: 0 },
                    { q: "What is the Big O complexity of a Hash Map lookup?", a: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], c: 2 },
                    { q: "What is 'Tree Shaking'?", a: ["Removing unused code", "Binary tree traversal", "A CSS trick", "None"], c: 0 }
                ]
            },
            "CSS": {
                "Beginner": [
                    { q: "What does CSS stand for?", a: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "None"], c: 0 },
                    { q: "Which HTML tag is used for internal CSS?", a: ["&lt;css&gt;", "&lt;style&gt;", "&lt;script&gt;", "&lt;link&gt;"], c: 1 },
                    { q: "Which property changes text color?", a: ["font-color", "color", "text-style", "background-color"], c: 1 },
                    { q: "How to select an element with id 'top'?", a: [".top", "#top", "top", "*top"], c: 1 },
                    { q: "What is the default value of 'position'?", a: ["absolute", "relative", "fixed", "static"], c: 3 },
                    { q: "How do you make text bold?", a: ["font-weight: bold", "style: bold", "text-decoration: bold", "font: bold"], c: 0 },
                    { q: "Which property controls text size?", a: ["text-size", "font-size", "font-style", "size"], c: 1 },
                    { q: "How do you add a background color?", a: ["color", "bg", "background-color", "fill"], c: 2 },
                    { q: "What is the correct CSS for a hyperlink without underline?", a: ["a {text-decoration:none}", "a {underline:none}", "a {text:no-under}", "a {decor:none}"], c: 0 },
                    { q: "Which property is used to change the font?", a: ["font-family", "font-style", "text-font", "font-type"], c: 0 }
                ],
                "Intermediate": [
                    { q: "What is the CSS Box Model?", a: ["Padding, Border, Margin", "Height, Width", "Layout system", "None"], c: 0 },
                    { q: "Difference between 'em' and 'rem'?", a: ["Em is relative to parent, Rem to root", "No difference", "Rem is for mobile", "Em is faster"], c: 0 },
                    { q: "Which property is used for Flexbox alignment?", a: ["align-items", "flex-align", "vertical-align", "position"], c: 0 },
                    { q: "How do you center a block element horizontally?", a: ["margin: auto", "text-align: center", "align: center", "padding: auto"], c: 0 },
                    { q: "What does 'z-index' do?", a: ["Zooms", "Sets stack order", "Sets opacity", "None"], c: 1 },
                    { q: "Which property adds space inside an element?", a: ["margin", "border", "padding", "spacing"], c: 2 },
                    { q: "What is the 'nth-child' selector?", a: ["Selects specific child", "Selects all children", "Selects parent", "None"], c: 0 },
                    { q: "Which unit is 1% of the viewport width?", a: ["vh", "vw", "vmin", "vmax"], c: 1 },
                    { q: "How do you make a list horizontal?", a: ["display: inline", "list-style: none", "float: left", "Both A and C"], c: 3 },
                    { q: "What is 'Specificity'?", a: ["Ranking system for selectors", "Speed of CSS", "A framework", "None"], c: 0 }
                ],
                "Advanced": [
                    { q: "What is the 'BEM' methodology?", a: ["Block Element Modifier", "Binary Element Mode", "Basic Entry Mod", "None"], c: 0 },
                    { q: "What does 'grid-template-areas' do?", a: ["Defines grid names", "Sets grid size", "Sets background", "None"], c: 0 },
                    { q: "Difference between 'visibility:hidden' and 'display:none'?", a: ["None", "Hidden takes space, None doesn't", "None takes space, Hidden doesn't", "Display:none is faster"], c: 1 },
                    { q: "What are CSS Variables?", a: ["Pre-processor features", "Native --variable syntax", "JavaScript variables", "None"], c: 1 },
                    { q: "What is 'aspect-ratio' property?", a: ["Sets height", "Sets width-to-height ratio", "Sets resolution", "None"], c: 1 },
                    { q: "What is a 'Pseudo-element'?", a: ["hover", "active", "::before", "::parent"], c: 2 },
                    { q: "What does 'mix-blend-mode' do?", a: ["Blends element with background", "Blends colors", "Changes opacity", "None"], c: 0 },
                    { q: "What is the purpose of 'will-change'?", a: ["Hints browser for optimization", "Changes values", "A future property", "None"], c: 0 },
                    { q: "What is 'CSS Containment'?", a: ["Limits scope of browser's work", "Contains text", "Sets max-width", "None"], c: 0 },
                    { q: "Which filter property makes an element blurry?", a: ["blur()", "opacity()", "sepia()", "grayscale()"], c: 0 }
                ]
            }
        };

        quizData.Hybrid = {
            Beginner: [...quizData.JS.Beginner.slice(0,5), ...quizData.CSS.Beginner.slice(0,5)],
            Intermediate: [...quizData.JS.Intermediate.slice(0,5), ...quizData.CSS.Intermediate.slice(0,5)],
            Advanced: [...quizData.JS.Advanced.slice(0,5), ...quizData.CSS.Advanced.slice(0,5)]
        };

        let state = {
            user: { name: "", email: "" },
            track: "",
            level: "",
            currentIdx: 0,
            score: 0,
            timeLeft: 15,
            timer: null,
            questions: []
        };

        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        function playTick() {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.frequency.setValueAtTime(440, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            osc.start(); osc.stop(audioCtx.currentTime + 0.05);
        }

        function navTo(id) {
            if(id === 'topic-screen' && state.user.name === "") {
                state.user.name = document.getElementById('user-name').value || "Legend";
                state.user.email = document.getElementById('user-email').value;
            }
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            document.getElementById(id).classList.add('active');
        }

        function setTrack(t) { state.track = t; navTo('level-screen'); }
        function setLevel(l) { 
            state.level = l; 
            state.questions = quizData[state.track][state.level];
            navTo('instruction-screen'); 
        }

        // --- NEW RESTART LOGIC ---
        function restartArena() {
            state.currentIdx = 0;
            state.score = 0;
            state.timeLeft = 15;
            clearInterval(state.timer);
            navTo('topic-screen');
        }

        // --- NEW END TEST LOGIC ---
        function endTest() {
            state.user.name = "";
            state.user.email = "";
            state.currentIdx = 0;
            state.score = 0;
            document.getElementById('user-name').value = "";
            document.getElementById('user-email').value = "";
            clearInterval(state.timer);
            navTo('welcome-screen');
        }

        function startCountdown() {
            navTo('countdown-screen');
            let count = 3;
            const el = document.getElementById('countdown-num');
            el.innerText = count;
            const intr = setInterval(() => {
                count--;
                el.innerText = count > 0 ? count : "GO!";
                if(count === 0) { clearInterval(intr); startQuiz(); }
            }, 1000);
        }

        function startQuiz() {
            navTo('quiz-screen');
            document.getElementById('track-info').innerText = `${state.track} | ${state.level}`;
            loadQuestion();
        }

        function loadQuestion() {
            if(state.currentIdx >= 10) { endQuiz(); return; }
            clearInterval(state.timer);
            state.timeLeft = 15;
            updateTimerUI();
            const q = state.questions[state.currentIdx];
            document.getElementById('q-progress').innerText = `Challenge ${state.currentIdx + 1} of 10`;
            document.getElementById('question-text').innerHTML = q.q;
            const container = document.getElementById('options-container');
            container.innerHTML = "";
            q.a.forEach((opt, i) => {
                const div = document.createElement('div');
                div.className = 'option';
                div.innerText = opt;
                div.onclick = () => checkAnswer(i, div);
                container.appendChild(div);
            });
            state.timer = setInterval(() => {
                state.timeLeft--;
                updateTimerUI();
                if(state.timeLeft <= 5 && state.timeLeft > 0) playTick();
                if(state.timeLeft <= 0) { clearInterval(state.timer); checkAnswer(-1); }
            }, 1000);
        }

        function updateTimerUI() {
            const el = document.getElementById('timer-display');
            el.innerText = state.timeLeft;
            el.style.borderColor = state.timeLeft <= 5 ? 'var(--ruby)' : 'var(--gold)';
        }

        function checkAnswer(idx, el) {
            clearInterval(state.timer);
            const q = state.questions[state.currentIdx];
            const options = document.querySelectorAll('.option');
            options.forEach(o => o.style.pointerEvents = 'none');
            if(idx === q.c) {
                if(el) el.classList.add('correct');
                state.score++;
            } else {
                if(el) el.classList.add('wrong');
                if(options[q.c]) options[q.c].classList.add('correct');
            }
            setTimeout(() => {
                state.currentIdx++;
                loadQuestion();
            }, 1200);
        }

        function endQuiz() {
            const percent = (state.score / 10) * 100;
            document.getElementById('cert-user-name').innerText = state.user.name;
            document.getElementById('cert-track-details').innerText = `${state.track} Mastery (${state.level})`;
            document.getElementById('cert-score').innerText = percent + "%";
            document.getElementById('cert-date').innerText = new Date().getFullYear();
            document.getElementById('cert-modal').style.display = 'flex';
        }

        function closeCert() {
            document.getElementById('cert-modal').style.display = 'none';
            navTo('result-screen');
            const percent = (state.score / 10) * 100;
            document.getElementById('final-percent').innerText = percent + "%";
            let grade = "C";
            if(percent >= 90) grade = "Legendary (S)";
            else if(percent >= 80) grade = "Elite (A)";
            else if(percent >= 70) grade = "Professional (B)";
            document.getElementById('final-grade').innerText = `Rank: ${grade}`;
        }
   