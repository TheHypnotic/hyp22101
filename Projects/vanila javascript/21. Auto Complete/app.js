const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

search.addEventListener("input", () => searchStates(search.value));

const searchStates = async (searchtext) => {
  const res = await fetch(
    "/PROJECTS/javascript%20vanila/21.%20Auto%20Complete/states.json"
  );
  const states = await res.json();

  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchtext}`, "gi");
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (searchtext === "") {
    matches = [];
    matchList.innerHTML = "";
  }

  console.log(matches);
  insertToHtml(matches);
};
const insertToHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) =>
          `
            <div class='card card-body mb-1'>
                <h4>${match.name} (${match.abbr}) 
                <span class="text-primary">${match.capital}</span></h4>
                <small>lat: ${match.lat} / long: ${match.long}</small>
            </div>`
      )
      .join("");
    console.log(html);
    matchList.innerHTML = html;
  }
};
