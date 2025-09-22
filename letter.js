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

// Three Special Letters content (should match script.js)
const SPECIAL_LETTERS = {
    11: `To Olivia,<br><br>You may never see this, you probably forgot that this website even existed, but it still does, and I'm sorry I never finished it. I use the word finished because I wrote this entire website very quickly, so when it came to fixing all the bugs that came along with it, whilst I was in Utah it was a lot! But looking back I totally could have fixed it right up, I was just wrapped up in other things. I own up to this.<br><br>This portion of the website will hold letters I write to you that I intend to never send you, that is unless you find them. At this point, we're broken up and split apart, at the moment I'm confused as to why, but instead of pleading and hoping for the day you come back, I will continue to fix my gaze towards the one who holds our tomorrow. My 19th birthday was the worst day of my life, yet, I have peace through Jesus Christ which surpasses all understanding, and amidst the pain of saying goodbye to you that one night under the gazebo, I have faith and trust that we're both going to be okay!<br><br>I ran into a saftey services officer tonight by the name of Robert Muceck, at least I think that's how you spell it lol! Anyways I was walking around with my word when I saw him, and began to ask him all kinds of questions about his life, that's when he asked me how I met the Lord, and after I was open about how I was doing with the breakup, he mentioned he talked to you, and I'll never not find you amazing. You're ability to talk to people and make them feel right at home is so amazing!<br><br>Our conversation was such a blessing to me and my life, Robert gave me such good advice, more than that, from after I reflected in the sunset, I realized the best thing I could do you Love you in this season is to let you go, fully knowing you will never come back, and that's okay. I ultimately made you my God, and that's not loving you at all. Please know I will always love you, not sure when the next entry of these will come, but do please know me and my family are always praying for you.`,
    12: `To my <span class="wiggle">beloved Olivia</span>,<br><br>This second special letter is filled with <span class="sparkle">gratitude</span> and <span class="hearts">love</span>. I wanted to take a moment to tell you how much I <span class="grow">appreciate</span> everything you do for me.<br><br>Your <span class="hearts">patience</span> during this time apart, your <span class="hearts">support</span> for my mission work, and your <span class="hearts">unwavering love</span> mean more to me than you'll ever know. You are my <span class="rainbow">rock</span>, my <span class="hearts">anchor</span>, and my <span class="hearts">home</span>.<br><br>Thank you for being the most <span class="grow">wonderful</span> woman I've ever known.<br><br>Forever yours,<br>- <span class="wiggle">t8</span> <span class="hearts"><3</span>`,
    13: `My <span class="wiggle">sweet Olivia</span>,<br><br>This final special letter is a <span class="sparkle">promise</span> and a <span class="hearts">dream</span>. I promise to love you with all my heart for the rest of my days, to support you in all your dreams, and to be the man you deserve.<br><br>I dream of our future together - all the <span class="rainbow">adventures</span> we'll have, the <span class="hearts">memories</span> we'll create, and the <span class="grow">love</span> that will only grow stronger with time.<br><br>You are my <span class="hearts">everything</span>, and I am so grateful to have you in my life.<br><br>With endless <span class="hearts">love</span> and <span class="hearts">devotion</span>,<br>- <span class="wiggle">t8</span> <span class="hearts"><3</span>`
};

