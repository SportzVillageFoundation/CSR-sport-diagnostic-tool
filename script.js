const startBtn = document.getElementById("startBtn");

const landingScreen = document.getElementById("landingScreen");

const questionScreen = document.getElementById("questionScreen");

const questionTitle = document.getElementById("questionTitle");

const optionsContainer = document.getElementById("optionsContainer");

const progressText = document.getElementById("progressText");

let leadData = {
  name: "",
  organization: "",
  email: "",
  designation: "",
  phone: ""
};

// QUESTIONS

const questions = [

  {
    question: "Which CSR focus area is most relevant to your current priorities?",
    type: "single",
    options: [
      "Education",
      "Health & Well-being",
      "Gender Equality",
      "Livelihoods & Employability"
    ]
  },

  {
    question: "Which of the following feels most aligned with your CSR objectives?",
    type: "single",
    options: [
      "Creating measurable social impact",
      "Strengthening community relationships",
      "Leveraging technology",
      "Brand visibility and positioning",
      "Employee engagement"
    ]
  },

  {
    question: "Who are your primary target groups? (Please select up to 2 options)",
    type: "multi",
    options: [
  {
    label: "School children",
    description: "Primary, upper-primary and middle school-aged children"
  },
  {
    label: "Adolescents & Youth (13–21 years)",
    description: "Secondary school students and young adults"
  },
  {
    label: "Women & girls",
    description: "Girls and women across age groups"
  },
  {
    label: "Teachers & Educators",
    description: "Teachers, coaches, and school staff"
  },
  {
    label: "Community members",
    description: "Parents, community youth leaders, and local stakeholders"
  }
]
  },

  {
    question: "What level of investment are you likely to consider for this initiative?",
    type: "single",
    options: [
      "₹25 – 40 lakhs",
      "₹40 – 80 lakhs",
      "₹80 lakhs – ₹1.2 crores",
      "Above ₹1.2 crores"
    ]
  },

  {
    question: "Where are you looking to implement this initiative?",
    type: "single",
    options: [
      "Single location",
      "Multiple locations",
      "Not decided yet"
    ]
  },

  {
    question: "What scale of outreach are you aiming for annually?",
    type: "single",
    options: [
      "100 - 500 participants",
      "500 - 2,000 participants",
      "2,000 - 5,000 participants",
      "5,000+ participants"
    ]
  }

];

