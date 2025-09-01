import { Suspense } from "react";
import { useGreeting } from "../hooks/useGreeting";

const GreetingContent = () => {
  // カスタムフックを使用してデータを取得
  const data = useGreeting();
  return <h1>{data.message}</h1>;
};

const Greeting = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <GreetingContent />
    </Suspense>
  );
};

export default Greeting;
