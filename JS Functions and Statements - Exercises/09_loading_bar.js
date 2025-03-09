function loadingBar(percentage) {
    let bar = '%'.repeat(percentage / 10) + '.'.repeat(10 - percentage / 10);
    return percentage === 100 ? '100% Complete!\n[%%%%%%%%%%]' : `${percentage}% [${bar}]\nStill loading...`;
}