import { Fallback } from "@widgets/fallback";
import { Component, ErrorInfo, PropsWithChildren, ReactNode } from "react";

type State = {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
};

export class ErrorBoundary extends Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("@error:", error);
    console.log("@errorInfor", errorInfo);
    this.setState({ error, errorInfo });
  }

  static getDerivedStateFromError(): Partial<State> {
    return {
      hasError: true,
    };
  }

  render(): ReactNode {
    if (this.state.hasError) return <Fallback />;
    return <>{this.props.children}</>;
  }
}
