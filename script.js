// --- Manual Unlock Variables (set to true to force unlock) ---
const MANUAL_UNLOCK = {
    1: true, // May 19, 2025
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

document.addEventListener('DOMContentLoaded', () => {
    if (window.AOS) AOS.init();

    // Function to get current PST time
    function getPSTTime() {
        const now = new Date();
        const pstTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
        return pstTime;
    }

    // Function to check if a letter should be unlocked
    function checkLetterUnlock() {
        const currentPST = getPSTTime();
        const letterSlots = document.querySelectorAll('.letter-slot');

        letterSlots.forEach(slot => {
            const letterId = slot.dataset.letterId;
            const letterDate = new Date(slot.dataset.date);
            letterDate.setHours(0, 0, 0, 0); // Set to start of day
            // Manual unlock check
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

    // Check letter unlock status on page load
    checkLetterUnlock();
    setInterval(checkLetterUnlock, 60000);

    // Modal logic
    const modal = document.getElementById('letter-modal');
    const modalContent = document.querySelector('.modal-content');
    const letterBody = document.getElementById('letter-body');
    const closeBtn = document.querySelector('.close-btn');

    // Click handler for unlocked letters
    document.querySelectorAll('.letter-slot').forEach(slot => {
        slot.addEventListener('click', function (e) {
            if (!slot.classList.contains('unlocked')) {
                console.log('Letter is locked!');
                return;
            }
            const letterId = slot.dataset.letterId;
            console.log('Navigating to letter page for letter', letterId);
            window.location.href = `letter.html?letter=${letterId}`;
        });
    });

    // Close modal logic
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        letterBody.innerText = '';
        console.log('Modal closed');
    });

    // Optional: close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            letterBody.innerText = '';
            console.log('Modal closed (outside click)');
        }
    });

    // Mobile App Button Functionality
    const mobileAppBtn = document.getElementById('mobile-app-btn');
    const appInstructionsModal = document.getElementById('app-instructions-modal');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Function to trigger the shooting animation
    function triggerShootAnimation() {
        if (mobileAppBtn) {
            mobileAppBtn.style.animation = 'none';
            mobileAppBtn.offsetHeight; // Force reflow
            mobileAppBtn.style.animation = 'shoot-up 1.2s ease-in-out forwards';
        }
    }

    // Add console command
    window.shootButton = triggerShootAnimation;

    if (mobileAppBtn) {
        // Set up the shooting animation after 15 seconds
        setTimeout(triggerShootAnimation, 15000);

        mobileAppBtn.addEventListener('click', function() {
            appInstructionsModal.style.display = 'flex';
        });
    }

    // Close modal when clicking the close button
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}); 
