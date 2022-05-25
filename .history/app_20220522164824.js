var root = document.getElementById('root');
var task
var taskArray=['Sample'];

function newTask(data,index){
    return m('div.task',data)
}


m.mount(root, {
    view: function (scope) {
        return m("main", [
            m('input[type="text"][placeholder="Username"][name="username"]', {
                value: ctrl.user.username,
                onchange: function(e) {
                  ctrl.user.username = e.currentTarget.value;
                }
              }),
              m('input[type="password"][placeholder="Password"][name="password"]', {
                value: ctrl.user.password,
                onchange: function(e) {
                  ctrl.user.password = e.currentTarget.value;
                }
              }),
            // m('div#inputWrap', [
            //     m('input[type=text]', {
            //         placeholder: 'Enter User Name',
            //         id: 'taskInp',
            //         value: task,
            //         oninput: function () {
            //             task = this.value
            //         }
            //     }),
            //     m('input[type=email]', {
            //         placeholder: 'Enter Email Address',
            //         id: 'taskInput',
            //         value: task,
            //         oninput: function () {
            //             task = this.value
            //         }
            //     }),
            //     m('input[type=password]', {
            //         placeholder: 'Enter Your Password',
            //         id: 'taskInp',
            //         value: task,
            //         oninput: function () {
            //             task = this.value
            //         }
            //     }),
            //     m('button#add', {
            //         onclick: function () {
            //             if (task) {
            //                 taskArray.push(task)
            //                 task = ""
            //             }
            //         }
            //     }),
            // ]),
            m('div#taskWrap', [
                m('div#taskWrap',[].concat(taskArray.map((data,index)=>newTask(data, index)))) 
            ])
        ])
    }
})
