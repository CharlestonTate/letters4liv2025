// --- Manual Unlock Variables (set to true to force unlock) ---
const MANUAL_UNLOCK = {
    1: true, // May 19, 2025
    2: true, // May 26, 2025
    3: true, // June 2, 2025
    4: true, // June 9, 2025
    5: true, // June 16, 2025
    6: true, // June 23, 2025
    7: false, // June 30, 2025
    8: false, // July 7, 2025
    9: false, // July 14, 2025
    10: false // July 21, 2025
};
// -----------------------------------------------------------

// Letter content framework
const LETTERS = {
    1: 'My dearest Olivia,\n\nThis is your first letter! I hope you enjoy this journey of love and surprises.\n\nLove,\nYour Boy',
    2: 'Uncaught TypeError: Cannot read property \'content\' of undefined\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n    at <anonymous> (index.js:7)\n\nServer Error 503: Service Unavailable\n    at Promise.then (<anonymous>)\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n\nError: Letter content not available until May 26th, 2025\n    at LetterServer.validateDate (server.js:156)\n    at LetterServer.fetchLetter (server.js:42)',
    3: 'Uncaught TypeError: Cannot read property \'content\' of undefined\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n    at <anonymous> (index.js:7)\n\nServer Error 503: Service Unavailable\n    at Promise.then (<anonymous>)\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n\nError: Letter content not available until June 2nd, 2025\n    at LetterServer.validateDate (server.js:156)\n    at LetterServer.fetchLetter (server.js:42)',
    4: 'Uncaught TypeError: Cannot read property \'content\' of undefined\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n    at <anonymous> (index.js:7)\n\nServer Error 503: Service Unavailable\n    at Promise.then (<anonymous>)\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n\nError: Letter content not available until June 9th, 2025\n    at LetterServer.validateDate (server.js:156)\n    at LetterServer.fetchLetter (server.js:42)',
    5: 'Uncaught TypeError: Cannot read property \'content\' of undefined\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n    at <anonymous> (index.js:7)\n\nServer Error 503: Service Unavailable\n    at Promise.then (<anonymous>)\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n\nError: Letter content not available until June 16th, 2025\n    at LetterServer.validateDate (server.js:156)\n    at LetterServer.fetchLetter (server.js:42)',
    6: 'Uncaught TypeError: Cannot read property \'content\' of undefined\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n    at <anonymous> (index.js:7)\n\nServer Error 503: Service Unavailable\n    at Promise.then (<anonymous>)\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n\nError: Letter content not available until June 23rd, 2025\n    at LetterServer.validateDate (server.js:156)\n    at LetterServer.fetchLetter (server.js:42)',
    7: 'Uncaught TypeError: Cannot read property \'content\' of undefined\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n    at <anonymous> (index.js:7)\n\nServer Error 503: Service Unavailable\n    at Promise.then (<anonymous>)\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n\nError: Letter content not available until June 30th, 2025\n    at LetterServer.validateDate (server.js:156)\n    at LetterServer.fetchLetter (server.js:42)',
    8: 'Uncaught TypeError: Cannot read property \'content\' of undefined\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n    at <anonymous> (index.js:7)\n\nServer Error 503: Service Unavailable\n    at Promise.then (<anonymous>)\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n\nError: Letter content not available until July 7th, 2025\n    at LetterServer.validateDate (server.js:156)\n    at LetterServer.fetchLetter (server.js:42)',
    9: 'Uncaught TypeError: Cannot read property \'content\' of undefined\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n    at <anonymous> (index.js:7)\n\nServer Error 503: Service Unavailable\n    at Promise.then (<anonymous>)\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n\nError: Letter content not available until July 14th, 2025\n    at LetterServer.validateDate (server.js:156)\n    at LetterServer.fetchLetter (server.js:42)',
    10: 'Uncaught TypeError: Cannot read property \'content\' of undefined\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n    at <anonymous> (index.js:7)\n\nServer Error 503: Service Unavailable\n    at Promise.then (<anonymous>)\n    at LetterServer.fetchLetter (server.js:42)\n    at async LetterClient.initialize (client.js:15)\n\nError: Letter content not available until July 21st, 2025\n    at LetterServer.validateDate (server.js:156)\n    at LetterServer.fetchLetter (server.js:42)'
};

