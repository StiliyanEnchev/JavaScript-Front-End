function extract(content) {

    let element = document.getElementById(content);
    if (!element) return ""; 

    let text = element.textContent;
    let matches = text.match(/\(([^)]+)\)/g); 
    
    if (!matches) return ""; 
    
    return matches.map(match => match.slice(1, -1)).join("; ");
}
