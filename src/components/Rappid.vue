<template>
  <div class="joint-app joint-theme-modern">
    <div class="app-body">
      <button class="z-30 absolute top-6 right-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="persistGraph">
        Save
      </button>
      <div class="stencil-container" ref="stencil"></div>
      <div class="paper-container" ref="paper"></div>
    </div>
  </div>
</template>

<script>
import { dia, shapes } from '@clientio/rappid'
import { Paper, Scroller, SnapLines, Listeners } from '../services/rappid/graph'
import { Stencil, standardShapes } from '../services/rappid/stencil'
import { persistGraph, fetchGraph } from '../services/requests'

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
      stencil,
      paper,
    }} = this

    paper.appendChild(this.scroller.el)
    stencil.appendChild(this.stencil.el)

    scroller.center()

    this.fetchGraph()
  },
  created () {
    this.graph = new dia.Graph({}, {
      cellNamespace: shapes
    })

    this.paper = Paper(this.graph)

    this.scroller = Scroller(this.paper)
    this.scroller.render()

    this.stencil = Stencil(this.scroller, SnapLines(this.paper))
    this.stencil.render()
    this.stencil.load({ standard: standardShapes, other: [] })

    Listeners(this.paper)
  },
  methods: {
    async fetchGraph() {
      const data = await fetchGraph()

      if (localStorage?.graph) {
        this.graph.fromJSON(JSON.parse(localStorage.graph))
      } else {
        this.graph.fromJSON(data)
      }
    },
    async persistGraph() {
      this.graph
          .set('graphCustomProperty', true)
          .set('graphExportTime', Date.now())

      try {
        await persistGraph(this.graph.toJSON())

        localStorage.graph = JSON.stringify(this.graph.toJSON())
      }
      catch (error) {
        console.log(error)
      }
    }
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
