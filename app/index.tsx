import React from "react";
import { Link, Redirect } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return <Redirect href={"/(tabs)"} />;
}
