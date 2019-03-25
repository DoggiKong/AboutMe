var truncateTable = {};
window.onload = () => {
    const blocks = document.getElementsByClassName("truncate");
    for (let block of blocks) {
        if (block.innerHTML.length >= 50) {
            let truncateTableKey = Object.keys(truncateTable).length;
            truncateTable[truncateTableKey] = {
                full: block.innerHTML,
                truncated: `${block.innerHTML.slice(0, 15)}<span class="expand" onclick="onTruncateClick(${truncateTableKey})">[...truncated(click to unpack)...]</span>${block.innerHTML.slice(-10)}`
            }
            block.setAttribute("id", `truncatable-${truncateTableKey}`);
            block.style.color = '#D3D3D3';
            block.innerHTML = truncateTable[truncateTableKey].truncated;
        }
    }
}

function onTruncateClick(key) {
    const block = document.getElementById(`truncatable-${key}`);
    if (block.innerHTML === truncateTable[key].truncated) {
        block.innerHTML = `<span class="unpacked" onclick="onTruncateClick(${key})">${truncateTable[key].full}</span>`
    } else {
        block.innerHTML = truncateTable[key].truncated;
    }
}