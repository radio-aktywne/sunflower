type App = {
  emoji: string;
  name: string;
  url: string;
};

export type AppItemInput = {
  app: App;
  color: "blue" | "green" | "red" | "yellow";
};
