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

    title: "School-Based Sport for Development Programming",

    fit: "Based on your focus on education and long-term impact, structured sport programs in schools can help improve student engagement, participation, confidence, and overall development among children and adolescents. Schools provide a strong and scalable entry point for introducing structured sport because children are already part of a regular learning environment and can participate consistently over time.",

    model: "Sport for development programs use sport, movement, and structured play as tools to help children build important life skills alongside physical and emotional development. Similar to other school subjects, these sessions are planned, goal-oriented, and delivered regularly through physical education and structured activity periods.
Programs are usually implemented in partnership with government schools or charity-aided schools, and delivered by trained facilitators who understand both sport-based learning and child development. Effective models also work closely with teachers, school leaders, and parents by conducting workshops, sports days, and other dialogues to strengthen awareness around the value of structured sport participation and holistic child development.
Research from multiple school-based sport initiatives globally has shown positive links between structured sport participation and improvements in attendance, classroom engagement, teamwork, confidence, and social-emotional learning among children and adolescents.",

    impacts: [
      "Improved student engagement and school attendance",
      "Increased participation in school and physical activity programs",
      "Development of teamwork, leadership, and life skills",
      "Improved confidence and peer interaction"
    ],

  example: "SVF currently implements school-based sport for development initiatives across 22+ states in India, reaching over 80,000 young people annually through structured sport and physical education programming. Through the Sport for Change initiative, SVF delivers the EduSports curriculum for children in Grades 1-6, focused on foundational movement and physical literacy development. For adolescents in Grades 6-9, the MILES curriculum supports leadership, life skills, and youth development through sport-based engagement.",

  svfImpact: [
    "22% improvement in students' likelihood of achieving higher grades",
    "9% improvement in classroom attendance",
    "12% increase in active classroom participation over the academic year"
  ]
  },

  sfcHealth: {

    title: "School-Based Sport and Physical Activity Programming",

    fit: "Based on your focus on health and well-being, structured sport and physical activity programs in schools can help children build healthier habits, improve physical fitness, and increase regular participation in movement-based activities from an early age. Schools provide an effective setting for introducing consistent and structured physical activity because children can participate regularly within a familiar learning environment.
Early exposure to multiple sports and movement experiences is also strongly linked to higher likelihood of lifelong participation in physical activity and healthier lifestyle behaviors in later years. Regular participation in structured sport has been linked to improvements in cardiovascular health, flexibility, endurance, mobility, confidence, and overall physical well-being among children and adolescents.
This type of intervention is becoming increasingly important in India, where recent studies continue to highlight rising levels of physical inactivity among children and young people. Sportz Village’s 13th Annual Health Survey (AHS) also revealed that nearly 2 in 5 children were found to have an unhealthy BMI.",

    model: "School-based sport and physical activity programs use structured sport, movement, and play to improve physical literacy, fitness, confidence, and overall well-being among children and adolescents. Similar to other school subjects, these sessions are planned, age-appropriate, and delivered regularly through physical education periods and structured activity sessions.
Programs are usually delivered by trained facilitators and coaches who understand child development, physical literacy, and safe sport participation. Effective models also work with teachers, school leaders, and parents to strengthen awareness around the importance of regular physical activity and healthy lifestyles.",

    impacts: [
      "Increased participation in regular physical activity",
      "Improved cardiovascular fitness, flexibility, and endurance",
      "Improved physical literacy and movement confidence",
      "Increased awareness around health and well-being"
    ],

  example: "SVF currently implements structured school and community-based sport and physical activity initiatives across 22+ states in India, reaching over 80,000 young people annually through physical literacy, sport participation, and youth development programming.",

  svfImpact: [
    "9% improvement in Fitness Quotient (FQ), including strength, endurance, and flexibility",
    "31% increase in weekly physical activity beyond school hours",
    "5% increase in students maintaining a healthy BMI over the course of the academic year"
  ]
  },

  sfcGender: {

    title: "Gender-Responsive School-Based Sport Programming",

    fit: "Based on your focus on gender equality and inclusion, structured sport programs in schools can help create safe and supportive spaces where girls build confidence, leadership skills, self-expression, and greater participation in school and community life. Schools provide an effective environment for introducing regular mixed-gender sport participation because they allow children and adolescents to engage consistently within familiar and supervised settings.
When designed intentionally, mixed-gender sport programs can help improve comfort in interaction, strengthen mutual respect, and challenge harmful stereotypes around gender roles and participation from an early age.",

    model: "Gender-responsive sport for development programs use structured and intentional sport, movement, and play-based learning to strengthen both physical and social-emotional development among children and adolescents. Sessions are usually age-appropriate, inclusive, and carefully designed to encourage safe and positive mixed-gender interaction through teamwork, communication, leadership, and collaborative play.
Programs are typically delivered by trained facilitators who understand child development, safe sport participation, and gender-responsive approaches. In addition to regular sport participation, sessions are often linked with conversations and awareness around menstrual health and hygiene practices, emotional well-being, gender stereotypes, and respectful interaction - engaging both girls and boys through experiential and play-based learning approaches. Engagement sessions are also conducted with parents and other community members to share learnings around the importance of physical activity for all genders - and how it contributes to personal, professional and social lives.
Evidence from multiple sport for development initiatives globally suggests that structured sport participation in mixed-gender settings can contribute to greater confidence, leadership development, trust-building, and improved social interaction among girls and adolescents.",

    impacts: [
      "Improved confidence, agency, and leadership skills among participating girls",
      "Increased participation in social spaces and self-expression",
      "Improved school attendance and retention, particularly among adolescent girls",
      "Greater awareness and understanding around gender inclusion and stereotypes"
    ],

  example: "Through the Sport for Change initiative, SVF implements mixed-gender school and community-based sport programming designed to create safe and inclusive participation spaces for girls and adolescents. In addition to regular structured sport participation, girls are also provided leadership opportunities through the MILES curriculum, where adolescents lead sessions, activities, and peer engagement initiatives within schools and communities.
SVF currently implements sport for development initiatives across 22+ states in India, reaching over 80,000 young people annually (50% being girls).",

  svfImpact: [
    "49% improvement in social-emotional learning (SEL) indicators, including interacting with others, taking initiative, managing conflicts, overcoming difficulties, and following instructions",
    "9% improvement in Fitness Quotient (FQ) among participating girls",
    "5% improvement in healthy BMI indicators among girls, and increased participation in play and physical activity beyond school hours"
  ]
  },

  shakti: {

    title: "Self-Defense and Safety Awareness Workshops for Girls",

    fit: "Based on your focus on gender empowerment and safe participation spaces for girls, self-defense workshops can help girls build confidence, personal safety awareness, resilience, and the ability to respond to potentially unsafe situations. These interventions are often effective as short-term or high-reach engagement models that can be delivered across schools, communities, and youth spaces.
In addition to physical preparedness, such workshops also help girls strengthen self-confidence, emotional resilience, and awareness around personal safety and well-being.",

    model: "Self-defense workshops are designed to introduce girls to practical techniques that help them respond confidently and safely in uncomfortable or potentially unsafe situations. Alongside physical self-defense skills, sessions also include conversations around emotional well-being, identifying unsafe situations, responding to mental trauma, confidence-building, and seeking support when required.
Programs are usually delivered through trained facilitators and instructors in safe and supportive environments, often through weekly workshops or short-term engagement formats across schools and community settings. These approaches also enable organizations to reach larger groups of girls within shorter implementation timelines.",

    impacts: [
      "Increased confidence to handle situations physically and remain mentally strong",
      "Girls are prepared on how to handle mental trauma",
      "Enables girls to identify potentially unsafe situations",
],

  example: "SVF currently implements SHAKTI, a structured self-defense and confidence-building module designed for girls and adolescents across school and community settings. The initiative combines practical self-defense learning with awareness and resilience-building approaches to help girls feel safer, more confident, and better prepared in their daily environments.",
  },

