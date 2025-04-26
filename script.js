// Knowledge base
const knowledgeBase = {

    "hii": [
        "Hello! Kaise ho? 😊",
        "Hi there! Kya haal chaal? 😄",
        "Namaste! Aap kaise hain? 👋 ",
        "Hello! Kya aapko PSIT ke baare mein kuch janna hai? 🤔",
        "Hi! PSIT ke baare mein kuch padhna hai? 😊",
        "Hello! PSIT ke baare mein koi sawaal hai? 🤗",
        "Namaste! PSIT ke baare mein jaanne ka mann hai? 😃",
        "Hello! PSIT ke baare mein kuch jaanne ka mann hai? 😊"
	    
    ],



"how": [
        "PSIT Kanpur is a premier institution offering various technical and management courses.",
        "PSIT is best option for you",
        "PSIT Kanpur is a well-known institution in India.",
        "PSIT is the best place for your education.",
        "PSIT Kanpur is a reputed college in India.",
        "PSIT is a great choice for your studies.",
        "PSIT Kanpur is a top institution for technical education.",
        "PSIT is a well-respected college in India.",
        "PSIT Kanpur is a leading institution for higher education.",
        "PSIT is a well-established college in India.",
        "PSIT Kanpur is a recognized institution for technical and management courses.",
        "PSIT is a well-known college for engineering and management studies.",
        "PSIT Kanpur is a popular choice for students seeking quality education."
],



"location": [
        "PSIT Kanpur is located in Kanpur, Uttar Pradesh.",
        "PSIT is situated in Kanpur, Uttar Pradesh.",
        "The campus of PSIT is in Kanpur, Uttar Pradesh.",
        "PSIT Kanpur is in the city of Kanpur, Uttar Pradesh.",
        "PSIT is located in the vibrant city of Kanpur, Uttar Pradesh.",
        "PSIT is situated in the heart of Kanpur, Uttar Pradesh.",
        "The PSIT campus is in Kanpur, Uttar Pradesh.",
        "PSIT is located in the bustling city of Kanpur, Uttar Pradesh.",
        "PSIT Kanpur is in the educational hub of Kanpur, Uttar Pradesh.",
        "PSIT is located in the historic city of Kanpur, Uttar Pradesh.",
        "PSIT is situated in the industrial city of Kanpur, Uttar Pradesh."
    ],


    "tum": [
        "Main ek AI chatbot hoon, PSIT ke baare mein madad karne ke liye yahan hoon! 😊",
        "Main ek AI hoon, aapko PSIT ke baare mein information dene ke liye yahan hoon! 😄",
        "Main ek chatbot hoon, PSIT ke baare mein aapki madad karne ke liye yahan hoon! 👋",
        "Main ek AI assistant hoon, PSIT ke baare mein aapki madad karne ke liye yahan hoon! 🤖",
        "Main ek chatbot hoon, PSIT ke baare mein aapki madad karne ke liye yahan hoon! 😊",
    ],

    "bye": [
        "Goodbye! Aapka din shubh ho! 😊",
        "Bye! Aapka din accha guzre! 😄",
        "Alvida! Aapka din shubh ho! 👋",
        "Goodbye! PSIT ke liye best wishes! 😊",
        "Bye! PSIT ke liye best wishes! 😄",
        "Alvida! PSIT ke liye best wishes! 👋"
    ],
    "established": [
        "PSIT Kanpur was established in 2004.",
        "The foundation year of PSIT Kanpur is 2004.",
        "It all started in 2004 when PSIT was established."
    ],
    "courses": [
        "PSIT offers B.Tech, M.Tech, MBA, MCA, BBA, BCA, B.Pharm, and M.Pharm programs.",
        "Various courses at PSIT include technical and management programs.",
        "You can study engineering, pharmacy, or management courses at PSIT."
    ],
    "admission": [
        "Admissions are based on JEE Main, CUET, and others.",
        "You need to clear entrance exams like JEE or CUET for admission.",
        "Admission depends on the course and may require entrance exams."
    ],
    "placement": [
        "Over 200 companies visited PSIT in 2023 offering 2334 jobs!",
        "Highest placement package was INR 50 LPA in 2023.",
        "PSIT achieved remarkable placement stats in 2023 with top recruiters."
    ],
    "campus": [
        "PSIT has an 80-acre modern campus.",
        "The campus is large and equipped with excellent facilities.",
        "You’ll find a spacious and high-tech campus at PSIT."
    ],
    "hostel": [
        "Yes, hostel facilities are available.",
        "PSIT offers accommodation for its students.",
        "You can stay in the hostels provided by PSIT."
    ],
    "fees": [
        "Fees vary by course; B.Tech ranges from ₹2.19 L to ₹5.4 L.",
        "Check specific program fees on PSIT’s website.",
        "Tuition fees are program-specific at PSIT."
    ],
    "contact": [
        "You can contact PSIT at 7670998888 or admission@psit.ac.in.",
        "Feel free to call PSIT or drop an email at admission@psit.ac.in.",
        "Need help? Contact PSIT at 7670998888."
    ]
};

