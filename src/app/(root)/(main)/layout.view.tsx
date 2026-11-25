import { Container } from "@mantine/core";
import { Center } from "@radio-aktywne/ui";

import type { LayoutViewInput } from "../../types";
import type { Schemas } from "./schemas";
import type { Keys } from "./types";

export async function MainLayoutView({
  children,
}: LayoutViewInput<typeof Schemas.Path, Keys.Slots>) {
  return (
    <Container h="100%">
      <Center>{children}</Center>
    </Container>
  );
}
