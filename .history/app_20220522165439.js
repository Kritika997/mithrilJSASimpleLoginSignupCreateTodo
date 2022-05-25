var root = document.getElementById('root');
var task
var taskArray=['Sample'];

function newTask(data,index){
    return m('div.task',data)
}


m.mount(root, {
    view: function (scope) {
        return
            m('div#inputWrap', [
                m('input[type=text]', {
                    placeholder: 'Enter User Name',
                    id: 'nameInp',
                    value: task,
                    oninput: function () {
                        task = this.value
                    }
                }),
                
                
            ]),
            m('div#inputWrap', [
                m('input[type=email]', {
                    placeholder: 'Enter Email Address',
                    id: 'emailInp',
                    value: task,
                    oninput: function () {
                        task = this.value
                    }
                }),
            ]),
            m('div#inputWrap', [
                m('input[type=password]', {
                    placeholder: 'Enter Your Password',
                    id: 'passwordInp',
                    value: task,
                    oninput: function () {
                        task = this.value
                    }
                }),
            ]),

            m('button#add', {
                onclick: function () {
                    if (task) {
                        taskArray.push(task)
                        task = ""
                    }
                }
            }),
            m('div#taskWrap', [
                m('div#taskWrap',[].concat(taskArray.map((data,index)=>newTask(data, index)))) 
            ])
        ])
    }
})
