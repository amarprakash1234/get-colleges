let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');

btn.addEventListener('click', async () => {
    let country = document.querySelector('input').value;
    let arr = await getColleges(country);
    show(arr);
});

function show(arr) {

    let list = document.querySelector("#list");
    list.innerHTML = "";
    for(col of arr) {
        let li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {

    try {
        let res = await axios.get(url+country);
        return res.data;
    } catch {
        return [];
    }

}