const productDetails = {

  sfcEducation: {

    title: "School-Based Sport for Development Programming",

    fit:`
<p>
Based on your focus on education, school-aged children, and long-term social impact, school-based sport programs can help strengthen student engagement, participation, and holistic development.
</p>

<p>
Many children, particularly in underserved communities, lack access to structured opportunities that build life skills, confidence, and physical literacy. Schools provide a scalable platform to address this gap by integrating sport into the learning experience and engaging children consistently over time.
</p>

<ul class="impactList">
  <li>Uses existing school systems to reach children regularly</li>
  <li>Supports educational, social, and emotional development</li>
  <li>Creates engaging and experiential learning opportunities</li>
  <li>Encourages long-term participation and retention</li>
</ul>
`,
 

    model:`
<p>
Effective school-based sport programs combine structured physical activity with intentional learning outcomes. Delivery is typically integrated into the school ecosystem and supported by trained facilitators and educators.
</p>

<ul class="impactList">
  <li>Structured sport and physical education sessions</li>
  <li>Physical literacy and life skills curricula</li>
  <li>Training and support for teachers and facilitators</li>
  <li>Engagement with school leaders and parents</li>
  <li>Monitoring of participation and development outcomes</li>
</ul>
`,

    impacts: [
      "Improved student engagement and attendance",
    "Increased participation in physical activity",
    "Development of teamwork, leadership, and life skills",
    "Improved confidence and peer interaction",
    "More inclusive and positive school environments"
    ],

  example: `
    <p>
      SVF currently implements school-based sport for development initiatives across 22+ states in India, reaching more than 80,000 children and adolescents annually. Through its Sport for Change initiative, SVF combines structured sport participation with evidence-based curricula designed to support physical literacy, life skills, and youth development.
    </p>
  `,

  svfImpact: [
    "22% improvement in students' likelihood of achieving higher grades",
    "9% improvement in classroom attendance",
    "12% increase in active classroom participation"
  ]
  },

  sfcHealth: {

    title: "School-Based Sport and Physical Activity Programming",

    fit: `
<p>
Based on your focus on health and well-being, structured sport and physical activity programs can help children build healthier habits, improve physical fitness, and increase regular participation in movement-based activities from an early age.
</p>

<p>
This is particularly important in India, where rising levels of physical inactivity are affecting children's health and development. Early exposure to sport and movement is strongly linked to improved physical fitness, confidence, and lifelong participation in healthy lifestyles.
</p>

<ul class="impactList">
  <li>Encourages regular physical activity from an early age</li>
  <li>Promotes healthy lifestyle habits and well-being</li>
  <li>Builds confidence through movement and sport participation</li>
  <li>Supports long-term physical literacy and active living</li>
</ul>
`,

    model: `
<p>
School-based programs use structured sport, movement, and play to improve physical literacy, fitness, and overall well-being. Sessions are integrated into the school environment and delivered by trained facilitators, with support from teachers and school leaders.
</p>

<ul class="impactList">
  <li>Structured sport and physical education sessions</li>
  <li>Age-appropriate physical literacy curriculum</li>
  <li>Training and support for teachers and facilitators</li>
  <li>Engagement with school leaders and parents</li>
  <li>Monitoring of participation and fitness outcomes</li>
</ul>
`,

    impacts: [
      "Increased participation in regular physical activity",
      "Improved cardiovascular fitness, flexibility, and endurance",
      "Improved physical literacy and movement confidence",
      "Increased awareness around health and well-being"
    ],

  example: `
    <p>
      SVF currently implements school and community-based sport and physical activity initiatives across 22+ states in India, reaching over 80,000 young people annually through physical literacy, sport participation, and youth development programming.
    </p>
  `,

  svfImpact: [
    "9% improvement in Fitness Quotient (FQ), including strength, endurance, and flexibility",
    "31% increase in weekly physical activity beyond school hours",
    "5% increase in students maintaining a healthy BMI over the course of the academic year"
  ]
  },

  sfcGender: {

    title: "Gender-Responsive School-Based Sport Programming",

    fit: `
<p>
Based on your focus on gender equality and inclusion, structured sport programs can help create safe and supportive spaces where girls build confidence, leadership skills, self-expression, and greater participation in school and community life.
</p>

<p>
Many girls continue to face barriers to participation in sport, leadership opportunities, and social spaces. When designed intentionally, sport programs can help challenge gender stereotypes, strengthen confidence, and promote positive interaction and mutual respect among girls and boys from an early age.
</p>

<ul class="impactList">
  <li>Creates safe and inclusive spaces for girls to participate and leady age</li>
  <li>Encourages confidence, self-expression, and agency</li>
  <li>Promotes positive mixed-gender interaction and teamwork</li>
  <li>Challenges harmful gender norms and stereotypes</li>
</ul>
`,

    model: `
<p>
Gender-responsive sport programs use structured sport, movement, and play-based learning to support physical, social, and emotional development. Sessions are designed to encourage participation, leadership, teamwork, and respectful interaction among children and adolescents.
</p>

<ul class="impactList">
  <li>Structured sport and physical education sessions</li>
  <li>Menstrual health, well-being, and gender awareness discussions and lesson plans</li>
  <li>Trained facilitators using gender-responsive approaches</li>
  <li>Engagement with school leaders and parents</li>
  <li>Engagement with parents, teachers, and community stakeholders</li>
</ul>
`,

    impacts: [
      "Improved confidence, agency, and leadership skills among girls",
      "Increased participation in social spaces and self-expression",
      "Improved school attendance and retention among adolescent girls",
      "Greater awareness of gender inclusion and equality",
      "Reduced risk of school dropout amongst girls"
    ],

  example: `
    <p>
      Through the Sport for Change initiative, SVF delivers mixed-gender school and community-based sport programs designed to create safe and inclusive participation spaces for girls and adolescents. The program also provides leadership opportunities through the MILES curriculum, where young people lead activities, sessions, and peer engagement initiatives within schools and communities.
SVF currently reaches over 80,000 children and adolescents annually across 22+ states in India, with girls representing approximately 50% of participants.
    </p>
  `,

  svfImpact: [
    "49% improvement in social-emotional learning (SEL) indicators, including interacting with others, taking initiative, managing conflicts, overcoming difficulties, and following instructions",
    "9% improvement in Fitness Quotient (FQ) among participating girls",
    "5% improvement in healthy BMI indicators among girls", 
    "Increased participation in play and physical activity beyond school hours"
  ]
  },

  shakti: {

    title: "Self-Defense and Safety Awareness Workshops for Girls",

    fit: `
<p>
Based on your focus on gender empowerment and creating safe spaces for girls, self-defense workshops can help build confidence, personal safety awareness, resilience, and the ability to respond to potentially unsafe situations.
</p>

<p>
These interventions are particularly effective as short-term, high-reach models that can engage large numbers of girls across schools and communities while strengthening both physical preparedness and emotional resilience.
</p>

<ul class="impactList">
  <li>Builds confidence and self-agency among girls</li>
  <li>Strengthens awareness of personal safety and well-being</li>
  <li>Develops practical self-defense skills</li>
  <li>Encourages resilience and preparedness in challenging situations</li>
</ul>
`,

    model: `
<p>
Self-defense programs combine practical skills training with discussions on safety, emotional well-being, and confidence-building. Sessions are delivered in safe and supportive environments by trained instructors and facilitators.
</p>

<ul class="impactList">
  <li>Practical self-defense techniques</li>
  <li>Personal safety and situational awareness training</li>
  <li>Confidence and resilience-building activities</li>
  <li>Discussions on emotional well-being and seeking support</li>
  <li>School and community-based delivery formats</li>
</ul>
`,

    impacts: [
      "Increased confidence and self-agency",
      "Improved awareness of unsafe situations and personal safety",
      "Enhanced ability to respond confidently in challenging situations",
],

  example: `SVF currently implements SHAKTI, a structured self-defense and confidence-building module designed for girls and adolescents across school and community settings. The initiative combines practical self-defense learning with awareness and resilience-building approaches to help girls feel safer, more confident, and better prepared in their daily environments.`,
  },

SFCpathwayz: {

    title: "Integrated Sport for Development and Excellence Pathway Programming",

    fit: `
<p>
Based on your focus on long-term impact, youth development, and community engagement, integrated sport for development and excellence models can help create both broad-based developmental outcomes and structured progression pathways for young people.
</p>

<p>
While most children benefit from regular sport participation, some also require access to coaching, mentorship, and exposure opportunities to realize their full potential. This approach combines both objectives within a single ecosystem, creating developmental impact at scale while supporting talented young athletes. Given the nature of these outcomes, such programs are typically designed as multi-year initiatives.
</p>

<ul class="impactList">
  <li>Combines developmental and aspirational outcomes within one model</li>
  <li>Creates opportunities for all children while supporting high-potential youth</li>
  <li>Strengthens long-term engagement and retention</li>
  <li>Builds community aspiration and visibility through sport</li>
</ul>
`,

    model: `
<p>
The model combines foundational sport programming with structured athlete development pathways. Children participate in regular sport and life skills activities, while selected participants access additional coaching, mentorship, competitions, and progression opportunities.
</p>

<ul class="impactList">
  <li>School and community-based sport participation</li>
  <li>Physical literacy, life skills, and leadership development through structured curricula</li>
  <li>Talent identification and athlete development pathways</li>
  <li>Coaching, mentorship, and competition exposure</li>
  <li>Access to progression opportunities within organized sport ecosystems</li>
</ul>
`,

    impacts: [
      "Increased participation and long-term engagement in sport",
      "Improved social-emotional learning, leadership, and life skills",
      "Improved school engagement and healthier lifestyle behaviors",
      "Structured pathways for talented young athletes",
      "Increased community engagement and visibility",
      "Access to competitive pathways, scholarships, academies, and progression opportunities"
    ],

  example: `
    <p>
      SVF implements integrated sport for development and excellence initiatives through its Sport for Change and PathwayZ programs. These initiatives combine large-scale sport participation with structured athlete identification and development pathways, enabling children and adolescents to benefit from both holistic development opportunities and progression within organized sport ecosystems.
    </p>`,

  },

  pathwayz: {

    title: "Community-Based Sports Excellence and Athlete Pathway Programming",

    fit: `
<p>
Based on your focus on youth development, community engagement, and visibility through sport, athlete pathway programs can help identify and support talented young athletes from underserved communities to progress within organized sport ecosystems.
</p>

<p>
These approaches create aspirational opportunities for young people while generating visible community impact through athlete achievement, progression, and success stories.
</p>

<ul class="impactList">
  <li>Creates structured pathways for talented young athletes</li>
  <li>Strengthens community aspiration and youth engagement</li>
  <li>Supports long-term athlete development and progression</li>
  <li>Generates visible outcomes through athlete achievement</li>
</ul>
`,

    model: `
<p>
Athlete pathway programs combine grassroots talent identification with structured coaching, mentorship, and progression opportunities. Participants receive support to develop their sporting potential while accessing opportunities within organized sport ecosystems.
</p>

<ul class="impactList">
  <li>Community outreach, talent identification, and trials</li>
  <li>Structured coaching and athlete development programs</li>
  <li>Access to equipment, training facilities, and mentorship</li>
  <li>Tournament participation and competitive exposure</li>
  <li>Linkages to academies, scholarships, clubs, and advanced pathways</li>
</ul>
`,

    impacts: [
      "Identification and development of talented young athletes",
      "Increased access to structured coaching and training opportunities",
      "Increased community engagement and visibility through athlete progression",
      "Strengthened access to tournaments, trials, camps, and scholarships"
    ],

  example: `
    <p>
      Through PathwayZ, SVF supports community-based athlete identification and development initiatives that combine grassroots outreach with structured coaching, mentorship, and progression support.
    </p>`,

  svfImpact: [
    "3,189 student-athletes trained through Sports Development Centers (SDCs)",
    "5,763 competition participations supported across different levels",
    "45 student-athletes linked to academies and High-Performance Learning Centers (HPLCs), and athletes progressing into scholarship, club, and advanced development opportunities",
    "2,099 medals won, including representation at district, state, and national competitions"
  ]
  },

  pathwayz36: {

    title: "High-Performance Athlete Support and Progression Programming",

    fit: `
<p>
Based on your focus on youth development, sports excellence, and high-visibility outcomes, athlete support programs can help talented young athletes overcome financial, structural, and access-related barriers that often limit progression within competitive sport.
</p>

<p>
These initiatives focus on a smaller group of high-potential athletes, creating opportunities for advancement while increasing representation from underserved communities within higher-performance sport ecosystems.
</p>

<ul class="impactList">
  <li>Supports talented athletes with demonstrated competitive potential</li>
  <li>Reduces barriers to long-term participation and progression</li>
  <li>Creates visible achievement and representation outcomes</li>
  <li>Strengthens pathways into higher-performance sport environments</li>
  <li>Best suited for organizations seeking focused, high-visibility investment in a smaller cohort of athletes</li>
</ul>
`,

    model: `
<p>
Athlete support programs provide holistic assistance to help athletes sustain participation and progress within competitive sport. Support is tailored to individual needs and often delivered in partnership with coaches, academies, federations, and sport ecosystems.
</p>

<ul class="impactList">
  <li>Financial assistance and athlete sponsorship</li>
  <li>Coaching, mentorship, and performance support</li>
  <li>Access to competitions, camps, and exposure opportunities</li>
  <li>Nutrition, rehabilitation, and well-being support</li>
  <li>Connections to academies, scholarships, and advanced development pathways</li>
</ul>
`,

    impacts: [
      "Increased access to structured athlete development opportunities",
      "Reduced financial and access-related barriers for talented athletes",
      "Improved participation in competitions, camps, and exposure opportunities",
      "Increased visibility and representation from grassroots communities in competitive sport",
      "Stronger progression pathways within organized sport ecosystems"
    ],

  example: `
    <p>
      Through PathwayZ36, SVF supports athletes already participating within competitive sport ecosystems through structured athlete sponsorship and progression support. The program works with athletes, coaches, federations, and partner organizations to strengthen access to training, exposure, and long-term development opportunities.
SVF's broader sports excellence initiatives have supported athlete participation across district, state, and national competitions, while also enabling connections to academies, scholarships, and higher-performance learning environments.
    </p>`,
  },

  digital: {

    title: "Technology-Enabled Sport and Physical Activity Programming",

    fit: `
<p>
Based on your focus on scalable implementation, educator capacity building, technology-enabled delivery, and long-term sustainability, digital sport and physical activity programs can help expand access to structured sport participation across large geographies and participant groups in a cost-effective manner.
</p>

<p>
These approaches enable organizations to reach more children and young people while building the capacity of teachers, youth leaders, and communities to sustain sport participation beyond the life of a project.
</p>

<ul class="impactList">
  <li>Expands access to structured sport and physical activity at scale</li>
  <li>Builds local capacity to deliver sport-based programs</li>
  <li>Strengthens long-term sustainability through local ownership</li>
  <li>Enables cost-effective implementation across multiple locations</li>
  <li>Particularly suitable for multi-location or large-scale CSR initiatives</li>
</ul>
`,

    model: `
<p>
Technology-enabled models combine digital learning tools with facilitator training and ongoing implementation support. Teachers, youth leaders, and community members are equipped to independently deliver structured sport and movement-based activities within their own settings.
</p>

<ul class="impactList">
  <li>Digital sport and physical activity content</li>
  <li>Training for teachers, youth leaders, and facilitators</li>
  <li>Guided implementation and mentoring support</li>
  <li>Capacity building for schools and community institutions</li>
  <li>Ongoing monitoring and quality assurance</li>
</ul>
`,

    impacts: [
      "Expanded access to structured sport and physical activity programming",
      "Capacity building for teachers, youth leaders, and community members",
      "Increased sustainability through school and community ownership",
      "Scalable implementation across multiple geographies"
    ],

  example: `
    <p>
      Through Digital Edusports, SVF combines digital learning tools, facilitator training, and guided implementation support to help schools and communities deliver structured sport and physical activity programming at scale.
The initiative works closely with teachers, youth leaders, schools, and institutional stakeholders to strengthen long-term ownership while expanding access to quality sport participation opportunities across diverse geographies.
    </p>`,
  },

  yogdaan: {

    title: "Employee Engagement Through Sport",

    fit: `
<p>
Based on your focus on employee engagement and community connection, sport-based volunteering programs can create meaningful opportunities for employees to contribute to social impact initiatives while strengthening teamwork, participation, and organizational culture.
</p>

<p>
Unlike one-time volunteering activities, these approaches enable employees to engage directly with children, youth, schools, and communities through interactive and purpose-driven experiences.
</p>

<ul class="impactList">
  <li>Creates meaningful and hands-on volunteering opportunities</li>
  <li>Strengthens employee engagement and team bonding</li>
  <li>SBuilds stronger connections between employees and communities</li>
  <li>Increases employee ownership of CSR initiatives</li>
  <li>Supports employee volunteering and purpose-driven engagement goals</li>
</ul>
`,

    model: `
<p>
Sport-based employee engagement programs combine volunteering, mentorship, and community participation opportunities within school and community settings. Activities can be adapted to suit employee interests, organizational priorities, and implementation contexts.
</p>

<ul class="impactList">
  <li>Volunteering at sport and community events</li>
  <li>Mentorship and youth engagement opportunities</li>
  <li>Employee-led awareness and learning sessions</li>
  <li>Community sports days and engagement activities</li>
  <li>Skill-based volunteering aligned to employee expertise</li>
</ul>
`,

    impacts: [
      "Increased employee participation in CSR initiatives",
      "Stronger connection between employees and communities",
      "Improved teamwork, collaboration, and employee engagement",
      "Increased visibility and ownership around social impact initiatives"
    ],

  example: `
    <p>
      Through Yogdaan, SVF supports employee engagement initiatives that combine sport, volunteering, mentorship, and community participation across schools and community settings. The initiative is designed to create meaningful employee experiences while contributing to broader youth development and community impact goals.
Programs can be adapted across different formats depending on organizational priorities, employee participation goals, and target communities.
    </p>`,
  }

};
// PRODUCT SCORES

