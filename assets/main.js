const api = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC0DwndMnXxaZMdroOhrZwmQ&part=snippet%2Cid&order=date&maxResults=5'
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a78c25b910msh3da71da27945116p1e7bdejsn484d87bf7988',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
const content = null || document.getElementById("content");

fetchData = async (api, options) => {
    const response = await fetch(api, options)
    const data = await response.json()
    return data;
}

//Cuando se cargue el archivo ejecuta la funcion por si sola
(async () => {
    try {
        const videos = await fetchData(api, options);
        console.log(videos);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0, 4).join('')}
        `;
    content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();