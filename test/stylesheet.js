
let sourceContainerId = ''

let dragSources = document.querySelectorAll('[draggable="true"]')
dragSources.forEach(dragSource => {
  dragSource.addEventListener('dragstart', dragStart)
})

let dropTargets = document.querySelectorAll('[data-role="drag-drop-container"]')
dropTargets.forEach(dropTarget => {
  dropTarget.addEventListener('drop', dropped)
  dropTarget.addEventListener('dragenter', cancelDefault)
  dropTarget.addEventListener('dragover', cancelDefault)
})

function cancelDefault (e) {
  e.preventDefault()
  e.stopPropagation()
  return false
}

function dragStart (e) {
  e.dataTransfer.setData('text/plain', e.target.id)
  sourceContainerId = this.parentElement.id
  console.log('sourceContainerId', sourceContainerId)
}

function dropped (e) {
  if (this.id !== sourceContainerId) {
    cancelDefault(e)
    let id = e.dataTransfer.getData('text/plain')
    e.target.appendChild(document.querySelector('#' + id))
  }
}