SFCpathwayz: {

    title: "Integrated Sport for Development and Excellence Pathway Programming",

    fit: "Based on your focus on long-term impact, community engagement, and youth development at scale, integrated sport for development and sports excellence models can help create both broad-based developmental outcomes and structured aspirational pathways for young people.
These approaches combine foundational sport participation for all children with targeted support for talented young athletes, enabling organizations to create visible community impact while also supporting long-term progression opportunities through sport.
Because meaningful developmental and excellence outcomes require sustained engagement, these models are typically designed as multi-year initiatives with a minimum implementation horizon of three years.",

    model: "The model usually begins with a structured sport for development program delivered through schools and community ecosystems. These foundational programs focus on regular sport participation, physical literacy, social-emotional learning, leadership development, school engagement, and healthy lifestyles among children and adolescents. School sports days/events are also held to promote healthy competition amongst the participants.
Alongside broad-based participation, selected students and youth with demonstrated interest and talent potential are identified for structured sports excellence pathways. These participants receive sport-specific coaching, mentorship, access to training opportunities, and support such as kits, equipment, infrastructure access, tournament participation, trials, and exposure opportunities.
The developmental focus of the foundational layer is centered around improving engagement, confidence, social-emotional learning, and well-being, while the excellence pathway focuses on enabling progression into higher-performance ecosystems such as academies, clubs, district/state pathways, scholarships, and competitive opportunities.",

    impacts: [
      "Increased participation and long-term engagement in structured sport",
      "Improved social-emotional learning, leadership, and life skills",
      "Creation of aspirational pathways for talented young athletes",
      "Access to competitive pathways, scholarships, academies, and progression opportunities"
    ],

  example: "SVF currently implements integrated sport for development and sports excellence initiatives across multiple states in India through its Sport for Change and PathwayZ programming models. These initiatives combine large-scale foundational sport participation with structured athlete identification and development pathways for children and adolescents from underserved communities.
Through long-term school and community engagement, participants receive opportunities for both holistic development and progression within organized sport ecosystems.",

  }

  pathwayz: {

    title: "Community-Based Sports Excellence and Athlete Pathway Programming",

    fit: "Based on your focus on aspirational youth development, community engagement, and visibility through sport, sports excellence pathway programs can help identify and support talented young athletes from underserved communities to progress within organized sport ecosystems.
These approaches are particularly relevant for organizations looking to create visible youth achievement outcomes, strengthen community aspiration, and support long-term athlete development opportunities through structured training and exposure.",

    model: "Sports excellence pathway programs are usually designed to identify young athletes with talent potential through community outreach, grassroots engagement activities, and open trials conducted across schools and community settings.
Selected participants are then enrolled into structured sport-specific training programs delivered through identified training centers and development hubs. These centers are typically strengthened through investments in coaching, equipment, facilities, and athlete support systems to create safe and high-quality learning environments for long-term athlete development.
Participants often also receive support such as kits, nutrition guidance, tournament exposure, mentorship, access to trials and camps, and opportunities to progress into academies, clubs, scholarship programs, and competitive sport pathways. Often, participants and parents are also exposed to career awareness workshops to understand career pathways in and beyond sport.",

    impacts: [
      "Identification and development of talented young athletes",
      "Increased access to structured coaching and training opportunities",
      "Increased community engagement and visibility through athlete progression",
      "GreatStrengthened access to tournaments, trials, camps, and scholarship opportunities"
    ],

  example: "Through PathwayZ, SVF supports community-based athlete identification and development initiatives focused on creating structured pathways for talented young athletes from underserved backgrounds. The initiative combines grassroots outreach and trials with sport-specific coaching, mentorship, and progression support through identified training centers and partner ecosystems.",

  svfImpact: [
    "3,189 student-athletes trained through Sports Development Centers (SDCs)",
    "5,763 competition participations supported across different levels",
    "45 student-athletes linked to academies and High-Performance Learning Centers (HPLCs), and athletes progressing into scholarship, club, and advanced development opportunities",
    "2,099 medals won, including representation at district, state, and national competitions"
  ]
  },

  pathwayz36: {

    title: "High-Performance Athlete Support and Progression Programming",

    fit: "Based on your focus on high-visibility youth development and sports excellence outcomes, athlete support and progression programs can help talented young athletes continue their sporting journeys by reducing financial, structural, and access-related barriers that often limit long-term participation in competitive sport.
These initiatives are particularly relevant for organizations looking to support visible achievement pathways, strengthen athlete progression opportunities, and contribute to representation from underserved communities within higher-performance sport ecosystems.
Because of the specialized nature of support provided, these programs are typically high-investment and high-visibility initiatives focused on a smaller group of athletes with demonstrated competitive potential.",

    model: "High-performance athlete support programs usually work with athletes who are already participating at district, state, or higher competitive levels. Athletes are identified through existing sport networks, federations, academies, competitions, and community outreach processes, with some programs also conducting targeted scouting and trials to identify promising talent requiring support.
Support provided is often holistic and designed to help athletes sustain participation and progression within competitive sport ecosystems. This may include financial stipends, coaching support, physiotherapy and rehabilitation access, nutrition guidance, tournament travel support, training camp participation, mental well-being support, career awareness workshops, and anti-doping education.
The overall objective is not only to improve competitive performance, but also to create safer, more sustainable, and development-oriented pathways for athletes navigating high-performance sport environments.",

    impacts: [
      "Increased access to structured athlete development opportunities",
      "Reduced financial and access-related barriers for talented athletes",
      "Improved participation in competitions, camps, and exposure opportunities",
      "Increased visibility and representation from grassroots communities in competitive sport"
    ],

  example: "Through PathwayZ36, SVF supports athletes already participating within competitive sport ecosystems through structured progression and athlete support initiatives. The program works with athletes, coaches, federations, and partner ecosystems to strengthen access to opportunities, exposure, and long-term athlete development support.
SVF’s broader sports excellence initiatives have supported athlete participation across district, state, and national competitions, while also enabling connections to academies, scholarships, and higher-performance learning environments.",
  },

  digital: {

    title: "Technology-Enabled Sport and Physical Activity Programming",

    fit: "Based on your focus on scalable implementation, technology-enabled delivery, and long-term sustainability, digital sport and physical activity programs can help expand access to structured sport participation across large geographies and participant groups in a cost-effective manner.
These approaches are particularly relevant for organizations looking to strengthen school-based sport ecosystems while building long-term ownership within schools and communities themselves.",

    model: "Technology-enabled sport programs use digital tools, videos, and guided learning resources to help teachers, youth leaders, and community members deliver structured sport and physical activity sessions within schools and community settings.
The model usually begins with capacity-building workshops conducted in partnership with schools, local institutions, and in some cases, state education bodies and government stakeholders. Teachers and youth leaders who demonstrate interest and motivation to lead sport activities are identified and trained through initial and refresher workshops focused on structured sport delivery, physical literacy, and activity facilitation.
Participants are then provided with digital content and guided implementation support that enables them to conduct regular sport and movement-based sessions independently within their own settings.
To strengthen implementation quality and long-term adoption, programs often include an initial handholding phase where trained coordinators or instructors regularly visit schools and communities over a 6-8 month period to provide mentoring, troubleshooting support, and implementation guidance.
Over time, this approach helps schools and communities gradually take ownership of structured sport participation while enabling large-scale outreach and more sustainable implementation models.",

    impacts: [
      "Expanded access to structured sport and physical activity programming",
      "Capacity building for teachers, youth leaders, and community members",
      "Increased sustainability through school and community ownership",
      "Scalable implementation across multiple geographies"
    ],

  example: "Through Digital Edusports, SVF supports technology-enabled sport and physical activity initiatives that combine digital learning tools, facilitator training, and guided implementation support to help schools and communities deliver structured sport programming at scale.
The initiative works closely with teachers, schools, youth leaders, and institutional stakeholders to strengthen long-term ownership and sustainability of structured sport participation models.",
  },

  yogdaan: {

    title: "Employee Engagement Through Sport",

    fit: "Based on your focus on employee engagement and community connection, sport-based volunteering and engagement programs can help employees contribute directly to social impact initiatives while also strengthening teamwork, participation, and organizational culture.
These approaches are particularly effective for organizations looking to create more meaningful employee participation opportunities beyond one-time volunteering activities by enabling employees to engage regularly with children, youth, schools, and communities through interactive and purpose-driven experiences.",

    model: "Corporate employee engagement through sport typically combines volunteering, mentorship, and community participation opportunities within school and community-based sport initiatives.
Employees may participate through activities such as supporting sport events, mentoring young participants, facilitating engagement activities, leading awareness sessions, participating in community sports days, or contributing professional skills and expertise to support implementation.
Programs are usually designed to be flexible and adaptable based on employee availability, organizational priorities, and implementation contexts. Because sport naturally creates interactive and collaborative environments, these initiatives often help strengthen employee participation, team bonding, and connection with communities in a more engaging and informal manner.
Such programs can also be integrated into larger CSR initiatives to strengthen visibility, employee ownership, and long-term organizational involvement in community development efforts.",

    impacts: [
      "Increased employee participation in CSR initiatives",
      "Stronger connection between employees and communities",
      "Improved teamwork, collaboration, and employee engagement",
      "Increased visibility and ownership around social impact initiatives"
    ],

  example: "Through Yogdaan, SVF supports employee engagement initiatives that combine sport, volunteering, mentorship, and community participation across schools and community settings. The initiative is designed to create meaningful engagement opportunities for employees while supporting broader youth development and community impact goals.
Programs can be adapted across different formats depending on organizational priorities, employee participation goals, and target communities.",
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
      productScores.SFCpathwayz += 4;
      productScores.digital += 3;
      productScores.pathwayz += 1;

    }

    if (item === "Health & Well-being") {

      productScores.sfcHealth += 5;
      productScores.SFCpathwayz += 4;
      productScores.digital += 3;
      productScores.sfcEducation += 1;

    }

    if (item === "Gender Equality") {

      productScores.sfcGender += 5;
      productScores.SFCpathwayz += 3;
      productScores.shakti += 4;
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

      productScores.pathwayz += 5;
      productScores.SFCpathwayz += 4;
      productScores.pathwayz36 += 1;

    }

    if (item === "Leveraging technology") {

      productScores.digital += 5;

    }

    if (item === "Brand visibility and positioning") {

      productScores.pathwayz += 5;
      productScores.SFCpathwayz += 4;
      productScores.pathwayz36 += 3;
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

      productScores.pathwayz += 3;
      productScores.SFCpathwayz += 5
      productScores.pathwayz36 += 1;

    }

    if (item === "Women & girls") {

      productScores.sfcGender += 5;
      productScores.SFCpathwayz += 4;
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
      productScores.SFCpathwayz += 4;
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
      productScores.pathwayz += 1;

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
      productScores.pathwayz += 1;

    }

    if (item === "2,000 - 10,000 participants") {

      productScores.sfcEducation += 4;
      productScores.SFCpathwayz += 5;
      productScores.sfcHealth += 4;
      productScores.pathwayz += 2;
      productScores.digital += 1;

    }

    if (item === "10,000+ participants") {

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

    productScores.pathwayz += 4;
    productScores.SFCpathwayz += 5;

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

  productScores.sfcGender += 8;
  productScores.shakti += 6;
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

     <h4>Why this approach aligns with your priorities</h4>

<p>
  ${primaryProduct.fit}
</p>

<h4>What these programs typically involve</h4>

<p>
  ${primaryProduct.model}
</p>

${primaryProduct.evidence ? `
<h4>What does research and implementation experience suggest?</h4>

<p>
  ${primaryProduct.evidence}
</p>
` : ""}

<h4>Potential impact areas</h4>

<ul class="impactList">

  ${primaryProduct.impacts.map(
    impact => `<li>${impact}</li>`
  ).join("")}

</ul>

${primaryProduct.example ? `
<h4>Looking for an example of how this can work in practice?</h4>

<p>
  ${primaryProduct.example}
</p>
` : ""}

${primaryProduct.svfImpact ? `
<h4>What does evidence from implementation show?</h4>

<ul class="impactList">

  ${primaryProduct.svfImpact.map(
    impact => `<li>${impact}</li>`
  ).join("")}

</ul>
` : ""}

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
