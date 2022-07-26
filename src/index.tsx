import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import "@vkontakte/vkui/dist/vkui.css";
import shikimoriBaseUrl from "constants/shikimoriBaseUrl";

axios.defaults.baseURL = `${shikimoriBaseUrl}/api/`;

bridge.send("VKWebAppInit");

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);
