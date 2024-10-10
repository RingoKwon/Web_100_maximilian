const fs =  require ('fs')

function  readFile(){
    try{

        const fileData = fs.readFileSync('data.json')
    } catch {
        console.log('error')
    }

    console.log('Hi there!')
}


readFile();
