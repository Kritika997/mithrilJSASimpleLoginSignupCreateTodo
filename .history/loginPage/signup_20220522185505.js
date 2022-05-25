var Auth = {
    controller: function() {
      var ctrl = this;
      
      ctrl.user = {
        username: '',
        password: ''
      };
      ctrl.err = '';
      
      ctrl.login = function(e) {
        e.preventDefault(); // Vital!!!
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
          m('input[type="text"][placeholder="Username"]', {
            value: ctrl.user.username,
            onchange: function(e) {
              ctrl.user.username = e.currentTarget.value;
            }
          }),
          m('input[type="password"][placeholder="Password"]', {
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

module.exports = Auth;