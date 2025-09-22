// --- Manual Unlock Variables (set to true to force unlock) ---
const MANUAL_UNLOCK = {
    1: true, // May 19, 2025
    2: true, // May 26, 2025
    3: true, // June 2, 2025
    4: true, // June 9, 2025
    5: true, // June 16, 2025
    6: true, // June 23, 2025
    7: true, // June 30, 2025
    8: false, // July 7, 2025 - LOCKED
    9: false, // July 14, 2025 - LOCKED
    10: false // July 21, 2025 - LOCKED
};
// -----------------------------------------------------------

// Three Special Letters content
const SPECIAL_LETTERS = {
    11: `To Olivia,<br><br>You may never see this, you probably forgot that this website even existed, but it still does, and I'm sorry I never finished it. I use the word finished because I wrote this entire website very quickly, so when it came to fixing all the bugs that came along with it, whilst I was in Utah it was a lot! But looking back I totally could have salvaged it.<br><br>This portion of the website will hold letters I write to you that I never send you. At this point, we're broken up and split apart, at the moment I'm confused as to why, but instead of pleading and hoping for the day you come back, I will continue to fix my gaze towards the one who does hold tomorrow. My 19th birthday was the worst day of my life, yet, I have peace which surpasses all understanding, and amidst the pain of saying goodbye to you that one night under the gazebo`,
    12: `To my <span class="wiggle">beloved Olivia</span>,<br><br>This second special letter is filled with <span class="sparkle">gratitude</span> and <span class="hearts">love</span>. I wanted to take a moment to tell you how much I <span class="grow">appreciate</span> everything you do for me.<br><br>Your <span class="hearts">patience</span> during this time apart, your <span class="hearts">support</span> for my mission work, and your <span class="hearts">unwavering love</span> mean more to me than you'll ever know. You are my <span class="rainbow">rock</span>, my <span class="hearts">anchor</span>, and my <span class="hearts">home</span>.<br><br>Thank you for being the most <span class="grow">wonderful</span> woman I've ever known.<br><br>Forever yours,<br>- <span class="wiggle">t8</span> <span class="hearts"><3</span>`,
    13: `My <span class="wiggle">sweet Olivia</span>,<br><br>This final special letter is a <span class="sparkle">promise</span> and a <span class="hearts">dream</span>. I promise to love you with all my heart for the rest of my days, to support you in all your dreams, and to be the man you deserve.<br><br>I dream of our future together - all the <span class="rainbow">adventures</span> we'll have, the <span class="hearts">memories</span> we'll create, and the <span class="grow">love</span> that will only grow stronger with time.<br><br>You are my <span class="hearts">everything</span>, and I am so grateful to have you in my life.<br><br>With endless <span class="hearts">love</span> and <span class="hearts">devotion</span>,<br>- <span class="wiggle">t8</span> <span class="hearts"><3</span>`
};

