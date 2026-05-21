const startBtn = document.getElementById("startBtn");

const landingScreen = document.getElementById("landingScreen");

const questionScreen = document.getElementById("questionScreen");

const questionTitle = document.getElementById("questionTitle");

const optionsContainer = document.getElementById("optionsContainer");

const progressText = document.getElementById("progressText");


// QUESTIONS

const questions = [

  {
    question: "What is your primary CSR focus area?",
    type: "single",
    options: [
      "Education",
      "Health & Well-being",
      "Gender Equality",
      "Livelihoods & Employability"
    ]
  },

  {
    question: "What primarily drives your CSR investments?",
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
    question: "Who are your primary target groups?",
    type: "multi",
    options: [
      "School children",
      "Adolescents / youth",
      "Women & girls",
      "Rural communities",
      "Urban underserved communities"
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
      "2,000 - 10,000 participants",
      "10,000+ participants"
    ]
  }

];

const productDetails = {

  sfcEducation: {

    title: "SFC (Education)",

    fit: "Based on your focus on education, school engagement, and measurable youth development outcomes, SFC uses sport as a tool to improve participation, attendance, confidence, and holistic development among children and adolescents.",

    model: "Implemented through schools and community ecosystems, the program combines structured sport sessions with evidence-based physical literacy and life skills curricula to create more engaging and inclusive learning environments. The model is particularly effective in underserved communities where traditional approaches often struggle to sustain participation and motivation.",

    impacts: [
      "Improved student engagement and attendance",
      "Increased participation in school and community activities",
      "Development of life skills and social-emotional competencies",
      "Improved confidence and peer relationships"
    ]

  },

  sfcHealth: {

    title: "SFC (Health)",

    fit: "Based on your focus on health and well-being, SFC uses sport and movement-based engagement to promote healthier lifestyles, physical literacy, and overall wellness among children and young people.",

    model: "Implemented through schools and community ecosystems, the program combines structured sport sessions with evidence-based physical literacy and life skills curricula to encourage active participation, healthy habits, and positive behavioral change. The model is especially relevant in communities with limited access to safe physical activity opportunities or increasing sedentary lifestyles.",

    impacts: [
      "Increased physical activity and participation",
      "Improved physical fitness, BMI, and well-being indicators",
      "Improved confidence and participation among children and youth",
      "Increased awareness around health and wellness"
    ]

  },

  sfcGender: {

    title: "SFC (Gender)",

    fit: "Based on your focus on gender inclusion and empowerment, SFC uses sport to create safe and inclusive spaces where girls can build confidence, agency, leadership, and social participation.",

    model: "Delivered through schools and community settings, the program combines structured sport engagement with mentorship and self-defense components to encourage participation, self-expression, and positive social interaction among children and adolescents. The model is particularly relevant in contexts where girls have limited access to safe physical activity and developmental opportunities.",

    impacts: [
      "Improved confidence, agency, and leadership skills among girls",
      "Increased participation in social spaces and self-expression",
      "Improved school attendance and retention among adolescent girls",
      "Enhanced physical and emotional well-being",
      "Increased future readiness and employability potential"
    ]

  },

  shakti: {

    title: "SHAKTI",

    fit: "Based on your focus on gender empowerment and safe participation spaces for girls, SHAKTI uses self-defense and confidence-building approaches to strengthen agency, resilience, and personal safety awareness among adolescent girls.",

    model: "Designed for girls aged 10 and above, the module combines practical self-defense training with guided sessions focused on emotional resilience, confidence, and responding to unsafe situations. The initiative helps girls build both physical preparedness and mental resilience within a safe and supportive environment.",

    impacts: [
      "Improved confidence and self-agency among girls",
      "Increased preparedness to respond to unsafe situations",
      "Greater emotional resilience and mental well-being",
      "Increased awareness around personal safety and well-being"
    ]

  },

  pathwayz: {

    title: "SFC + PathwayZ",

    fit: "Based on your focus on long-term youth development and measurable impact at scale, SFC + PathwayZ combines foundational sport-based development with structured aspirational pathways for young people.",

    model: "The model begins with broad-based sport engagement focused on participation, life skills, leadership, and holistic development. Participants demonstrating interest and potential can then access structured training, mentorship, competitive exposure, and progression opportunities through PathwayZ. This integrated approach enables deeper long-term engagement while strengthening community aspiration and visibility.",

    impacts: [
      "Increased youth participation and retention",
      "Development of life skills and leadership competencies",
      "Structured pathways for talented young athletes",
      "Greater community aspiration and engagement",
      "Opportunities for long-term youth development and progression"
    ]

  },

  pathwayz36: {

    title: "PathwayZ36",

    fit: "Based on your focus on high-visibility youth development and aspirational outcomes, PathwayZ36 supports high-potential athletes with the resources and exposure required to progress within competitive sport ecosystems.",

    model: "The initiative provides targeted support to talented grassroots athletes through training assistance, competition exposure, mentorship, and access opportunities. By reducing barriers to progression, the model enables young athletes to continue pursuing excellence while also creating visible role models that inspire broader community aspiration.",

    impacts: [
      "Support for high-potential athletes and competitive pathways",
      "Increased visibility through athlete achievement and representation",
      "Strengthened opportunities for long-term athlete development",
      "Enhanced aspiration and engagement through sport excellence"
    ]

  },

  digital: {

    title: "Digital Edusports",

    fit: "Based on your interest in technology-enabled implementation and scalable outreach, Digital Edusports enables structured sport and movement-based learning across multiple geographies through a cost-effective digital delivery model.",

    model: "The initiative combines digital content, facilitator training, and guided implementation support to help schools and communities deliver engaging sport and life skills experiences at scale. The model is particularly suitable for large participant groups and distributed implementation contexts.",

    impacts: [
      "Expanded access to structured sport and movement-based learning",
      "Capacity building for teachers and youth leaders",
      "Cost-effective and scalable implementation",
      "Improved engagement through interactive digital delivery"
    ]

  },

  yogdaan: {

    title: "Yogdaan",

    fit: "Based on your focus on employee engagement and community connection, Yogdaan creates meaningful volunteering opportunities that enable employees to contribute directly to social impact initiatives through sport and community participation.",

    model: "The initiative engages employees through structured volunteering activities, mentorship opportunities, community events, and sport-based engagement formats. Designed to strengthen both employee participation and organizational culture, the model helps build stronger connections between employees, communities, and CSR priorities.",

    impacts: [
      "Increased employee participation and engagement",
      "Stronger employee-community connections",
      "Enhanced organizational culture and purpose-driven participation",
      "Greater visibility and involvement in community initiatives"
    ]

  }

};
// PRODUCT SCORES

