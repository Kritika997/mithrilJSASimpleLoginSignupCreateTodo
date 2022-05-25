var data = document.getElementById('data');
var taskArray=[];

function newTask(data,index){
    return m('div.task',data)
}


m.mount(root, {
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
                            let name = 
                            let userEmail = localStorage.getItem("email")
                            let userPassword = localStorage.getItem("password")
                            taskArray.push(userName);
                            taskArray.push(password);
                            taskArray.push(email);
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