// Console commands for testing
window.testLetters = {
    // View specific letter by ID
    viewLetter: function(id) {
        if (LETTERS[id]) {
            console.log(`\n=== Letter ${id} ===\n`);
            console.log(LETTERS[id]);
            console.log('\n==================\n');
        } else {
            console.error('Letter not found!');
        }
    },
    
    // View letter by date
    viewByDate: function(date) {
        const letterSlots = document.querySelectorAll('.letter-slot');
        let found = false;
        
        letterSlots.forEach(slot => {
            if (slot.dataset.date === date) {
                const id = slot.dataset.letterId;
                console.log(`\n=== Letter for ${date} (ID: ${id}) ===\n`);
                console.log(LETTERS[id]);
                console.log('\n==================\n');
                found = true;
            }
        });
        
        if (!found) {
            console.error('No letter found for that date!');
        }
    },
    
    // List all available letters
    listAll: function() {
        console.log('\n=== Available Letters ===\n');
        Object.entries(LETTERS).forEach(([id, content]) => {
            const letterSlots = document.querySelectorAll('.letter-slot');
            let date = 'Unknown';
            letterSlots.forEach(slot => {
                if (slot.dataset.letterId === id) {
                    date = slot.dataset.date;
                }
            });
            console.log(`Letter ${id} (${date}):`);
            console.log(content.substring(0, 50) + '...');
            console.log('-------------------\n');
        });
    },

    // Navigate to letter page directly
    goToLetter: function(id) {
        if (LETTERS[id]) {
            localStorage.setItem('bypassLetterLock', 'true');
            window.location.href = `letter.html?letter=${id}`;
        } else {
            console.error('Letter not found!');
        }
    }
};

// Add helpful console message
console.log('\n=== Letter Testing Commands ===\n');
console.log('testLetters.viewLetter(2) - View letter by ID');
console.log('testLetters.viewByDate("2025-05-26") - View letter by date');
console.log('testLetters.listAll() - List all available letters');
console.log('testLetters.goToLetter(2) - Go directly to letter page\n');

// Secret corner pattern for music
let cornerClicks = new Set();
let audio = null;

function checkCornerPattern(slot) {
    const grid = document.querySelector('.letters-grid');
    const slots = grid.querySelectorAll('.letter-slot');
    const firstSlot = slots[0];
    const lastSlot = slots[slots.length - 1];
    const thirdSlot = slots[2];
    const eighthSlot = slots[7];

    // Determine which corner was clicked
    let corner = '';
    if (slot === firstSlot) corner = 'top-left';
    if (slot === thirdSlot) corner = 'top-right';
    if (slot === eighthSlot) corner = 'bottom-left';
    if (slot === lastSlot) corner = 'bottom-right';

    if (corner) {
        cornerClicks.add(corner);
        console.log('Corner clicked:', corner, 'Total corners:', cornerClicks.size);

        // Check if all corners have been clicked
        if (cornerClicks.size === 4) {
            if (!audio) {
                audio = new Audio('sometimesithinkaboutlosingyou.mp3');
                audio.volume = 0.5; // Start at 50% volume
            }

            if (audio.paused) {
                audio.play().catch(e => console.log('Audio play failed:', e));
                console.log('Playing music...');
            } else {
                audio.pause();
                audio.currentTime = 0;
                console.log('Stopping music...');
            }
            cornerClicks.clear(); // Reset the pattern
        }
    }
}

