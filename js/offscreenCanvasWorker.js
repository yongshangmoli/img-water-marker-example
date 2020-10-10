importScripts('./img-water-marker.umd.min.js');

const imgWaterMarker = this['img-water-marker'];
this.addEventListener('message', (e) => load(e));

async function load(e) {
    const data = e.data;
    switch (data.name) {
        case 'drawImg':
            imgWaterMarker.offscreenCanvasDraw(data);
            break;
        default:
            break;   
    }
    
}