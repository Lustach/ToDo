let arr=[]
let number=0
let doc=document
let DivListCounter=0,
InputTextCounter=0
function GetQuest(){
        let element=doc.createElement("div")
        element.setAttribute('id','d5')
        let idc=doc.getElementById("special")
        idc.appendChild(element)
        element.innerHTML=
        `<form action="url">
        <div id="inp"><input type="text" placeholder="Week's Day" id="NameI">
        <input type="text" placeholder="Quest" id="QuestI"></div>  
        <div id="test">
        <div><a onclick="AddQuest()" href="#" ><img id="ImgInInner" src="Img/star.png"></a></div>
        <input id="button" type="button" value="Add" onclick="Info()" > 
        <!-- <a href="Study.html" ><img width="88" class="ahref" src="Img/star.png" onclick="Info()"></a>-->
        </div>
        </form>
        `
        let none=doc.createElement("div")
        none.setAttribute("id","none")
        let tnone=doc.getElementById("special")
        tnone.appendChild(none)
}
function AddQuest(){
    if(number>=3){
        alert('You can not add more questions')
        return}
    let doc=document
    let element=doc.createElement("input")
    let idc=doc.getElementById("inp")
    idc.appendChild(element)
    element.setAttribute("class","qQuestI")
    element.setAttribute("placeholder","Quest")
    number++
    let element1=doc.getElementById("NameI")
}
function Info(){
///////////////////////////
let main = doc.getElementById("main")
let div = doc.createElement("div")
div.setAttribute("class","div-list")
main.appendChild(div)
let div2=doc.createElement("div")
div.appendChild(div2)
div2.setAttribute("class","div2")
    let inputText=doc.getElementById("NameI").value
    arr[0]=inputText
    inputText=doc.getElementById("QuestI").value
    arr[1]=inputText
    let arr1=doc.getElementsByClassName("qQuestI")
    for(let i=2;i<=arr1.length+1;i++){
        arr[i]=arr1[i-2].value
        console.log(arr[i])
    }
    for(let i=0;i<=arr.length;i++)
    {
        let div3=doc.createElement("div")
        div3.textContent=arr[i]
        let idc=doc.getElementsByClassName("div-list")
        idc[DivListCounter].appendChild(div3)
    }
    DivListCounter++
    let element =doc.getElementById("d5")
    element.parentNode.removeChild(element)//HOW IT'S WORK?!
///////////////////////////
    element =doc.getElementById("none")
    element.parentNode.removeChild(element)
    number=0
    while(arr.length!=0)
        {arr.pop()}
}