const productScores = {

  sfcEducation: 0,
  sfcHealth: 0,
  sfcGender: 0,
  shakti: 0,
  SFCpathwayz: 0,
  pathwayz: 0,
  pathwayz36: 0,
  digital: 0,
  yogdaan: 0

};

function resetScores() {

  Object.keys(productScores).forEach(key => {

    productScores[key] = 0;

  });

}


// TRACKING

let currentQuestion = 0;

let answers = [];

let multiAnswers = [];

let selectedFinalAnswer = null;

// START BUTTON

startBtn.addEventListener("click", () => {

  leadData.name =
    document.getElementById("leadName").value;

  leadData.organization =
    document.getElementById("leadOrganization").value;

  leadData.email =
    document.getElementById("leadEmail").value;

  leadData.designation =
    document.getElementById("leadDesignation").value;

  leadData.phone =
    document.getElementById("leadPhone").value;

  if (
    !leadData.name ||
    !leadData.organization ||
    !leadData.email
  ) {

    alert(
      "Please complete Name, Organization and Email before starting the assessment."
    );

    return;

  }

fetch(
  "https://script.google.com/macros/s/AKfycbxew32iGT4elsm5gQmfoN9RTvIsdjShovC7wtxSkuNlIvS4B5A5HMSzAGG3zwUSCpvz/exec",
  {
    method: "POST",
    body: JSON.stringify({
      name: leadData.name,
      organization: leadData.organization,
      email: leadData.email,
      designation: leadData.designation,
      phone: leadData.phone,

      csrFocus: "",
      driver: "",
      targetGroups: "",
      investment: "",
      geography: "",
      scale: "",

      primaryRecommendation: "",
      secondaryRecommendation: "",

      action: "Assessment Started"
    })
  }
);
  
  landingScreen.classList.add("hidden");

  questionScreen.classList.remove("hidden");

  loadQuestion();

});


