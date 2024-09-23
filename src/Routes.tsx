import ErrorBoundaryDemo from "./components/ErrorBoundary/ErrorBoundaryDemo";
import MultiLangDemo from "./components/MultiLang/MultiLangDemo";
import ReactHookFormDemo from "./components/ReactHookForm/ReactHookFormDemo";
import UseReducerDemo from "./components/UseReducer/UserReducerDemo";

export const RouteArr = [
  {
    path: "/react-hook-form-demo",
    component: <ReactHookFormDemo />,
    title: "React Hook Form ",
  },
  {
    path: "/error-boundary-demo",
    component: <ErrorBoundaryDemo />,
    title: "Error Boundary ",
  },
  {
    path: "/reducer-demo",
    component: <UseReducerDemo />,
    title: "Reducer",
  },
  {
    path: "/multi-lang",
    component: <MultiLangDemo />,
    title: "Multi Language Demo",
  },
];
