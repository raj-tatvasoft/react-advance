import ErrorBoundary from "./ErrorBoundary";

const ChildComp = ({ isError }: { isError?: boolean }) => {
  let newObj: any = {};
  return <div>Child Component {isError ? newObj.a.b : ""}</div>;
};

const ErrorBoundaryDemo = () => {
  return (
    <>
      <ErrorBoundary fallback={<>Error </>}>
        <ChildComp />
      </ErrorBoundary>
      <ErrorBoundary fallback={<>Error </>}>
        <ChildComp isError />
      </ErrorBoundary>
      <ErrorBoundary fallback={<>Error </>}>
        <ChildComp />
      </ErrorBoundary>
    </>
  );
};

export default ErrorBoundaryDemo;