// Letter content framework
const LETTERS = {
    1: 'My dearest Olivia,\n\nThis is your first letter! I hope you enjoy this journey of love and surprises.\n\nLove,\nYour Boy',
    2: `My Dear <span class="wiggle">Olivia</span>,<br><br>Is it really time to leave for <span class="spinny">GenSend</span> already?? Rahhh I'm going to <span class="hearts">miss you</span> so much lovely. :(( I hope you had <span class="grow">fun</span> at Gwyns this last night and wanna hear all about it soon! This <span class="confetti-word">website</span> has been so fun to add things too, and want to keep adding <span class="sparkle">fun things</span> anytime I think of you. We recently had our last GenSend meeting, and I've been able to <span class="bounce">connect</span> and meet with a lot of people who are going to <span class="rainbow">SLC</span>! A few of them did GenSend last year with my Dad and me in <span class="stars">LA</span>, and we've even formulated a group to fly together out there! It's already been so <span class="grow">awesome</span>, the team we have in Logan City north of SLC doesn't have a lot of guys, but I know the <span class="hearts">connections</span> I formulate with the ones we do have in our house will be so <span class="bounce">strong</span>! And I'm excited to see what the <span class="sparkle">Lord</span> is going to do this summer.<br><br>I hope you know that there is never a day when I'll stop <span class="hearts">thinking of you</span> and <span class="hearts">loving you</span>. I want to learn this summer to <span class="grow">love you better</span>, and to really seek the <span class="sparkle">Lord</span> on what he wants for the rest of my life. I only ask that you do the same, and will stay committed to <span class="rainbow">praying</span> for you dearest.<br><br>Side note, be praying for the <span class="sparkle">salvation</span> of my Aunt(My Dad's sister) as she stayed here with my family this past week, I've realized that there is no fruit in her at all, she's very negative and I desperately pray for her <span class="hearts">soul</span>.<br><br>I <span class="hearts">love</span> and <span class="hearts">miss you</span>, but am filled with so much <span class="rainbow">hope</span> from the Lord that this summer will be <span class="grow">amazing</span>. Text me when you get the chance yeah?<br><br>Yours, -</span><span class="hearts">t8<3</span>`,
    3: `To my <span class="wiggle">Olivia</span>,<br><br>To say that I've <span class="hearts">missed you</span> is such an understatement. While in my time in <span class="bounce">Utah</span> I've been able to meet so many <span class="grow">awesome</span> people, this is sooo my place to be! My <span class="bounce">team</span> is <span class="grow">awesome</span>, Clark is the <span class="shaky">Crazy</span> one, Marcos is a solid brother and is super <span class="sparkle">wise</span>, Sarah is kinda interesting, haven't really gotten close with her at all, but the other Sarah is pretty okay!(Defo lanz vibes), and then Sierra is well... Sierra haha. Watching us all <span class="grow">thrive</span> in ministry has been such an <span class="grow">awesome</span> thing to see, especially since we all approach evangelism so differently. Me and my team can talk about anything together, we're like a <span class="hearts">family</span> at this point, and I couldn't see myself anywhere else than here right now.<br><br>I'm <span class="sparkle">praying</span> for not just you earnestly, but for us. I pray that the <span class="sparkle">Lord</span> would <span class="grow">strengthen</span> the both of us in this time. I'm sorry for the late responses, most of our time here is just walking and talking, so I don't get much time to just sit down. But <span class="rainbow">Mondays</span> are my rest day! And I can't wait to establish such a good sabbath day for myself.<br><br>I miss your <span class="hearts">sweet kisses</span> against my skin, I miss your <span class="hearts">lips</span> against my forehead and against my cheek, you bring out the best in me with the way you show <span class="hearts">affection</span>. Know that <span class="sparkle">God</span> has such a good plan for this season, and I pray that you earnestly seek him as well! I know you will.<br><br> Know that I <span class="hearts">love you</span> so much.<br><br>Love,<br>- <span class="wiggle">t8</span> <span class="hearts"><3</span>`,
    4: `To My <span class="wiggle">Lovely Olivia</span>,<br><br>So much has happened in the span of time since my last letter! Lot's of very <span class="shaky">hard</span> conversations with the LDS people, but amidst all of it, the <span class="sparkle">Lord</span> has still granted me lots of <span class="grow">rest</span> in this season of life. I <span class="hearts">miss you</span>, and am <span class="sparkle">praying</span> for you earnestly. I've been able to <span class="bounce">connect</span> and <span class="grow">grow</span> with my team so much too, we're like a little <span class="hearts">family</span> now! And even though I lost my pex card, I assure you they're taking good care of me haha.<br><br>How are things in <span class="rainbow">LA</span>?? Have you gotten to know the <span class="grow">Speers</span> more? It's <span class="spinny">crazy</span> to think that me and my family have spent so much time with people you're finally getting to cross paths with! That's such the <span class="sparkle">Lord</span> at work, and I'm so <span class="hearts">happy</span> you get to do life with them in this season. Do you think you'll ever move there?<br><br>It sounds <span class="wiggle">silly</span> typing out all of these questions, even though I know I could just call you! Regardless, the point is that I'm <span class="grow">proud</span> of you. I have no doubt in my mind that this is where the <span class="sparkle">Lord</span> wants you in this season of life, and anytime I'm walking great distances <span class="hearts">thinking about you</span> every block, I'm thinking of the <span class="sparkle">Lord</span> every step, and <span class="sparkle">praying</span> that the <span class="sparkle">Lord</span> would always order your steps. I <span class="sparkle">pray</span> that you would never stop listening to the <span class="sparkle">Lord</span>, no matter the season, no matter the comfort, no matter what it takes, it seriously is the greatest <span class="rainbow">adventure</span> to say yes to!<br><br>In other news, I created a new programming project called <br><a href="https://logangospelproject.netlify.app/" style="color: #ff6b6b; text-decoration: none; border-bottom: 2px solid #ff6b6b;">The <span class="grow">Logan City Gospel Project</span></a><br>which aims to <span class="grow">deliver</span> the <span class="sparkle">Gospel</span> in a digestable way to the LDS people of Logan! One thing I find constantly out here is people not understanding the difference between the LDS church and <span class="sparkle">Christianity</span> as a whole, it's been very <span class="shaky">hard</span> to bridge that gap. But the <span class="sparkle">Lord</span> has been carrying me through, and bringing <span class="hearts">smiles</span> to peoples faces constantly brings me to <span class="hearts">tears</span> daily as he orders my steps to make himself known to these people.<br><br>I <span class="hearts">love you</span> Liv, I <span class="hearts">care</span> for you in a way I don't think I've ever cared about anyone, and I'm <span class="grow">glad</span> your in my life. Thank you once again for <span class="hearts">understanding</span> and giving me so much time graciously to me and my family. This next season of life is going to be so <span class="shaky">hard</span>, but I wanna remain <span class="sparkle">faithful</span> to the <span class="sparkle">Lord</span> and to you. I just ask that you continue to be <span class="grow">patient</span> with me in this season, and to <span class="grow">communicate</span> when something is wrong, can you do that for me?<br><br>Love,<br><br>- <span class="wiggle">t8</span> <span class="hearts"><3</span><br><br>P.S. I've been listening to this artist for quite some time, he came to <span class="rainbow">CBU</span> a few years ago, and since then I listen to him while I read and write. <a href="https://open.spotify.com/artist/6ylBqlOGvjLhWlMMDEnlLm?si=A5kchp3cRxqyeJpIrbzBaA" target="_blank" rel="noopener noreferrer" style="color: #ff6b6b; text-decoration: none; border-bottom: 2px solid #ff6b6b;">Here!</a>`,
    5: `To my <span class="wiggle">Olivia</span>,<br><br>This week by far has been one of the <span class="shaky">hardest</span> weeks by far, just really <span class="hearts">homesick</span> for my <span class="hearts">family</span> and making tons of calls back home. We've also had much <span class="shaky">difficulty</span> when it comes to feeling <span class="grow">supported</span> up here, we feel so <span class="shaky">distant</span> from all the other teams. Yet I am still so <span class="sparkle">faithful</span> that the <span class="sparkle">Lord</span> will move, I <span class="sparkle">pray</span> and ask that the <span class="sparkle">Lord</span> would bring forth <span class="grow">peace</span> for our team.<br><br>I <span class="hearts">love you</span> and <span class="hearts">miss you</span>, some nights I lay awake and I wish you were in my <span class="hearts">arms</span> again, and I wish our <span class="hearts">lips</span> could meet. I'm so <span class="grow">thankful</span> to have you and I <span class="sparkle">pray</span> to the <span class="sparkle">Lord</span> that he takes care of your <span class="hearts">heart</span> in this season of <span class="shaky">distance</span>. Know that I think you serving the <span class="sparkle">Lord</span> is so unbelieveably <span class="rainbow">attractive</span> to me. Out here there are so many <span class="grow">awesome</span> people, all of them really remind me of <span class="stars">stardew valley</span>, in that the more you stop by their shops the more cutscenes and <span class="hearts">hearts</span> you get! I know that's <span class="wiggle">silly</span> but it really is what it feels like. With that in mind... I really wanna make you a <span class="grow">farming game</span> someday! Where you can walk around and <span class="sparkle">evangelize</span> haha.<br><br>In the meantime, know that I <span class="hearts">love</span> and <span class="hearts">miss you</span> <span class="grow">earnestly</span>, and that I'm always <span class="hearts">thinking about you</span>.<br><br>I <span class="hearts">love you</span> <span class="wiggle">Olivia Lee</span>,<br>from: <span class="sparkle">the boy</span>.`,
    6: `Hey <span class="wiggle">Baby</span>! I finally fixed the <span class="grow">website</span>!<br><br>This past week has been so unbelievably <span class="shaky">hard</span> for my entire team. I can't say much here just becuase I don't want to <span class="wiggle">gossip</span>, but the <span class="shaky">patience</span> of our team has been really <span class="shaky">lacking</span>, and I think the guys are getting more and more interested in <span class="grow">results</span> rather than putting <span class="stars">rocks</span> in peoples shoes and planting <span class="grow">seeds</span>. Me and a few others from our team have made great <span class="grow">progress</span> with a large local college community of LDS USU students called "The <span class="spinny">Institute</span>", so much so that they called us up to share our <span class="sparkle">testimonies</span> in front of the entire class, as well as they've invited us into their <span class="hearts">lives</span> and we started going to their <span class="bounce">parties</span> at their <span class="spinny">Stakes</span>!(Mormon Buildings). But as for my team members, they are very <span class="shaky">intense</span> when it comes to sharing the <span class="sparkle">Gospel</span>, so much so to the point where we don't get a follow up <span class="grow">conversation</span> with most <span class="spinny">Missionaries</span>, which is <span class="shaky">hard</span>, but what I've been pushing from the start is the notion that we are to be good <span class="grow">stewards</span> of the <span class="sparkle">Gospel</span> that we've been given, and though it's an <span class="rainbow">urgent</span> message to all of God's creation, we are to drive our <span class="grow">conversations</span> with <span class="grow">questions</span> and <span class="hearts">genuine interest</span>, rather than the interest of proving someone wrong with <span class="wiggle">theology</span>.<br><br><div style="background: linear-gradient(135deg, #f5e3c8, #e9d6b0); border-left: 4px solid #8b7355; padding: 1.5rem; margin: 2rem 0; border-radius: 8px; font-style: italic; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"><span style="font-weight: bold; color: #2c3e50; font-size: 1.1rem; display: block; margin-bottom: 1rem;">1 Corinthians 13:1-3</span><span style="color: #2c3e50; line-height: 1.6;">"If I speak in the tongues of men and of angels, but have not <span class="hearts">love</span>, I am a noisy gong or a clanging cymbal. And if I have prophetic powers, and understand all mysteries and all knowledge, and if I have all <span class="sparkle">faith</span>, so as to remove mountains, but have not <span class="hearts">love</span>, I am nothing. If I give away all I have, and if I deliver up my body to be burned, but have not <span class="hearts">love</span>, I gain nothing."</span></div><br><br>This <span class="sparkle">verse</span> has carried me through so much, and it's something I have to <span class="sparkle">preach</span> to myself every single day. But anytime I try and spur <span class="sparkle">verses</span> such as these to my team, they do not agree that this should be the <span class="grow">approach</span> of <span class="sparkle">evangelism</span>, I only <span class="sparkle">pray</span> that the <span class="sparkle">Lord</span> breaks their <span class="hearts">heart</span> for that which he's broken in mine.<br><br>I ask that you would <span class="sparkle">pray</span> for <span class="grow">patience</span> for my team <span class="wiggle">baby</span>? I would greatly appreciate someone <span class="sparkle">praying</span> with me for this! I keep finding myself sneeking away from our <span class="hearts">house</span> to <span class="sparkle">preach</span> the <span class="sparkle">Gospel</span>, which is kinda <span class="wiggle">weird</span> but hey it is what it is.<br><br>Know that I'm <span class="sparkle">praying</span> for us daily, and I hope and <span class="sparkle">pray</span> that the <span class="sparkle">Lord</span> is moving in <span class="rainbow">LA</span>!<br><br>Yours, - <span class="wiggle">t8</span> <span class="hearts"><3</span>`,
    7: `To my Olivia,<br><br>EDIT: finally fixed my website again! I finally fixed the clock that is lowk displaying errors and what not, I've just programmed such a good firewall to keep you from reading my letters early and seeing behind the scenes LOL!<br><br>I digress, recently, life has been really sweet here in Utah, bitter sweet I should say. Me and the team have finally reached the end of the honeymoon phase of the trip, Marcos is acting a little distant and everyone else is getting burnt out, but in this I've found so much peace with the Lord. I've been seeking him every morning, his quiet voice has been the loudest it's ever been ever since I've given him time to speak. It's going to be so hard to leave Utah, I've kinda fallen in love with this place if I'm completely honest! But I promised you and my family I would come back. Truly I'd say I've run the race here, and I can tell the Lord's face is smiling upon me! Everything has never been perfect, and even though the guys on my team sometimes don't seem to find the good in much, I can tell the Lord has done a marvelous work in their souls on this trip, and same with mine!<br><br>How are you? I've been praying for you, I feel like we haven't spoken in so long, but I'm so faithful to come back to you to talk and can't wait  to hear about all the different things the Lord has done in your heart and life. You're letter is one that I read often, and I love the middle and ending sections of the letter where you give me to the Lord yet express your deep care and love for me, I felt so beloved. I want to only express the same to you in everything, I give you to the Lord Olivia.<br><br>Anyways, I could write to you in this website for hours, but I really need to get to mailing you your letter in Utah! God bless you Olivia, and I love you always.<br><br>Yours,<br>- Tate <3`,
    8: `To my <span class="wiggle">Olivia</span>,<br><br>This week has been absolutely <span class="grow">incredible</span>! The <span class="sparkle">Lord</span> has been moving in ways I never could have imagined. We've been having some really deep <span class="hearts">conversations</span> with the LDS community, and I can see hearts beginning to <span class="grow">soften</span> to the truth of the <span class="sparkle">Gospel</span>.<br><br>I <span class="hearts">miss you</span> so much, but I know this time apart is making us both <span class="grow">stronger</span>. Every day I'm reminded of how <span class="rainbow">blessed</span> I am to have you in my life. Your <span class="hearts">love</span> and <span class="hearts">support</span> mean everything to me, even from thousands of miles away.<br><br>I've been <span class="sparkle">praying</span> for you constantly, asking the <span class="sparkle">Lord</span> to protect your <span class="hearts">heart</span> and guide your steps. I know He has amazing plans for both of us, and I can't wait to see what the future holds.<br><br>Keep being the <span class="grow">amazing</span> woman you are, and know that I'm always <span class="hearts">thinking of you</span>.<br><br>With all my <span class="hearts">love</span>,<br>- <span class="wiggle">t8</span> <span class="hearts"><3</span>`,
    9: `My dearest <span class="wiggle">Olivia</span>,<br><br>As I sit here writing this letter, I can't help but feel overwhelmed with <span class="hearts">gratitude</span> for you. This journey has been so much more meaningful knowing that you're <span class="hearts">praying</span> for me and supporting me from afar.<br><br>The work here continues to be <span class="grow">challenging</span> but so <span class="grow">rewarding</span>. Every conversation, every moment of <span class="sparkle">prayer</span>, every step we take - it all feels like it's part of something much <span class="grow">bigger</span> than ourselves. The <span class="sparkle">Lord</span> is truly at work here, and I feel so <span class="rainbow">honored</span> to be a part of it.<br><br>I <span class="hearts">love you</span> more than words can express. Your <span class="hearts">faith</span>, your <span class="hearts">kindness</span>, your <span class="hearts">beautiful heart</span> - they all inspire me to be a better man every single day.<br><br>Thank you for being my <span class="hearts">anchor</span> in this storm, my <span class="hearts">light</span> in the darkness, my <span class="hearts">home</span> no matter where I am.<br><br>Forever yours,<br>- <span class="wiggle">t8</span> <span class="hearts"><3</span>`,
    10: `To my <span class="wiggle">beloved Olivia</span>,<br><br>This is my final letter from this incredible journey, and I can't believe how quickly the time has passed. As I prepare to come home to you, my heart is filled with so many <span class="hearts">emotions</span> - <span class="hearts">excitement</span> to see you again, <span class="hearts">gratitude</span> for this experience, and <span class="hearts">love</span> that has only grown stronger through this time apart.<br><br>The <span class="sparkle">Lord</span> has taught me so much about <span class="hearts">love</span>, <span class="sparkle">faith</span>, and what it truly means to serve Him. But above all, He's shown me how <span class="grow">precious</span> you are to me. Distance has only made my <span class="hearts">love</span> for you grow deeper and stronger.<br><br>I can't wait to hold you in my <span class="hearts">arms</span> again, to see your <span class="hearts">smile</span>, to hear your <span class="hearts">laugh</span>. This journey has been amazing, but you are my greatest <span class="rainbow">adventure</span> of all.<br><br>Thank you for being so <span class="hearts">patient</span> with me, for <span class="hearts">loving</span> me through the distance, and for being the most <span class="grow">wonderful</span> woman I've ever known.<br><br>I'm coming home to you, my <span class="hearts">love</span>.<br><br>With all my <span class="hearts">love</span> and <span class="hearts">devotion</span>,<br>- <span class="wiggle">t8</span> <span class="hearts"><3</span>`
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
            const letterId = parseInt(slot.dataset.letterId);
            const letterDate = new Date(slot.dataset.date + 'T00:00:00-07:00');
            
            // Special letters (11, 12, 13) are always unlocked
            if (letterId >= 11 && letterId <= 13) {
                slot.classList.add('unlocked');
                const lockIcon = slot.querySelector('.lock-icon');
                if (lockIcon) {
                    lockIcon.remove();
                    const preview = document.createElement('div');
                    preview.className = 'letter-preview';
                    preview.textContent = 'Click to read your letter';
                    slot.querySelector('.letter-content').appendChild(preview);
                }
                return;
            }
            
            // Check manual unlock first - if false, keep locked regardless of date
            if (MANUAL_UNLOCK[letterId] === false) {
                slot.classList.remove('unlocked');
                // Ensure lock icon is present
                if (!slot.querySelector('.lock-icon')) {
                    const lockIcon = document.createElement('div');
                    lockIcon.className = 'lock-icon';
                    lockIcon.textContent = '🔒';
                    slot.querySelector('.letter-content').appendChild(lockIcon);
                }
                // Remove preview if present
                const preview = slot.querySelector('.letter-preview');
                if (preview) {
                    preview.remove();
                }
                return;
            }
            
            // If manual unlock is true OR date has passed, unlock the letter
            if (MANUAL_UNLOCK[letterId] === true || currentPST >= letterDate) {
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
                
                // Show popup for locked letters 8, 9, and 10
                const letterId = parseInt(slot.dataset.letterId);
                if (letterId >= 8 && letterId <= 10) {
                    showUnfinishedPopup();
                }
                return;
            }
            const letterId = slot.dataset.letterId;
            window.location.href = `letter.html?letter=${letterId}`;
        });
    });

    // Function to show unfinished letter popup
    function showUnfinishedPopup() {
        const popup = document.createElement('div');
        popup.className = 'modal';
        popup.style.display = 'block';
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

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        modalContent.style.background = '#fffaf3';
        modalContent.style.padding = '2rem 2.5rem';
        modalContent.style.borderRadius = '14px';
        modalContent.style.fontSize = '1.3rem';
        modalContent.style.color = '#2c3e50';
        modalContent.style.textAlign = 'center';
        modalContent.style.position = 'relative';
        modalContent.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';

        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '10px';
        closeBtn.style.right = '15px';
        closeBtn.style.fontSize = '2rem';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = '#8b7355';
        closeBtn.style.lineHeight = '1';

        const message = document.createElement('p');
        message.textContent = 'sorry I never finished this :(';
        message.style.margin = '0';
        message.style.fontFamily = 'Quicksand, sans-serif';

        modalContent.appendChild(closeBtn);
        modalContent.appendChild(message);
        popup.appendChild(modalContent);
        document.body.appendChild(popup);

        // Close functionality
        closeBtn.addEventListener('click', () => {
            popup.remove();
        });

        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.remove();
            }
        });
    }

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

    // Flip animation functionality
    const flipArrow = document.getElementById('flip-arrow');
    const threeLettersSection = document.getElementById('three-letters-section');
    const backArrow = document.getElementById('back-arrow');
    const mainContainer = document.querySelector('.container');
    let isFlipped = false;

    // Flip to three letters
    flipArrow.addEventListener('click', () => {
        if (!isFlipped) {
            console.log('Flipping to three letters...');
            mainContainer.classList.add('flipped');
            setTimeout(() => {
                threeLettersSection.style.display = 'flex';
                console.log('Three letters section displayed');
                setTimeout(() => {
                    threeLettersSection.classList.add('show');
                    console.log('Three letters section shown');
                }, 50);
            }, 400);
            isFlipped = true;
        }
    });

    // Flip back to main letters
    backArrow.addEventListener('click', () => {
        if (isFlipped) {
            threeLettersSection.classList.remove('show');
            setTimeout(() => {
                threeLettersSection.style.display = 'none';
                mainContainer.classList.remove('flipped');
            }, 400);
            isFlipped = false;
        }
    });

    // Add click handlers for three special letters
    document.querySelectorAll('#three-letters-section .letter-slot').forEach(slot => {
        console.log('Found special letter slot:', slot.dataset.letterId);
        slot.addEventListener('click', function(e) {
            const letterId = slot.dataset.letterId;
            console.log('Clicked special letter:', letterId);
            // Store the special letter content in localStorage for letter.js to access
            localStorage.setItem('specialLetterContent', SPECIAL_LETTERS[letterId]);
            window.location.href = `letter.html?letter=${letterId}&special=true`;
        });
    });
}); 
