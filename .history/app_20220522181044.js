m.route(document.body, '/', {
    '/login': Auth
  });
  var Auth = {
    controller: function() {
      var ctrl = this;
      
      ctrl.user = {
        username: '',
        password: ''
      };
      ctrl.err = '';
      
      ctrl.login = function() {
        m.request({
          method: 'POST',
          url: '/api/users/login',
          data: ctrl.user
        })
          .then(function(res) {
            ctrl.success = 'Success!'
            m.route('/');
          })
          .catch(function(err) {
            ctrl.err = err;
          });
      };
    },
  view: function(ctrl) {
      return m('#Auth', [
        m('h2[class="sign-in"]', 'Log In'),
        m('form', { onsubmit: ctrl.login }, [
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
          (ctrl.err) ? m('.error', ctrl.err) : '',
          (ctrl.success) ? m('.success', ctrl.success) : '',
          m('button[type="submit"]', 'Log in'),
        ])
      ]);
    }
  };



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

//                 m('input[type=email]', {
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
