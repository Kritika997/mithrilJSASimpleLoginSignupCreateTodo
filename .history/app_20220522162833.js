var root = document.getElementById('root');
var task, taskArray

m.mount(root,{
    view:function(scope){
        return m("main",[
            m('div#input')
        ])
    }
})
