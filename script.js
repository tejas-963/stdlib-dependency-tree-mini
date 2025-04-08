const nodes = new vis.DataSet([
    { id: 1, label: "@stdlib/math/base/special/erf", url: "https://stdlib.io/docs/api/latest/@stdlib/math/base/special/erf" },
    { id: 2, label: "@stdlib/math/base/special/erfc", url: "https://stdlib.io/docs/api/latest/@stdlib/math/base/special/erfc" },
    { id: 3, label: "@stdlib/constants/float64/pi", url: "https://stdlib.io/docs/api/latest/@stdlib/constants/float64/pi" },
    { id: 4, label: "@stdlib/math/base/special/exp", url: "https://stdlib.io/docs/api/latest/@stdlib/math/base/special/exp" },
    { id: 5, label: "@stdlib/math/base/special/sqrt", url: "https://stdlib.io/docs/api/latest/@stdlib/math/base/special/sqrt" },
    { id: 6, label: "@stdlib/math/base/special/pow", url: "https://stdlib.io/docs/api/latest/@stdlib/math/base/special/pow" },
    { id: 7, label: "@stdlib/utils/type-of", url: "https://stdlib.io/docs/api/latest/@stdlib/utils/type-of" },
    { id: 8, label: "@stdlib/utils/try-require", url: "https://stdlib.io/docs/api/latest/@stdlib/utils/try-require" },
    { id: 9, label: "@stdlib/error/tools-fmtprodmsg", url: "https://stdlib.io/docs/api/latest/@stdlib/error/tools-fmtprodmsg" }
]);

const edges = new vis.DataSet([
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },
    { from: 2, to: 4 },
    { from: 2, to: 3 },
    { from: 4, to: 7 },
    { from: 5, to: 7 },
    { from: 6, to: 8 },
    { from: 8, to: 9 }
]);



const container = document.getElementById('network');
const data = { nodes, edges };
const options = {
    layout: {
        hierarchical: {
            direction: "UD",
            nodeSpacing: 360,
            levelSeparation: 150,
            sortMethod: "directed"
        }
    },
    nodes: {
        shape: "box",
        margin: 10,
        title: "Go to docs",
        font: {
            size: 14,
            face: "monospace"
        }
    },
    edges: {
        width: 2,
        arrows: {
            to: { enabled: true }
        },
        smooth: {
            type: "cubicBezier",
            forceDirection: "vertical",
            roundness: 0.4
        }
    },
    interaction: {
        hover: true,
        navigationButtons: true,
        keyboard: true
    },
    physics: false
};


const network = new vis.Network(container, data, options);

network.on("click", function (params) {
    if (params.nodes.length > 0) {
        var nodeId = params.nodes[0];
        var clickedNode = nodes.get(nodeId);
        if (clickedNode.url) {
            window.open(clickedNode.url, "_blank");
        }
    }
});