function canSolveInTime(_n, h, x, ts) {
    let maxTime = 0;

    for (let t of ts) {
        if (maxTime < t) {
            maxTime = t;
        }
    }

    return x + maxTime - h >= 0 ? "YES" : "NO";
}

export { canSolveInTime };