// Allow multiple draggable items
let dragSources = document.querySelectorAll('[draggable="true"]')
dragSources.forEach(dragSource => {
  dragSource.addEventListener('dragstart', dragStart)
})

function dragStart (e) {
  e.dataTransfer.setData('text/plain', e.target.id)
}

// Allow multiple dropped targets
let dropTargets = document.querySelectorAll('[data-role="drag-drop-container"]')
dropTargets.forEach(dropTarget => {
  dropTarget.addEventListener('drop', dropped)
  dropTarget.addEventListener('dragenter', cancelDefault)
  dropTarget.addEventListener('dragover', cancelDefault)
})

function dropped (e) {
  cancelDefault(e)
  let id = e.dataTransfer.getData('text/plain')
  e.target.appendChild(document.querySelector('#' + id))
}

function cancelDefault (e) {
  e.preventDefault()
  e.stopPropagation()
  return false
}