const productScores = {

  sfcEducation: 0,
  sfcHealth: 0,
  sfcGender: 0,
  shakti: 0,
  pathwayz: 0,
  pathwayz36: 0,
  digital: 0,
  yogdaan: 0

};


// TRACKING

let currentQuestion = 0;

let answers = [];

let multiAnswers = [];


// START BUTTON

startBtn.addEventListener("click", () => {

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

    button.innerText = option;


    // SINGLE SELECT

    if (current.type === "single") {

      button.addEventListener("click", () => {

        saveAnswer(option);

      });

    }


    // MULTI SELECT

    if (current.type === "multi") {

  button.addEventListener("click", () => {

    // REMOVE SELECTION

    if (multiAnswers.includes(option)) {

      multiAnswers = multiAnswers.filter(item => item !== option);

      button.classList.remove("selected");

    }

    // ADD SELECTION

    else {

      if (multiAnswers.length < 2) {

        multiAnswers.push(option);

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
      productScores.digital += 3;
      productScores.pathwayz += 1;

    }

    if (item === "Health & Well-being") {

      productScores.sfcHealth += 5;
      productScores.digital += 3;
      productScores.sfcEducation += 1;

    }

    if (item === "Gender Equality") {

      productScores.sfcGender += 5;
      productScores.shakti += 3;
      productScores.pathwayz += 1;

    }

    if (item === "Livelihoods & Employability") {

      productScores.pathwayz += 5;
      productScores.pathwayz36 += 3;

    }


    // CSR DRIVER

    if (item === "Creating measurable social impact") {

      productScores.sfcEducation += 5;
      productScores.sfcHealth += 5;
      productScores.sfcGender += 5;

      productScores.pathwayz += 3;

    }

    if (item === "Strengthening community relationships") {

      productScores.pathwayz += 5;
      productScores.pathwayz36 += 1;
      productScores.pathwayz += 3;

    }

    if (item === "Leveraging technology") {

      productScores.digital += 5;

    }

    if (item === "Brand visibility and positioning") {

      productScores.pathwayz += 5;
      productScores.pathwayz36 += 3;
      productScores.shakti += 1;

    }

    if (item === "Employee engagement") {

      productScores.yogdaan += 5;

    }


    // TARGET GROUPS

    if (item === "School children") {

      productScores.sfcEducation += 5;
      productScores.sfcHealth += 5;
      productScores.digital += 3;
      productScores.pathwayz += 1;

    }

    if (item === "Adolescents / youth") {

      productScores.pathwayz += 5;
      productScores.pathwayz36 += 1;

    }

    if (item === "Women & girls") {

      productScores.sfcGender += 5;
      productScores.shakti += 3;
      productScores.pathwayz += 1;

    }

    if (item === "Rural communities") {

      productScores.pathwayz += 5;
      productScores.pathwayz36 += 3;
      productScores.pathwayz += 1;

    }

    if (item === "Urban underserved communities") {

      productScores.pathwayz += 5;
      productScores.sfcEducation += 3;
      productScores.sfcHealth += 3;
      productScores.pathwayz += 1;

    }


    // INVESTMENT LEVEL

    if (item === "₹25 – 40 lakhs") {

      productScores.digital += 5;
      productScores.sfcEducation += 3;
      productScores.sfcHealth += 3;
      productScores.pathwayz36 += 1;

    }

    if (item === "₹40 – 80 lakhs") {

      productScores.sfcEducation += 5;
      productScores.sfcHealth += 5;
      productScores.pathwayz += 3;
      productScores.pathwayz36 += 1;

    }

    if (item === "₹80 lakhs – ₹1.2 crores") {

      productScores.sfcEducation += 5;
      productScores.sfcHealth += 5;
      productScores.pathwayz += 3;
      productScores.pathwayz36 += 1;

    }

    if (item === "Above ₹1.2 crores") {

      productScores.pathwayz += 5;
      productScores.pathwayz36 += 3;
      productScores.pathwayz += 1;

    }


    // GEOGRAPHY

    if (item === "Single location") {

      productScores.sfcEducation += 5;
      productScores.sfcHealth += 5;
      productScores.shakti += 3;
      productScores.pathwayz += 1;

    }

    if (item === "Multiple locations") {

      productScores.digital += 5;
      productScores.pathwayz += 3;
      productScores.pathwayz += 1;

    }

    if (item === "Not decided yet") {

      productScores.sfcEducation += 5;
      productScores.sfcHealth += 5;
      productScores.pathwayz += 3;
      productScores.pathwayz += 1;

    }


    // SCALE

    if (item === "100 - 500 participants") {

      productScores.pathwayz += 5;
      productScores.pathwayz36 += 3;
      productScores.shakti += 1;

    }

    if (item === "500 - 2,000 participants") {

      productScores.pathwayz += 5;
      productScores.sfcEducation += 3;
      productScores.sfcHealth += 3;
      productScores.pathwayz += 1;

    }

    if (item === "2,000 - 10,000 participants") {

      productScores.sfcEducation += 5;
      productScores.sfcHealth += 5;
      productScores.pathwayz += 3;
      productScores.digital += 1;

    }

    if (item === "10,000+ participants") {

      productScores.digital += 5;
      productScores.pathwayz += 3;
      productScores.sfcEducation += 1;
      productScores.sfcHealth += 1;

    }

  });


  // COMBINATION RULES

  const allAnswers = answers.map(a => a.answer).flat();


  // HIGH SCALE + LOW BUDGET

  if (
    allAnswers.includes("10,000+ participants")
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

    productScores.pathwayz += 5;

  }


  // BRAND VISIBILITY + WOMEN & GIRLS

  if (
    allAnswers.includes("Brand visibility and positioning")
    &&
    allAnswers.includes("Women & girls")
  ) {

    productScores.shakti += 4;

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

  productScores.sfcEducation += 10;

}

// HEALTH PRIORITY

if (
  allAnswers.includes("Health & Well-being")
) {

    productScores.sfcHealth += 15;

  productScores.sfcEducation -= 4;

}

// GENDER + WOMEN & GIRLS

if (
  allAnswers.includes("Gender Equality")
  &&
  allAnswers.includes("Women & girls")
) {

  productScores.sfcGender += 8;
  productScores.shakti += 6;

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
  productScores.pathwayz += 8;

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

    productScores.pathwayz += 4;

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
// SHOW RESULTS

function showResults() {

  const sortedProducts = Object.entries(productScores)

    .sort((a, b) => b[1] - a[1]);


  const primary = sortedProducts[0][0];

  const secondary = sortedProducts[1][0];


  const primaryProduct = productDetails[primary];

  const secondaryProduct = productDetails[secondary];


  questionScreen.innerHTML = `

 <h2>Your Recommended Sport-Based Approaches</h2>

<p class="resultsIntro">
  Based on your responses, the following sport-based approaches appear most aligned to your CSR priorities, target groups, implementation preferences, and intended scale of outreach.
</p>

    <div class="resultCard">

      <div class="resultLabel">
        Recommended Approach
      </div>

      <h3>${primaryProduct.title}</h3>

      <h4>Why this fits your priorities</h4>

      <p>
        ${primaryProduct.fit}
      </p>

      <h4>How the model works</h4>

      <p>
        ${primaryProduct.model}
      </p>

      <h4>Potential impact areas</h4>

      <ul class="impactList">

        ${primaryProduct.impacts.map(
          impact => `<li>${impact}</li>`
        ).join("")}

      </ul>

    </div>


    <div class="resultCard">

      <div class="resultLabel">
        Additional Approach to Consider
      </div>

      <h3>${secondaryProduct.title}</h3>

      <h4>Why this complements your priorities</h4>

      <p>
        ${secondaryProduct.fit}
      </p>

      <h4>How the model works</h4>

      <p>
        ${secondaryProduct.model}
      </p>

      <h4>Potential impact areas</h4>

      <ul class="impactList">

        ${secondaryProduct.impacts.map(
          impact => `<li>${impact}</li>`
        ).join("")}

      </ul>

    </div>


    <div class="ctaSection">

      <button>
        Request Detailed Proposal
      </button>

      <button class="secondaryBtn" onclick="location.reload()">
        Retake Assessment
      </button>

   </div>

    <div class="footerNote">
      This diagnostic is intended as an exploratory recommendation tool and can be further refined through detailed discussions based on your implementation priorities and context.
    </div>

  `;

}
