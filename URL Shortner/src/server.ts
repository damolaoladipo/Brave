import app from "./config/app.config"
import colors from "colors";

const PORT = process.env.PORT || 5003;

const server = app.listen(PORT, () => {
    console.log(colors.bold.yellow(`Node server running in ${process.env.NODE_ENV} mode`))
});

//handle unhandleRejection error
process.on('unhandleRejection', (err: any, promise) => {

    console.log(colors.bold.red(`Error: ${err.message}`));
    server.close(() => process.exit())
})





