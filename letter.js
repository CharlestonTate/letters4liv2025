// --- Manual Unlock Variables (set to true to force unlock) ---
const MANUAL_UNLOCK = {
    1: false, // May 19, 2025
    2: false, // May 26, 2025
    3: false, // June 2, 2025
    4: false, // June 9, 2025
    5: false, // June 16, 2025
    6: false, // June 23, 2025
    7: false, // June 30, 2025
    8: false, // July 7, 2025
    9: false, // July 14, 2025
    10: false // July 21, 2025
};
// -----------------------------------------------------------

// Letter content framework (should match script.js)
const LETTERS = {
    1: 'My dearest <span class="wiggle">Olivia</span>,<br><br>I really hope you <span class="grow">like</span> this <span class="spinny">website</span> I built for you! Every single <span class="rainbow">Monday</span> from now until the 21st will have a <span class="confetti-word sparkle">new letter</span> for <span class="hearts">you</span>! While this isn\'t a replacement for <span class="bounce">paper letters</span>, I want you to have a <span class="stars">reminder</span> on the mission field of just how much I <span class="rainbow hearts">love you</span>.<br>Though this next season of life is going to be <span class="shaky">hard</span>, know that I\'m <span class="sparkle">praying</span> for you every day and thinking of you every night as I rest my <span class="wiggle">head</span>. This website will CONSTANTLY be getting <span class="spinny">updates</span> of how much I <span class="hearts">love you</span>. There\'s so many <span class="confetti-word">unfinished ideas</span> that I have that I want to <span class="grow">add</span>, and promise I\'ll make time to <span class="bounce">update</span> this website (as well as give you a call of course <span class="wiggle">baby</span>). In the meantime, let\'s <span class="rainbow">enjoy</span> the time we have together. And know that no matter what happens, or how <span class="shaky">busy</span> life gets, I\'m always here for <span class="hearts">you</span>.<br><br>Love,<br><span class="sparkle">The Boy</span>',
    2: `Uncaught TypeError: Cannot read property 'content' of server side undefined<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br>
    at &lt;anonymous&gt; (index.js:7)<br><br>
    Server Error 503: Service Unavailable<br>
    at Promise.then (&lt;anonymous&gt;)<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br><br>
    Error: Letter content not available until May 26th, 2025<br>
    at LetterServer.validateDate (server.js:156)<br>
    at LetterServer.fetchLetter (server.js:42)`,
    3: `Uncaught TypeError: Cannot read property 'content' of undefined<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br>
    at &lt;anonymous&gt; (index.js:7)<br><br>
    Server Error 503: Service Unavailable<br>
    at Promise.then (&lt;anonymous&gt;)<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br><br>
    Error: Letter content not available until May 26th, 2025<br>
    at LetterServer.validateDate (server.js:156)<br>
    at LetterServer.fetchLetter (server.js:42)`,
    4: `Uncaught TypeError: Cannot read property 'content' of undefined<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br>
    at &lt;anonymous&gt; (index.js:7)<br><br>
    Server Error 503: Service Unavailable<br>
    at Promise.then (&lt;anonymous&gt;)<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br><br>
    Error: Letter content not available until May 26th, 2025<br>
    at LetterServer.validateDate (server.js:156)<br>
    at LetterServer.fetchLetter (server.js:42)`,
    5: `Uncaught TypeError: Cannot read property 'content' of undefined<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br>
    at &lt;anonymous&gt; (index.js:7)<br><br>
    Server Error 503: Service Unavailable<br>
    at Promise.then (&lt;anonymous&gt;)<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br><br>
    Error: Letter content not available until May 26th, 2025<br>
    at LetterServer.validateDate (server.js:156)<br>
    at LetterServer.fetchLetter (server.js:42)`,
    6: `Uncaught TypeError: Cannot read property 'content' of undefined<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br>
    at &lt;anonymous&gt; (index.js:7)<br><br>
    Server Error 503: Service Unavailable<br>
    at Promise.then (&lt;anonymous&gt;)<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br><br>
    Error: Letter content not available until May 26th, 2025<br>
    at LetterServer.validateDate (server.js:156)<br>
    at LetterServer.fetchLetter (server.js:42)`,
    7: `Uncaught TypeError: Cannot read property 'content' of undefined<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br>
    at &lt;anonymous&gt; (index.js:7)<br><br>
    Server Error 503: Service Unavailable<br>
    at Promise.then (&lt;anonymous&gt;)<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br><br>
    Error: Letter content not available until May 26th, 2025<br>
    at LetterServer.validateDate (server.js:156)<br>
    at LetterServer.fetchLetter (server.js:42)`,
    8: `Uncaught TypeError: Cannot read property 'content' of undefined<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br>
    at &lt;anonymous&gt; (index.js:7)<br><br>
    Server Error 503: Service Unavailable<br>
    at Promise.then (&lt;anonymous&gt;)<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br><br>
    Error: Letter content not available until May 26th, 2025<br>
    at LetterServer.validateDate (server.js:156)<br>
    at LetterServer.fetchLetter (server.js:42)`,
    9: `Uncaught TypeError: Cannot read property 'content' of undefined<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br>
    at &lt;anonymous&gt; (index.js:7)<br><br>
    Server Error 503: Service Unavailable<br>
    at Promise.then (&lt;anonymous&gt;)<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br><br>
    Error: Letter content not available until May 26th, 2025<br>
    at LetterServer.validateDate (server.js:156)<br>
    at LetterServer.fetchLetter (server.js:42)`,
    10: `Uncaught TypeError: Cannot read property 'content' of undefined<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br>
    at &lt;anonymous&gt; (index.js:7)<br><br>
    Server Error 503: Service Unavailable<br>
    at Promise.then (&lt;anonymous&gt;)<br>
    at LetterServer.fetchLetter (server.js:42)<br>
    at async LetterClient.initialize (client.js:15)<br><br>
    Error: Letter content not available until May 26th, 2025<br>
    at LetterServer.validateDate (server.js:156)<br>
    at LetterServer.fetchLetter (server.js:42)`,
};

