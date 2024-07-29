#!/usr/bin/env node

const fs = require('fs');

let command = process.argv[2]
let file = process.argv[3];

if(!file){
    file = command
    command = null
}

if(fs.existsSync(file)){

    switch(command){
       
        case '-w' :
            console.log(`File: ${file}\nWordCount: ${wordCount()} `);
            break;
      
        case '-b' : 
            console.log(`File: ${file}\nByteCount: ${byteCount()} `);
            break;
        
        case '-l' :
            console.log(`File: ${file}\nLineCount: ${LineCount()} `);
            break;
       
        case '-c' :
            console.log(`File: ${file}\nCharacterCount: ${charCount()} `);
            break;
        
        case null :
                console.log(`File: ${file} \nByteCount: ${byteCount()} \nWordCount: ${wordCount()} \nLineCount: ${lineCount()} \nCharacterCount: ${charCount()} `)
                break;

        default:
            console.log(`Invalid Option. \nFollowing are the supported options
                -c\t it will print the number of characters in the specified file
                -w\t it will print the number of words in the specified file
                -b\t it will print the number of bytes in the specified file
                -l\t it will print the number of lines in the specified file
                `);
    }

}else{
   console.log("file with the specified file couldn't be found");
}

function charCount(){
    try{
        let data = fs.readFileSync(file,'utf-8')
        return data.length
         
    }catch(error){
        console.log(error.message)

    }
}

function wordCount(){
       try{
         let data = fs.readFileSync(file,'utf-8');
         return data.split(/\s+/).filter(Boolean).length;
       }catch(error){
        console.log(error.message);
       }
}

function byteCount(){
    try{
          let binary = fs.readFileSync(file);
          return binary.length;
    }catch(error){
       console.log(error.message);
    }
}

function lineCount(){
      try {
        let data = fs.readFileSync(file,'utf-8')
        return data.split(/\r\n|\r|\n/).length;
      } catch (error) {
        console.log(error.message)
      }
}