// LOAD QUESTION

function loadQuestion() {

  const current = questions[currentQuestion];

  progressText.innerText =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  const progressBar = document.getElementById("progressBar");

  const progressPercent =
    ((currentQuestion + 1) / questions.length) * 100;

  progressBar.style.width = `${progressPercent}%`;

  questionTitle.innerText = current.question;

  optionsContainer.innerHTML = "";

  multiAnswers = [];

  current.options.forEach(option => {

    const button = document.createElement("button");

    button.classList.add("optionBtn");

    const optionValue =
      typeof option === "object"
        ? option.label
        : option;

    if (typeof option === "object") {

      button.innerHTML = `
        <strong>${option.label}</strong>
        <div class="optionDescription">
          ${option.description}
        </div>
      `;

    } else {

      button.innerText = option;

    }

    // SINGLE SELECT

    if (current.type === "single") {

  button.addEventListener("click", () => {

    // LAST QUESTION

    if (currentQuestion === questions.length - 1) {

      document
        .querySelectorAll(".optionBtn")
        .forEach(btn => btn.classList.remove("selected"));

      button.classList.add("selected");

      selectedFinalAnswer = optionValue;

    }

    // ALL OTHER QUESTIONS

    else {

      saveAnswer(optionValue);

    }

  });

}

    // MULTI SELECT

    if (current.type === "multi") {

      button.addEventListener("click", () => {

        // REMOVE SELECTION

        if (multiAnswers.includes(optionValue)) {

          multiAnswers = multiAnswers.filter(
            item => item !== optionValue
          );

          button.classList.remove("selected");

        }

        // ADD SELECTION

        else {

          if (multiAnswers.length < 2) {

            multiAnswers.push(optionValue);

            button.classList.add("selected");

          }

          else {

            alert("Please select a maximum of 2 target groups.");

          }

        }

      });

    }

    optionsContainer.appendChild(button);

  });

  // ADD CONTINUE BUTTON FOR MULTI SELECT

if (current.type === "multi") {

  const continueBtn = document.createElement("button");

  continueBtn.innerText = "Continue";

  continueBtn.classList.add("continueBtn");

  continueBtn.addEventListener("click", () => {

    saveAnswer(multiAnswers);

  });

  optionsContainer.appendChild(continueBtn);

}

  // LAST QUESTION SUBMIT BUTTON

if (currentQuestion === questions.length - 1) {

  const submitBtn = document.createElement("button");

  submitBtn.innerText = "Submit Assessment";

  submitBtn.addEventListener("click", () => {

    if (!selectedFinalAnswer) {

      alert("Please select an option.");

      return;

    }

    saveAnswer(selectedFinalAnswer);

  });

  optionsContainer.appendChild(submitBtn);

}
 
// BACK BUTTON

if (currentQuestion > 0) {

  const backBtn = document.createElement("button");

  backBtn.innerText = "← Back";

  backBtn.classList.add("secondaryBtn");

  backBtn.addEventListener("click", goBack);

  optionsContainer.appendChild(backBtn);

}

}

