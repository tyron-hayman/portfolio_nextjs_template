const splitStringReg = ( value : string ) : string[] => {
    const characters : string[] = [];
    const regex = /[\s\S]/gu;
    const newRegex = /[\r\n|\r|\n]/gu;
    let match, newMatch;
    while((match = regex.exec(value)) !== null) {
        if ( newMatch = newRegex.exec(match[0]) !== null) {
            characters.push("<br>");
        } else {
            characters.push(match[0]);
        }
    }
    return characters;
}

export default splitStringReg;