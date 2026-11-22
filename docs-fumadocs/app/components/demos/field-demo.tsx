import React, { useState } from "react";
import { Field, Input, Textarea } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

export function FieldDemo() {
  return (
    <Stack>
      <Demo label="Field with helper text">
        <Field label="Your name" htmlFor="demo-name" description="So we know what to call you">
          <Input placeholder="Ananya" />
        </Field>
      </Demo>
      <Demo label="Field with an error — the error replaces the helper and sets aria-invalid">
        <Field label="Why LifeatJNTUH?" htmlFor="demo-why" error="Tell us a little more">
          <Textarea placeholder="A line or two is enough." />
        </Field>
      </Demo>
    </Stack>
  );
}

export function InputDemo() {
  const [value, setValue] = useState("");
  return (
    <Stack>
      <Demo label="Input and Textarea — try typing">
        <Stack>
          <Input placeholder="Event name" value={value} onChange={(e) => setValue(e.target.value)} />
          <Textarea placeholder="What's happening, who it's for." />
        </Stack>
      </Demo>
      <Demo label="Disabled and invalid states">
        <Stack>
          <Input placeholder="Disabled" disabled />
          <Input placeholder="Invalid" aria-invalid />
        </Stack>
      </Demo>
    </Stack>
  );
}