// Keyword aliases (for fuzzy matching)
const keywordAliases = {
	"tum": ["tum", "aap", "aapka", "aapko", "aapne", "tumhara", "tumhe", "tumne", "tumse", "aapne"],
    "location": ["location", "area", "place", "campus", "infrastructure", "address", "kahan hai", "kaha hai", "kahan par hai", "kaha par hai", "where", "where is", "where"],
	"how": ["how", "kaisa", "kya", "kya hai", "kya hai yeh", "kya hai yeh sab", "kaam ka"],
    "hii": ["hi", "hello", "how are you", "namaste", "kya haal chaal"],
    "bye": ["bye", "goodbye", "alvida", "see you", "take care"],
    "placement": ["placement", "package", "job", "offer", "company", "salary", "campus"],
    "highest": ["highest", "maximum", "top", "best", "largest"],
    "stats": ["stats", "statistics", "data", "numbers", "details"],
    "companies": ["companies", "recruiters", "firms", "corporates", "jobs"],
    "job": ["job", "offer", "placement", "company", "salary"],
    "area": ["area", "location", "place", "campus", "infrastructure"],
    "infrastructure": ["infrastructure", "facilities", "building", "campus", "area"],
    "hostel": ["hostel", "room", "stay", "accommodation", "living"],
    "established": ["establish", "start", "foundation", "kab", "shuru"],
    "courses": ["course", "program", "degree", "btech", "mba", "mca", "bba", "bca", "pharm"],
    "admission": ["admission", "entrance", "jee", "cuet", "apply"],
    "placement": ["placement", "package", "job", "offer", "company", "salary", "campus"],
    "campus": ["campus", "infrastructure", "area", "building", "facilities"],
    "hostel": ["hostel", "room", "stay", "accommodation"],
    "fees": ["fees", "fee", "charges", "cost", "pay", "kitna"],
    "contact": ["contact", "phone", "email", "number", "call"]


};

// Direct phrase match answers
const phraseAnswers = {
"how are you" : "I am AI  , I does not have feeling.",
    "highest package": "PSIT's highest placement package in 2023 was ₹50 LPA. 🎯",
    "maximum package": "The highest package offered at PSIT was ₹50 LPA in 2023.",
    "placement stats": "In 2023, over 200 companies offered 2334 jobs to PSIT students!",
    "total companies": "More than 200 companies visited PSIT for placements in 2023.",
    "job offers": "2334 job offers were made at PSIT in the 2023 placement season.",

    "which courses": "PSIT offers B.Tech, M.Tech, MBA, MCA, BBA, BCA, B.Pharm, and M.Pharm programs.",
    "available programs": "You can study engineering, pharmacy, or management courses at PSIT.",
    "course list": "Here's a list: B.Tech, M.Tech, BBA, MBA, BCA, MCA, B.Pharm, M.Pharm.",

    "how to take admission": "Admissions are based on JEE Main, CUET and other entrance exams.",
    "admission process": "You need to clear entrance exams like JEE or CUET for admission.",
    "entrance required": "Yes, most courses require entrance exams such as JEE or CUET.",

    "campus area": "PSIT has an 80-acre modern campus with high-tech facilities.",
    "how big is the campus": "The campus is spread over 80 acres, full of modern infrastructure.",
    "campus details": "The campus is spacious, high-tech, and full of vibrant student life.",

    "hostel available": "Yes, PSIT provides hostel facilities for both boys and girls.",
    "is there hostel": "Absolutely! Hostel accommodation is available at PSIT.",
    "hostel facility": "PSIT offers comfortable and secure hostel options for students.",

    "btech fees": "B.Tech fees at PSIT range from ₹2.19 Lakhs to ₹5.4 Lakhs depending on branch.",
    "fee structure": "Fees vary by course. Please visit PSIT's official website for exact details.",
    "course fees": "Tuition fees depend on the program — e.g., B.Tech, MBA, etc.",

    "how to contact": "You can reach PSIT at 7670998888 or email admission@psit.ac.in.",
    "email id": "For queries, mail at admission@psit.ac.in.",
    "phone number": "Call 7670998888 to connect with PSIT support or admission team.",

    "when was psit established": "PSIT Kanpur was established in 2004.",
    "foundation year": "The foundation year of PSIT is 2004.",
    "started in": "It all started in 2004 when PSIT was founded."
};

// Memory to avoid repeating same response
const lastResponses = {};
let lastTopic = null;



function getAnswer(question) {
    question = question.toLowerCase();
    const words = question.split(/\s+/);

    // Step 1: Check if it's an exact phrase match
    for (const phrase in phraseAnswers) {
        if (question.includes(phrase)) {
            return phraseAnswers[phrase];
        }
    }

    // Step 2: Keyword matching logic
    let scores = {};
    let bestKey = null;
    let highestScore = 0;
    
    for (const key in keywordAliases) {
        let score = 0;
        
        // Count how many times aliases of a topic appear in the question
        for (const alias of keywordAliases[key]) {
            if (question.includes(alias)) {
                score += 1;
            }
        }

        if (score > highestScore) {
            highestScore = score;
            bestKey = key;
        }
    }

    // Step 3: If a keyword matched, return a random response from the knowledge base
    if (bestKey && highestScore > 0) {
        const responses = knowledgeBase[bestKey];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        lastResponses[bestKey] = randomResponse;  // Store last response to avoid repetition
        
        const openers = ["Zaroor! 😊 ", "Yeh raha aapka jawab: ", "Bilkul! Suno: ", "Great question! 👌 ", "Absolutely! 👍 "];
        const closers = [" Agar aur kuch puchhna ho toh batao!", " PSIT is a great choice! 😄", " Aap chahein toh aur detail bhi de sakta hoon.", " Hope this helps! 😊"];

        const opener = openers[Math.floor(Math.random() * openers.length)];
        const closer = closers[Math.floor(Math.random() * closers.length)];

        return opener + randomResponse + closer;
    }

    // Step 4: If no match, return a fallback message
    return "Hmm... mujhe lagta hai yeh info mere paas nahi hai 😔. Aap PSIT ki website check karo: https://www.psit.ac.in/";
}











// Chat UI function
function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userText = input.value.trim();
    if (userText === "") return;

    const botReply = getAnswer(userText);

    chatBox.innerHTML += `<p><strong>Aap:</strong> ${userText}</p>`;
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}
