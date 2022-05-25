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
    oncreate: function (vnode) {
        // Create a FormValidation instance
        this.fv = FormValidation.formValidation(document.getElementById('loginForm'), {
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required',
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long',
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The username can only consist of alphabetical, number and underscore',
                        },
                    },
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required',
                        },
                        stringLength: {
                            min: 8,
                            message: 'The password must have at least 8 characters',
                        },
                    },
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                bootstrap: new FormValidation.plugins.Bootstrap(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            },
        });
    },
};
