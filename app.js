let APIKEY = "J0I23P9yDs2NmMkKhaijm3uHpjSY8F7G";
document.addEventListener("DOMContentLoaded", gif);
function gif() {
  document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=25&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(content => {
        console.log(content.data); // Retrieves actual Data
        console.log("META", content.meta); // Retrieves Meta Data
        let fig = document.createElement("figure");
        let h = document.createElement("h3");
        let img = document.createElement("img");
        img.src = content.data[0].images.downsized.url;
        h.textContent = content.data[0].title;
        fig.appendChild(h);
        fig.appendChild(img).width = "250";

        let out = document.querySelector(".output");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#search").value = "";
      })
      .catch(err => {
        console.error(err);
      });
  });
}
