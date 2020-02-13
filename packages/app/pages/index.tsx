import { Button } from "ui-library";
import "ui-library/lib/index.css";

export default function HomePage() {
  return (
    <main>
      <p>
        <Button>Button</Button>
      </p>
      <p>
        <Button type="primary">Primary</Button>
      </p>
      <p>
        <Button type="secondary">Secondary</Button>
      </p>
    </main>
  );
}