function goBack() {

  if (currentQuestion > 0) {

    currentQuestion--;

    answers.pop();

    resetScores();

    answers.forEach(item => {

      updateScores(item.answer);

    });

    loadQuestion();

  }

}


// SAVE ANSWERS

function saveAnswer(answer) {

  answers.push({
    question: questions[currentQuestion].question,
    answer: answer
  });


  updateScores(answer);


  currentQuestion++;

  if (currentQuestion < questions.length) {

    loadQuestion();

  } else {

    showResults();

  }

}


// SCORING LOGIC

function updateScores(answer) {

  const answerArray = Array.isArray(answer)
    ? answer
    : [answer];


  answerArray.forEach(item => {

    // CSR FOCUS AREA

    if (item === "Education") {

      productScores.sfcEducation += 5;
      productScores.SFCpathwayz += 4;
      productScores.digital += 3;
      productScores.pathwayz += 1;

    }

    if (item === "Health & Well-being") {

      productScores.sfcHealth += 12;
      productScores.SFCpathwayz += 4;
      productScores.digital += 3;
      productScores.sfcEducation += 1;

    }

    if (item === "Gender Equality") {

      productScores.sfcGender += 15;
      productScores.SFCpathwayz += 3;
      productScores.shakti += 6;
      productScores.pathwayz += 1;

    }

    if (item === "Livelihoods & Employability") {

      productScores.pathwayz += 5;
      productScores.SFCpathwayz += 4;
      productScores.pathwayz36 += 3;

    }


    // CSR DRIVER

    if (item === "Creating measurable social impact") {

      productScores.sfcEducation += 5;
      productScores.sfcHealth += 5;
      productScores.sfcGender += 5;
      productScores.SFCpathwayz += 4;
      productScores.pathwayz += 3;

    }

    if (item === "Strengthening community relationships") {

      productScores.pathwayz += 25;
      productScores.SFCpathwayz += 15;
      productScores.pathwayz36 += 10;
      productScores.sfcEducation -= 5;
      productScores.sfcHealth -= 5;
      productScores.sfcGender -= 5;

    }

    if (item === "Leveraging technology") {

      productScores.digital += 10;

    }

    if (item === "Brand visibility and positioning") {

      productScores.pathwayz += 15;
      productScores.SFCpathwayz += 5;
      productScores.pathwayz36 += 7;
      productScores.shakti += 1;
      productScores.yogdaan += 3;

    }

    if (item === "Employee engagement") {

      productScores.yogdaan += 5;

    }


    // TARGET GROUPS

    if (item === "School children") {

      productScores.sfcEducation += 5;
      productScores.sfcHealth += 5;
      productScores.SFCpathwayz += 4;
      productScores.digital += 3;
      productScores.pathwayz += 1;

    }

    if (item === "Adolescents / youth") {

      productScores.pathwayz += 4;
      productScores.SFCpathwayz += 5
      productScores.pathwayz36 += 1;

    }

    if (item === "Women & girls") {

      productScores.sfcGender += 70;
      productScores.SFCpathwayz += 4;
      productScores.shakti += 30;
      productScores.pathwayz += 1;

    }

    if (item === "Rural communities") {

      productScores.pathwayz += 15;
      productScores.pathwayz36 += 10;
      productScores.SFCpathwayz += 8;

    }

    if (item === "Urban underserved communities") {

      productScores.pathwayz += 5;
      productScores.SFCpathwayz += 5;
      productScores.sfcEducation += 3;
      productScores.sfcHealth += 3;

    }


    // INVESTMENT LEVEL

    if (item === "₹25 – 40 lakhs") {

      productScores.digital += 5;
      productScores.sfcEducation += 3;
      productScores.sfcHealth += 3;
      productScores.pathwayz36 += 1;

    }

    if (item === "₹40 – 80 lakhs") {

      productScores.sfcEducation += 4;
      productScores.SFCpathwayz += 5;
      productScores.sfcHealth += 4;
      productScores.pathwayz += 3;
      productScores.pathwayz36 += 1;

    }

    if (item === "₹80 lakhs – ₹1.2 crores") {

      productScores.sfcEducation += 4;
      productScores.SFCpathwayz += 5;
      productScores.sfcHealth += 4;
      productScores.pathwayz += 2;
      productScores.pathwayz36 += 1;

    }

    if (item === "Above ₹1.2 crores") {

      productScores.pathwayz += 4;
      productScores.SFCpathwayz += 5;
      productScores.pathwayz36 += 3;

    }


    // GEOGRAPHY

    if (item === "Single location") {

      productScores.sfcEducation += 5;
      productScores.SFCpathwayz += 4;
      productScores.sfcHealth += 5;
      productScores.shakti += 3;
      productScores.pathwayz += 1;

    }

    if (item === "Multiple locations") {

      productScores.digital += 5;
      productScores.SFCpathwayz += 4;
      productScores.pathwayz += 3;
      productScores.pathwayz += 1;

    }

    if (item === "Not decided yet") {

      productScores.sfcEducation += 5;
      productScores.SFCpathwayz += 5;
      productScores.sfcHealth += 5;
      productScores.pathwayz += 3;
        }


    // SCALE

    if (item === "100 - 500 participants") {

      productScores.pathwayz += 5;
      productScores.pathwayz36 += 3;
      productScores.shakti += 1;

    }

    if (item === "500 - 2,000 participants") {

      productScores.pathwayz += 3;
      productScores.SFCpathwayz += 5;
      productScores.sfcEducation += 3;
      productScores.sfcHealth += 3;

    }

    if (item === "2,000 - 5,000 participants") {

      productScores.sfcEducation += 4;
      productScores.SFCpathwayz += 5;
      productScores.sfcHealth += 4;
      productScores.pathwayz += 2;
      productScores.digital += 1;

    }

    if (item === "5,000+ participants") {

      productScores.digital += 5;
      productScores.SFCpathwayz += 4;
      productScores.sfcEducation += 2;
      productScores.sfcHealth += 2;

    }

  });


  // COMBINATION RULES

  const allAnswers = answers.map(a => a.answer).flat();


  // HIGH SCALE + LOW BUDGET

  if (
    allAnswers.includes("5,000+ participants")
    &&
    (
      allAnswers.includes("₹25 – 40 lakhs")
      ||
      allAnswers.includes("₹40 – 80 lakhs")
    )
  ) {

    productScores.digital += 5;

  }


  // BRAND VISIBILITY + HIGH BUDGET

  if (
    allAnswers.includes("Brand visibility and positioning")
    &&
    allAnswers.includes("Above ₹1.2 crores")
  ) {

    productScores.pathwayz += 10;
    productScores.SFCpathwayz += 8;
    productScores.pathwayz36 += 6;

  }


  // BRAND VISIBILITY + WOMEN & GIRLS

  if (
    allAnswers.includes("Brand visibility and positioning")
    &&
    allAnswers.includes("Women & girls")
  ) {

    productScores.shakti += 7;

  }

// TECHNOLOGY SHOULD PRIORITIZE DIGITAL

if (
  allAnswers.includes("Leveraging technology")
) {

  productScores.digital += 10;

}
  
  // TECHNOLOGY + MULTIPLE LOCATIONS

  if (
    allAnswers.includes("Leveraging technology")
    &&
    allAnswers.includes("Multiple locations")
  ) {

    productScores.digital += 5;

  }

  // EDUCATION PRIORITY

if (
  allAnswers.includes("Education")
) {

  productScores.sfcEducation += 7;
  productScores.SFCpathwayz += 5;

}

// HEALTH PRIORITY

if (
  allAnswers.includes("Health & Well-being")
) {

    productScores.sfcHealth += 15;
   productScores.SFCpathwayz += 6;

  productScores.sfcEducation -= 4;

}

// GENDER + WOMEN & GIRLS

if (
  allAnswers.includes("Gender Equality")
  &&
  allAnswers.includes("Women & girls")
) {

  productScores.sfcGender += 10;
  productScores.shakti += 8;
  productScores.SFCpathwayz += 6;

}

// TECHNOLOGY + GENDER

if (
  allAnswers.includes("Leveraging technology")
  &&
  allAnswers.includes("Gender Equality")
) {

  productScores.digital += 12;
  productScores.sfcGender += 6;

}

// GENDER + COMMUNITY RELATIONSHIPS

if (
  allAnswers.includes("Gender Equality")
  &&
  allAnswers.includes("Strengthening community relationships")
) {

  productScores.sfcGender += 5;
  productScores.SFCpathwayz += 8;

}

  // COMMUNITY + HIGHER BUDGET

  if (
    allAnswers.includes("Strengthening community relationships")
    &&
    (
      allAnswers.includes("₹80 lakhs – ₹1.2 crores")
      ||
      allAnswers.includes("Above ₹1.2 crores")
    )
  ) {

    productScores.SFCpathwayz += 4;

  }


  // COMMUNITY + LOWER BUDGET

  if (
    allAnswers.includes("Strengthening community relationships")
    &&
    (
      allAnswers.includes("₹25 – 40 lakhs")
      ||
      allAnswers.includes("₹40 – 80 lakhs")
    )
  ) {

    productScores.pathwayz += 4;

  }

// COMMUNITY RELATIONSHIPS PRIORITY

if (
  allAnswers.includes("Strengthening community relationships")
) {

  productScores.pathwayz += 15;
  productScores.SFCpathwayz += 12;

  productScores.sfcEducation -= 8;
  productScores.sfcHealth -= 8;
}

  // GENDER + SOCIAL IMPACT

  if (
    allAnswers.includes("Gender Equality")
    &&
    allAnswers.includes("Creating measurable social impact")
  ) {

    productScores.sfcGender += 5;
    productScores.shakti += 4;

  }

}

