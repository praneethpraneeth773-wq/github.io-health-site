let userProblem = localStorage.getItem("problem").toLowerCase();
let output = document.getElementById("output");

let found = false;

for (let key in healthData) {
    if (userProblem.includes(key)) {
        found = true;
        let data = healthData[key];

        output.innerHTML = `
        <h3>Problem: ${key.toUpperCase()}</h3>

        <h4>🧘 Recommended Yoga Asanas</h4>
        <ul>${data.yoga.map(y => `<li>${y}</li>`).join("")}</ul>

        <h4>🏋 Recommended Exercises</h4>
        <ul>${data.exercises.map(e => `<li>${e}</li>`).join("")}</ul>

        <h4>🎥 Video Guidance</h4>
        <iframe width="100%" height="300" src="${data.video}" allowfullscreen></iframe>
        `;
        break;
    }
}
function Search() {
    let problem = document.getElementById("problem").value.toLowerCase();
    let result = document.getElementById("result");

    if (problem.includes("back")) {
        result.innerHTML = `
        <center><h2>🦴 Back Pain Recommendation</h2></center>
        <center><p><b>🧘Yoga:</b> Bhujangasana, Cat-Cow, Balasana</p></center>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/phuS5VLQy8c?si=OAcYIUNFdS0hbnDl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </center>
        <br>
        <center><p><b>🏋Exercises:</b> Pelvic Tilts, Stretching</p></center>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5nZ8n1vUqVU?si=qkoG5LrvnNxGZoWz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </center>
        <br>
        <center><h2>💡 Tips to Relieve Back Pain</h2></center>
        <ul>
          <li>🪑 Avoid sitting continuously for long hours</li>
          <li>🧍 Stand & stretch every 30 minutes</li>
          <li>🛏 Sleep on a firm mattress</li>
          <li>🎒 Avoid carrying heavy bags</li>
          <li>🔥 Use hot water therapy</li>
        </ul>
        
        `;
    }

    else if (problem.includes("stress")) {
        result.innerHTML = `
        <center><h2>😌 Stress Management</h2></center>
        <center><p><b>🧘Yoga:</b> Shavasana, Anulom Vilom</p></center>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/f1LvJUt9fIg?si=8tkA824XxBN_ssvV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </center>
        <br>
        <center><p><b>🏋Exercises:</b> Breathing, Meditation</p></center>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tYddPTEfS_8?si=t_Dshlgf1Z2Cjbil" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </center>
        `;
    }

    else if (problem.includes("weight")) {
        result.innerHTML = `
        <center><h2>🔥 Weight Loss Plan</h2></center>
        <center><p><b>🧘Yoga:</b> Surya Namaskar, Trikonasana</p></center>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lMWOrDH694c?si=7hBBHx7cUBMcnT9z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </center>
        <br>
        <center><p><b>🏋Exercises:</b> Jogging, Squats, Skipping</p></center>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kdpHMdFScm8?si=0orqE1eE4m1yhXJ_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </center>
        `;
    }

    else if (problem.includes("knee")) {
        result.innerHTML = `
        <center><h2>🦵 Knee Pain</h2></center>
        <center><p><b>🧘Yoga:</b> Vrikshasana, Tadasana</p></center>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zkoIaA5Df0U?si=-YwmkHTj1rewDJD6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </center>
        <br>
        <center><p><b>🏋Exercises:</b> Knee Stretching</p></center>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gS1WQk5lW0s?si=WsaaDI9XXtYvv9Ph" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </center>
        `;
    }

        else if (problem.includes("heart health")) {
        result.innerHTML = `
        <center><h2><b>🫀 Heart health</b></h2></center>
        <center><p><b>🧘Yoga:</b>Tadasana (Mountain Pose),Bhujangasana (Cobra Pose) </p></center>
       <center> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/dAHrFEGxuS4?si=9GwrSxemEnjJbetY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
        </center>
        <br>
        <center><p><b>🏋Exercises: </b> jogging running,walking for 30-45 minutes  </p></center>
        <center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/aiB9wQY1GkQ?si=Ke_NCDWW5CBhClYV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        </center>
        `;
    }
             else if (problem.includes("sleep issues")) {
        result.innerHTML = `
        <center><h2><b>😴 sleep issues</b></h2></center>
        <center><p><b>🧘Yoga:</b> Calm Nights Yoga,Serene Sleep Studio</p></center>
        
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7C2RqyKdn7k?si=1oMh4z9aYoQtW2Qw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </center>
        <br>
        <center><p><b>🏋Exercises: </b> RestEasy Exercises,Sleep Harmony </p></center>
        <center>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/tvNARxpNDrA?si=1lTvGzM4SGX7BKt-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </center> 
        `;
    }

             else if (problem.includes("digestion")) {
    result.innerHTML = `
    <center><h2><b>🍽️ Digestion</b></h2></center>

    <center><p><b>🧘 Yoga:</b> Pachan Yoga,Prana Digest Yoga</p></center>
    <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/P77mNGhsvAs?si=mzvuUvfUe_msWplp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </center>

    <br>

    <center><p><b>🏋 Exercises:</b> Gentle Digest Flow,Easy Digest Fitness</p></center>
    <center>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/2jRgeWSxT0c?si=uvs73Ae4lw36GI0l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </center>
    
    
    `;
}



    
    else {
        result.innerHTML = `
        <h2>❓ No Data Found</h2>
        <p>Please enter a valid health problem</p>
        `;
    }
}


