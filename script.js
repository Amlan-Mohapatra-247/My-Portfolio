function prog() {
    var txt=document.getElementById("change");
    change.innerHTML="<h3>Programming Skills</h3><br>"+
    "<b>Languages: </b>C, C++, Python, Java, Matlab, R<br><br>"+
    "<b>C: </b>C language being the most basic language in the current market has helped me to understand the essence of programming. I have done many projects and assignments in C and also have a certification from Internshala.<br><br>"+
    "<b>C++: </b>This is the language which i have used the most for competitive programming and also learnt concepts like OOP and DSA in it. I have made some of my robust and optimized projects in it and also posses a certificate on internshala showcasing the same.<br><br>"+
    "<b>Python: </b>I am also well versed with this language knowing all its basics along with libraries such as numpy, pandas, matplotlib and also handling csv files. In addition I can also connect python with mysql and also know ML libraries like sklearn, scikitlearn and TensorFlow. I am also certified in python programming by internshala.<br><br>"+
    "<b>Java: </b>I even posses the basic knowledge of Java and can work out any problem in it.<br><br>"+
    "<b>MATLAB: </b>Learnt all the basic graph making programs in signal and data communication laboratorty(college curriculum).<br><br>"+
    "<b>R: </b>Learnt some basic ML features of this languge in applied probabnility laboratory(college curriculum).<br>"
}

function webdev() {
    var txt=document.getElementById("change");
    change.innerHTML="<h3>Web Development Skills</h3><br>"+
    "<b>Languages: </b>HTML, CSS, Javascript, React, PHP<br><br>"+
    "<b>HTML: </b>HTML is my first step in the world of web development and I have done many projects in it with some being available on my github profile. With this I have enough knowledge about this language both theoretically and in practice.<br><br>"+
    "<b>CSS: </b>One of the widely used styling languages, there has never been a web page I created without useing this. Considering the vastness of the improved versions of CSS and the growing populrity of bootstrap, I have gained my confidence in styling any web page.<br><br>"+
    "<b>Javascript: </b>This language is the soul all my dynammic programs. I actuallhy enjoy using this language as it involves much of coding and javascript is an easy language with loads of functions.<br><br>"+
    "<b>React: </b>Eversince I got my hands on react I have expanded my capability as a web developer. With its new style of creating small components and then merging them, I am now clearer than ever about the concepts of development.<br><br>"+
    "<b>PHP: </b>This is another scripting language which is used in server side scripting. I have enough knowledge to use this implement this language in almost any frontend to backend operation.<br><br>"+
    "I have a certificate from Internshala which certifies my skills on overall web development including backend."
}

function dbms() {
    var txt=document.getElementById("change");
    change.innerHTML="<h3>Database Management Skills</h3><br>"+
    "I have learnt and used backend languages for both programming languages and web development.I have learnt the following <b>Languages: </b>MySQL, MongoDB<br><br>"+
    "<b>MySQL: </b>I have an in-depth knowledge about this language having used it alongside both python and in web development.Also, this being my first introduction to backend has helped me to understand query writing and also the concept of Database Management System.<br><br>"+
    "<b>MongoDB: </b>I am comparitively new to this language and have learnt it alongwith react to mark the start of my journey towards MERN Stack development.<br>"
}

function toth() {
    var txt=document.getElementById("change");
    change.innerHTML="<h3>Other Technical Skills</h3><br>"+
    "<b>Design: </b>I am well versed about using figma and have also created dummies of some sites in it.<br>"+
    "I also use a designing platform called canva.<br><br>"+
    "<b>Tools & Softwares I Use: </b><br>"+
    "GIT<br>VS Code<br>Jupyter Notebook<br>MS Office<br>XAMPP<br>IDLE<br>StarUML<br>MATLAB<br>RStudio<br>"
}

function lam() {
    var txt=document.getElementById("change");
    change.innerHTML="<h3>Leadership and Management Skills</h3><br>"+
    "I have served as the Publicity Head of E-Cell NIT Silchar and. My role required me to lead my whole team to manage the publicity of E-Cell especially during events.<br><br>"+
    "I have also been the Publicity Head of Tecnoesis, the annual technical fect of NIT Silchar where I served a similar role alongwith overseeing some infra work.<br><br>"+
    "Apart from that I have even taken part in various event management activities in the events conducted by E-Cell.<br><br>"+
    "I have even volunteered to manage some events in Tecnoesis(annual technical fest of NIT Silchar)."
}

function soc() {
    var txt=document.getElementById("change");
    change.innerHTML="<h3>Social Skills</h3><br>"+
    "Serving as Publicity Head and before that as a Publicity associate at E-Cell NIT Silchar and also during Tecnoesis has given a boost to my social skills.<br><br>"+
    "I have learnt to mange a crowd and also learnt to communicate officially with delegates of different companies.<br><br>"+
    "I have also served as an anchor for some events and have also participated in some speeches and debates competitions held in NIT Silchar."
}

function misc() {
    var txt=document.getElementById("change");
    change.innerHTML="<h3>Miscellaneous Skills</h3><br>"+
    "E-Cell has also provided me with the opportunity to learn marketing. I have learnt how to contact companies for sponsorships.<br><br>"+
    "By hobby, I am a blogger."
}

