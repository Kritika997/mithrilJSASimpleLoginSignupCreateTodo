// var root = document.getElementById('root');
// var task
// var taskArray=['Sample'];

// function newTask(data,index){
//     return m('div.task',data)
// }


// m.mount(root, {
//     view: function (scope) {
//         return m("main", [
//             m('div#inputWrap', [
//                 m('input[type=text]', {
//                     placeholder: 'Enter User Name',
//                     id: 'taskInp',
//                     value: task,
//                     oninput: function () {
//                         task = this.value
//                     }
//                 }),
                
//                 m('button#add', {
//                     onclick: function () {
//                         if (task) {
//                             taskArray.push(task)
//                             task = ""
//                         }
//                     }
//                 }),
//             ]),
//             m('div#taskWrap', [
//                 m('div#taskWrap',[].concat(taskArray.map((data,index)=>newTask(data, index)))) 
//             ])
//         ])
//     }
// })

var LoginForm = {
    state: {
        username: '',
        password: '',
    },
    view: function () {
        return m(
            'form',
            { id: 'loginForm', method: 'POST' },
            m(
                'div',
                { class: 'form-group row' },
                m('label', { class: 'col-sm-3 col-form-label' }, 'Username'),
                m(
                    'div',
                    { class: 'col-sm-4' },
                    m('input', {
                        class: 'form-control',
                        type: 'text',
                        name: 'username',
                        oninput: (e) => (this.state.username = e.target.value),
                        value: this.state.username,
                    })
                )
            ),
            m(
                'div',
                { class: 'form-group row' },
                m('label', { class: 'col-sm-3 col-form-label' }, 'Password'),
                m(
                    'div',
                    { class: 'col-sm-4' },
                    m('input', {
                        class: 'form-control',
                        type: 'password',
                        name: 'password',
                        oninput: (e) => (this.state.password = e.target.value),
                        value: this.state.password,
                    })
                )
            ),
            m('div', { class: 'form-group row' }, m('div', { class: 'col-sm-9 offset-sm-3' }, m('button', { class: 'btn btn-primary', type: 'submit' }, 'Login')))
        );
    },
};