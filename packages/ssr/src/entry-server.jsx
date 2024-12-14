import App from "./App";
import { renderToPipeableStream } from "react-dom/server";
export const render = (res, template) => {
    const [templateStart, templateEnd] = template.split('<!--app-html-->');
    res.write(templateStart);
    const { pipe } = renderToPipeableStream(<App/>, {
        onShellReady() {
            // pipe(res);
        },  
        onAllReady() {
            pipe(res);
            res.write(templateEnd);
            res.end();
        },
    })
}