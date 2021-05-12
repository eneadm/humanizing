import { ui, shapes } from '@clientio/rappid'

export const Stencil = (scroller, snapLines) => new ui.Stencil({
    paper: scroller,
    snapLines,
    groups,
    width: 240,
    dropAnimation: true,
    layout: {
        columns: 2,
        columnWidth: 100,
        rowHeight: 70
    },
    scaleClones: true,
})

export const groups = {
    standard: { index: 1, label: 'Standard shapes', height: 500 },
    other: { index: 2, label: 'Other', closed: true },
}

export const standardShapes = [
    new shapes.standard.Rectangle({
        size: { width: 80, height: 50 },
        attrs: {
            root: {
                dataTooltip: 'Rectangle',
                dataTooltipPosition: 'left',
                dataTooltipPositionSelector: '.joint-stencil'
            },
            body: {
                rx: 2,
                ry: 2,
                width: 50,
                height: 30,
                fill: 'transparent',
                stroke: '#31d0c6',
                strokeWidth: 2,
                strokeDasharray: '0'
            },
            label: {
                text: 'rect',
                fill: '#c6c7e2',
                fontFamily: 'Roboto Condensed',
                fontWeight: 'Normal',
                fontSize: 11,
                strokeWidth: 0
            }
        }
    }),
    new shapes.standard.Ellipse({
        size: { width: 50, height: 50 },
        attrs: {
            root: {
                dataTooltip: 'Ellipse',
                dataTooltipPosition: 'left',
                dataTooltipPositionSelector: '.joint-stencil'
            },
            body: {
                width: 50,
                height: 30,
                fill: 'transparent',
                stroke: '#31d0c6',
                strokeWidth: 2,
                strokeDasharray: '0'
            },
            label: {
                text: 'ellipse',
                fill: '#c6c7e2',
                fontFamily: 'Roboto Condensed',
                fontWeight: 'Normal',
                fontSize: 11,
                strokeWidth: 0
            }
        }
    }),
]
