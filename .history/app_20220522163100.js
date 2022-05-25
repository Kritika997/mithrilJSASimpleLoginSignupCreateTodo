var root = document.getElementById('root');
var task, taskArray

m.mount(root,{
    view:function(scope){
        return m("main",[
            m('div#inputWrap',[
                m('input[type=text]',{
                    placeholder:'Enter A Task',
                    id:'taskInp',
                    value:task,
                    oninput:function()
                })
            ])
        ])
    }
})
