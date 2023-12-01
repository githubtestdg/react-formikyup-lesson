import './style.css'
import {generatePath, useRoutes} from "react-router-dom";
import routes from "./routes";
import { url } from './utils';


export default function App() {
  return useRoutes(routes)
}
