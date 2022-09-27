function generatequestion(score){
    if (score == 10){
        document.body.style.background = "blue"
        document.querySelector('.answers').innerHTML = ""
        document.querySelector('.question').innerHTML = "Good job, you passed"
    }else{
        let x = Math.floor(Math.random() * 1000);
        let y = Math.floor(Math.random() * 1000);
        document.querySelector('.question').innerHTML = "What is " + x +  " * " + y
        let correctanswer = Math.floor(Math.random() * 4);
        for (let i = 0; i < 4; i++){
            
            if (i == correctanswer){
                let answerDiv = document.createElement('div')
                answerDiv.classList.add('answer')
                answerDiv.innerHTML = y*x;
                document.querySelector('.answers').appendChild(answerDiv)
                answerDiv.addEventListener('click', () => {
                document.body.style.background = "green"
                setTimeout(() => {
                    document.body.style.background = "linear-gradient( lightblue, rgb(38, 187, 236))";
                    
                    document.querySelector('.answers').innerHTML = ""
                    generatequestion(score)
                    
            }, 1000)
                    
                    score++
                    document.querySelector('.score').innerHTML = "Score: "+ score
                    
                
                })
                
                
                
                

                
            } else{
            
            
                let answerDiv = document.createElement('div')
                answerDiv.classList.add('answer')
                let wrongx = Math.floor(Math.random() * 1000)
                let wrongy = Math.floor(Math.random() * 1000)
                let wronganswer = wrongx * wrongy
                while(wrongx * wrongy === x*y){
                    wrongx = Math.floor(Math.random() * 1000)
                    wrongy = Math.floor(Math.random() * 1000)
                    
                }
                wronganswer = wrongx * wrongy
                answerDiv.innerHTML = wronganswer;
                document.querySelector('.answers').appendChild(answerDiv)
                answerDiv.addEventListener('click', () => {
                    document.body.style.background = "red"
                    document.querySelector('.answers').innerHTML = "The Correct answer was: " + (x*y)
                    document.querySelector('.question').innerHTML = "Do Better"
                    
                    
                })
            }
        }
    }
}

generatequestion(0);

