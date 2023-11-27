var channel_ids = [
    'UCb35v6VAVFI8Q0aIpwPoW1g', 
    'UCLK0Lj3V864AbKfutfyztYA', 
    'UC8cV2cdrp1ccBWzoi1R-UwQ', 
    'UCpgY8iFp2Nkfu0jAwk2U94g'
]
channel_ids.forEach(function(cid, i) {
    var container = document.createElement('div')
    container.classList.add('channel-container')

    container.innerHTML = `<div class="g-ytsubscribe" data-channelid="${cid}" data-layout="full" data-count="default"></div>`

    document.querySelector('.channel-stats').appendChild(container)
})