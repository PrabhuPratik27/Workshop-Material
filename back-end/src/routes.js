module.exports = (app) => {

    app.get('/route', (req,res) => {
        res.send({
            route: 'https://prabhupratik27.github.io/VueWorkshop/'
        })
    }),

    app.get('/list', (req,res) => {
        res.send({
            list: [
                {
                    color: "red",
                    value: "#f00"
                },
                {
                    color: "green",
                    value: "#0f0"
                },
                {
                    color: "blue",
                    value: "#00f"
                },
                {
                    color: "cyan",
                    value: "#0ff"
                },
                {
                    color: "magenta",
                    value: "#f0f"
                },
                {
                    color: "yellow",
                    value: "#ff0"
                },
                {
                    color: "black",
                    value: "#000"
                }
            ]
        })
    }),

    app.post('/result', (req,res) => {
        if(req.body.error) {
            return res.status(203).send({})
        }

        if(req.body.success) {
            return res.status(200).send({})
        }
    })

}