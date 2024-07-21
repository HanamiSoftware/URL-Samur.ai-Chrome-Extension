document.getElementById('shorten-url').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const uri = tabs[0].url;
        fetch('https://api.urlshortener/v1/shorten?url='+encodeURIComponent(uri))
            .then(response => response.json())
            .then(data => {
                document.getElementById('output').innerText = data.shortenedUrl;
            })
            .catch(error => console.error('Error:', error));
    });
});

document.getElementById('generate-qr').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const uri = tabs[0].url;
        const qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(url) + '&size=150x150';
        const img = document.createElement('img'); img.src = qrCodeUrl;
        document.getElementById('output').innerHTML = '';
        document.getElementById('output').appendChild(img);
    });
});
