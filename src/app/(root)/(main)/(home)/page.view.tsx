import type { PageViewInput } from "../../../types";
import type { Schemas } from "./schemas";

import { AppsWidget } from "../../../../isomorphic/core/components/apps-widget";
import { state } from "../../../../server/state/vars/state";

export async function HomePageView({}: PageViewInput<
  typeof Schemas.Path,
  typeof Schemas.Query
>) {
  return <AppsWidget apps={state.current.config.apps} />;
}
