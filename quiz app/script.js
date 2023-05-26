const allQA=[
    {
        question: "Q1: CSS stands for?",
        ans1:"Candle Style Sheet",
        ans2:"Cascading style sheet",
        ans3:"Coconut Style Sheet",
        ans4:"Candli Style Sheet",
        ans:"ans2"
    },
    {
         question: "Q2: HTML stand for?",
        ans1:"Hofer Text Markup Language",
        ans2:"Hower Text Markup Language",
        ans3:"Hyper Text Markup Language",
        ans4:"Higher Text Markup Language",
        ans:"ans3"
    },
    {
         question: "Q1: JS stands for?",
        ans1:"JavaScript",
        ans2:"JagoScript",
        ans3:"JassScript",
        ans4:"JScript",
        ans:"ans1"
    }
]
console.log(allQA)


const question = document.getElementById("question");
const option1 = document.getElementById("options1");
const option2 = document.getElementById("options2");
const option3 = document.getElementById("options3");
const option4 = document.getElementById("options4");
const correct = document.getElementById("correct");
const next = document.getElementById("next");
const optclass = document.querySelectorAll(".optclass");
const showscor = document.querySelector(".showscore");


let arrindex = 0;
let score=0;

const pageLoad=()=>{
    let fullarrindex = allQA[arrindex];
    question.innerText = fullarrindex.question;
    option1.innerText = fullarrindex.ans1;
    option2.innerText = fullarrindex.ans2;
    option3.innerText = fullarrindex.ans3;
    option4.innerText = fullarrindex.ans4;

}

pageLoad()

const getCheckAnswer=()=>{
    let answer;
    optclass.forEach((currentelem)=>{
        if(currentelem.checked){
            answer=currentelem.id;
        }
    })
    return answer;
}




next.addEventListener("click", ()=>{
    const checkanswer = getCheckAnswer();

    if(checkanswer===allQA[arrindex].ans){
        score++;
        
    }
    arrindex++;
    if(arrindex<allQA.length){

        pageLoad();
    }else{
        showscor.innerHTML=`
        <h3>The correct answers ${score}/${allQA.length}</h3>
        <button onclick="location.reload()"> Re-Again </button>
        `
        showscor.classList.remove("showscore")
    }
})
