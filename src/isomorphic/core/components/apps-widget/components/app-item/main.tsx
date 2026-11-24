import { Stack, Text } from "@mantine/core";
import { Paper } from "@radio-aktywne/ui";

import type { AppItemInput } from "./types";

export function AppItem({ app, color }: AppItemInput) {
  return (
    <Paper
      c="var(--mantine-color-text)"
      component="a"
      href={app.url}
      shadowColor={color}
      style={{ aspectRatio: "1 / 1" }}
      td="none"
    >
      <Stack align="center" w="100%">
        <Text fz="h1">{app.emoji}</Text>
        <Text fw="bold" ta="center" truncate="end" w="100%">
          {app.name}
        </Text>
      </Stack>
    </Paper>
  );
}
