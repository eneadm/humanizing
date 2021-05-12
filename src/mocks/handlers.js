import { rest } from 'msw'

export default [
  rest.post('/authenticate', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'Authenticated successfully!'
      })
    )
  }),
  rest.post('/graph', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'Graph saved successfully!'
      })
    )
  }),
  rest.get('/graph', (req, res, ctx) => {
    return res(
      ctx.json({"cells":[{"type":"standard.Rectangle","position":{"x":250,"y":400},"size":{"width":80,"height":50},"angle":0,"id":"451a94b4-f3b8-431c-bb2e-143e2df76d22","z":1,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":11,"fill":"#c6c7e2","text":"rect","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltip":"Rectangle","dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":470,"y":400},"size":{"width":80,"height":50},"angle":0,"id":"a03ce678-5823-4e05-a638-cd0b017b37cb","z":2,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":11,"fill":"#c6c7e2","text":"rect","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltip":"Rectangle","dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"link","source":{"id":"451a94b4-f3b8-431c-bb2e-143e2df76d22"},"target":{"id":"a03ce678-5823-4e05-a638-cd0b017b37cb"},"id":"cb1520f5-2599-4d64-89f7-bfd89dda380d","z":3,"attrs":{}},{"type":"standard.Rectangle","position":{"x":690,"y":400},"size":{"width":80,"height":50},"angle":0,"id":"986ad065-22c0-4473-b50c-00cfbe905357","z":4,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":11,"fill":"#c6c7e2","text":"rect","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltip":"Rectangle","dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"link","source":{"id":"a03ce678-5823-4e05-a638-cd0b017b37cb"},"target":{"id":"986ad065-22c0-4473-b50c-00cfbe905357"},"id":"55df59f9-577f-4ca2-9f7b-2f62db0c415a","z":5,"attrs":{}},{"type":"standard.Rectangle","position":{"x":470,"y":555},"size":{"width":80,"height":50},"angle":0,"id":"942bc0b9-f283-4c03-bb7a-9a227f3de470","z":6,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":11,"fill":"#c6c7e2","text":"rect","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltip":"Rectangle","dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"link","source":{"id":"a03ce678-5823-4e05-a638-cd0b017b37cb"},"target":{"id":"942bc0b9-f283-4c03-bb7a-9a227f3de470"},"id":"4ea7b0f8-fdc1-4a43-a693-10c8a7f5120c","z":7,"attrs":{}},{"type":"standard.Rectangle","position":{"x":690,"y":555},"size":{"width":80,"height":50},"angle":0,"id":"4eafd10e-1ffb-4d53-9b18-54f2e8da16de","z":8,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":11,"fill":"#c6c7e2","text":"rect","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltip":"Rectangle","dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"link","source":{"id":"942bc0b9-f283-4c03-bb7a-9a227f3de470"},"target":{"id":"4eafd10e-1ffb-4d53-9b18-54f2e8da16de"},"id":"9a5f6132-80b6-4c92-b0a5-ab54f2447dff","z":9,"attrs":{}}],"graphCustomProperty":true,"graphExportTime":1620832226817})
    )
  })
]