// Letter content framework (should match script.js)
const LETTERS = {
    1: 'My dearest <span class="wiggle">Olivia</span>,<br><br>I really hope you <span class="grow">like</span> this <span class="spinny">website</span> I built for you! Every single <span class="rainbow">Monday</span> from now until the 21st will have a <span class="confetti-word sparkle">new letter</span> for <span class="hearts">you</span>! While this isn\'t a replacement for <span class="bounce">paper letters</span>, I want you to have a <span class="stars">reminder</span> on the mission field of just how much I <span class="rainbow hearts">love you</span>.<br>Though this next season of life is going to be <span class="shaky">hard</span>, know that I\'m <span class="sparkle">praying</span> for you every day and thinking of you every night as I rest my <span class="wiggle">head</span>. This website will CONSTANTLY be getting <span class="spinny">updates</span> of how much I <span class="hearts">love you</span>. There\'s so many <span class="confetti-word">unfinished ideas</span> that I have that I want to <span class="grow">add</span>, and promise I\'ll make time to <span class="bounce">update</span> this website (as well as give you a call of course <span class="wiggle">baby</span>). In the meantime, let\'s <span class="rainbow">enjoy</span> the time we have together. And know that no matter what happens, or how <span class="shaky">busy</span> life gets, I\'m always here for <span class="hearts">you.</span><br><br>Love,<br><span class="sparkle">The Boy</span>',
    2: `My Dear <span class="wiggle">Olivia</span>,<br><br>Is it really time to leave for <span class="spinny">GenSend</span> already?? Rahhh I'm going to <span class="hearts">miss you</span> so much lovely. :(( I hope you had <span class="grow">fun</span> at Gwyns this last night and wanna hear all about it soon! This <span class="confetti-word">website</span> has been so fun to add things too, and want to keep adding <span class="sparkle">fun things</span> anytime I think of you. We recently had our last GenSend meeting, and I've been able to <span class="bounce">connect</span> and meet with a lot of people who are going to <span class="rainbow">SLC</span>! A few of them did GenSend last year with my Dad and me in <span class="stars">LA</span>, and we've even formulated a group to fly together out there! It's already been so <span class="grow">awesome</span>, the team we have in Logan City north of SLC doesn't have a lot of guys, but I know the <span class="hearts">connections</span> I formulate with the ones we do have in our house will be so <span class="bounce">strong</span>! And I'm excited to see what the <span class="sparkle">Lord</span> is going to do this summer.<br><br>I hope you know that there is never a day when I'll stop <span class="hearts">thinking of you</span> and <span class="hearts">loving you</span>. I want to learn this summer to <span class="grow">love you better</span>, and to really seek the <span class="sparkle">Lord</span> on what he wants for the rest of my life. I only ask that you do the same, and will stay committed to <span class="rainbow">praying</span> for you dearest.<br><br>Side note, be praying for the <span class="sparkle">salvation</span> of my Aunt(My Dad's sister) as she stayed here with my family this past week, I've realized that there is no fruit in her at all, she's very negative and I desperately pray for her <span class="hearts">soul</span>.<br><br>I <span class="hearts">love</span> and <span class="hearts">miss you</span>, but am filled with so much <span class="rainbow">hope</span> from the Lord that this summer will be <span class="grow">amazing</span>. Text me when you get the chance yeah?<br><br>Yours, -</span><span class="hearts">t8<3</span>`,
    3: `To my <span class="wiggle">Olivia</span>,<br><br>To say that I've <span class="hearts">missed you</span> is such an understatement. While in my time in <span class="bounce">Utah</span> I've been able to meet so many <span class="grow">awesome</span> people, this is sooo my place to be! My <span class="bounce">team</span> is <span class="grow">awesome</span>, Clark is the <span class="shaky">Crazy</span> one, Marcos is a solid brother and is super <span class="sparkle">wise</span>, Sarah is kinda interesting, haven't really gotten close with her at all, but the other Sarah is pretty okay!(Defo lanz vibes), and then Sierra is well... Sierra haha. Watching us all <span class="grow">thrive</span> in ministry has been such an <span class="grow">awesome</span> thing to see, especially since we all approach evangelism so differently. Me and my team can talk about anything together, we're like a <span class="hearts">family</span> at this point, and I couldn't see myself anywhere else than here right now.<br><br>I'm <span class="sparkle">praying</span> for not just you earnestly, but for us. I pray that the <span class="sparkle">Lord</span> would <span class="grow">strengthen</span> the both of us in this time. I'm sorry for the late responses, most of our time here is just walking and talking, so I don't get much time to just sit down. But <span class="rainbow">Mondays</span> are my rest day! And I can't wait to establish such a good sabbath day for myself.<br><br>I miss your <span class="hearts">sweet kisses</span> against my skin, I miss your <span class="hearts">lips</span> against my forehead and against my cheek, you bring out the best in me with the way you show <span class="hearts">affection</span>. Know that <span class="sparkle">God</span> has such a good plan for this season, and I pray that you earnestly seek him as well! I know you will.<br><br> Know that I <span class="hearts">love you</span> so much.<br><br>Love,<br>- <span class="wiggle">t8</span> <span class="hearts"><3</span>`,
    4: `To My <span class="wiggle">Lovely Olivia</span>,<br><br>So much has happened in the span of time since my last letter! Lot's of very <span class="shaky">hard</span> conversations with the LDS people, but amidst all of it, the <span class="sparkle">Lord</span> has still granted me lots of <span class="grow">rest</span> in this season of life. I <span class="hearts">miss you</span>, and am <span class="sparkle">praying</span> for you earnestly. I've been able to <span class="bounce">connect</span> and <span class="grow">grow</span> with my team so much too, we're like a little <span class="hearts">family</span> now! And even though I lost my pex card, I assure you they're taking good care of me haha.<br><br>How are things in <span class="rainbow">LA</span>?? Have you gotten to know the <span class="grow">Speers</span> more? It's <span class="spinny">crazy</span> to think that me and my family have spent so much time with people you're finally getting to cross paths with! That's such the <span class="sparkle">Lord</span> at work, and I'm so <span class="hearts">happy</span> you get to do life with them in this season. Do you think you'll ever move there?<br><br>It sounds <span class="wiggle">silly</span> typing out all of these questions, even though I know I could just call you! Regardless, the point is that I'm <span class="grow">proud</span> of you. I have no doubt in my mind that this is where the <span class="sparkle">Lord</span> wants you in this season of life, and anytime I'm walking great distances <span class="hearts">thinking about you</span> every block, I'm thinking of the <span class="sparkle">Lord</span> every step, and <span class="sparkle">praying</span> that the <span class="sparkle">Lord</span> would always order your steps. I <span class="sparkle">pray</span> that you would never stop listening to the <span class="sparkle">Lord</span>, no matter the season, no matter the comfort, no matter what it takes, it seriously is the greatest <span class="rainbow">adventure</span> to say yes to!<br><br>In other news, I created a new programming project called <br><a href="https://logangospelproject.netlify.app/" style="color: #ff6b6b; text-decoration: none; border-bottom: 2px solid #ff6b6b;">The <span class="grow">Logan City Gospel Project</span></a><br>which aims to <span class="grow">deliver</span> the <span class="sparkle">Gospel</span> in a digestable way to the LDS people of Logan! One thing I find constantly out here is people not understanding the difference between the LDS church and <span class="sparkle">Christianity</span> as a whole, it's been very <span class="shaky">hard</span> to bridge that gap. But the <span class="sparkle">Lord</span> has been carrying me through, and bringing <span class="hearts">smiles</span> to peoples faces constantly brings me to <span class="hearts">tears</span> daily as he orders my steps to make himself known to these people.<br><br>I <span class="hearts">love you</span> Liv, I <span class="hearts">care</span> for you in a way I don't think I've ever cared about anyone, and I'm <span class="grow">glad</span> your in my life. Thank you once again for <span class="hearts">understanding</span> and giving me so much time graciously to me and my family. This next season of life is going to be so <span class="shaky">hard</span>, but I wanna remain <span class="sparkle">faithful</span> to the <span class="sparkle">Lord</span> and to you. I just ask that you continue to be <span class="grow">patient</span> with me in this season, and to <span class="grow">communicate</span> when something is wrong, can you do that for me?<br><br>Love,<br><br>- <span class="wiggle">t8</span> <span class="hearts"><3</span><br><br>P.S. I've been listening to this artist for quite some time, he came to <span class="rainbow">CBU</span> a few years ago, and since then I listen to him while I read and write. <a href="https://open.spotify.com/artist/6ylBqlOGvjLhWlMMDEnlLm?si=A5kchp3cRxqyeJpIrbzBaA" target="_blank" rel="noopener noreferrer" style="color: #ff6b6b; text-decoration: none; border-bottom: 2px solid #ff6b6b;">Here!</a>`,
    5: `To my <span class="wiggle">Olivia</span>,<br><br>This week by far has been one of the <span class="shaky">hardest</span> weeks by far, just really <span class="hearts">homesick</span> for my <span class="hearts">family</span> and making tons of calls back home. We've also had much <span class="shaky">difficulty</span> when it comes to feeling <span class="grow">supported</span> up here, we feel so <span class="shaky">distant</span> from all the other teams. Yet I am still so <span class="sparkle">faithful</span> that the <span class="sparkle">Lord</span> will move, I <span class="sparkle">pray</span> and ask that the <span class="sparkle">Lord</span> would bring forth <span class="grow">peace</span> for our team.<br><br>I <span class="hearts">love you</span> and <span class="hearts">miss you</span>, some nights I lay awake and I wish you were in my <span class="hearts">arms</span> again, and I wish our <span class="hearts">lips</span> could meet. I'm so <span class="grow">thankful</span> to have you and I <span class="sparkle">pray</span> to the <span class="sparkle">Lord</span> that he takes care of your <span class="hearts">heart</span> in this season of <span class="shaky">distance</span>. Know that I think you serving the <span class="sparkle">Lord</span> is so unbelieveably <span class="rainbow">attractive</span> to me. Out here there are so many <span class="grow">awesome</span> people, all of them really remind me of <span class="stars">stardew valley</span>, in that the more you stop by their shops the more cutscenes and <span class="hearts">hearts</span> you get! I know that's <span class="wiggle">silly</span> but it really is what it feels like. With that in mind... I really wanna make you a <span class="grow">farming game</span> someday! Where you can walk around and <span class="sparkle">evangelize</span> haha.<br><br>In the meantime, know that I <span class="hearts">love</span> and <span class="hearts">miss you</span> <span class="grow">earnestly</span>, and that I'm always <span class="hearts">thinking about you</span>.<br><br>I <span class="hearts">love you</span> <span class="wiggle">Olivia Lee</span>,<br>from: <span class="sparkle">the boy</span>.`,
    6: `Hey <span class="wiggle">Baby</span>! I finally fixed the <span class="grow">website</span>!<br><br>This past week has been so unbelievably <span class="shaky">hard</span> for my entire team. I can't say much here just becuase I don't want to <span class="wiggle">gossip</span>, but the <span class="shaky">patience</span> of our team has been really <span class="shaky">lacking</span>, and I think the guys are getting more and more interested in <span class="grow">results</span> rather than putting <span class="stars">rocks</span> in peoples shoes and planting <span class="grow">seeds</span>. Me and a few others from our team have made great <span class="grow">progress</span> with a large local college community of LDS USU students called "The <span class="spinny">Institute</span>", so much so that they called us up to share our <span class="sparkle">testimonies</span> in front of the entire class, as well as they've invited us into their <span class="hearts">lives</span> and we started going to their <span class="bounce">parties</span> at their <span class="spinny">Stakes</span>!(Mormon Buildings). But as for my team members, they are very <span class="shaky">intense</span> when it comes to sharing the <span class="sparkle">Gospel</span>, so much so to the point where we don't get a follow up <span class="grow">conversation</span> with most <span class="spinny">Missionaries</span>, which is <span class="shaky">hard</span>, but what I've been pushing from the start is the notion that we are to be good <span class="grow">stewards</span> of the <span class="sparkle">Gospel</span> that we've been given, and though it's an <span class="rainbow">urgent</span> message to all of God's creation, we are to drive our <span class="grow">conversations</span> with <span class="grow">questions</span> and <span class="hearts">genuine interest</span>, rather than the interest of proving someone wrong with <span class="wiggle">theology</span>.<br><br><div style="background: linear-gradient(135deg, #f5e3c8, #e9d6b0); border-left: 4px solid #8b7355; padding: 1.5rem; margin: 2rem 0; border-radius: 8px; font-style: italic; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"><span style="font-weight: bold; color: #2c3e50; font-size: 1.1rem; display: block; margin-bottom: 1rem;">1 Corinthians 13:1-3</span><span style="color: #2c3e50; line-height: 1.6;">"If I speak in the tongues of men and of angels, but have not <span class="hearts">love</span>, I am a noisy gong or a clanging cymbal. And if I have prophetic powers, and understand all mysteries and all knowledge, and if I have all <span class="sparkle">faith</span>, so as to remove mountains, but have not <span class="hearts">love</span>, I am nothing. If I give away all I have, and if I deliver up my body to be burned, but have not <span class="hearts">love</span>, I gain nothing."</span></div><br><br>This <span class="sparkle">verse</span> has carried me through so much, and it's something I have to <span class="sparkle">preach</span> to myself every single day. But anytime I try and spur <span class="sparkle">verses</span> such as these to my team, they do not agree that this should be the <span class="grow">approach</span> of <span class="sparkle">evangelism</span>, I only <span class="sparkle">pray</span> that the <span class="sparkle">Lord</span> breaks their <span class="hearts">heart</span> for that which he's broken in mine.<br><br>I ask that you would <span class="sparkle">pray</span> for <span class="grow">patience</span> for my team <span class="wiggle">baby</span>? I would greatly appreciate someone <span class="sparkle">praying</span> with me for this! I keep finding myself sneeking away from our <span class="hearts">house</span> to <span class="sparkle">preach</span> the <span class="sparkle">Gospel</span>, which is kinda <span class="wiggle">weird</span> but hey it is what it is.<br><br>Know that I'm <span class="sparkle">praying</span> for us daily, and I hope and <span class="sparkle">pray</span> that the <span class="sparkle">Lord</span> is moving in <span class="rainbow">LA</span>!<br><br>Yours, - <span class="wiggle">t8</span> <span class="hearts"><3</span>`,
    7: `To my Olivia,<br><br>EDIT: finally fixed my website again! I finally fixed the clock that is lowk displaying errors and what not, I've just programmed such a good firewall to keep you from reading my letters early and seeing behind the scenes LOL!<br><br>I digress, recently, life has been really sweet here in Utah, bitter sweet I should say. Me and the team have finally reached the end of the honeymoon phase of the trip, Marcos is acting a little distant and everyone else is getting burnt out, but in this I've found so much peace with the Lord. I've been seeking him every morning, his quiet voice has been the loudest it's ever been ever since I've given him time to speak. It's going to be so hard to leave Utah, I've kinda fallen in love with this place if I'm completely honest! But I promised you and my family I would come back. Truly I'd say I've run the race here, and I can tell the Lord's face is smiling upon me! Everything has never been perfect, and even though the guys on my team sometimes don't seem to find the good in much, I can tell the Lord has done a marvelous work in their souls on this trip, and same with mine!<br><br>How are you? I've been praying for you, I feel like we haven't spoken in so long, but I'm so faithful to come back to you to talk and can't wait  to hear about all the different things the Lord has done in your heart and life. You're letter is one that I read often, and I love the middle and ending sections of the letter where you give me to the Lord yet express your deep care and love for me, I felt so beloved. I want to only express the same to you in everything, I give you to the Lord Olivia.<br><br>Anyways, I could write to you in this website for hours, but I really need to get to mailing you your letter in Utah! God bless you Olivia, and I love you always.<br><br>Yours,<br>- Tate <3`,
    8: `To my <span class="wiggle">Olivia</span>,<br><br>This week has been absolutely <span class="grow">incredible</span>! The <span class="sparkle">Lord</span> has been moving in ways I never could have imagined. We've been having some really deep <span class="hearts">conversations</span> with the LDS community, and I can see hearts beginning to <span class="grow">soften</span> to the truth of the <span class="sparkle">Gospel</span>.<br><br>I <span class="hearts">miss you</span> so much, but I know this time apart is making us both <span class="grow">stronger</span>. Every day I'm reminded of how <span class="rainbow">blessed</span> I am to have you in my life. Your <span class="hearts">love</span> and <span class="hearts">support</span> mean everything to me, even from thousands of miles away.<br><br>I've been <span class="sparkle">praying</span> for you constantly, asking the <span class="sparkle">Lord</span> to protect your <span class="hearts">heart</span> and guide your steps. I know He has amazing plans for both of us, and I can't wait to see what the future holds.<br><br>Keep being the <span class="grow">amazing</span> woman you are, and know that I'm always <span class="hearts">thinking of you</span>.<br><br>With all my <span class="hearts">love</span>,<br>- <span class="wiggle">t8</span> <span class="hearts"><3</span>`,
    9: `My dearest <span class="wiggle">Olivia</span>,<br><br>As I sit here writing this letter, I can't help but feel overwhelmed with <span class="hearts">gratitude</span> for you. This journey has been so much more meaningful knowing that you're <span class="hearts">praying</span> for me and supporting me from afar.<br><br>The work here continues to be <span class="grow">challenging</span> but so <span class="grow">rewarding</span>. Every conversation, every moment of <span class="sparkle">prayer</span>, every step we take - it all feels like it's part of something much <span class="grow">bigger</span> than ourselves. The <span class="sparkle">Lord</span> is truly at work here, and I feel so <span class="rainbow">honored</span> to be a part of it.<br><br>I <span class="hearts">love you</span> more than words can express. Your <span class="hearts">faith</span>, your <span class="hearts">kindness</span>, your <span class="hearts">beautiful heart</span> - they all inspire me to be a better man every single day.<br><br>Thank you for being my <span class="hearts">anchor</span> in this storm, my <span class="hearts">light</span> in the darkness, my <span class="hearts">home</span> no matter where I am.<br><br>Forever yours,<br>- <span class="wiggle">t8</span> <span class="hearts"><3</span>`,
    10: `To my <span class="wiggle">beloved Olivia</span>,<br><br>This is my final letter from this incredible journey, and I can't believe how quickly the time has passed. As I prepare to come home to you, my heart is filled with so many <span class="hearts">emotions</span> - <span class="hearts">excitement</span> to see you again, <span class="hearts">gratitude</span> for this experience, and <span class="hearts">love</span> that has only grown stronger through this time apart.<br><br>The <span class="sparkle">Lord</span> has taught me so much about <span class="hearts">love</span>, <span class="sparkle">faith</span>, and what it truly means to serve Him. But above all, He's shown me how <span class="grow">precious</span> you are to me. Distance has only made my <span class="hearts">love</span> for you grow deeper and stronger.<br><br>I can't wait to hold you in my <span class="hearts">arms</span> again, to see your <span class="hearts">smile</span>, to hear your <span class="hearts">laugh</span>. This journey has been amazing, but you are my greatest <span class="rainbow">adventure</span> of all.<br><br>Thank you for being so <span class="hearts">patient</span> with me, for <span class="hearts">loving</span> me through the distance, and for being the most <span class="grow">wonderful</span> woman I've ever known.<br><br>I'm coming home to you, my <span class="hearts">love</span>.<br><br>With all my <span class="hearts">love</span> and <span class="hearts">devotion</span>,<br>- <span class="wiggle">t8</span> <span class="hearts"><3</span>`,
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
    console.log('DEBUG: letterId:', letterId, 'manual unlock:', MANUAL_UNLOCK[letterId]);
    console.log('DEBUG: MANUAL_UNLOCK object:', MANUAL_UNLOCK);
    if (!letterId) return false;
    
    // Special letters (11, 12, 13) are always unlocked
    if (letterId >= 11 && letterId <= 13) {
        console.log('DEBUG: Special letter', letterId, '- always unlocked');
        return true;
    }
    
    // Check manual unlock first - if explicitly false, keep locked regardless of date
    if (MANUAL_UNLOCK[letterId] === false) {
        console.log('DEBUG: Manual unlock is FALSE for letter', letterId, '- keeping locked');
        return false;
    }
    
    // If manual unlock is true, unlock immediately
    if (MANUAL_UNLOCK[letterId] === true) {
        console.log('DEBUG: Manual unlock is TRUE for letter', letterId);
        return true;
    }
    
    // If manual unlock is undefined, check date
    const unlockDateStr = LETTER_DATES[letterId];
    if (!unlockDateStr) return false;
    const unlockDate = new Date(unlockDateStr + 'T00:00:00-07:00'); // Set to start of day in PST
    const nowPST = getPSTTime();
    console.log('DEBUG: Date check - unlockDate:', unlockDate, 'nowPST:', nowPST, 'result:', nowPST >= unlockDate);
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

// Secret pattern and audio player
const PATTERN = ['hearts', 'hearts', 'sparkle', 'hearts']; // Pattern: love-love-God-love
let currentPattern = [];
let audio = null;

function checkPattern() {
    if (currentPattern.length > PATTERN.length) {
        currentPattern.shift(); // Remove oldest click
    }
    
    if (currentPattern.join(',') === PATTERN.join(',')) {
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
        currentPattern = []; // Reset pattern
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

    // FORCE UNLOCK FOR DEBUGGING - Remove this after testing
    if (letterId === 3) {
        console.log('FORCE UNLOCKING LETTER 3 FOR DEBUGGING');
        letterContentDiv.innerHTML = LETTERS[3];
        if (window.AOS) {
            AOS.refresh();
        }
        
        // Add all the click handlers for effects
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

        letterContentDiv.querySelectorAll('.hearts').forEach(el => {
            el.style.cursor = 'pointer';
            el.addEventListener('click', e => {
                const rect = el.getBoundingClientRect();
                const x = rect.left + rect.width/2 + window.scrollX;
                const y = rect.top + rect.height/2 + window.scrollY;
                heartsAt(x, y);
            });
        });

        letterContentDiv.querySelectorAll('.stars').forEach(el => {
            el.style.cursor = 'pointer';
            el.addEventListener('click', e => {
                starsRain();
            });
        });

        // Add click handlers for images
        letterContentDiv.querySelectorAll('img').forEach(img => {
            img.style.cursor = 'pointer';
            img.style.transition = 'transform 0.3s ease';
            img.addEventListener('click', e => {
                const rect = img.getBoundingClientRect();
                const x = rect.left + rect.width/2 + window.scrollX;
                const y = rect.top + rect.height/2 + window.scrollY;
                confettiAt(x, y);
                img.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    img.style.transform = 'scale(1)';
                }, 300);
            });
        });

        // Add hover effects for links
        letterContentDiv.querySelectorAll('a').forEach(link => {
            link.style.transition = 'all 0.3s ease';
            link.addEventListener('mouseover', () => {
                link.style.transform = 'translateY(-2px)';
            });
            link.addEventListener('mouseout', () => {
                link.style.transform = 'translateY(0)';
            });
        });

        return; // Exit early
    }

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

    // Check if this is a special letter
    const urlParams = new URLSearchParams(window.location.search);
    const isSpecial = urlParams.get('special') === 'true';
    
    if (isSpecial && SPECIAL_LETTERS[letterId]) {
        letterContentDiv.innerHTML = SPECIAL_LETTERS[letterId];
        console.log('Loaded special letter', letterId);
    } else if (LETTERS[letterId]) {
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

    // Add click handlers for images
    letterContentDiv.querySelectorAll('img').forEach(img => {
        img.style.cursor = 'pointer';
        img.style.transition = 'transform 0.3s ease';
        img.addEventListener('click', e => {
            const rect = img.getBoundingClientRect();
            const x = rect.left + rect.width/2 + window.scrollX;
            const y = rect.top + rect.height/2 + window.scrollY;
            confettiAt(x, y);
            img.style.transform = 'scale(1.05)';
            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 300);
        });
    });

    // Add hover effects for links
    letterContentDiv.querySelectorAll('a').forEach(link => {
        link.style.transition = 'all 0.3s ease';
        link.addEventListener('mouseover', () => {
            link.style.transform = 'translateY(-2px)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    // Add pattern detection to hearts
    document.body.addEventListener('click', (e) => {
        const target = e.target.closest('.hearts, .sparkle');
        if (target) {
            if (target.classList.contains('hearts')) {
                currentPattern.push('hearts');
            } else if (target.classList.contains('sparkle')) {
                currentPattern.push('sparkle');
            }
            checkPattern();
        }
    });
});

// Global debug command to force view any letter
window.forceLetter = function(id) {
    const letterContentDiv = document.getElementById('letter-content');
    if (LETTERS[id]) {
        console.log(`Force loading letter ${id}`);
        letterContentDiv.innerHTML = LETTERS[id];
        // Refresh AOS animations
        if (window.AOS) {
            AOS.refresh();
        }
        // Add effect handlers
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
        letterContentDiv.querySelectorAll('.hearts').forEach(el => {
            el.style.cursor = 'pointer';
            el.addEventListener('click', e => {
                const rect = el.getBoundingClientRect();
                const x = rect.left + rect.width/2 + window.scrollX;
                const y = rect.top + rect.height/2 + window.scrollY;
                heartsAt(x, y);
            });
        });
        letterContentDiv.querySelectorAll('.stars').forEach(el => {
            el.style.cursor = 'pointer';
            el.addEventListener('click', e => {
                starsRain();
            });
        });
    } else {
        console.error(`Letter ${id} not found!`);
    }
};

console.log('Debug command available: forceLetter(3) - to force view letter 3');

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
