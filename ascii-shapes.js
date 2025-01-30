<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dinosaur @ Anagram</title>
    <link rel="icon" href="path/to/favicon.ico" type="image/x-icon">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Courier+Prime&display=swap');

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Courier Prime', monospace;
            background-color: #000;
            color: rgb(233, 9, 9);
            line-height: 1.8;
            margin: 0;
            padding: 20px;
            position: relative;
            overflow-x: hidden;
        }

        header, footer {
            text-align: center;
            border: 1px solid rgb(20, 50, 217);
            padding: 20px;
            margin-bottom: 30px;
            background-color: rgba(255, 255, 255, 0.05);
        }

        h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.5em;
            color: #0ff;
            margin: 0;
        }

        .typing-animation {
            border-right: 2px solid rgba(255, 255, 255, 0.75);
            white-space: nowrap;
            overflow: hidden;
            animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
        }

        @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: rgba(255, 255, 255, 0.75); }
        }

        h2 {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.8em;
            color: #199bd8;
            margin-bottom: 20px;
        }

        a {
            color: #f0f;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
        }

        a:hover {
            color: #ff9cff;
            text-shadow: 0 0 8px rgba(255, 0, 255, 0.5);
        }

        section {
            border: 1px solid rgba(199, 184, 24, 0.8);
            padding: 30px;
            margin: 30px auto;
            width: 80%;
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            overflow: hidden;
        }

        .bullet-point {
            margin: 20px 0;
            padding: 15px;
            font-size: 1.1em;
            transition: all 0.3s ease;
            border-radius: 4px;
            cursor: default;
        }

        .bullet-point:hover {
            background-color: rgba(255, 255, 255, 0.05);
            transform: translateX(10px);
        }

        #links ul {
            list-style: none;
            padding: 0;
        }

        #links li {
            margin: 15px 0;
            font-size: 1.2em;
        }

        #links a {
            display: inline-block;
            padding: 8px 16px;
            border: 1px solid transparent;
            transition: all 0.3s ease;
        }

        #links a:hover {
            border-color: #f0f;
            background-color: rgba(255, 0, 255, 0.1);
            transform: translateX(10px);
        }

        /* ASCII Date Styles */
        #background-date {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            font-family: monospace;
            font-size: 12px;
            line-height: 1.2;
            color: rgba(199, 184, 24, 0.9);
            white-space: pre;
            user-select: none;
            text-align: center;
        }

        .ascii-char {
            display: inline-block;
            transition: color 1s ease;
        }

        @keyframes colorChange {
            0% { color: #e90909; }
            25% { color: #0ff; }
            50% { color: #f0f; }
            75% { color: #199bd8; }
            100% { color: #e90909; }
        }

        .hover {
            animation: colorChange 3s infinite;
        }

        @media (max-width: 768px) {
            section {
                width: 95%;
                padding: 20px;
            }

            h1 {
                font-size: 2em;
            }

            h2 {
                font-size: 1.5em;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1 class="typing-animation">D@n Wi1p0n aka Dinosaur</h1>
    </header>

    <main>
        <section id="bio">
            <h2>About Me</h2>
            <div class="bullet-point">&gt; Crypto since 2016, full time since 2021</div>
            <div class="bullet-point">&gt; Co-founder of a web3 liquid investment fund in 2021</div>
            <div class="bullet-point">&gt; Focus on NFT sector '21-'23</div>
            <div class="bullet-point">&gt; Now focus on investing and advising crypto projects</div>
        </section>

        <!-- ASCII Date -->
        <div id="background-date"></div>

        <section id="links">
            <h2>Connect</h2>
            <ul>
                <li><a href="https://x.com/Dinosaur0x">Twitter</a></li>
                <li><a href="https://t.me/OxDinosaur">Telegram</a></li>
                <li><a href="https://gallery.so/dinosaur/4ffaed305f7d239c606f10b537850b67">Digital Art Gallery</a></li>
                <li><a href="poem2.html">Poem</a></li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Dinosaur</p>
    </footer>

    <script>
        // Text scrambling effect for bullet points
        function animateTextCycle(element) {
            const originalText = element.innerText;
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const animationInterval = 50;

            element.addEventListener('mouseenter', () => {
                let intervalId = setInterval(() => {
                    element.innerText = originalText.split('').map((char) => {
                        return char.match(/[A-Z0-9]/i) ? chars[Math.floor(Math.random() * chars.length)] : char;
                    }).join('');
                }, animationInterval);

                element.addEventListener('mouseleave', () => {
                    clearInterval(intervalId);
                    element.innerText = originalText;
                });
            });
        }

        // ASCII art wrapper
        function wrapAsciiArt(asciiArt) {
            return asciiArt.split('\n').map((line, lineIndex) => {
                return line.split('').map((char, charIndex) => {
                    if (char === '#') {
                        return `<span class="ascii-char" data-line="${lineIndex}" data-char="${charIndex}">${char}</span>`;
                    }
                    return `<span>${char}</span>`;
                }).join('');
            }).join('<br>');
        }

        // Copy the full ASCII shapes object and generateLargeASCIIDate function here
        [Previous ASCII shapes and date generation code...]

        function updateBackgroundDate() {
            const backgroundDate = document.getElementById('background-date');
            const asciiArt = generateLargeASCIIDate();
            backgroundDate.innerHTML = wrapAsciiArt(asciiArt);
        }

        // Color spreading effect for ASCII date
        function spreadColors(startElement) {
            const queue = [startElement];
            const visited = new Set();
            const delayStep = 100;

            while (queue.length > 0) {
                const currentElement = queue.shift();
                const line = parseInt(currentElement.dataset.line, 10);
                const charIndex = parseInt(currentElement.dataset.char, 10);

                if (!visited.has(currentElement)) {
                    visited.add(currentElement);
                    setTimeout(() => {
                        currentElement.classList.add('hover');
                    }, visited.size * delayStep);

                    const neighbors = getNeighbors(line, charIndex);
                    neighbors.forEach(neighbor => {
                        if (!visited.has(neighbor)) {
                            queue.push(neighbor);
                        }
                    });
                }
            }
        }

        function getNeighbors(line, charIndex) {
            const neighborCoords = [
                [line - 1, charIndex],
                [line + 1, charIndex],
                [line, charIndex - 1],
                [line, charIndex + 1],
                [line - 1, charIndex - 1],
                [line - 1, charIndex + 1],
                [line + 1, charIndex - 1],
                [line + 1, charIndex + 1]
            ];

            return neighborCoords
                .map(([l, c]) => document.querySelector(`.ascii-char[data-line="${l}"][data-char="${c}"]`))
                .filter(neighbor => neighbor);
        }

        // Initialize everything
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize bullet point effects
            const bulletPoints = document.querySelectorAll('.bullet-point');
            bulletPoints.forEach(bulletPoint => {
                animateTextCycle(bulletPoint);
            });

            // Initialize ASCII date
            updateBackgroundDate();
            setInterval(updateBackgroundDate, 1000);

            // Add ASCII date hover effect
            document.getElementById('background-date').addEventListener('mouseover', (event) => {
                if (event.target.classList.contains('ascii-char')) {
                    spreadColors(event.target);
                }
            });
        });
    </script>
</body>
</html>