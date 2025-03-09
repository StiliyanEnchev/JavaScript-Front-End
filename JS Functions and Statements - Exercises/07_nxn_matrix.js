function nxnMatrix(n) {
    return Array.from({ length: n }, () => Array(n).fill(n).join(' ')).join('\n');
}