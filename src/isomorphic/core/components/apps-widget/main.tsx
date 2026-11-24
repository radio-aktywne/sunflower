"use client";

import { msg } from "@lingui/core/macro";
import { SimpleGrid, Title } from "@mantine/core";

import type { AppsWidgetInput } from "./types";

import { useLocalization } from "../../../localization/hooks/use-localization";
import { AppItem } from "./components/app-item";
import { constants } from "./constants";

export function AppsWidget({ apps }: AppsWidgetInput) {
  const { localization } = useLocalization();

  if (apps.length === 0)
    return (
      <Title ta="center">
        {localization.localize(msg({ message: "No apps" }))}
      </Title>
    );

  return (
    <SimpleGrid
      cols={{ base: 1, md: 4, sm: 3, xs: 2 }}
      p="xs"
      spacing="xl"
      w="100%"
    >
      {apps.map((app, index) => (
        <AppItem
          app={app}
          color={constants.colors[index % constants.colors.length]!}
          key={index}
        />
      ))}
    </SimpleGrid>
  );
}
