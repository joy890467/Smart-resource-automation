function loadData() {
  const userId = document.getElementById('userId').value;
  const location = document.getElementById('location').value;

  const usageData = [
    { date: '2025-09-01', usage: 150 },
    { date: '2025-09-02', usage: 170 },
    { date: '2025-09-03', usage: 160 },
    { date: '2025-09-04', usage: 180 },
    { date: '2025-09-05', usage: 175 }
  ];

  const weatherData = [
    { date: '2025-09-01', temperature: 32, rainfall: 5 },
    { date: '2025-09-02', temperature: 36, rainfall: 2 },
    { date: '2025-09-03', temperature: 34, rainfall: 0 },
    { date: '2025-09-04', temperature: 37, rainfall: 1 },
    { date: '2025-09-05', temperature: 33, rainfall: 3 }
  ];

  const predData = [
    { date: '2025-09-06', predicted_usage: 165 },
    { date: '2025-09-07', predicted_usage: 172 }
  ];

  const weatherTable = document.getElementById('weatherTable');
  weatherTable.innerHTML = '<tr><th>Date</th><th>Temperature (°C)</th><th>Rainfall (mm)</th></tr>';
  weatherData.forEach(row => weatherTable.innerHTML += `<tr><td>${row.date}</td><td>${row.temperature}</td><td>${row.rainfall}</td></tr>`);

  const predTable = document.getElementById('predTable');
  predTable.innerHTML = '<tr><th>Date</th><th>Predicted Usage</th></tr>';
  predData.forEach(row => predTable.innerHTML += `<tr><td>${row.date}</td><td>${row.predicted_usage}</td></tr>`);

  const ctx = document.getElementById('usageChart').getContext('2d');
  new Chart(ctx, {
    type:'line',
    data:{ labels:usageData.map(d=>d.date), datasets:[{ label:'Actual Usage', data:usageData.map(d=>d.usage), fill:true, borderColor:'#2980b9', backgroundColor:'rgba(52,152,219,0.2)', tension:0.3 }] },
    options:{ responsive:true, plugins:{ legend:{ display:true, position:'bottom' } }, scales:{ y:{ beginAtZero:true } } }
  });

  const avgUsage = usageData.reduce((sum,row)=>sum+row.usage,0)/usageData.length;
  const latestUsage = usageData[usageData.length-1].usage;
  const alerts = document.getElementById('alerts');
  alerts.textContent = latestUsage>avgUsage*1.2?`⚠️ Alert! Latest usage (${latestUsage}) is higher than average (${avgUsage.toFixed(2)})`:'✅ Usage is within normal range.';

  const latestTemp = weatherData[weatherData.length-1].temperature;
  const recommendations = document.getElementById('recommendations');
  recommendations.textContent = latestTemp>35?'🔥 High temperature today! Optimize cooling and reduce energy waste.':'🌤 Weather is normal. Maintain regular usage.';
}

/* Chatbot */
let chatStep = 0;
const questions = [
  "Hi! What's your name?",
  "Which city are you monitoring?",
  "Do you want to check 'Usage', 'Weather', or 'Predictions' first?",
  "Would you like a tip to optimize resources today?",
  "Thank you for using the Smart Assistant! 😊"
];

function toggleChat() {
  const chatWindow = document.getElementById('chatbotWindow');
  const tag = document.getElementById('chatbotTag');
  if(chatWindow.style.display==='flex'){
    chatWindow.style.display='none';
    tag.style.display='block';
  } else {
    chatWindow.style.display='flex';
    tag.style.display='none';
    document.getElementById('chatInput').focus();
  }
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const chatBody = document.getElementById('chatBody');
  const message = input.value.trim();

  if(message){
    const userMsg = document.createElement('p');
    userMsg.textContent = message;
    userMsg.classList.add('user');
    chatBody.appendChild(userMsg);
  }

  if(chatStep < questions.length){
    const botMsg = document.createElement('p');
    botMsg.textContent = questions[chatStep];
    botMsg.classList.add('bot');
    chatBody.appendChild(botMsg);
    chatStep++;
  }

  chatBody.scrollTop = chatBody.scrollHeight;
  input.value="";
}
