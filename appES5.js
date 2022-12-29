function Course(title , instructor, image){
 this.title = title;
 this.instructor = instructor;
 this.image = image;
}

function UI(){

}

UI.prototype.addCourseToList = function(course){

    const listem = document.getElementById("course-list");

    var html = `
    
    <tr>
        <td> <img src = "img/${course.image}"/> </td>
        <td> ${course.title} </td>
        <td> ${course.instructor}</td>
        <td> <a href = "#" class = "btn btn-danger btn-sm delete"> Delete </a> </td>

    </tr>

    `
    listem.innerHTML += html;

}

UI.prototype.clearCourse = function(){
    const title = document.getElementById("title").value = "";
    const instructor = document.getElementById("instructor").value = "";
    const image = document.getElementById("image").value = "" ;

}

UI.prototype.deleteCourse = function(element){
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.remove();
    }
}


UI.prototype.showAlert = function(message, className){

var alert = `

<div class = "alert alert-${className}">
        ${message}
</div>
`;

const row = document.querySelector(".row");
row.insertAdjacentHTML("beforeBegin", alert);

setTimeout(() =>{
    document.querySelector(".alert").remove();
},3000)


}

document.getElementById("new-course").addEventListener("submit", 
function(e){

    const title = document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value ;

    const course = new Course(title, instructor , image);

        const uı = new UI();

        if(title === "" || instructor === "" || image === ""){
            uı.showAlert("Please Coplete The Form", "warning")
        }else{
            uı.addCourseToList(course);
            uı.clearCourse();
            uı.showAlert("The Course Has Been Added", "success")
        }

    e.preventDefault();
})

document.getElementById("course-list").addEventListener("click", function(e){
    const uı = new UI();
    uı.deleteCourse(e.target);
    uı.showAlert("The Course Has Been Deleted", "danger")
})