function saveAssessmentData(actionType, primaryTitle, secondaryTitle) {

console.log({
  csrFocus: answers[0]?.answer,
  driver: answers[1]?.answer,
  targetGroups: answers[2]?.answer,
  investment: answers[3]?.answer,
  geography: answers[4]?.answer,
  scale: answers[5]?.answer
});
  
  fetch(
    "https://script.google.com/macros/s/AKfycbxew32iGT4elsm5gQmfoN9RTvIsdjShovC7wtxSkuNlIvS4B5A5HMSzAGG3zwUSCpvz/exec",
    {
      method: "POST",
      body: JSON.stringify({

        name: leadData.name,
        organization: leadData.organization,
        email: leadData.email,
        designation: leadData.designation,
        phone: leadData.phone,

        csrFocus: answers[0]?.answer || "",
        driver: answers[1]?.answer || "",

        targetGroups: Array.isArray(answers[2]?.answer)
          ? answers[2].answer.join(", ")
          : answers[2]?.answer || "",

        investment: answers[3]?.answer || "",
        geography: answers[4]?.answer || "",
        scale: answers[5]?.answer || "",

        primaryRecommendation: primaryTitle || "",
        secondaryRecommendation: secondaryTitle || "",

        action: actionType

      })
    }
  );

}


// SHOW RESULTS

