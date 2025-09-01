import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message=async(req,res)=>{
    try {
    const {text}=req.body;
 
    if(!text?.trim()){
        return res.status(400).json({error:"Text cannot be empty"});
    }
    const user=await User.create({
        sender:"user",
        text
    })

    // Data
    const botResponses={
  "hello": "Hi, How I can help you!!",

  "can we become friend": "Yes",

  "how are you": "I'm just a bot, but I'm doing great! How about you?",

  "what is your name?": "I’m ChatBot, your virtual assistant.",

  "who made you": "I was created by developers to help answer your questions.",

  "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",

  "what is the time": "I can’t see a clock, but your device should know.",

  "bye": "Goodbye! Have a great day.",

  "thank you": "You’re welcome!",

  "i love you": "That’s sweet! I’m here to help you anytime.",

  "where are you from": "I live in the cloud — no rent, no bills!",
  
  "what can you do": "I can chat with you, answer questions, and keep you company.",

 "what is python": "Python is a high-level, interpreted programming language known for simplicity and versatility. Dynamically typed and supports multiple paradigms (OOP, functional, procedural)\n• Extensive libraries for AI, data science, web, automation",

"what is java": "Java is a platform-independent, object-oriented programming language. Famous for 'Write Once, Run Anywhere' due to JVM (Java Virtual Machine) Used in enterprise systems, Android development, cloud apps Provides features like garbage collection, strong memory management Example: Banking systems, Android apps, large-scale enterprise applications",

"what is recursion": "Recursion is when a function calls itself to solve smaller parts of a problem. Useful for problems that can be divided into subproblems (divide-and-conquer) Requires a **base condition** to stop infinite looping Commonly used in: factorial calculation, Fibonacci sequence, tree/graph traversal Example in coding interview: 'Write a recursive function to reverse a linked list'",

"who is prime minister of india?": "Narendra Modi is the Prime Minister of India since May 2014. Belongs to Bharatiya Janata Party (BJP) Represents Varanasi constituency Key initiatives: Digital India, Startup India, Swachh Bharat, Make in India Interview Tip: Link to governance or technology (e.g., Digital India impact on IT industry)",

"What are semantic tags in HTML": "Semantic tags describe the meaning of the content, like <header>, <footer>, <article>, which improves SEO and readability.",

"tell me about yourself": "This is usually the first interview question.Structure: Start with a brief intro (name, background, education/work) Highlight your skills (technical + soft skills) Share achievements (projects, internships, leadership roles) Conclude with why you’re excited about this role\nExample: 'I am a Computer Science graduate skilled in Python and SQL. I completed an internship at XYZ where I optimized a database query, improving performance by 30%. I’m passionate about problem-solving and eager to contribute to your team’s success.'",

"why should we hire you": "HR wants to see your value-add. Emphasize skills that match job requirements Show enthusiasm and cultural fit Example: 'I bring strong coding skills in Python and SQL, along with problem-solving ability proven through hackathons. I am also a quick learner and adapt well to team environments. I believe I can contribute to both technical delivery and innovative ideas.'",

"what is leadership": "Leadership is the ability to inspire and guide others toward achieving goals. Key traits: vision, communication, accountability, decision-making Example in interview: 'I led a college project team of 4, where I divided tasks, coordinated communication, and ensured deadlines. We successfully delivered a working prototype before schedule.'",

"who is virat kohli": "Virat Kohli is one of India’s greatest batsmen and former captain. Known for consistency, fitness, and aggressive play Holds record for fastest century in ODIs for India Nicknamed 'Chase Master' for his performance in run-chases Interview Tip: If asked about sports management, relate his discipline & fitness to leadership skills",

"what is ipl": "The Indian Premier League (IPL) is a professional T20 cricket league started in 2008. Played annually in India, franchise-based teams Combines cricket + entertainment (biggest sports league in India) Significant for sports business, sponsorships, brand endorsements Example: Chennai Super Kings (CSK) & Mumbai Indians (MI) are top teams",

"What are semantic tags in HTML": "Semantic tags describe the meaning of the content, like <header>, <footer>, <article>, which improves SEO and readability.",

"tell me about yourself": "This is the most common first question. Structure your answer as: (1) Brief intro (name, education, background), (2) Skills (technical + soft), (3) Achievements (internship, projects), (4) Why you fit this role. Example: 'I am Ruchi Singh, MCA graduate with skills in HTML, CSS, JavaScript, and React. I have done internships in web development where I worked on real projects like Medicplus and Shopify. I am passionate about frontend development and eager to contribute my skills to your team.'",

  "why should we hire you": "Show how your skills match the role. Highlight both technical and personal strengths. Example: 'I bring strong frontend skills in React and JavaScript, along with problem-solving ability. During my internship, I successfully built responsive websites and worked on team projects. I am a quick learner and adaptable, which makes me a good fit for this position.'",

  "what are your strengths": "Focus on 2–3 qualities relevant to the job. Example: 'My strengths are problem-solving, quick learning, and good teamwork. I stay consistent in my work and adapt easily to new technologies.'",

  "what are your weaknesses": "Choose a minor weakness and show how you’re improving. Example: 'I used to focus too much on details which slowed me down, but now I manage time better by prioritizing important tasks first.'",

  "where do you see yourself in 5 years": "Interviewers want to check your career vision. Example: 'In 5 years, I see myself as a skilled frontend developer working on challenging projects, leading a small team, and contributing to innovative web solutions in your company.'",
  "what is html": "HTML (HyperText Markup Language) is the standard language for creating webpages. It defines the structure of a page using elements like headings, paragraphs, links, images, and forms.",

  "what is css": "CSS (Cascading Style Sheets) is used to style HTML elements. It controls layout, colors, fonts, spacing, and responsiveness of a webpage.",

  "difference between inline css and external css": "Inline CSS is written inside the HTML element using the style attribute, while External CSS is written in a separate .css file and linked to the HTML document. External CSS is reusable and easier to maintain.",

  "what is javascript": "JavaScript is a scripting language used to make websites interactive. It adds dynamic behavior like form validation, animations, API calls, and event handling.",

  "what is react": "React is a JavaScript library developed by Facebook for building user interfaces. It uses a component-based architecture and Virtual DOM for faster rendering.",

  "what is the difference between var let and const": "var is function-scoped and can be re-declared, let is block-scoped and can be updated but not re-declared in the same scope, const is block-scoped and cannot be reassigned after initialization.",

  "what is sql": "SQL (Structured Query Language) is used to interact with databases. It allows operations like SELECT, INSERT, UPDATE, and DELETE on data.",

  "difference between sql and nosql": "SQL databases are relational and use structured tables with fixed schemas, while NoSQL databases are non-relational, flexible, and store data in formats like JSON, key-value pairs, or graphs.",

  "what is an api": "API (Application Programming Interface) is a set of rules that allow different software applications to communicate. For example, a weather app using weather API to fetch real-time data.",

  "what is rest api": "REST API is an architectural style for communication between client and server using HTTP methods (GET, POST, PUT, DELETE). It is stateless and widely used for web services.",

  "what is oop": "OOP (Object-Oriented Programming) is a programming paradigm based on objects and classes. Key concepts: Encapsulation, Inheritance, Polymorphism, and Abstraction.",

  "what is git": "Git is a version control system used to track code changes, collaborate with team members, and manage different versions of projects.",

  "difference between git and github": "Git is the version control tool that runs locally, while GitHub is a cloud-based hosting service for managing Git repositories and collaborating with others online.",

  "what is leadership": "Leadership is the ability to guide and inspire a team towards achieving goals. Example: Leading a college project team, assigning tasks, and delivering the project on time.",

  "what are your career goals": "Short-term: to gain practical experience as a frontend developer and strengthen technical skills. Long-term: to grow into a full-stack developer and lead projects in a reputed company."
}
const normalizedText = text.toLowerCase().trim();
const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

const bot = await Bot.create({
    text: botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})

} catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({error:"Internal Server Error"});

  }
} 