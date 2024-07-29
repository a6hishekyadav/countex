#!/usr/bin/env node

const fs = require('fs');

let command = process.argv[2]
let filename = process.argv[3];

if(!filename){
    filename = command
    command = null
}

if(fs.existsSync(filename)){

    switch(command){
       
        case '-w' :
            console.log(`File: ${filename}\nWordCount: ${wordCount()} `);
            break;
      
        case '-b' : 
            console.log(`File: ${filename}\nByteCount: ${byteCount()} `);
            break;
        
        case '-l' :
            console.log(`File: ${filename}\nLineCount: ${LineCount()} `);
            break;
       
        case '-c' :
            console.log(`File: ${filename}\nCharacterCount: ${charCount()} `);
            break;
        
        case null :
                console.log(`File: ${filename} \nByteCount: ${byteCount()} \nWordCount: ${wordCount()} \nLineCount: ${lineCount()} \nCharacterCount: ${charCount()} `)
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
   console.log("file with the specified filename couldn't be found");
}

function charCount(){
    try{
        let data = fs.readFileSync(filename,'utf-8')
        return data.length
         
    }catch(error){
        console.log(error.message)

    }
}

function wordCount(){
       try{
         let data = fs.readFileSync(filename,'utf-8');
         return data.split(/\s+/).filter(Boolean).length;
       }catch(error){
        console.log(error.message);
       }
}

function byteCount(){
    try{
          let binary = fs.readFileSync(filename);
          return binary.length;
    }catch(error){
       console.log(error.message);
    }
}

function lineCount(){
      try {
        let data = fs.readFileSync(filename,'utf-8')
        return data.split(/\r\n|\r|\n/).length;
      } catch (error) {
        console.log(error.message)
      }
}

