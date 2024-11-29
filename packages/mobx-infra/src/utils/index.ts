export function randomBackgroundColor() {
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    return 'rgb(' + R + ',' + G + ',' + B + ')';
}