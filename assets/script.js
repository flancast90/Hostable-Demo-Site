function parseUrl() {
    const url = new URLSearchParams(window.location.search);
    return url.get('dir');
}

async function addHeader(elem=document.getElementById("header")) {
    var header = await fetch("components/header.component");
    var headerCode = await header.text(); 

    elem.innerHTML = headerCode;
}

async function getGithubFiles(user="flancast90", name="github-demos") {
    const response = await fetch(`https://api.github.com/repos/${user}/${name}/contents`);
    const data = await response.json();
    return data;
}

function getAllDirs(reposList) {
    const dirs = [];
    for (const repo of reposList) {
        if (repo.type === "dir" && repo.name !== "assets") {
            dirs.push(repo);
        }
    }
    return dirs;
}

function renderDirs(dirs, elem=document.getElementById("demos")) {
    if (dirs.length === 0) return;
    elem.innerHTML = "";
    for (const dir of dirs) {
        elem.innerHTML += `
        <div onclick="window.open('show-files.html?dir=${dir.name}', '_self')" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 cursor-pointer shadow-lg rounded-lg bg-secondary-bg-color p-3 text-sm hover:bg-bg-hover-color">
            <p class="flex flex-col items-center justify-center text-text-secondary font-semibold">
                <svg class="w-1/2 text-blue-accent-muted" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 490 490" fill="currentColor">
                    <g>
                        <g>
                            <g>
                                <polygon points="410.3,447.2 0,447.2 79.7,157.9 490,157.9"/>
                                <polygon points="62.2,134.9 410.3,134.9 410.3,90.6 205.3,90.6 184.7,42.8 0,42.8 0,360.9    "/>
                            </g>
                        </g>
                    </g>
                </svg>
                <p>${dir.name}</p>
            </p>
        </div>
        `
    }
}

async function getFilesFromDir(dir) {
    const response = await fetch(`https://api.github.com/repos/flancast90/github-demos/contents/${dir}`);
    const data = await response.json();
    
    return data;
}

function renderFile(dirName, files, elem=document.getElementById("demos")) {
    if (files.length === 0) return;

    elem.innerHTML = "";
    for (const file of files) {
        if (file.type === "file") {
            elem.innerHTML += `
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 cursor-pointer shadow-lg rounded-lg bg-secondary-bg-color p-3 text-sm hover:bg-bg-hover-color">
                <p class="flex flex-col items-center justify-center text-text-secondary font-semibold">
                    <p class="text-lg">${file.name}</p>
                    <iframe class="w-full" src="${dirName}/${file.name}" frameborder="0" class="pointer-events-none"></iframe>
                    <a href="${file.html_url}" class="text-sm">View Code</a><br>
                    <a href="${dirName}/${file.name}" class="text-sm">View Live</a>
                </p>
            </div>
            `
        }
    }
}

window.onload = async function() {
    await addHeader();
    const repos = await getGithubFiles();
    const dirs = getAllDirs(repos);
    const dirName = parseUrl()
    
    if (dirName) {
        const files = await getFilesFromDir(dirName);
        renderFile(dirName, files);
        return;
    }
    
    renderDirs(dirs);
}