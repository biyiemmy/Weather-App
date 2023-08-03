# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Pictures of the Website

<img width="1440" alt="Screenshot 2023-08-03 at 16 02 11" src="https://github.com/biyiemmy/Weather-App/assets/74870372/debcfd57-1f79-412f-8f89-cbe69708ee2b">
<img width="1440" alt="Screenshot 2023-08-03 at 16 02 22" src="https://github.com/biyiemmy/Weather-App/assets/74870372/321e3ece-ab00-40d5-9f53-27ed910da89d">
<img width="1440" alt="Screenshot 2023-08-03 at 16 02 50" src="https://github.com/biyiemmy/Weather-App/assets/74870372/7cf86546-efcd-46ce-bb7b-90c26c5f91ed">
<img width="1440" alt="Screenshot 2023-08-03 at 16 02 56" src="https://github.com/biyiemmy/Weather-App/assets/74870372/3d4257ea-5977-4c96-917c-b4659a708150">


## How to use

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your API key. You can get your key at [https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys).

```bash
VITE_API_KEY=ADD_YOUR_KEY_HERE
```

Important: Your API key is not secure as there is no backend. If you decide to use this tool in production, you should add a backend and store the API key there.

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5172) with your preferred browser to see the result.

To build for production:

```bash
npm run build
```


Thanks