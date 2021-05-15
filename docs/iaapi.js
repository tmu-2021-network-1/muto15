const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Studio';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const studios = json.records;
  
  const lastStudio = studios.pop();
  
  studios.forEach((studio) => {
   const studioDiv = document.createElement('div');
   studioDiv.className = 'aStudio'
   const mask = document.createElement('div');
   mask.className = 'mask';

   const studioTitle = document.createElement("h1");
   studioTitle.className = 'studio-title';
   studioTitle.textContent = studio['name-ja'];

   const studioTitleEn = document.createElement("p");
   studioTitleEn.className = 'studio-title-en';
   studioTitleEn.textContent = studio['name-en'];

   const studioSnap = document.createElement("img");
   studioSnap.className = 'studio-snap';
   studioSnap.src = studio['photo1'];
   studioSnap.alt = "研究室の写真";

   const faculty = document.createElement("p");
   faculty.className = 'faculty';
   faculty.textContent = studio['faculty-ja'];

   
   mask.appendChild(studioTitleEn);
   mask.appendChild(faculty);
   studioDiv.appendChild(mask);
   
   studioDiv.appendChild(studioSnap);
   studioDiv.appendChild(studioTitle);
   document.getElementById('studios').appendChild(studioDiv);
  });
  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

const getData = async () => {
  try {
    const response = await fetch(endpoint);
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
			renderJson(jsonResponse);
    }
  }
  catch (error) {
    console.log(error);
  }
}

getData();


