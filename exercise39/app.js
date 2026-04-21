// 1. Soo qabo walxaha HTML-ka
const translateBtn = document.getElementById('translateBtn');
const inputText = document.getElementById('inputText');
const outputArea = document.getElementById('translatedText');
const fromLang = document.getElementById('fromLanguage');
const toLang = document.getElementById('toLanguage');

// --- QAYBTA 1: Keenista Luqadaha ---

async function fetchAllLanguages() {
    const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2/languages';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '50a5c44653msh75678313549f0c3p115a66jsnc9420b8855e2',
            'x-rapidapi-host': 'deep-translate1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        if (result.languages) {
            displayLanguages(result.languages);
            console.log("Luqadihii waa la soo bandhigay!");
        }
    } catch (error) {
        console.error("Cilad markii luqadaha la keenayay:", error);
    }
}

function displayLanguages(languages) {
    fromLang.innerHTML = '<option value="">Select Language</option>'; 
    toLang.innerHTML = '<option value="">Select Language</option>';

    languages.forEach(lang => {
        const option = document.createElement("option");
        option.value = lang.language; // 'en', 'so'
        option.innerText = lang.name;  // 'English', 'Somali'
        
        fromLang.appendChild(option.cloneNode(true));
        toLang.appendChild(option);
    });
}

// Marka bogga la furo, markiiba wac luqadaha
window.onload = fetchAllLanguages;


// --- QAYBTA 2: Turjumidda (POST) ---

translateBtn.addEventListener('click', async function() {
    const text = inputText.value;
    const source = fromLang.value;
    const target = toLang.value;

    if(!text) return alert("Fadlan qoraal geli!");

    const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '50a5c44653msh75678313549f0c3p115a66jsnc9420b8855e2',
            'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: text,
            source: source,
            target: target
        })
    };

    try {
        outputArea.innerText = "Turjumid baa socota...";
        const response = await fetch(url, options);
        const result = await response.json();
        
        // Bandhig natiijada
        outputArea.innerText = result.data.translations.translatedText;
    } catch (error) {
        console.error("Cilad turjumidda:", error);
        outputArea.innerText = "Khalad baa dhacay!";
    }
});