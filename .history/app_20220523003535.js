var root = document.getElementById('root');
var userName
var password
var email
var taskArray={};

function newTask(data,index){
    localStorage.setItem("userData",data[0])
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

                m('input[type=email]', {
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
                            taskArray["username"] = userNamel
                            taskArray["email"] = userNamel
                            taskArray["[assword]"] = userNamel

                            // taskArray.push(userName);
                            // taskArray.push(password);
                            // taskArray.push(email);

                            userName = "";
                            password = "";

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


