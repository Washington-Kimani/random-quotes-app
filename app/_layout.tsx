import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
      <>
          <Stack>
              {/* Your app routes go here */}
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found"/>
          </Stack>
          <StatusBar style="auto" />
      </>
  );
}
