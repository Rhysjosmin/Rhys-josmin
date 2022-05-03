const subject=document.getElementById('subjectName')
const className=document.getElementById('className')
const year=document.getElementById('paperYear')
const address=document.getElementById('link')
const box =document.getElementById('pdf')
const paper_index_url="/Paper_Data/SubjectIndex.json"
const pdfTemplate=document.getElementById('pdf-template')

let Paper_index
async function getData(){
    
    
    const response =await fetch(paper_index_url);

    const data = await response.json();
    subject.innerHTML=data[0].subject
    className.innerHTML=data[0].class
    year.innerHTML=data[0].year
    address.href=data[0].location

   
}
getData()

