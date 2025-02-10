import Input from "./Input";
import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          value={userInput.initialInvestment}
          onChange={(event) =>
            onChange("initialInvestment", event.target.value)
          }
        />
        <Input
          label="Annual Investment"
          value={userInput.annualInvestment}
          onChange={(event) => onChange("annualInvestment", event.target.value)}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          value={userInput.duration}
          onChange={(event) => onChange("duration", event.target.value)}
        />
        <Input
          label="Duration"
          value={userInput.expectedReturn}
          onChange={(event) => onChange("expectedReturn", event.target.value)}
        />
      </div>
    </section>
  );
}
