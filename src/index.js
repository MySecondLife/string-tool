const replaceWithChar = (strings, char) => {
    strings.padStart(strings.length - 1, char);  
}

export const message = "this is just a test file";

export default replaceWithChar;

