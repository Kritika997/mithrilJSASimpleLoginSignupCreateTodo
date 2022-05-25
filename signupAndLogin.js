
var userName
var password
var email
var data;
// var item = localStorage.getItem("TodoList");
let model = {
    todoList: [],
    name: "",
}
let Login = {

    view: function () {
        return m("center", "Login",
            m("div.container",
                m('button#back', {
                    innerText: "back",
                    onclick: function () {
                        m.route(document.body, "/splash", {
                            "/splash": Splash,
                        })
                    }
                }),
                m("form", {
                    onsubmit: function (event) {
                        event.preventDefault()
                    }
                },
                    [
                        m('input[type=email]', {
                            placeholder: 'email',
                            id: 'taskInp',
                            value: email,
                            oninput: function () {
                                email = this.value
                            }
                        }),


                        m('input[type=password]', {
                            placeholder: 'Password',
                            id: 'taskInp',
                            value: password,
                            oninput: function () {
                                password = this.value
                            }
                        }),

                        m('button#add', {
                            innerText: "Submit",
                            onclick: function () {
                                if (password && email) {
                                    let userEmail = localStorage.getItem("email")
                                    let userPassword = localStorage.getItem("password")
                                    if (email == userEmail && password == userPassword) {
                                        alert("You Logged in Successfully....")
                                        m.route(document.body, "/app", {
                                            "/app": App,
                                        })
                                    }
                                    else {
                                        alert("Data is not Mached I think you should signup first..")
                                    }
                                    userEmail = "";
                                    userPassword = "";

                                }
                            }
                        }),
                        // m('button#back', {
                        //     innerText: "back",
                        //     onclick: function () {
                        //         m.route(document.body, "/splash", {
                        //             "/splash": Splash,
                        //         })
                        //     }
                        // })
                    ]
                )
            )
        )


    }
}


var Signup = {
    view: function () {
        return m("center", "registration",
            m("div.container",
                m('button#back', {
                    innerText: "back",
                    onclick: function () {
                        m.route(document.body, "/splash", {
                            "/splash": Splash,
                        })
                    }
                }),
                m("form", {
                    onsubmit: function (event) {
                        event.preventDefault()
                    }
                },
                    [
                        m('input[type=text]', {
                            placeholder: 'Username',
                            id: 'taskInp',
                            value: userName,
                            oninput: function () {
                                userName = this.value
                            }
                        }),
                        m('input[type=email]', {
                            placeholder: 'email',
                            id: 'taskInp',
                            value: email,
                            oninput: function () {
                                email = this.value
                            }
                        }),

                        m('input[type=password]', {
                            placeholder: 'Password',
                            id: 'taskInp',
                            value: password,
                            oninput: function () {
                                password = this.value
                            }
                        }),

                        m('button#add', {
                            innerText: "Submit",

                            onclick: function () {
                                if (userName && password && email) {

                                    localStorage.setItem("username", userName)
                                    localStorage.setItem("email", email)
                                    localStorage.setItem("password", password)

                                    userName = "";
                                    password = "";
                                    email = "";
                                    alert("You SignUp Successfully....")
                                    m.route(document.body, "/app", {
                                        "/app": App,
                                    })


                                } else {
                                    alert("Data is missing")
                                }

                            }
                        })

                    ]
                )
            )
        )
    },
}

const actions = {
    addTodo: function () {
        model.todoList.push(model.name)
        localStorage.setItem("TodoList", model.todoList)
        model.name = ""
    },
    remove: function (name) {
        let index = model.todoList.indexOf(name)
        model.todoList.splice(index, 1)
    },
    edit: function (name) {
        let index = model.todoList.indexOf(name)
        model.todoList.splice(index, 1)
    }
}

let Todo = {
    view: function (vnode) {
        return m("ul.todos",
            vnode.attrs.todoList.map(function (item) {
                return m("li",
                    item + "",
                    m("button", {
                        onclick: function () {
                            console.log(item)
                            actions.remove(item)
                        }
                    }, "remove")
                    // m("div.container",
                    //     m("form",
                    //         m("button", {

                    //             onsubmit: function (event) {
                    //                 event.preventDefault()
                    //                 actions.edit(item)
                    //             }
                    //             [
                    //                 m("input[tyep='text']", {
                    //                     value: data,
                    //                     oninput: function () {
                    //                         model.name = this.value
                    //                     },
                    //                     value: model.name
                    //                 }),

                    //                 m("br"),
                    //                 m("button[type='submit']", "Add Todo List")
                    //             ]

                    //         }, "edit")
                    //     ),
                    //     m(Todo, model)
                    // )
                )
            })
        )
    }
}


let App = {
    view: function () {
        return m("center", "Create Your Todo",

            m("div.container",
                m('button#back', {
                    innerText: "back",
                    onclick: function () {
                        m.route(document.body, "/splash", {
                            "/splash": Splash,
                        })
                    }
                }),
                m("form", {
                    onsubmit: function (event) {
                        event.preventDefault()
                        actions.addTodo()
                    }
                },
                    [
                        m("input[tyep='text']", {
                            value: data,
                            oninput: function () {
                                // console.log(item.data)
                                model.name = this.value
                            },
                            value: model.name
                        }),

                        m("br"),
                        m("button[type='submit']", "Add Todo List")
                    ]
                ),
                m(Todo, model)
            )
        )
    }
}
var Splash = {
    view: function () {
        return m("main", [
            m("h3", {
                class: "title"
            }, "Welcome To The Home Page"),
            m("a", {
                href: "#!/signup"
            }, "Signup!"),
            m("a", {
                href: "#!/login"
            }, "login!")
        ])
    },
}

m.route(document.body, "/splash", {
    "/splash": Splash,
    "/signup": Signup,
    "/login": Login,
})