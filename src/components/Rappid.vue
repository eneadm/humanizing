<template>
  <div class="joint-app joint-theme-modern">
    <div class="app-header">
      <div class="app-title">
        <h1>Rappid</h1>
      </div>
      <div class="toolbar-container" ref="toolbar"></div>
    </div>
    <div class="app-body">
      <div class="stencil-container" ref="stencil"></div>
      <div class="paper-container" ref="paper"></div>
      <div class="inspector-container" ref="inspector"></div>
      <div class="navigator-container" ref="navigator"></div>
    </div>
  </div>
</template>

<script>
import { dia, ui, shapes } from '@clientio/rappid';
import { Stencil, standardShapes } from '../services/rappid/config/stencil'

export default {
  data() {
    return {
      graph: null,
      scroller: null,
      stencil: null,
    }
  },

  mounted () {
    const { scroller, $refs : {
      // toolbar,
      stencil,
      paper,
      // inspector,
      // navigator,
    }} = this

    paper.appendChild(this.scroller.el)
    stencil.appendChild(this.stencil.el)

    scroller.center()
  },

  created () {
    const graph = this.graph = new dia.Graph({}, {
      cellNamespace: shapes
    })

    const paper = this.paper = new dia.Paper({
      width: 1000,
      height: 1000,
      gridSize: 10,
      drawGrid: true,
      model: graph,
      interactive: { linkMove: false },
      snapLinks: { radius: 70 },
      defaultConnectionPoint: { name: 'boundary' }
    });

    const scroller = this.scroller = new ui.PaperScroller({
      paper: paper,
      autoResizePaper: true,
      cursor: 'grab'
    });

    scroller.render();

    const snapLines = new ui.Snaplines({ paper: paper });

    const stencil = this.stencil = Stencil(scroller, snapLines)

    stencil.render()

    stencil.load({ standard: standardShapes });

    // const rect = new shapes.standard.Rectangle({
    //   position: { x: 100, y: 100 },
    //   size: { width: 100, height: 50 },
    //   attrs: {
    //     label: {
    //       text: 'Hello World'
    //     }
    //   }
    // });
    //
    // this.graph.addCell(rect);
  }
}
</script>

<style>
  @import "~@clientio/rappid/rappid.css";

  body {
    height: 100vh;
    box-sizing: border-box;
    margin: 0;
  }

  .stencil-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 240px;
    height: 100%;
  }

  .paper-container {
    position: absolute;
    top: 0;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    left: 240px;
    right: 0;
  }

</style>
