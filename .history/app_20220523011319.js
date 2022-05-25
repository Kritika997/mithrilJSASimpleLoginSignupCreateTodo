var root = document.getElementById('root');
var data = document.getElementById('data');

var userName
var password
var email
var taskArray=[];

function newTask(data,index){
    return m('div.task',data)
}


m.mount(root, {
    
    view: function (scope) {
        return m("main", [
            m('div#inputWrap', [
                m('input[type=text]', {
                    placeholder: 'Username',
                    id: 'taskInp',
                    value: userName,
                    oninput: function () {
                        userName = this.value
                    }
                }),
                m('input[type=email]', {
                    placeholder: 'email',
                    id: 'taskInp',
                    value: email,
                    oninput: function () {
                        email = this.value
                    }
                }),

                m('input[type=password]', {
                    placeholder: 'Password',
                    id: 'taskInp',
                    value: password,
                    oninput: function () {
                        password = this.value
                    }
                }),
                
                m('button#add', {
                    onclick: function () {
                        if (userName && password &&email) {

                            
                            localStorage.setItem("username",userName)
                            localStorage.setItem("email",email)
                            localStorage.setItem("password",password)
                            taskArray.push(userName);
                            taskArray.push(password);
                            taskArray.push(email);
                            
                            userName = "";
                            password = "";
                            email="";

                            login()

                        }
                    }
                }),
            ]),
           
        ])
    }
})



function login (){
    m.mount(data, {
        view: function (scope) {
            return m("main", [
                m('div#inputWrap', [
                    m('input[type=email]', {
                        placeholder: 'email',
                        id: 'taskInp',
                        value: email,
                        oninput: function () {
                            email = this.value
                        }
                    }),
    
                    m('input[type=password]', {
                        placeholder: 'Password',
                        id: 'taskInp',
                        value: password,
                        oninput: function () {
                            password = this.value
                        }
                    }),
                    
                    m('button#add', {
                        onclick: function () {
                            if (password &&email) {
    
                                let userEmail = localStorage.getItem("email")
                                let userPassword = localStorage.getItem("password")
                                if(email==userEmail&&password==userPassword){
                                    m.render(document.body, "hello world");
                                }
                                else{
                                    alert("user need to signup first..")
                                }
                                userEmail = "";
                                userPassword="";
    
                            }
                        }
                    }),
                ]),
                 m('div#taskWrap', [
                    m('div#taskWrap',[].concat(taskArray.map((data,index)=>newTask(data, index)))) 
                ])
            ])
        }
    })
}


