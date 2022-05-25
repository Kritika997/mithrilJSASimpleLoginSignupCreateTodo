var root = document.getElementById('root');
var data = document.getElementById('data');

var userName
var password
var email
var taskArray=[];

function newTask(data,index){
    return m('div.task',data)
}


// m.mount(root, {
    var signup={}
    
  
// })



// function login (){
//     m.mount(data, {
//         view: function (scope) {
//             return m("main", [
//                 m('div#inputWrap', [
//                     m('input[type=email]', {
//                         placeholder: 'email',
//                         id: 'taskInp',
//                         value: email,
//                         oninput: function () {
//                             email = this.value
//                         }
//                     }),
    
//                     m('input[type=password]', {
//                         placeholder: 'Password',
//                         id: 'taskInp',
//                         value: password,
//                         oninput: function () {
//                             password = this.value
//                         }
//                     }),
                    
//                     m('button#add', {
//                         onclick: function () {
//                             if (password &&email) {
    
//                                 let userEmail = localStorage.getItem("email")
//                                 let userPassword = localStorage.getItem("password")
//                                 if(email==userEmail&&password==userPassword){
//                                     m.render(document.body, "hello world");
//                                 }
//                                 else{
//                                     alert("user need to signup first..")
//                                 }
//                                 userEmail = "";
//                                 userPassword="";
    
//                             }
//                         }
//                     }),
//                 ]),
//                  m('div#taskWrap', [
//                     m('div#taskWrap',[].concat(taskArray.map((data,index)=>newTask(data, index)))) 
//                 ])
//             ])
//         }
//     })
// }


