import Main from "./Main";

let port = process.env.PORT || '3050';

Main.app.listen(port, function () {
    console.log(`servidor rodando na porta: ${port}`);
});