// Dates for each letter (should match order in LETTERS)
const LETTER_DATES = {
    1: '2025-05-19',
    2: '2025-05-26',
    3: '2025-06-02',
    4: '2025-06-09',
    5: '2025-06-16',
    6: '2025-06-23',
    7: '2025-06-30',
    8: '2025-07-07',
    9: '2025-07-14',
    10: '2025-07-21',
};

function getLetterIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get('letter'));
}

function getPSTTime() {
    const now = new Date();
    return new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
}

function isLetterUnlocked(letterId) {
    console.log('letterId:', letterId, 'manual unlock:', MANUAL_UNLOCK[letterId]);
    if (!letterId) return false;
    if (MANUAL_UNLOCK[letterId]) return true;
    const unlockDateStr = LETTER_DATES[letterId];
    if (!unlockDateStr) return false;
    const unlockDate = new Date(unlockDateStr);
    unlockDate.setHours(0, 0, 0, 0);
    const nowPST = getPSTTime();
    return nowPST >= unlockDate;
}

// Throttle utility
function throttle(fn, delay) {
    let last = 0;
    return function(...args) {
        const now = Date.now();
        if (now - last > delay) {
            last = now;
            fn.apply(this, args);
        }
    };
}

// Deep debugged confetti effect (throttled)
const confettiAt = throttle(function(x, y) {
    for (let i = 0; i < 24; i++) {
        const conf = document.createElement('div');
        conf.style.position = 'fixed';
        // Start exactly at the word
        conf.style.left = x + 'px';
        conf.style.top = y + 'px';
        conf.style.width = '8px';
        conf.style.height = '8px';
        conf.style.borderRadius = '50%';
        conf.style.background = `hsl(${Math.random()*360},90%,60%)`;
        conf.style.pointerEvents = 'none';
        conf.style.zIndex = 9999;
        conf.style.opacity = 1;
        document.body.appendChild(conf);
        // Make sure confetti always animates away from the click
        const angle = Math.random() * 2 * Math.PI;
        const dist = 70 + Math.random() * 60;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        conf.animate([
            { transform: 'translate(0,0)', opacity: 1 },
            { transform: `translate(${dx}px,${dy}px)`, opacity: 0 }
        ], {
            duration: 900 + Math.random()*400,
            easing: 'cubic-bezier(.6,2,.6,1)',
            fill: 'forwards'
        });
        setTimeout(() => { if (conf.parentNode) conf.parentNode.removeChild(conf); }, 1300);
    }
}, 400);

// Hearts effect (more sporadic, everywhere, start at word)
function heartsAt(x, y) {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    for (let i = 0; i < 28; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.position = 'fixed';
        // Start exactly at the word
        const startX = x;
        const startY = y;
        heart.style.left = startX + 'px';
        heart.style.top = startY + 'px';
        heart.style.fontSize = (32 + Math.random()*32) + 'px'; // EVEN BIGGER
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = 9999;
        heart.style.opacity = 1;
        document.body.appendChild(heart);
        // Fly to a random spot on the screen
        const endX = Math.random() * vw;
        const endY = Math.random() * vh;
        heart.animate([
            { transform: 'translate(0,0) scale(1)', opacity: 1 },
            { transform: `translate(${endX-startX}px,${endY-startY}px) scale(${0.7 + Math.random()*0.6})`, opacity: 0 }
        ], {
            duration: 1200 + Math.random()*800,
            easing: 'cubic-bezier(.6,2,.6,1)',
            fill: 'forwards'
        });
        setTimeout(() => { if (heart.parentNode) heart.parentNode.removeChild(heart); }, 1800);
    }
}