function acc() {
    const accContent = `
        <ul class="experience-list">
            <li><button class="experience-btn1" onclick="acc()">Applied Cloud Computing</button></li>
            <li><button class="experience-btn" onclick="mt()">MinfyTech</button></li>
        </ul>
        <div class="expinfo">
            <img class="expimg" src="acc.png">
            <h2>Applied Cloud Computing</h2><br>
            <h4>Digitalization Intern</h4>
            December 2023 - February 2024<br><br>
            <strong>Virtual Trial Room for Indian Dresses</strong><br><br>
            <p><b>Overview: </b>The Virtual Trial Room is an innovative platform designed to provide users with a seamless and immersive experience for trying on traditional Indian dresses virtually. By leveraging AWS services, this project ensures a scalable, secure, and top-notch user experience.</p>
            <br><b>Key Features</b><br>
            <ul style="margin-left: 20px;">
                <li>Realistic Dress Trials: Simulates how Indian dresses look and fit in a virtual environment.</li>
                <li>Wide Range of Attires: Includes sarees, lehengas, kurtas, and more.</li>
                <li>Personalized Recommendations: AI-powered suggestions based on user preferences and body type.</li>
            </ul>
            <br><b>Technology Stack</b><br>
            <ul style="margin-left: 20px;">
                <li>AWS S3: For storing images, 3D models, and assets.</li>
                <li>AWS EC2: Hosting applications and running computations.</li>
                <li>AWS SageMaker: Training and deploying machine learning models.</li>
            </ul><br>
            <p>
                To set up a virtual trial room, created an S3 bucket using the AWS Management Console to store datasets, images, and trained models. Configured the correct permissions for secure access.
                <br>Next, launched an EC2 instance, choosing an appropriate AMI and instance type, and configured security groups and network settings. Connected to the instance using SSH, installed necessary software like Python and TensorFlow, and cloned the project repository. Set up environment variables for smooth operation and secure S3 access.
            </p><br>
            <p>
                Stored datasets, images, and models in the S3 bucket, using AWS SDKs for easy access and management. Preprocessed the data, divided it into training, validation, and test sets, and used SageMaker for model training.
                <br>SageMaker offers a scalable environment for training, and monitoring progress ensures effective learning. Once training is complete, saved the trained models to the S3 bucket and deployed them using SageMaker endpoints for real-time inference, allowing the virtual trial room to provide immediate results.
            </p><br>
            <p>
                Continuous maintenance is crucial for smooth operation. Used AWS CloudWatch to monitor performance and health, and regularly updated models and application code to improve accuracy and add features. Implemented robust security measures to protect user data and ensure compliance with regulations.
                <br>This approach ensures the virtual trial room operates efficiently, delivering a seamless and secure user experience.
            </p>
        </div>
    `;
    document.getElementById("iel").innerHTML = accContent;
}

function mt() {
    const minfyContent = `
        <ul class="experience-list">
            <li><button class="experience-btn" onclick="acc()">Applied Cloud Computing</button></li>
            <li><button class="experience-btn1" onclick="mt()">MinfyTech</button></li>
        </ul>
        <div class="expinfo">
            <img class="expimg" src="minfy.png">
            <h2>MinfyTech</h2><br>
            <h4>AI/ML Intern</h4>
            May 2024 - July 2024<br><br>
            <strong>Medical Chatbot</strong>

<br><br>
<b>Overview:</b>

<p>This is a Multilingual Medical Chatbot which is designed to provide users with an interactive and accessible platform for obtaining medical information and assistance. Utilizing AWS services, this project ensures scalability, security, and an exceptional user experience, with a focus on supporting multiple languages.</p>
<br>
<b>Key Features</b>

<ul style="margin-left: 20px;">
  <li>Multilingual Support: Offers medical assistance in various languages using AWS Translate.</li>
  <li>Contextually Relevant Responses: Uses advanced models like GPT-3 for understanding and generating responses.</li>
  <li>Medical Information Retrieval: Integrates Retrieval-Augmented Generation (RAG) to fetch relevant medical information.</li>
</ul>
<br>
<b>Technology Stack</b>

<ul style="margin-left: 20px;">
  <li>AWS S3: For storing static assets, user data, and model checkpoints.</li>
  <li>AWS EC2: Hosting backend services and processing user requests.</li>
  <li>AWS Translate: Providing language translation services.</li>
  <li>GPT-3: For natural language understanding and response generation.</li>
  <li>Amazon Comprehend Medical: Extracting medical insights from user inputs.</li>
</ul>
<br>
<p>
  To develop the medical chatbot, created an S3 bucket using the AWS Management Console to store static assets, user data, and model checkpoints. Configured appropriate permissions to ensure secure access to these resources.
  <br>Next, launched an EC2 instance, choosing a suitable AMI and instance type. Configured security groups and network settings for secure communication. Connected to the instance using SSH, installed necessary software like Python, and cloned the project repository. Set up environment variables to ensure smooth operation and secure S3 access.
</p>
<br>
<p>
  Stored datasets, user data, and models in the S3 bucket, leveraging AWS SDKs for efficient access and management. Preprocessed data and utilized Amazon Comprehend Medical to extract insights. Used AWS Translate to support multiple languages, ensuring a broader reach.
  <br>For language understanding and response generation, utilized GPT-3, training and fine-tuning the model as necessary. Deployed the trained models using AWS SageMaker endpoints for real-time inference, enabling the chatbot to provide immediate and accurate responses.
</p>
<br>
<p>
  Continuous maintenance is vital for optimal performance. Employed AWS CloudWatch to monitor the system's health and performance, making necessary updates to models and application code to enhance accuracy and add new features. Implemented strong security measures to protect user data and ensure regulatory compliance.
  <br>This architecture ensures the medical chatbot operates efficiently, offering a reliable and secure user experience with comprehensive multilingual support.
</p>
        </div>
    `;
    document.getElementById("iel").innerHTML = minfyContent;
}