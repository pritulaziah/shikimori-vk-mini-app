import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import axios from "axios";

axios.defaults.baseURL = 'https://shikimori.one/api/';

bridge.send("VKWebAppInit");

const queryClient = new QueryClient();

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);
