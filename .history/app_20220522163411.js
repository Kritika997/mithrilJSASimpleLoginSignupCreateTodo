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
                    oninput:function(){
                        task = this.value
                    }
                }),
                m('button#add',{
                    onclick:function(){
                        if(task){
                            taskArray.push(task)
                            task =""
                        }
                    }
                }),
            ]),
            m('div#taskWrap',{
                
            })
        ])
    }
})
