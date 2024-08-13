const cipher = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const decipher = Object.fromEntries(Object.entries(cipher).map(([k, v]) => [v, k]));

function encryptText() {
    const input = document.getElementById('inputText').value;
    const output = document.getElementById('outputText');
    output.value = transformText(input, cipher);
}

function decryptText() {
    const input = document.getElementById('inputText').value;
    const output = document.getElementById('outputText');
    output.value = transformText(input, decipher);
}

function transformText(text, dictionary) {
    return text.split('').map(char => dictionary[char] || char).join('');
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}
