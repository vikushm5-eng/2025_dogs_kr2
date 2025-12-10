function find_edit() {
    const secondName_node = document.getElementById('secondName')
    console.log(secondName_node.innerText)
    secondName_node.innerHTML = "<b>Kushmanova</b>"

    const abc_node = document.getElementById('abc')
    console.log(abc_node.innerText)
    abc_node.innerHTML = "<b>Viktoriia</b>"
}

const node_for_click = document.getElementById("click")
node_for_click.addEventListener("click", find_edit)
