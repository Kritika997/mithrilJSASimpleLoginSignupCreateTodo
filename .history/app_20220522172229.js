var root = document.getElementById('root');
var task
var taskArray=['Sample'];

function newTask(data,index){
    return m('div.task',data)
}


m.mount(root, {
    view: function (scope) {
        
        // return m("main", [
        //     m('div#inputWrap', [
        //         m('input[type=text]', {
        //             placeholder: 'Enter User Name',
        //             id: 'taskInp',
        //             value: task,
        //             oninput: function () {
        //                 task = this.value
        //             }
        //         }),
                
        //         m('button#add', {
        //             onclick: function () {
        //                 if (task) {
        //                     taskArray.push(task)
        //                     task = ""
        //                 }
        //             }
        //         }),
        //     ]),
        //     m('div#taskWrap', [
        //         m('div#taskWrap',[].concat(taskArray.map((data,index)=>newTask(data, index)))) 
        //     ])
        // ])
    }
})
