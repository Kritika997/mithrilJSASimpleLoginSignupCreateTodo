var root = document.getElementById('root');
var task
var taskArray = ['Sample'];

function newTask(data, index) {
    return m('div.task', data)
}


m.mount(root, {
    view: function () {
        return m(
            'form',
            m(
                'div',
                { class: 'form-group row' },
                m('label', { class: 'col-sm-3 col-form-label' }, 'Username'),
                m(
                    'div',
                    { class: 'col-sm-4' },
                    m('input', {
                        class: 'form-control',
                        placeholder: 'Enter User Name',
                        value: task,
                        oninput: function () {
                            task = this.value
                        }

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
                        placeholder: 'Enter User Name',
                        value: task,
                        oninput: function () {
                            task = this.value
                        }
                    })
                )
            ),
            m('button#add', {
                onclick: function () {
                    if (task) {
                        taskArray.push(task)
                        task = ""
                    }
                }
            }),
            // return m("main", [
            //     m('div#inputWrap', [
            //         m('input[type=text]', {
            // placeholder: 'Enter User Name',
            // id: 'taskInp',
            // value: task,
            // oninput: function () {
            //     task = this.value
            // }
            //         }),

            // m('button#add', {
            //     onclick: function () {
            //         if (task) {
            //             taskArray.push(task)
            //             task = ""
            //         }
            //     }
            // }),
            //     ]),
            //     m('div#taskWrap', [
            //         m('div#taskWrap',[].concat(taskArray.map((data,index)=>newTask(data, index)))) 
            //     ])
            // ])
        )
    }
})