function showResults() {

  const sortedProducts = Object.entries(productScores)

    .sort((a, b) => b[1] - a[1]);


  const primary = sortedProducts[0][0];

  const secondary = sortedProducts[1][0];


  const primaryProduct = productDetails[primary];

  const secondaryProduct = productDetails[secondary];

saveAssessmentData(
  "Assessment Completed",
  primaryProduct.title,
  secondaryProduct.title
);
  
  questionScreen.innerHTML = `

 <h2>Your Recommended Sport-Based Approaches</h2>

<p class="resultsIntro">
  Based on your responses, the following sport-based approaches appear most aligned to your CSR priorities, target groups, implementation preferences, and intended scale of outreach.
</p>

    <div class="resultCard">

      <div class="resultLabel">
        Primary Recommendation
      </div>
      

      <h3>${primaryProduct.title}</h3>

     <h4>Why this approach aligns with your priorities</h4>

<div class="contentBlock">
  ${primaryProduct.fit}
</div>

<h4>What these programs typically involve</h4>

<div class="contentBlock">
  ${primaryProduct.model}
</div>

${primaryProduct.evidence ? `
<h4>What does research and implementation experience suggest?</h4>

<div class="contentBlock">
  ${primaryProduct.evidence}
</div>
` : ""}

<h4>Potential impact areas</h4>

<ul class="impactList">

  ${primaryProduct.impacts.map(
    impact => `<li>${impact}</li>`
  ).join("")}

</ul>

${primaryProduct.example ? `
<h4>Looking for an example of how this can work in practice?</h4>

<div class="contentBlock">
  ${primaryProduct.example}
</div>
` : ""}

${primaryProduct.svfImpact ? `
<h4>What does evidence from implementation show?</h4>

<ul class="impactList">

  ${primaryProduct.svfImpact.map(
    impact => `<li>${impact}</li>`
  ).join("")}

</ul>
` : ""}

      </div>

<div class="recommendationDivider"></div>

<div class="resultCard">

  <div class="resultLabel">
    Secondary Recommendation
  </div>

  <h3>${secondaryProduct.title}</h3>

  <h4>Why this approach aligns with your priorities</h4>

  <p>
    ${secondaryProduct.fit}
  </p>

  <h4>What these programs typically involve</h4>

  <p>
    ${secondaryProduct.model}
  </p>

  ${secondaryProduct.evidence ? `
  <h4>What does research and implementation experience suggest?</h4>

  <p>
    ${secondaryProduct.evidence}
  </p>
  ` : ""}

  <h4>Potential impact areas</h4>

  <ul class="impactList">

    ${secondaryProduct.impacts.map(
      impact => `<li>${impact}</li>`
    ).join("")}

  </ul>

  ${secondaryProduct.example ? `
  <h4>Looking for an example of how this can work in practice?</h4>

  <p>
    ${secondaryProduct.example}
  </p>
  ` : ""}

  ${secondaryProduct.svfImpact ? `
  <h4>What does evidence from implementation show?</h4>

  <ul class="impactList">

    ${secondaryProduct.svfImpact.map(
      impact => `<li>${impact}</li>`
    ).join("")}

  </ul>
  ` : ""}
  
    </div>


    <div class="ctaSection">

  <button id="proposalBtn">
    Request Detailed Proposal
  </button>

  <button id="demoBtn">
    Request a Live Virtual Walkthrough
  </button>

  <button class="secondaryBtn" onclick="location.reload()">
    Retake Assessment
  </button>

</div>

    <div class="footerNote">
      This diagnostic is intended as an exploratory recommendation tool and can be further refined through detailed discussions based on your implementation priorities and context.
    </div>

  `;

document
  .getElementById("proposalBtn")
  .addEventListener("click", () => {

    saveAssessmentData(
      "Proposal Request",
      primaryProduct.title,
      secondaryProduct.title
    );

    alert(
      "Thank you for your interest. A member of the Sportz Village Foundation team will contact you regarding a detailed proposal."
    );

});

document
  .getElementById("demoBtn")
  .addEventListener("click", () => {

    saveAssessmentData(
      "Live Virtual Walkthrough Request",
      primaryProduct.title,
      secondaryProduct.title
    );

    alert(
      "Thank you for your interest. A member of the Sportz Village Foundation team will contact you to schedule a virtual walkthrough."
    );

});
  }
