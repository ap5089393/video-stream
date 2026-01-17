fetch("https://NAMA-WORKER.kamu.workers.dev/list")
  .then(res => res.json())
  .then(data => {
    const box = document.getElementById("videoList");

    data.result.forEach(v => {
      box.innerHTML += `
        <div class="card">
          <img src="${v.splash_img}">
          <h4>${v.title}</h4>
          <a href="play.html?id=${v.file_code}" style="color:#0f0">Play</a>
        </div>
      `;
    });
  })
  .catch(err => {
    document.getElementById("videoList").innerHTML = "Gagal load video";
    console.error(err);
  });