// Add volume controls
document.addEventListener('keydown', (e) => {
    if (!audio) return;
    
    if (e.key === 'ArrowUp') {
        audio.volume = Math.min(1, audio.volume + 0.1);
        console.log('Volume up:', Math.round(audio.volume * 100) + '%');
    } else if (e.key === 'ArrowDown') {
        audio.volume = Math.max(0, audio.volume - 0.1);
        console.log('Volume down:', Math.round(audio.volume * 100) + '%');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (window.AOS) AOS.init();

    // Function to get current PST time
    function getPSTTime() {
        const now = new Date();
        return new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    }

    // Function to check if a letter should be unlocked
    function checkLetterUnlock() {
        const currentPST = getPSTTime();
        const letterSlots = document.querySelectorAll('.letter-slot');

        letterSlots.forEach(slot => {
            const letterId = slot.dataset.letterId;
            const letterDate = new Date(slot.dataset.date + 'T00:00:00-07:00');
            if (MANUAL_UNLOCK[letterId] || currentPST >= letterDate) {
                slot.classList.add('unlocked');
                const lockIcon = slot.querySelector('.lock-icon');
                if (lockIcon) {
                    lockIcon.remove();
                    const preview = document.createElement('div');
                    preview.className = 'letter-preview';
                    preview.textContent = 'Click to read your letter';
                    slot.querySelector('.letter-content').appendChild(preview);
                }
            }
        });
    }

    // Check letter unlock status
    checkLetterUnlock();
    setInterval(checkLetterUnlock, 60000);

    // Add click handlers for all letters
    document.querySelectorAll('.letter-slot').forEach(slot => {
        slot.addEventListener('click', function(e) {
            if (!slot.classList.contains('unlocked')) {
                console.log('Letter is locked!');
                return;
            }
            const letterId = slot.dataset.letterId;
            window.location.href = `letter.html?letter=${letterId}`;
        });
    });

    // Mobile app button functionality
    const mobileAppBtn = document.getElementById('mobile-app-btn');
    const appInstructionsModal = document.getElementById('app-instructions-modal');
    const closeBtns = document.querySelectorAll('.close-btn');

    if (mobileAppBtn) {
        mobileAppBtn.addEventListener('click', () => {
            appInstructionsModal.style.display = 'block';
            if (window.AOS) AOS.refresh();
        });
    }

    // Close button functionality for all modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Secret functionality
    let clickCount = 0;
    let audio = null;
    let messageTimeout = null;

    function showSecretMessage() {
        const existingMessage = document.querySelector('.secret-message');
        if (existingMessage) existingMessage.remove();

        const message = document.createElement('div');
        message.className = 'secret-message';
        message.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 20px;
            background: rgba(0, 0, 0, 0.7);
            color: #fff;
            border-radius: 8px;
            font-family: Quicksand, sans-serif;
            font-size: 14px;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            z-index: 9999;
        `;
        message.textContent = 'I sometimes think about losing you.';
        document.body.appendChild(message);

        requestAnimationFrame(() => message.style.opacity = '1');

        if (messageTimeout) clearTimeout(messageTimeout);
        messageTimeout = setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 500);
        }, 5000);
    }

    // Handle last letter special clicks
    const lastLetter = document.querySelector('.letter-slot[data-date="2025-07-21"]');
    if (lastLetter) {
        lastLetter.addEventListener('click', e => {
            clickCount++;
            if (clickCount === 10) {
                if (!audio) {
                    audio = new Audio('sometimesithinkaboutlosingyou.mp3');
                    audio.volume = 0.5;
                }
                
                if (audio.paused) {
                    audio.play().catch(err => console.log('Audio failed:', err));
                    showSecretMessage();
                } else {
                    audio.pause();
                    audio.currentTime = 0;
                }
                clickCount = 0;
                e.stopPropagation(); // Prevent normal letter click
                return;
            }
        });
    }

    // Reset click count when clicking elsewhere
    document.addEventListener('click', e => {
        if (!e.target.closest('.letter-slot[data-date="2025-07-21"]')) {
            clickCount = 0;
        }
    });

    // Volume controls
    document.addEventListener('keydown', e => {
        if (!audio) return;
        if (e.key === 'ArrowUp') {
            audio.volume = Math.min(1, audio.volume + 0.1);
            console.log('Volume:', Math.round(audio.volume * 100) + '%');
        } else if (e.key === 'ArrowDown') {
            audio.volume = Math.max(0, audio.volume - 0.1);
            console.log('Volume:', Math.round(audio.volume * 100) + '%');
        }
    });
}); 
