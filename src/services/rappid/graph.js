import { dia, ui } from '@clientio/rappid'

export const Paper = (graph) => new dia.Paper({
  width: 1000,
  height: 1000,
  gridSize: 10,
  drawGrid: true,
  model: graph,
  interactive: { linkMove: false },
  snapLinks: { radius: 70 },
  defaultConnectionPoint: { name: 'boundary' }
})

export const Scroller = (paper) => new ui.PaperScroller({
  paper: paper,
  autoResizePaper: true,
  cursor: 'grab'
})

export const SnapLines = (paper) => new ui.Snaplines({ paper })

export const Listeners = (paper) => {
  paper.on('cell:pointerup', (cellView) =>  {
    if (cellView.model instanceof dia.Link) return

    const halo = new ui.Halo({ cellView: cellView })

    halo.render()
  })
}
