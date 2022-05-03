const subject=document.getElementById('subjectName')
const className=document.getElementById('className')
const year=document.getElementById('paperYear')
const address=document.getElementById('link')
const box =document.getElementById('pdf')
const paper_index_url="/Paper_Data/SubjectIndex.json"
const pdfTemplate=document.getElementById('pdf-template')

let Paper_index
async function getData(){
    const card = pdfTemplate.content
    console.log(card)
    const response =await fetch(paper_index_url);

    const data = await response.json();
    subject.innerHTML=data.subject
    className.innerHTML=data.class
    year.innerHTML=data.year
    address.href=data.location

   
}
getData()

