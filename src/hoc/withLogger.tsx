import { useEffect, type ComponentType } from "react";

export function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>) {
  function WithLogger(props: P) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);

      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  }

  WithLogger.displayName = `withLogger(${
    WrappedComponent.name || "Component"
  })`;

  return WithLogger;
}