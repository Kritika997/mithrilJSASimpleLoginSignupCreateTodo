var root = document.getElementById('root');
var userName
var password
var email
var taskArray={};

// function newTask(data,index){
//     localStorage.setItem("userData",data[index])
//     return m('div.task',data)
// }


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

                            // taskArray.push(userName);
                            // taskArray.push(password);
                            // taskArray.push(email);
                            localStorage.setItem("username",userName)
                            localStorage.setItem("email",password)
                            localStorage.setItem("password",email)
                            userName = "";
                            password = "";
                            email="";

                        }
                    }
                }),
            ]),
            // m('div#taskWrap', [
            //     m('div#taskWrap',[].concat(taskArray.map((data,index)=>newTask(data, index)))) 
            // ])
        ])
    }
})


