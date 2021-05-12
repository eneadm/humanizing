import { ui, shapes } from '@clientio/rappid';

export const Stencil = (scroller, snapLines) => new ui.Stencil({
    paper: scroller,
    snapLines,
    groups,
    width: 240,
    scaleClones: false,
    dropAnimation: true,
    groupsToggleButtons: true,
    layout: true
})

export const groups = {
    standard: { index: 1, label: 'Standard shapes' },
}

export const standardShapes = [
    new shapes.basic.Rect({
        position: { x: 10, y: 10 },
        size: { width: 50, height: 30 },
        attrs: {
            label: {
              text: 'Hello World'
            }
        }
    }),
]
