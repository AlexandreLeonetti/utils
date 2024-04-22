async function sleep(ms:number) : Promise<void>{
    return new Promise((resolve)=> {
        setTimeout(resolve, ms);
    });
}

function formatter(s: string | number, factor: number, precision: number): number {
    if (typeof s === "string") {
        let n = factor * parseFloat(s);
        let p = Math.pow(10, precision);
        n = Math.trunc(n * p) / p;
        n = parseFloat(n.toFixed(precision));
        return n;
    } else {
        // When s is a number, directly apply the factor and precision
        let n = s * factor;
        let p = Math.pow(10, precision);
        n = Math.trunc(n * p) / p;
        n = parseFloat(n.toFixed(precision));
        return n;
    }
}


export {
    sleep,
    formatter,
};