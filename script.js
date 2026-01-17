const videosEl = document.getElementById("videos");

async function loadVideos() {
  const res = await fetch(
    `https://doodapi.com/api/file/list?key=${DOOD_API_KEY}&per_page=20`
  );
  const data = await res.json();

  if (!data.result) {
    videosEl.innerHTML = "Gagal load video";
    return;
  }

  videosEl.innerHTML = data.result.files.map(v => `
    <div class="card">
      <img src="${v.single_img}" />
      <h3>${v.title}</h3>
      <a href="player.html?id=${v.file_code}">Play</a>
    </div>
  `).join("");
}

loadVideos();