// Stars rain from the top
function starsRain() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    for (let i = 0; i < 120; i++) { // even more stars!
        const star = document.createElement('div');
        star.textContent = '✨';
        star.style.position = 'fixed';
        // Spread out: allow -10vw to 110vw
        const left = (Math.random() * 1.2 - 0.1) * vw;
        star.style.left = left + 'px';
        star.style.top = '-40px';
        star.style.fontSize = (44 + Math.random()*32) + 'px'; // EVEN BIGGER
        star.style.pointerEvents = 'none';
        star.style.zIndex = 9999;
        star.style.opacity = 1;
        document.body.appendChild(star);
        const endY = window.innerHeight + 60 + Math.random()*60;
        star.animate([
            { transform: 'translateY(0)', opacity: 1 },
            { transform: `translateY(${endY}px)`, opacity: 0.2 }
        ], {
            duration: 1800 + Math.random()*1200,
            easing: 'cubic-bezier(.6,2,.6,1)',
            fill: 'forwards'
        });
        setTimeout(() => { if (star.parentNode) star.parentNode.removeChild(star); }, 2500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Slow down AOS
    if (window.AOS) {
        AOS.init({ duration: 1400, easing: 'ease-out-cubic' });
    }

    let letterId = getLetterIdFromUrl();
    letterId = Number(letterId); // force number
    const letterContentDiv = document.getElementById('letter-content');

    // Bypass flag for dev/console access
    const bypass = localStorage.getItem('bypassLetterLock') === 'true';
    if (bypass) localStorage.removeItem('bypassLetterLock');

    const unlocked = isLetterUnlocked(letterId) || bypass;
    console.log('letterId:', letterId, 'unlocked:', unlocked, 'manual unlock:', MANUAL_UNLOCK[letterId], 'bypass:', bypass);

    if (!unlocked) {
        // Show popup
        console.log('Showing locked message for letterId:', letterId, 'manual unlock:', MANUAL_UNLOCK[letterId]);
        const popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '0';
        popup.style.left = '0';
        popup.style.width = '100vw';
        popup.style.height = '100vh';
        popup.style.background = 'rgba(0,0,0,0.7)';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.alignItems = 'center';
        popup.style.justifyContent = 'center';
        popup.style.zIndex = '9999';

        const msg = document.createElement('div');
        msg.style.background = '#fffaf3';
        msg.style.padding = '2rem 2.5rem';
        msg.style.borderRadius = '14px';
        msg.style.fontSize = '1.3rem';
        msg.style.color = '#2c3e50';
        msg.style.textAlign = 'center';
        msg.style.marginBottom = '1.5rem';
        msg.innerText = "What are you doing Liv..? You really thought you could out engineer me!!";

        const btn = document.createElement('button');
        btn.innerText = 'Back to the main menu';
        btn.style.background = '#f5e3c8';
        btn.style.color = '#8b7355';
        btn.style.border = 'none';
        btn.style.borderRadius = '8px';
        btn.style.padding = '0.7rem 1.5rem';
        btn.style.fontSize = '1.1rem';
        btn.style.cursor = 'pointer';
        btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
        btn.onclick = () => { window.location.href = 'index.html'; };

        popup.appendChild(msg);
        popup.appendChild(btn);
        document.body.appendChild(popup);
        letterContentDiv.innerText = '';
        console.log('Tried to access locked letter', letterId);
        return;
    }

    if (LETTERS[letterId]) {
        letterContentDiv.innerHTML = LETTERS[letterId];
        console.log('Loaded letter', letterId);
    } else {
        letterContentDiv.innerText = 'No letter content found.';
        console.log('No letter content for', letterId);
    }
    if (window.AOS) {
        AOS.refresh();
    }

    // Confetti on click for .confetti-word (but NOT if it also has another effect class)
    letterContentDiv.querySelectorAll('.confetti-word').forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', e => {
            const effectClasses = ['wiggle','bounce','spinny','grow','shaky','sparkle','hearts','stars'];
            if (effectClasses.some(cls => el.classList.contains(cls))) return;
            const rect = el.getBoundingClientRect();
            const x = rect.left + rect.width/2 + window.scrollX;
            const y = rect.top + rect.height/2 + window.scrollY;
            confettiAt(x, y);
        });
    });

    // Hearts on click for .hearts
    letterContentDiv.querySelectorAll('.hearts').forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', e => {
            const rect = el.getBoundingClientRect();
            const x = rect.left + rect.width/2 + window.scrollX;
            const y = rect.top + rect.height/2 + window.scrollY;
            heartsAt(x, y);
        });
    });

    // Stars on click for .stars
    letterContentDiv.querySelectorAll('.stars').forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', e => {
            starsRain();
        });
    });
}); 
