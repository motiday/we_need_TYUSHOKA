function abstractCode(code) {
    let newCode = code;
    let varPattern = /(\b(let|const|var)\s+)(\w+)/g;
    let funcPattern = /(\bfunction\s+)(\w+)/g;
    let argPattern = /(\bfunction\s+\w+\s*\()([^\)]*)(\))/g;
    let strPattern = /(["'`])(?:(?=(\\?))\2.)*?\1/g;
    let numPattern = /\b\d+\b/g;
    let commentPattern = /(\/\/[^\n]*$)|(\/\*[\s\S]*?\*\/)/mg;
    let match;
    let count = 0;

    // Remove comments
    newCode = newCode.replace(commentPattern, '');

    // Abstract variables
    while ((match = varPattern.exec(code)) !== null) {
        newCode = newCode.replace(match[3], `var${count}`);
        count++;
    }

    // Abstract functions
    count = 0;
    while ((match = funcPattern.exec(code)) !== null) {
        newCode = newCode.replace(match[2], `func${count}`);
        count++;
    }

    // Abstract arguments
    while ((match = argPattern.exec(newCode)) !== null) {
        if (match[2].trim().length > 0) {
            let args = match[2].split(',');
            for (let i=0; i<args.length; i++) {
                args[i] = `arg${i}`;
            }
            newCode = newCode.replace(match[2], args.join(','));
        }
    }

   // Abstract string literals
   count=0;
   while ((match=strPattern.exec(newCode))!==null){
       newCode=newCode.replace(match[0],`str${count}`);
       count++;
   }

   // Abstract numeric literals
   count=0;
   while((match=numPattern.exec(newCode))!==null){
       newCode=newCode.replace(match[0],`num${count}`);
       count++;
   }
   
   return newCode;
}
